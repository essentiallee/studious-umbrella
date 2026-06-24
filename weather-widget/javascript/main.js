console.log("Hello World!");

const API_KEY = config.WEATHER_API_KEY;

function getWeatherData() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=10128,us&appid=${API_KEY}&units=imperial`)
        .then(response => response.json())
        .then(data => console.log(data));
}

getWeatherData();
