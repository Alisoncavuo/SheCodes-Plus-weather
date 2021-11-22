let now = new Date();
let monday = document.querySelector(".monday");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
monday.innerHTML = `${day} ${month} ${date}th ${year}, ${hours}:${minutes}`;

//here
let apiKey = "190152064d2b31379030a729490bb67f";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric";

function showTemperature(response) {
  console.log(response.data);
  let country = document.querySelector("#country");
  country.innerHTML = `${response.data.name}`;
  let temperatureElement = document.querySelector("#number");
  temperatureElement.innerHTML = `${Math.round(response.data.main.temp)}`;

  let humidity = document.querySelector(".humid");
  humidity.innerHTML = `${response.data.main.humidity}`;
}

function search(event) {
  event.preventDefault();
  let searchInputs = document.querySelector(".searchbox");
  let apiKey = "190152064d2b31379030a729490bb67f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInputs.value}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

function showHumidity(response) {
  let humidity = document.querySelector(".humid");
  humidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;
}

function searches(event) {
  event.preventDefault();
  let searchInpu = document.querySelector(".searchbox");
  let apiKey = "190152064d2b31379030a729490bb67f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInpu.value}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showHumidity);
}

function showWind(response) {
  let wind = document.querySelector(".wind");
  wind.innerHTML = `Wind: ${response.data.wind.speed}km/h`;
}

function searchWind(event) {
  event.preventDefault();
  let searchInpu = document.querySelector(".searchbox");
  let apiKey = "190152064d2b31379030a729490bb67f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInpu.value}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showWind);
}

function showFeels(response) {
  let feels = document.querySelector("#feels");
  feels.innerHTML = `Feels like: ${Math.round(response.data.main.feels_like)}°`;
}

function searchFeels(event) {
  event.preventDefault();
  let searchInpu = document.querySelector(".searchbox");
  let apiKey = "190152064d2b31379030a729490bb67f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInpu.value}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showFeels);
}

function showClearSky(response) {
  let clearSky = document.querySelector("#clear");
  clearSky.innerHTML = `${response.data.weather[0].description}`;
}

function searchSkyes(event) {
  event.preventDefault();
  let searchInpu = document.querySelector(".searchbox");
  let apiKey = "190152064d2b31379030a729490bb67f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInpu.value}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showClearSky);
}

let forms = document.querySelector("form");
forms.addEventListener("submit", search);

let formshum = document.querySelector("form");
formshum.addEventListener("submit", searches);

let formswind = document.querySelector("form");
formswind.addEventListener("submit", searchWind);

let formsfeels = document.querySelector("form");
formsfeels.addEventListener("submit", searchFeels);

let formssky = document.querySelector("form");
formssky.addEventListener("submit", searchSkyes);

//separation current city

function showCurrentCityWeather(response) {
  console.log(response.data);
  let current = document.querySelector("#country");
  country.innerHTML = `${response.data.name}`;

  let tempElement = document.querySelector("#number");
  tempElement.innerHTML = `${Math.round(response.data.main.temp)}`;

  let humidity = document.querySelector(".humid");
  humidity.innerHTML = `Humidity: ${response.data.main.humidity}%`;

  let wind = document.querySelector(".wind");
  wind.innerHTML = `Wind: ${response.data.wind.speed}km/h`;

  let feels = document.querySelector("#feels");
  feels.innerHTML = `Feels like: ${Math.round(response.data.main.feels_like)}°`;

  let clearSky = document.querySelector("#clear");
  clearSky.innerHTML = `${response.data.weather[0].description}`;
}

function showPosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "190152064d2b31379030a729490bb67f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showCurrentCityWeather);
}
navigator.geolocation.getCurrentPosition(showPosition);

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let weatherNowButton = document.querySelector(".currentCity");
weatherNowButton.addEventListener("click", getCurrentLocation);
