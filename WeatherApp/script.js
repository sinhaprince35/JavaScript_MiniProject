function getWeather() {
  var apiKey = "b2ddc73ee319bc96f8063150ce17b9ef"; // Replace with your OpenWeatherMap API key
  var city = document.getElementById("city-input").value;
  var url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    apiKey;

  // Make a GET request to the OpenWeatherMap API
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === 200) {
        var weatherInfo =
          "Temperature: " + (data.main.temp - 273.15).toFixed(2) + "°C<br>"; //Convet Kelvin to Celcius.
        weatherInfo += "Humidity: " + data.main.humidity + "%<br>";
        weatherInfo += "Description: " + data.weather[0].description;
        document.getElementById("weather-info").innerHTML = weatherInfo;
      } else {
        document.getElementById("weather-info").innerHTML = "City not found.";
      }
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}
