var api = "be72fd914bab0c219bc96507583fbb76";
var city = "Denver";
var queryURL =
  "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + api;

const cityCard1 = document.getElementById("cityCard1");
const cityCardIcon1 = document.getElementById("cityCardIcon1");
const tempCard1 = document.getElementById("tempCard1");
const windCard1 = document.getElementById("windCard1");
const humidityCard1 = document.getElementById("humidityCard1");
const searchButton = document.getElementById("searchButton");
const cityBox = document.getElementById("cityBox");

searchButton.addEventListener("click", dataCompiler);
function dataCompiler() {
  console.log(cityBox.value);
  var queryURL =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    cityBox.value +
    "&appid=" +
    api;
  fetch(queryURL).then(function (response) {
    return response.json();
  }).then(function (data){
        tempCard1.textContent=data.main.temp
        humidityCard1.textContent=data.main.humidity
        windCard1.textContent=data.wind.speed
        
  });
}
