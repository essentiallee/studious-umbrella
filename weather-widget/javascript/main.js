console.log("Hello, World!");
const API_KEY = config.WEATHER_API_KEY;
const CITY_ID = "524901";
const API_URL = `http://api.openweathermap.org/data/2.5/forecast/city?id=${CITY_ID}&APPID=${API_KEY}`;
