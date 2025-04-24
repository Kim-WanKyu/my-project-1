import { getWeatherAPIKey } from "./weatherAPI.js";

async function onGeoSuccess(position) {
  // success callback. PositionCallback.
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;

  const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
  const lang = "en";
  const tempUnits = "metric"; // metric: ℃ / imperial: ℉ / standard: K.
  const WEATHER_API_KEY = getWeatherAPIKey();
  const url = `${baseUrl}?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}&lang=${lang}&units=${tempUnits}`;

  const weatherData = await getWeatherData(url);
  makeWeatherArea(weatherData);
}

function onGeoError(e) {
  // error callback.
  alert("Can't find your position. No weather for you. : ", e);
}

// get current position of current browser.
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

const getWeatherData = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("getWeatherData");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

function makeWeatherArea(data) {
  const weatherBox = document.querySelector("#weather-box");
  weatherBox.classList.add("weather-box");

  const city = document.createElement("div");
  const weatherMain = document.createElement("div");
  const temp = document.createElement("div");
  const windSpeed = document.createElement("div");

  city.textContent = `${data.name} - ${data.sys.country}`;
  weatherMain.textContent = `${data.weather[0].main} (${data.weather[0].description})`;
  temp.textContent = `${data.main.temp} ℃ / ${convertTemperatureC2F(data.main.temp)} ℉`;
  windSpeed.textContent = `wind speed: ${data.wind.speed} m/s`;

  weatherBox.appendChild(city);
  weatherBox.appendChild(weatherMain);
  weatherBox.appendChild(temp);
  weatherBox.appendChild(windSpeed);
}

function convertTemperatureC2F(c) {
  return (c * 9) / 5 + 32;
}
