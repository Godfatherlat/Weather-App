const apiKey="eaa8c72be6bfde3d4315b04842469439";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

//https://api.openweathermap.org/data/2.5/weather?q=bangalore&appid=eaa8c72be6bfde3d4315b04842469439



const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");
const weatherPic=document.querySelector("#weather_pic");


async function checkWeather( city) {
 // const response=await fetch(apiUrl+`&appid=${apiKey}`);
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    
    var data= await response.json();
    console.log(data.name);
    
    
    // console.log(data.main.temp+"°C");
    // console.log(data.main.humidity+"%");
    // console.log(data.wind.speed+"km/hr");
    // ==================================================
    // let input_city=document.getElementById("in_city");
    // console.log(input_city.value);
    
    
    

    document.querySelector(".city__name").innerHTML=data.name;

    if(data.name==undefined ){
        console.log("Enter Valid City/Country/Region name....!!!!");
        document.querySelector(".city__name").innerHTML="Not a valid city name";
        alert("Enter Valid City/Country/Region name....!!!!")
        
    }
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind_speed").innerHTML=data.wind.speed+"km/hr";
    console.log(data);
    console.log(data.weather[0].main);
    console.log(data.name);

   
   
    if(data.weather[0].main=='Clear'){
        weatherIcon.src="Images/Sunny.png"
    }
    else if(data.weather[0].main=='Rain'){
        weatherIcon.src="Images/Rainy.png"
        weatherPic.src="Images/rainyMan.png"
    }
    else if((data.weather[0].main=='Clouds')&&(data.main.temp>46)){
        weatherIcon.src="Images/Hot-Temp.png"
         weatherPic.src="Images/chillwork.png"
    }
    else
     if((data.weather[0].main=='Clouds')&&(data.main.temp>0)){
        weatherIcon.src="Images/More-Cloudy.png"
        weatherPic.src="Images/chillwork.png"
    }
    else 
    if(data.weather[0].main=='Clear'){
        weatherIcon.src="Images/Sunny.png"
        weatherPic.src="Images/chillwork.png"
    }
    else if(data.main.temp<0){
        weatherIcon.src="Images/Snowy.png"
        weatherPic.src="Images/snowboard.png"
        
    }

    
    
        
}




searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value)
    // console.log("Clicked");
    
    });

 
    


    
    


