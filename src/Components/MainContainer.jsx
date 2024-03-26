import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { WeatherParameters } from "./WeatherParameters";

export const MainContainer = () => {
  const [city, setCity] = useState("");
  const [weather , setWeather] = useState([]);

  const clickHandler = async () => {
    try{
        const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=ef8b89c0be4c4de89d4103910242603&q=${city}&days=4&aqi=yes&alerts=no`);
        console.log(response.data.forecast.forecastday);
        const weatherConditions = response.data.forecast.forecastday;
        setWeather(weatherConditions)

    }catch{
        console.error("enter valid city")

    }

  }

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center gap-3 mt-5">
        <input
          className="p-2"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        ></input>
        <Button onClick={clickHandler}>Get Forcast!</Button>
      </div>
      {
        weather?.map(element => {
            return <WeatherParameters key={element.date} element={element}/>
        })
      }
      
    </div>
  );
};
