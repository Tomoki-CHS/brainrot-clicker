let btn = document.getElementById("btn");
let aurapoint = parseInt(document.getElementById("aura").innerText);
let baby = document.getElementById("ipadkid");
let chad = document.getElementById("gigachad");
let ohio = document.getElementById("ohio");
let mrleast = document.getElementById("mrleast");
let toilet = document.getElementById("toilet");
let stopwatch = 0;
let as = 0;
var win = false;

baby.addEventListener("click", function(){
    if (aurapoint >= 30) {
        aurapoint -= 30;
        document.getElementById("aura").innerText = aurapoint;
        as += 1;
        document.getElementById("aurapersec").innerText = as + " a/s";

        setInterval(function() {
            aurapoint += 1;
            document.getElementById("aura").innerText = aurapoint;
        }, 1000);
    }
});

chad.addEventListener("click", function(){
    if (aurapoint >= 500) {
        aurapoint -= 500;
        document.getElementById("aura").innerText = aurapoint;
        as += 15;
        document.getElementById("aurapersec").innerText = as + " a/s";

        setInterval(function() {
            aurapoint += 15;
            document.getElementById("aura").innerText = aurapoint;
        }, 1000); 
    }
});

ohio.addEventListener("click", function(){
    if (aurapoint >= 1500) {
        aurapoint -= 1500;
        document.getElementById("aura").innerText = aurapoint;
        as += 50;
        document.getElementById("aurapersec").innerText = as + " a/s";

        setInterval(function() {
            aurapoint += 50;
            document.getElementById("aura").innerText = aurapoint;
        }, 1000);
    }
});

mrleast.addEventListener("click", function(){
    if (aurapoint >= 12500) {
        aurapoint -= 12500;
        document.getElementById("aura").innerText = aurapoint;
        as += 500;
        document.getElementById("aurapersec").innerText = as + " a/s";

        setInterval(function() {
            aurapoint += 500;
            document.getElementById("aura").innerText = aurapoint;
        }, 1000);
    }
});

toilet.addEventListener("click", function(){
    if (aurapoint >= 500000) {
        aurapoint -= 500000;
        document.getElementById("aura").innerText = aurapoint;
        win = true;
        document.getElementById("toptext").innerText.font
        document.getElementById("toptext").innerText = "You won! Your time is " + document.getElementById("time").innerText + " seconds!!";
    }
});

btn.addEventListener("click", function() {
    aurapoint += 1;
    document.getElementById("aura").innerText = aurapoint;
});
