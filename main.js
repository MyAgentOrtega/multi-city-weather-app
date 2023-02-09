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
// for (var i= document.images.length; i-->0;)
//         document.images[i].parentNode.removeChild(document.images[i]);
// fetch(queryURL + "&units=imperial")
//      .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//     console.log(data);
//     tempCard1.textContent=data.main.temp
//     humidityCard1.textContent=data.main.humidity
//     windCard1.textContent=data.wind.speed
//     cityCard1.textContent=city
//     var image = document.createElement("img");
//     image.setAttribute("src", "https://openweathermap.org/img/wn/" + iconCode + ".png");
//     cityCardIcon1.appendChild(image);
//     var iconCode = data.weather[0].icon;

//     })

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
