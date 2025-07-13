const inputBox=document.querySelector('.input-box');
const searchBtn=document.getElementById("searchBtn");
const weather_img=document.querySelector(".weather-img");
const temperature=document.querySelector(".temperature");
const description=document.querySelector(".description");
const humidity=document.getElementById("humidity");
const wind_speed=document.getElementById("wind-speed");
const weather_details=document.querySelector("weather-details");


async function checkWeather(city){
    const api_key = "6191082f7ce9f09c0bb38a30c5e27bb2";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data=await fetch(`${url}`).then(response=> response.json());
    console.log(weather_data);

    if(weather_data.cod===`404`){
        description.innerHTML="CITY NOT FOUND !TRY AGAIN"
        humidity.innerHTML="";
        wind_speed.innerHTML="";
        temperature.innerHTML=""
        weather_details.style.display="none"
        
    }


    temperature.innerHTML = `${ Math.round(weather_data.main.temp - 273.15)} °C`;
    humidity.innerHTML = `${ Math.round(weather_data.main.humidity)} `;
    wind_speed.innerHTML = `${(weather_data.wind.speed)}  km/H`;
    description.innerHTML = `${(weather_data.weather[0].description)}`;



    switch(weather_data.weather[0].main){
        case 'clouds' :
            weather_img.src="assets/cloud.png";
            break;
        case 'Clear' :
            weather_img.src="assets/clear.png";
            break;
        case 'Mist' :
            weather_img.src="assets/mist.png";
            break;
        case 'Rain' :
            weather_img.src="assets/rain.png";
            break;
        case 'Snow' :
            weather_img.src="assets/snow.png";
            break;
}

}
searchBtn.addEventListener("click",()=>{
    checkWeather(inputBox.value);
})

  