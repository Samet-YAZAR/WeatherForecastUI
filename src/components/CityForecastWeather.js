import React, { Component } from 'react'

 class CityForecastWeather extends Component {

    render() {
        const { date,temp,max_temp,min_temp,description,icon} = this.props;
        return (
            
            <tr className= "table-row">
                <td className= "table-data align-middle">{date}</td>
                <td className= "table-data align-middle">{temp}</td>
                <td className= "table-data align-middle">{max_temp}</td>
                <td className= "table-data align-middle" >{min_temp}</td>
                <td className= "table-data d-flex justify-content-between">
                    {description}
                    <img className="icon" src={`https://www.weatherbit.io/static/img/icons/${icon}.png`}></img>
                </td>
            </tr>
        )
        
    }
}
export default CityForecastWeather;