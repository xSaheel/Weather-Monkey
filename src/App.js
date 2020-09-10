import React from "react";
import Weather from "./AppComponents/Weather.js";
import Form from "./AppComponents/Form.js";
import NavBar from "./AppComponents/NavBar.js";
import "weather-icons/css/weather-icons.css";

const dotenv = require("dotenv").config();
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
//api.openweathermap.org/data/2.5/weather?q=London,uk

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      temp: undefined,
      icon: undefined,
      desc: undefined,
      error: false,
      greet: "What's the weather today?",
      bg: require("./images/sample1.jpg"),
    };

    this.weatherIcon = {
      thunderstorm: "wi-thunderstorm",
      drizzle: "wi-sleet",
      rain: "wi-storm-showers",
      snow: "wi-snow",
      fog: "wi-fog",
      clear: "wi-day-sunny",
      clouds: "wi-day-fog",
    };
  }

  getWeatherIcon(icons, rangeID) {
    switch (true) {
      case rangeID >= 200 && rangeID <= 232:
        this.setState({
          icon: this.weatherIcon.thunderstorm,
          bg: require("./images/thunderstorm.jpg"),
        });
        break;
      case rangeID >= 300 && rangeID <= 321:
        this.setState({
          icon: this.weatherIcon.drizzle,
          bg: require("./images/drizzle.jpg"),
        });
        break;
      case rangeID >= 500 && rangeID <= 531:
        this.setState({
          icon: this.weatherIcon.rain,
          bg: require("./images/rain1.jpg"),
        });
        break;
      case rangeID >= 600 && rangeID <= 622:
        this.setState({
          icon: this.weatherIcon.snow,
          bg: require("./images/snow.jpg"),
        });
        break;
      case rangeID >= 701 && rangeID <= 781:
        this.setState({
          icon: this.weatherIcon.fog,
          bg: require("./images/fog.jpg"),
        });
        break;
      case rangeID == 800:
        this.setState({
          icon: this.weatherIcon.clear,
          bg: require("./images/sunny2.jpg"),
        });
        break;
      case rangeID >= 801 && rangeID <= 804:
        this.setState({
          icon: this.weatherIcon.clouds,
          bg: require("./images/cloudy.jpg"),
        });
        break;
      default:
        this.setState({
          icon: this.weatherIcon.clouds,
          bg: require("./images/sample1.jpg"),
        });
        break;
    }
  }

  kelvinToCelsius(temp) {
    let celsius = Math.floor(temp - 273.15);
    return celsius;
  }

  getWeather = async (event) => {
    event.preventDefault();

    const city = event.target.elements.city.value;
    const country = event.target.elements.city.value;

    if (city || country) {
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
      );
      const response = await api_call.json();
      console.log(response);
      this.setState({
        city: `${response.name}, ${response.sys.country}`,
        temp: this.kelvinToCelsius(response.main.temp),
        desc: response.weather[0].description,
      });
      this.setState({
        error: false,
        greet: null,
      });
      this.getWeatherIcon(this.weatherIcon, response.weather[0].id);
    } else {
      this.setState({
        error: true,
        greet: null,
        city: null,
        temp: null,
        desc: null,
      });
    }
    console.log(this.state.bg);
  };

  render() {
    return (
      <div className="App" style={{ backgroundImage: `url(${this.state.bg})` }}>
        <NavBar />
        <h1 className="welcome">{this.state.greet}</h1>
        <Weather
          cityName={this.state.city}
          tempCelsius={this.state.temp}
          weatherIcon={this.state.icon}
          description={this.state.desc}
        />
        <Form loadWeather={this.getWeather} error={this.state.error} />
      </div>
    );
  }
}

export default App;
