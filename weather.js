const apiKey = "7cb9fc061fdf7b42e6b4739fa7f8063f" ;
let inputBox = document.querySelector('#inputBox');
let cityName = "";
let city = document.querySelector(".city");
let button =document.querySelector(".button");
const api = 'https://api.openweathermap.org/data/2.5/weather?q=';

async function checkWeather(){
    if(inputBox.value !=='')
        {
            cityName = inputBox.value ;
        }
        else {
           cityName= 'rajshahi';
        }
    const response = await fetch(api + `${cityName}&units=metric&&appid=${apiKey}`)
  let data = await response.json();
  city.textContent = data.name ;
  document.querySelector('.temp').textContent =  `${data.main.temp}C` ;
  document.querySelector('.humidity').textContent= data.main.humidity+'%';
  console.log(data)
  inputBox.value='';
}
checkWeather()
button.addEventListener('click',()=>{
    if(inputBox.value){checkWeather()};
})

function updateWeather(){

}