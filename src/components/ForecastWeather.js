import CityForecast from "./CityForecastWeather"
import _uniqueId from 'lodash/uniqueId';
import React, { Component } from 'react'
import { Table } from 'reactstrap';

class ForecastWeather extends Component {

    render() {
        const { forecasts } = this.props;
        return (
            <div>
                <Table dark striped bordered hover>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Temp</th>
                            <th>Max</th>
                            <th>Min</th>
                            <th>Weather</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        forecasts.data.slice(1, 6).map(forecast => {
                            return (
                                <CityForecast
                                    key={_uniqueId()}
                                    date={forecast.datetime}
                                    temp={forecast.temp}
                                    max_temp={forecast.max_temp}
                                    min_temp={forecast.min_temp}
                                    description={forecast.weather.description}
                                    icon={forecast.weather.icon}
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
export default ForecastWeather;