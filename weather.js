const apiKey="eaa8c72be6bfde3d4315b04842469439";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");

const searchBtn=document.querySelector(".search btn");





async function checkWeather() {
    const response=await fetch(apiUrl+`&appid=${apiKey}`);
    var data=await response.json();
    console.log(data);


document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
document.querySelector(".wind").innerHTML=data.main.speed+"km/hr";


// console.log(document.querySelector(".city").innerHTML=data.name);
// console.log(document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C");
// console.log(document.querySelector(".humidity").innerHTML=data.main.humidity+"%");
// console.log(document.querySelector(".wind").innerHTML=data.main.speed+"km/hr");




    
}

checkWeather();





