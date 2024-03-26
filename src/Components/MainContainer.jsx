import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { WeatherParameters } from "./WeatherParameters";
import { Loader } from "./Loader";

export const MainContainer = () => {
  const [city, setCity] = useState("");
  const [weather , setWeather] = useState([]);
  const [error , setError] = useState();
  const [loading , setLoading] = useState(false);

  const clickHandler = async () => {
    try{
        setLoading(prev => !prev)
        const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=ef8b89c0be4c4de89d4103910242603&q=${city}&days=4&aqi=yes&alerts=no`);
        console.log(response.data.forecast.forecastday);
        const weatherConditions = response.data.forecast.forecastday;
        setWeather(weatherConditions);
        setLoading(prev => !prev)
        setError(false);

    }catch(error){
        setLoading(prev => !prev)
        setError(true);

    }

  }

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center gap-3 mt-5">
        <input
          className="p-2 w-50"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name ..."
        ></input>
        <Button onClick={clickHandler}>Get Forcast ➣</Button>
      </div>
      {
       loading ? <Loader/> : ( error ? <div className="gap-3 mt-5 text-danger">❌ Something wrong happend. Try entering a valid city!</div>: weather?.map(element => {
            return <WeatherParameters key={element.date} element={element}/>
        }))
      }
      
    </div>
  );
};
