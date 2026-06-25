console.log("Hello World!");

const API_KEY = config.WEATHER_API_KEY;

let input = document.querySelector(".zipcode");
let btn = document.querySelector(".search-button");

function getWeatherData(zip) {
    let API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${API_KEY}&units=imperial`;

    fetch(API_ENDPOINT)
        .then(response => response.json())
        .then(data => {
            let local_weather_data = data;
            console.log(local_weather_data);
        });
}

function getZipCode(e) {
    e.preventDefault();

    let ZIP_CODE = input.value;
    getWeatherData(ZIP_CODE);
}

btn.addEventListener("click", getZipCode);