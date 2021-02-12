import React, { Component } from 'react'

class CityCurrentWeather extends Component {

    render() {
        const { city_name, ob_time, sunrise, sunset,temp,description,icon} = this.props;
        return (
            
            <tr className="table-row">
                <td className= "table-data align-middle">{city_name}</td>
                <td className= "table-data align-middle">{ob_time}</td>
                <td className= "table-data align-middle">{temp}</td>
                <td className= "table-data align-middle">{sunrise}</td>
                <td className= "table-data align-middle">{sunset}</td>
                <td className="table-data d-flex justify-content-between">
                    {description}
                    <img className="icon" src={`https://www.weatherbit.io/static/img/icons/${icon}.png`}></img>    
                </td>               
            </tr>
        )
    }
}
export default CityCurrentWeather;