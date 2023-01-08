import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from "react";
import axios from 'axios';

function App() {
  const apiKey = "193bc76e8d3680ce39bf5a7825a597f9"
  const [inputCity, setInputCity] = useState("")
  const [data, setData] = useState({})


  const getWeatherDetails = (cityName) => {
    if (!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(apiURL).then((res) => {
      console.log("response", res.data)
      setData(res.data)
    }).catch((err) => {
      console.log("err", err)
    })
  }

  const handleChangeInput = (e) => {
    console.log("value", e.target.value)
    setInputCity(e.target.value)
  }

  const handleSearch = () => {
    getWeatherDetails(inputCity)
  }

  
  return (
    <div className='col-md-12'>
      <div className='weatherBg'>
        <h1 className="heading">Weather App</h1>
        <div className='d-grid gap-3 col-4 mt-4'>
          <input type='text' className="form control" value={inputCity}
            onChange={handleChangeInput}></input>
          <button className='btn btn-primary' type='button' onClick={handleSearch}>Search</button>
        </div>
      </div>

      <div className='col-md-12 text-center mt-5'>
        <div className='shadow rounded weatherResultBox'>

          <img className='weatherIcon'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZYFLm1baAqI6ZMAX3Teggu6-LKqtFg_wigw&usqp=CAU'></img>

            <h5 className="weatherCity">
              {data?.name}
            </h5>
          <h6 className="weatherTemp">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h6>


        </div>
        </div>
      </div>
  );
}

export default App;
