import axios from 'axios';

const API_KEY = '9a1885cd257de068f957c6ea2fb6eb44';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FECTH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}