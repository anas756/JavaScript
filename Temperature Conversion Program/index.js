const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcuis = document.getElementById("toCelcuis");
const result = document.getElementById("result");
const number = document.getElementById("number");
let temp;

function Convert() {
    if (toFahrenheit.checked) {
        temp = Number(number.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if (toCelcuis.checked) {
        temp = Number(number.value);
        temp = (temp - 32) * (5/9); 
        result.textContent = temp.toFixed(1) + "°C";
    }
    else {
        result.textContent = "Select a Unit";
    }
}
