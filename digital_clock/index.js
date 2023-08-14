function updateClock(){
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const formattedTime = `${hours.toString().padStart(2,'O')} : ${minutes.toString().padStart(2,'O')} : ${seconds.toString().padStart(2,'O')}`;
    document.getElementById("time").textContent = formattedTime;

}

updateClock();
setInterval(updateClock,1000);