import React from 'react'

export const WeatherCard = (props) => {
  return (
    <div className='weather-card'>
      <h1 className='text-white'>City name - {props.cityName}</h1>
      <p className='text-white'>Weather - {props.weatherDegree}celsius</p>
      <p className='text-white'>Humidity - {props.humidity}</p>
      <p className='text-white'>Wind speed - {props.windSpeed}</p>
    </div>
  )
}

