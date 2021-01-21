import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWeatherAction } from "../redux/action";

const Weather = ({ capital }) => {
  const dispatch = useDispatch();

  //calling weather api

  useEffect(() => {
    dispatch(getWeatherAction(capital));
  }, []);

  const capitalWeatherApi = useSelector(
    (state) => state?.capitalWeather?.current
  );

  console.log(capitalWeatherApi);
  return (
    <div>
      {capitalWeatherApi && (
        <>
          <h1>{capital} Weather</h1>
          <br />
          <table class="table">
            <tbody>
              <tr>
                <th scope="row">1. Temperature</th>
                <td>{capitalWeatherApi?.temperature}</td>
              </tr>
              <tr>
                <th scope="row">2. Wind Speed</th>
                <td>{capitalWeatherApi?.wind_speed}</td>
              </tr>
              <tr>
                <th scope="row">3. Percipitation</th>
                <td>{capitalWeatherApi?.precip}</td>
              </tr>
              <tr>
                <th scope="row">4. Flag</th>
                <td>
                  <img
                    src={`${capitalWeatherApi?.weather_icons}`}
                    alt="weatherIcon"
                    style={{ width: "95px", height: "55px" }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Weather;
