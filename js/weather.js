const weatherIcon = document.querySelector(".weather-icon"),
  temperature = document.querySelector(".temperature"),
  weatherDescription = document.querySelector(".weather-description"),
  wind = document.querySelector(".wind"),
  humidity = document.querySelector(".humidity"),
  city = document.querySelector(".city");

const enterCity = [];

function setCity(e) {
  if (e.type == "focus") {
    enterCity.push(city.textContent);
  } else if (e.type == "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("city", e.target.innerText);
      city.blur();
    }
  } else if (e.code === "Enter") {
    if (city.textContent.trim().length == 0) {
      city.textContent = enterCity[0];
    }
    getWeather();
    city.blur();
    localStorage.setItem("city", e.target.innerText);
  } else {
    if (city.textContent.trim().length == 0) {
      city.textContent = enterCity[0];
    }
    localStorage.setItem("city", e.target.innerText);
    getWeather();
    enterCity.length = 0;
  }

  console.log(enterCity);
}

const getCity = () => {
  if (
    (localStorage.getItem("city") === null && city.textContent === "") ||
    localStorage.getItem("city") === ""
  ) {
    city.textContent = "London";
  } else city.textContent = localStorage.getItem("city");
};

async function getWeather() {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&appid=0e67cdca072b0942f2c659101dc76bc3&units=metric`,
      res = await fetch(url),
      data = await res.json(),
      keysWind = Object.keys(data.wind),
      keysHumidity = Object.keys(data.main),
      keysData = Object.keys(data);

    weatherIcon.className = "weather-icon owf";
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp.toFixed()}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent = `${keysData[5]} ${keysWind[0]} : ${data.wind.speed}`;
    humidity.textContent = `${keysHumidity[5]} : ${data.main.humidity}`;
  } catch (err) {
    alert("None correct city, please enter existing city");
  }
}

getCity();

document.addEventListener("DOMContentLoaded", getWeather);
city.addEventListener("keypress", setCity);
city.addEventListener("focus", setCity);
city.addEventListener("blur", setCity);
city.addEventListener("click", () => (city.textContent = ""));
