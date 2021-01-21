import {
  GET_COUNTRY,
  GET_COUNTRY_FAILED,
  GET_WEATHER,
  GET_WEATHER_FAILED,
} from "./actionType";
const initialState = {
  countryDetails: [],
  capitalWeather: [],
  loading: true,
  error: false,
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY:
      return {
        ...state,
        countryDetails: action.payload,
        loading: false,
      };
    case GET_COUNTRY_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_WEATHER:
      console.log(action.payload);
      return {
        ...state,
        capitalWeather: action.payload,
        loading: false,
      };
    case GET_WEATHER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
  }
};

export default Reducer;
