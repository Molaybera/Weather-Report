const apikey = "1404188281e186cce5a84d3d9a10749e";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbutton = document.querySelector(".search button"); 
const weatherimg = document.querySelector(".weather-icon");
const StatusOfCity = document.querySelector(".StatusOfCity");

async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    // checking if the api key doesnot find the city name then throw the error
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        var data = await response.json();
        console.log(data)
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".tem").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
    
    
    // changing the img depend on weather (info is taking from the data from console)
    if(data.weather[0].main == "Rain"){
        weatherimg.src = "./images/rain.png";
        StatusOfCity.innerHTML = data.weather[0].main;
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherimg.src= "./images/drizzle.png";
        StatusOfCity.innerHTML = data.weather[0].main;
    }
    else if(data.weather[0].main == "Clouds"){
        weatherimg.src= "./images/clouds.png";
        StatusOfCity.innerHTML = data.weather[0].main;
    }
    else if(data.weather[0].main == "Snow"){
        weatherimg.src= "./images/snow.png";
        StatusOfCity.innerHTML = data.weather[0].main;
    }
    else if(data.weather[0].main == "Mist"){
        weatherimg.src= "./images/mist.png";
        StatusOfCity.innerHTML = data.weather[0].main;
    }
    else if(data.weather[0].main == "Wind"){
        weatherimg.src= "./images/wind.png";
        StatusOfCity.innerHTML = data.weather[0].main;
    }
    else if(data.weather[0].main == "Clear"){
        weatherimg.src= "./images/clear.png";
        StatusOfCity.innerHTML = data.weather[0].main;
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}
    }
    

searchbutton.addEventListener("click", function(){
    checkweather(searchbox.value);
    // console.log(searchbox.value);
});




