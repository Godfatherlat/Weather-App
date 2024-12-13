const apiKey="eaa8c72be6bfde3d4315b04842469439";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metricq=";

//https://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=eaa8c72be6bfde3d4315b04842469439



const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");

async function checkWeather( city) {
    // const response=await fetch(apiUrl+`&appid=${apiKey}`);
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    
    var data= await response.json();
    console.log(data);


    document.querySelector("#city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.main.speed+"km/hr";
}




searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value)
    // console.log("Clicked");
    
    });


    // let input_city=document.getElementById("in_city");
    // console.log(input_city.value);
    


