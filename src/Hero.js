import React, { useState } from 'react';
import './index.css';

const api = {
    key: "4700226f7d16902197ee185303540eca",
    base: "https://api.openweathermap.org/data/2.5/"
}

/*const Hero = ({handleLogout}) => {

    return (
        
        <section className = "hero">
            <nav>
                <h2>
                    Welcome to the prototype
                </h2>
                <button onClick = {handleLogout}>
                    Logout
                </button>
            </nav>

            <body>
              
                <a href='https://www.google.com'>
                    <button>
                        Hello
                    </button>
                </a>


            </body>

        </section>
        
    )
}*/

const Hero = ({handleLogout}) => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
  
    const search = evt => {
      if (evt.key === "Enter") {
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
          .then(res => res.json())
          .then(result => {
            setWeather(result);
            setQuery('');
            console.log(result);
          });
      }
    }
  
    const dateBuilder= (d) => {
      let months = ["January", "February", "March", "April", "May", "June", "July", "August",
       "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
  
      return `${day} ${date} ${month} ${year}`
    }
  
  
  
    return (
        
      <div className={(typeof weather.main != "undefined") 
        ? ((weather.main.temp > 16) 
        ? 'Appwarm' : 'App')
        : 'App'}>
        <main>
            <nav>
                <div className= "bla">
                    Weather App.
                </div>
                <button className = "button1" onClick= {handleLogout}>
                    Logout
                </button>
            </nav>
          <div className = "search-box">
            <input 
              type = "text"
              className = "search-bar"
              placeholder = "Search..."
              onChange={e => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
          </div>
          {(typeof weather.main != "undefined") ? (
            <div>
              <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())} </div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°C
            </div>
            <div className = "weather">
              {weather.weather[0].main}
            </div>
          </div>
            </div>
          ) : ('')}
        </main>
        
      </div>
    );
  }

export default Hero;