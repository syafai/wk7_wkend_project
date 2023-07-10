var button = document.querySelector('.button')
var cityName = document.querySelector('.cityName')
var name = document.querySelector('.name')
var descr = document.querySelector('.descr')
var temp = document.querySelector('.temp')
var high = document.querySelector('.high')
var low = document.querySelector('.low')
var humidity = document.querySelector('.humidity')

function convertTemperature(kelvin) {
  const fahrenheit = ((kelvin - 273.15) * 9/5) + 32;
  return fahrenheit.toFixed(2);
}

button.addEventListener('click',function(){
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q='+cityName.value+'&appid=85f7bb4c99d4d34f2b4ac4cb1e65add2'
  )
    .then(response => response.json())
    .then(data => {

      console.log(data)

      var nameValue = data['name'];
      var tempValue = convertTemperature(data['main']['temp']);
      var descrValue = data['weather'][0]['description'];
      var highValue = convertTemperature(data['main']['temp_max']);
      var lowValue = convertTemperature(data['main']['temp_min']);
      var humidityValue = data['main']['humidity']

      temp.innerHTML = "Current Temperature: " + tempValue;
      descr.innerHTML = "Description: " + descrValue;
      high.innerHTML = "High: " + highValue;
      low.innerHTML = "Low: " + lowValue;
      humidity.innerHTML = "Humidity: " + humidityValue;

    })

  
    .catch(err => alert("Wrong city name!"))
})














// async function fetchWeatherData(location) {

// function convertTemperature(celsius) {
//     const fahrenheit = (celsius * 9/5) + 32;
//     return fahrenheit.toFixed(2);
//   }

  
// function displayWeatherInfo(weatherData) {
//     const cityname = weatherData.cityname.name;
//     const country = weatherData.cityname.country;
//     const currentTemp = convertTemperature(weatherData.current.temp_c);
//     const condition = weatherData.current.condition.text;
//     const forecast = weatherData.forecast.forecastday[0].day.condition.text;
//     const highTemp = convertTemperature(weatherData.forecast.forecastday[0].day.maxtemp_c);
//     const lowTemp = convertTemperature(weatherData.forecast.forecastday[0].day.mintemp_c);
//     const humidity = weatherData.current.humidity;
  
//     const weatherInfoElement = document.getElementById("weather-info");
//     weatherInfoElement.innerHTML = `
//       <h2>Current weather in ${cityname}, ${country}:</h2>
//       <p>Temperature: ${currentTemp}°F</p>
//       <p>Condition: ${condition}</p>
//       <p>Forecast: ${forecast}</p>
//       <p>High: ${highTemp}°F</p>
//       <p>Low: ${lowTemp}°F</p>
//       <p>Humidity: ${humidity}%</p>
//     `;
//   }
  
//   const location = "New York";
  
//   fetchWeatherData(location)
//     .then((weatherData) => {
//       displayWeatherInfo(weatherData);
//     })
//     .catch((error) => {
//       console.log("Error:", error);
//       const weatherInfoElement = document.getElementById("weather-info");
//       weatherInfoElement.innerHTML = "<h2>Error retrieving weather data</h2>";
    
//     });
  