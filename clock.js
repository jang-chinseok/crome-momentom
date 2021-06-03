

//const body = document.querySelector("body");
const time = document.querySelector(".clock");
function clockTimer(){
    const currentTime = new Date();
    const Hours =currentTime.getHours();
    const Minutes =currentTime.getMinutes();
    const Seconds = currentTime.getSeconds();

    time.innerHTML =  `Current Time ${Hours < 10 ? `0${Hours}` : `${Hours}`}:${
        Minutes < 10 ? `0${Minutes}` : `${Minutes}`
      }:${
        Seconds < 10 ? `0${Seconds}` : `${Seconds}`
      }`;

}

function init(){
    setInterval(clockTimer,1000);
}
init();