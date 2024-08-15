let cityInput = document.getElementById("search-bar-input");
let checkButton = document.getElementById("search-button");
let weatherDiv = document.querySelector(".weather");



checkButton.addEventListener('click', ()=>{
    let cityName = cityInput.value;
    if (cityName.trim() === ''){
        alert('Please enter a city name');
        weatherDiv.style.display = 'none';
        return;
    }

    fetchWeatherData(cityName);
    weatherDiv.style.display  = 'block';
});

cityInput.addEventListener('input', () => {
    if(cityInput.value.trim() === ''){
        weatherDiv.style.display = 'none';
    }
})

async function fetchWeatherData(city){
    const apiKey = "9c33218ec326c32521b9a43f76c95651";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;


    try{
        const response = await fetch(apiUrl);
        if(!response.ok){
            throw new Error(`city not found: ${response.statusText}`)
        }
        const data = await response.json();
        updateWeatherData(data);
    }
    catch(error){
        console.error(error);
        alert(error.message);
    }
}

function updateWeatherData(data) {
    let weatherIcon = document.querySelector('.weather-icon');
    let tempElement = document.querySelector('.temp');
    let cityElement = document.querySelector('.city');
    let humidityElement = document.querySelector('.humidity');
    let windElement = document.querySelector('.wind');
    let weatherDescriptionElement = document.querySelector('.weather-description');

    const {main, weather, wind, name} = data;
    tempElement.textContent = `${Math.round(main.temp)}°C`
    cityElement.textContent = name;
    humidityElement.textContent = `${main.humidity}%`;
    windElement.textContent = `${wind.speed} Km/h`

    //update weather description
    const weatherDescription = weather[0].description;
    weatherDescriptionElement.textContent = weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);

    const weatherCode = weather[0].icon;
    if (weatherCode === "01d"){
        weatherIcon.src = 'weather icons/sun.png';
    } else if (weatherCode === "01n"){
        weatherIcon.src = 'weather icons/night-mode.png';
    } else if (weatherCode === "02d"){
        weatherIcon.src = 'weather icons/sun-cloud.png';
    } else if (weatherCode === "02n"){
        weatherIcon.src = 'weather icons/moon-clouds.png';
    } else if (weatherCode === "03d"){
        weatherIcon.src = 'weather icons/cloud.png';
    } else if (weatherCode === "03n"){
        weatherIcon.src = 'weather icons/cloud.png';
    } else if (weatherCode === "04d"){
        weatherIcon.src = 'weather icons/clouds.png';
    } else if (weatherCode === "04n"){
        weatherIcon.src = 'weather icons/clouds.png';
    } else if (weatherCode === "09d"){
        weatherIcon.src = 'weather icons/heavy-rain.png';
    } else if (weatherCode === "09n"){
        weatherIcon.src = 'weather icons/heavy-rain.png';
    } else if (weatherCode === "10d"){
        weatherIcon.src = 'weather icons/sun-rain.png';
    } else if (weatherCode === "10n"){
        weatherIcon.src = 'weather icons/moon-rain.png';
    } else if (weatherCode === "11d"){
        weatherIcon.src = 'weather icons/storm.png';
    } else if (weatherCode === "11n"){
        weatherIcon.src = 'weather icons/storm.png';
    } else if (weatherCode === "13d"){
        weatherIcon.src = 'weather icons/sun-snow.png';
    } else if (weatherCode === "13n"){
        weatherIcon.src = 'weather icons/moon-snow.png';
    } else if (weatherCode === "50d" || weatherCode === "50n"){
        weatherIcon.src = 'weather icons/mist.png';
    }

    
}

