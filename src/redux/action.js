import {
  GET_COUNTRY,
  GET_COUNTRY_FAILED,
  GET_WEATHER,
  GET_WEATHER_FAILED,
} from "./actionType";
import { getCountryApi, getWeatherApi } from "../services";

export const getCountryAction = (countryName) => {
  return async (dispatch) => {
    await getCountryApi(countryName)
      .then((response) => {
        dispatch({
          type: GET_COUNTRY,
          payload: response.data[0],
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_COUNTRY_FAILED,
          payload: error.message,
        });
        return error.message;
      });
  };
};

export const getWeatherAction = (capital) => {
  return async (dispatch) => {
    console.log(capital);
    await getWeatherApi(capital)
      .then((response) => {
        console.log(response);
        dispatch({
          type: GET_WEATHER,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_WEATHER_FAILED,
          payload: error.message,
        });
        return error.message;
      });
  };
};
