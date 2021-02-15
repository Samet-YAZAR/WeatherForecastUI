import axios from 'axios';

export const WeatherService = {
    getCurrentWeather,
    getForecastWeather,
    getUrbanPhotos
};

const urls = {
    key_value : process.env.REACT_APP_API_KEY,
    forecast_url :process.env.REACT_APP_FORECAST_URL, 
    current_url : process.env.REACT_APP_CURRENT_URL,
    photo_url : process.env.REACT_APP_PHOTO_URL
}

async function getCurrentWeather(city,country){
    try {
        const {data} = await axios.get(`${urls.current_url}?city=${city}&country=${country}&key=${urls.key_value}`);
        return data;
    } catch (err) {
        console.log(err.message);
    }
}

async function getForecastWeather(city,country){
    try {
        const {data} = await axios.get(`${urls.forecast_url}?city=${city}&country=${country}&key=${urls.key_value}`);
        return data;
    } catch (err) {
        console.log(err.message);
    }
}

async function getUrbanPhotos(city){
    try {
        const {data} = await axios.get(`${urls.photo_url}/urban_areas/slug:${city}/images/`);
        return data;
    } catch (err) {
        console.log(err.message);
    }
}
