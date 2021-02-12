import React, { Component } from 'react'
import _uniqueId from 'lodash/uniqueId';
import City from "./CityCurrentWeather"
import { Table } from 'reactstrap';


class CurrentWeather extends Component {

    render() {
        const { cities } = this.props;
        return (
            <div>
                <Table dark striped bordered hover text-center>
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Date</th>
                            <th>Temperature</th>
                            <th>Sunrise</th>
                            <th>Sunset</th>  
                            <th>Weather</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        cities.data.map(city => {
                            return (
                                <City
                                    key={_uniqueId()}
                                    city_name={city.city_name}
                                    ob_time={city.ob_time}
                                    sunrise={city.sunrise}
                                    sunset={city.sunset}
                                    temp={city.app_temp}
                                    description={city.weather.description}
                                    icon = {city.weather.icon}
                                />
                            )
                        })
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default CurrentWeather;