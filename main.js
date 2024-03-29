var api = "be72fd914bab0c219bc96507583fbb76";
var city = "Denver";
var queryURL =
  "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + api;

const cityCard1 = document.getElementById("cityCard1");
const cityCardIcon1 = document.getElementById("cityCardIcon1");
const tempCard1 = document.getElementById("tempCard1");
const windCard1 = document.getElementById("windCard1");
const humidityCard1 = document.getElementById("humidityCard1");
const searchButton = document.getElementById("searchButton");
const cityBox = document.getElementById("cityBox");
const historyCities = JSON.parse(localStorage.getItem("cities")) || [];
const historyContainer = document.querySelector(".list-group");

searchButton.addEventListener("click", function () {
  historyCities.push(cityBox.value);
  const button = document.createElement("button");
  button.setAttribute("class", "list-group-item list-group-item-action");
  button.setAttribute("type", "button");
  button.textContent = cityBox.value;
  historyContainer.appendChild(button);
  localStorage.setItem("cities", JSON.stringify(historyCities));
  dataForecastCompiler(cityBox.value);
  dataCompiler(cityBox.value);
});

function dataCompiler(cityName) {
  console.log(cityName);
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=" +
    api +
    "&units=imperial";
  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      var iconCode = data.weather[0].icon;
      var iconImg = document.createElement("img");
      iconImg.src = "https://openweathermap.org/img/wn/" + iconCode + ".png";
      cityCardIcon1.innerHTML = "";
      cityCardIcon1.appendChild(iconImg);
      tempCard1.textContent = data.main.temp;
      humidityCard1.textContent = data.main.humidity;
      windCard1.textContent = data.wind.speed;
    });
}
function dataForecastCompiler(cityName) {
  console.log(cityName);
  var queryURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    cityName +
    "&appid=" +
    api +
    "&units=imperial";
  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var display = 1;
      for (let index = 0; index < data.list.length; index = index + 8) {
        console.log(data.list[index]);
        var cards = `
<img src=https://openweathermap.org/img/w/${data.list[index].weather[0].icon}.png />
<p>Temperature <span  ">${data.list[index].main.temp}</span>℉</p>
<p>Wind <span >${data.list[index].wind.speed}</span>mph</p>
<p>Humidity<span >${data.list[index].main.humidity}</span>%</p>`;

        document.getElementById("card-" + display).innerHTML = cards;
        display++;
      }
    });
}

console.log(historyContainer);
historyCities.forEach((city) => {
  const button = document.createElement("button");
  button.setAttribute("class", "list-group-item list-group-item-action");
  button.setAttribute("type", "button");
  button.textContent = city;
  historyContainer.appendChild(button);
});

historyContainer.addEventListener("click", function (event) {
  console.log(event.target.textContent);
  dataCompiler(event.target.textContent);
  dataForecastCompiler(event.target.textContent);
});
