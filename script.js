
function fetchCurrentWeather() {
    const locationInput = document.getElementById("locationInput");
    const currentLocation = locationInput.value
    const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${currentLocation}&units=metric&appid=3e46c14c99620c15ff05dab453f5d646`;
    fetch(currentUrl)
        .then(res => res.json())
        .then(weather => showCurrentWeather(weather))
}
const showCurrentWeather = weather => {
    console.log(weather);
    const iconCode = weather.weather[0].icon;
    const iconUrl = ` http://openweathermap.org/img/wn/${iconCode}@4x.png`;
    const conditionImage = document.getElementById("currentWeatherImg");
    const logoImg = document.getElementById("logoImg");
    logoImg.src = iconUrl
    conditionImage.src = iconUrl;




    var link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = iconUrl;
    // document.getElementsByTagName('head')[0].removeChild("link")
    document.getElementsByTagName('head')[0].appendChild(link);








    // text
    const conditionText = document.getElementById("conditionText");
    const locationGot = weather.name;
    const descriptionGot = weather.weather[0].description;
    const tempGot = weather.main.temp;
    conditionText.innerText = `Its ${descriptionGot} in ${locationGot} and the temparature is ${tempGot}°`


}

// fetchCurrentWeather()