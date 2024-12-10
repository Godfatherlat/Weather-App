const apiKey="eaa8c72be6bfde3d4315b04842469439";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&";

//https://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=eaa8c72be6bfde3d4315b04842469439



const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search btn");

async function checkWeather() {
    const response=await fetch(apiUrl+`&appid=${apiKey}`);
    var data= await response.json();
    console.log(data);


document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
document.querySelector(".wind").innerHTML=data.main.speed+"km/hr";

    
}

console.log(searchBox.value);


checkWeather();





