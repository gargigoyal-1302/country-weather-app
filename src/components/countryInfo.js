import React, { useEffect, useState } from "react";
import Weather from "./weather";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getCountryAction } from "../redux/action";
const CountryInfo = (props) => {
  const { countryName } = useParams();
  console.log(countryName);
  const dispatch = useDispatch();

  // calling country API !!

  useEffect(() => {
    dispatch(getCountryAction(countryName));
  }, []);

  const country = useSelector((state) => state?.countryDetails);
  console.log(country);
  // Handling weather button event
  const [showWeather, setShowWeather] = useState(false);

  const handleWeatherClick = () => {
    setShowWeather(true);
  };

  return (
    <div>
      {country && (
        <>
          <h1>{country?.name}</h1>
          <br />
          <table class="table">
            <tbody>
              <tr>
                <th scope="row">1. Capital</th>
                <td>{country?.capital}</td>
              </tr>
              <tr>
                <th scope="row">2. Region</th>
                <td>{country?.region}</td>
              </tr>
              <tr>
                <th scope="row">3. Population</th>
                <td>{country?.population}</td>
              </tr>
              <tr>
                <th scope="row">4. Flag</th>
                <td>
                  <img
                    src={`${country?.flag}`}
                    alt="flag"
                    style={{ width: "95px", height: "55px" }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
      <button className="btn btn-primary" onClick={handleWeatherClick}>
        Capital Weather
      </button>

      {showWeather ? <Weather capital={country.capital} /> : null}
    </div>
  );
};
export default CountryInfo;
