import Axios from "axios";

export const getCountryApi = (countryName) => {
  return Axios.get(`${process.env.REACT_APP_COUNTRY_API}${countryName}`);
};

export const getWeatherApi = (capitalName) => {
  console.log(capitalName);
  return Axios.get(`${process.env.REACT_APP_WEATHER_API}${capitalName}`);
};
