let started = false;
let button = document.getElementById("btn");
let trophy = document.getElementById("toilet");
let time = parseInt(document.getElementById("time").innerText);
let myInterval;

button.addEventListener("click", function(){
    if (started === false) {
        started = true;
        startStopWatch();
    }
});

function startStopWatch() {
        myInterval = setInterval(function() {
        time += 1;
        document.getElementById("time").innerText = time;
    }, 1000);
}

trophy.addEventListener("click", function(){
    if (win === true)
        clearInterval(myInterval);
});