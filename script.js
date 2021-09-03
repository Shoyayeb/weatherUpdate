
function fetchCurrentWeather() {
    const locationInput = document.getElementById("locationInput");
    const currentLocation = locationInput.value
    const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${currentLocation}&units=metric&appid=3e46c14c99620c15ff05dab453f5d646`;
    fetch(currentUrl)
        .then(res => res.json())
        .then(weather => showCurrentWeather(weather))
}
const showCurrentWeather = weather => {
    
}
