function formatDate(timetamp) {
  let date = new Date(timetamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  let day = days[date.getDay()];
  return `${day}<br/>${hours}:${minutes}`;
}

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

  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = formatDate(response.data.dt * 1000);

  let iconElement = document.querySelector("#today-icon");
  let iconUrl = `icons/${response.data.weather[0].icon}.svg`;
  iconElement.src = iconUrl;
  iconElement.setAttribute("alt", response.data.weather[0].description);
}

let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=London&appid=e6c2364656962bdcb16bc352fc42569a&&units=metric";

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
