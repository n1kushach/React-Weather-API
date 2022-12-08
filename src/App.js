import "./App.css";
import { useState, useEffect } from "react";
import { WeatherCard } from "./components/WeatherCard/WeatherCard";
import Axios from "axios";

function App() {

  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [error, setError] = useState(false);


  const fetchData = () => {
    return Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=1bb5282150f37771ec953f457e81dbcb&units=metric`).
    then((res) => {
      const dataObject = {
        cityName: res.data.name,
        weatherDegree: res.data.main.temp,
        humidity: res.data.main.humidity,
        windSpeed: res.data.wind.speed
      }
      setData(dataObject);
      setError((prev) => !prev)
    }).catch(function (error) {
      if(error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        setError((prev) => !prev)
      }
    })
  }





  return <div className="App bg-blue-900">
    <div className="flex flex-col gap-3 items-center justify-center">
    <h1 className="font-bold text-lg text-white">Get weather data in your city</h1>
    {data.length === 0 ? <h1 className="font-light text-white">Click button to generate data</h1> : <main><WeatherCard
     cityName={data.cityName}
     weatherDegree={data.weatherDegree}
     humidity={data.humidity}
     windSpeed={data.windSpeed}
      /></main>}
    <input className="border-2 p-3" onChange={(e) => {
      setText(e.target.value);
    }} placeholder="Enter cityname"></input>
    {error ? <h1 className="font-light text-white">City not found</h1> : null}
    <button className="border-2 p-3 text-white" onClick={fetchData}>Fetch Data</button>
  </div>
  </div>;

}

export default App;
