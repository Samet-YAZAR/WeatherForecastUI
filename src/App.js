import ForecastWeather from "./components/ForecastWeather";
import CurrentWeather from "./components/CurrentWeather";
import WeatherTabBar from "./components/WeatherTabBar"
import SelectedTab from "./components/SelectedTab"
import SearchForm from "./components/SearchForm";
import { Container, Row, Col } from "reactstrap";
import { WeatherService } from "./services";
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
      error: ""
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
    const dataForecast = await WeatherService.getForecastWeather(this.state.city, this.state.country);
    const dataCurrent = await WeatherService.getCurrentWeather(this.state.city, this.state.country);
    const dataUrbanPhotos = await WeatherService.getUrbanPhotos(this.state.city);

    this.setState({
      current: dataCurrent,
      forecast: dataForecast,
      urbanPhotos: dataUrbanPhotos,
      loading: false,
      weburl: dataUrbanPhotos.status == 404 ? `${process.env.REACT_APP_DEFAULT_IMAGE_URL}` : dataUrbanPhotos.photos[0].image.web

    })

    document.body.style.backgroundImage = `url(${this.state.weburl})`;
  }

  ControlLoading = () => {
    return this.state.loading || !this.state.forecast || !this.state.current
  }

  render() {
    const { error } = this.state.error;
    return (
      <div className="container d-flex align-items-center ">
        {
          this.ControlLoading() ? <Row>loading... </Row>
            :
            <Container className="wrapper fluid " >
              <Row xs="1">

                <Col className="col"><SearchForm
                  submit={this.componentDidMount}
                  setCity={this.setCity}
                  setCountry={this.setCountry}
                  err={this.state.error}
                />
                </Col>

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

                </WeatherTabBar>
                </Col>


              </Row>
            </Container>
        }

      </div>
    )
  }
}

export default App;
