const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const label = document.getElementById("label");
let count = 0;

increaseBtn.onclick = function(){
    count++
    document.getElementById("label").textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    document.getElementById("label").textContent = count;
}

decreaseBtn.onclick = function(){
    count --;
    document.getElementById("label").textContent = count;
}

// This program was made by me on 2025-05-24 6AM in the morning
