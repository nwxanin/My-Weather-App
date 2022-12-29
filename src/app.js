function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city-name");
  cityElement.innerHTML = response.data.name;

  let descriptionElement = document.querySelector("#desceription");
  descriptionElement.innerHTML = response.data.weather[0].description;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;

  let windSpeedElement = document.querySelector("#wind-speed");
  windSpeedElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=London&appid=e6c2364656962bdcb16bc352fc42569a&&units=metric";

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
