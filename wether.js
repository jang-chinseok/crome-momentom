const API_KEY = "acef314663dc9cc5b1147d08cf5bbccd";
const weather = document.querySelector(".jsWeather")
function getWeather(lat,lon){
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
.then(function(response){
    return response.json();
}).then(function(json){
    const temperature = json.main.temp;
    const place = json.name;
    weather.innerHTML = `temperature${temperature} youare in ${place}`;
})
}
const COORDS = 'coords';
function saveCoords(coordsOBG){
    localStorage.setItem(COORDS, JSON.stringify(coordsOBG));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsOBG = {
        latitude,
        longitude 
    }
    saveCoords(coordsOBG);
    getWeather(latitude,longitude);
}
function handleGeoError() {
    console.log('cant access');
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords ===null){
        askForCoords();
    }
    else{
        const parseCoords = JSON.parse(loadedCoords);
        console.log(parseCoords);
        getWeather(parseCoords.latitude,parseCoords.longitude);

}
}

function init(){
    loadCoords();
}

init();