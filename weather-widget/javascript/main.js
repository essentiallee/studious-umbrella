console.log("Hello World!");

const API_KEY = config.WEATHER_API_KEY;

// access elements in the DOM
let input = document.querySelector(".zipcode");
let btn = document.querySelector(".search-button");
let form = document.querySelector("form");

let CITY_NAME = document.querySelector(".city_name");
let CITY_TEMP = document.querySelector(".temperature");

let image = document.querySelector("img");

// write a function to get weather data
const getWeatherData = (zip) => {
    const API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${API_KEY}&units=imperial`;

    fetch(API_ENDPOINT)
        .then(response => response.json())
        .then(data => {
            let local_weather_data = data;
            let WEATHER_ICON = local_weather_data.weather[0].icon
            image.setAttribute('src', `https://openweathermap.org/img/wn/${WEATHER_ICON}@2x.png`)
            console.log(local_weather_data);

            CITY_NAME.textContent = local_weather_data.name;
            CITY_TEMP.textContent = Math.round(local_weather_data.main.temp) + " °F";
        });
}

const getZipcode = (e) => {
    e.preventDefault();

    let ZIP_CODE = input.value;
    getWeatherData(ZIP_CODE);

    form.reset();
    input.focus();
}

btn.addEventListener("click", getZipcode);