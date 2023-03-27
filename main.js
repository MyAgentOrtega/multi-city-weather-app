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
const historyCities = JSON.parse(localStorage.getItem('cities')) || []
const historyContainer = document.querySelector('.list-group') 

searchButton.addEventListener("click", function () {
  historyCities.push(cityBox.value)
  const button = document.createElement('button')
  button.setAttribute('class', 'list-group-item list-group-item-action')
  button.setAttribute('type', 'button')
  button.textContent = cityBox.value
  historyContainer.appendChild(button)
  localStorage.setItem('cities', JSON.stringify(historyCities))

  dataCompiler(cityBox.value)
});
function dataCompiler(cityName) {
  console.log(cityName);
  var queryURL =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=" +
    api+"&units=imperial";
  fetch(queryURL).then(function (response) {
    return response.json();
  }).then(function (data){
        tempCard1.textContent=data.main.temp
        humidityCard1.textContent=data.main.humidity
        windCard1.textContent=data.wind.speed
        
  });
}
console.log(historyContainer)
historyCities.forEach((city) => {
  const button = document.createElement('button')
  button.setAttribute('class', 'list-group-item list-group-item-action')
  button.setAttribute('type', 'button')
  button.textContent = city
  historyContainer.appendChild(button)
})

historyContainer.addEventListener('click', function (event) {
  console.log(event.target.textContent)
  dataCompiler(event.target.textContent)
})
