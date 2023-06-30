const endDate = " 1 july 2023 3:00 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")
function clock(){
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now)/1000;

    if(diff < 0) return;
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff/3600) % 24;
    inputs[2].value = Math.floor(diff/60) % 60;
    inputs[3].value = Math.floor(diff) % 60;

    //convert into days

}
//initial call
clock()

/*
1 day = 24 hours
1 hour = 60 min
60 min = 3600 sec

*/
setInterval(
    () => {
        clock()
    },
    1000
)