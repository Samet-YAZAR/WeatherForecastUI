import ForecastWeather from "./components/ForecastWeather";
import CurrentWeather from "./components/CurrentWeather";
import WeatherTabBar from "./components/WeatherTabBar"
import SelectedTab from "./components/SelectedTab"
import SearchForm from "./components/SearchForm";
import { Container, Row, Col } from "reactstrap";
import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "Current",
      city: "wroclaw",
      country: "PL",
      weburl: " ",
      urbanPhotos: [],
      forecast: [],
      current: [],
      loading: true,
    }
  }

  setSelected = (tab) => {
    this.setState({ selected: tab })
  }
  setCity = (c) => {
    this.setState({
      city: c
    })
  }
  setCountry = (c) => {
    this.setState({
      country: c
    })
  }

  componentDidMount = async () => {
    const dataForecast = await this.getForecastWeather();
    const dataUrbanPhotos = await this.getUrbanPhotos();
    const dataCurrent = await this.getCurrentWeather();

    this.setState({
      current: dataCurrent,
      forecast: dataForecast,
      urbanPhotos: dataUrbanPhotos,
      loading: false,
      weburl: dataUrbanPhotos.status == 404 ? "https://d13k13wj6adfdf.cloudfront.net/urban_areas/paris_web-0a3c7314a5.jpg" : dataUrbanPhotos.photos[0].image.web

    })

    document.body.style.backgroundImage = `url(${this.state.weburl})`;
  }
  getCurrentWeather = async () => {
    const url = `https://api.weatherbit.io/v2.0/current?city=${this.state.city}&country=${this.state.country}&key=${process.env.REACT_APP_API_KEY}`;
    const responseCurrent = await fetch(url)
    return await responseCurrent.json();
  }

  getForecastWeather = async () => {
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${this.state.city}&country=${this.state.country}&key=${process.env.REACT_APP_API_KEY}`;
    const responseForecast = await fetch(url)
    return await responseForecast.json();
  }

  getUrbanPhotos = async () => {
    const url = `https://api.teleport.org/api/urban_areas/slug:${this.state.city}/images/`;
    const responseUrbanPhotos = await fetch(url)
    return await responseUrbanPhotos.json();
  }

  ControlLoading = () => {
    return this.state.loading || !this.state.forecast || !this.state.current
  }

  render() {

    return (
      <div className="container d-flex align-items-center ">

        <Container className="wrapper fluid " >
          {
            this.ControlLoading() ? <Row>loading... </Row>
              :
              <Row xs="1">

                <Col className="col"><SearchForm
                  submit={this.componentDidMount}
                  setCity={this.setCity}
                  setCountry={this.setCountry}
                /></Col>

                <Col className="tab"><WeatherTabBar
                  tabs={['Current', 'Forecast']}
                  selected={this.state.selected}
                  setSelected={this.setSelected} >

                  <SelectedTab
                    isSelected={this.state.selected === 'Current'}>
                    <CurrentWeather cities={this.state.current} />
                  </SelectedTab>

                  <SelectedTab
                    isSelected={this.state.selected === 'Forecast'}>
                    <ForecastWeather forecasts={this.state.forecast} />
                  </SelectedTab>

                </WeatherTabBar></Col>
              </Row>
          }
        </Container>
      </div>
    )
  }
}

export default App;
