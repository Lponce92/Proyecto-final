
const API_KEY = '76d7a9d1e1d98fef4730091983484ace'

const fetchData = position => {
    const { latitude, longitude } = position.coords;
    fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => setWeatherdata(data))
    
}

const setWeatherdata = data => {
    console.log(data);
    const weatherData = {
        location: data.name,
        description: data.weather[0].main,
        humidity: data.main.humidity,
        temperature: data.main.temp,
        date: getDate(),
    }
    Object.keys(weatherData).forEach( key => {
        document.getElementById(key).textContent = weatherData[key];
    });
}

const getDate = () => {
    let date = new Date();
    return `${date.getDate()}-${ ( '0' + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}`;
}

const onLoad = () => {
    navigator.geolocation.getCurrentPosition(fetchData);

}