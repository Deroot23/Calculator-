//Get the display element
const display = document.getElementById("result");

// Append a value to the display 
function appendNumber(value) {
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = "";
}

// Calculate the result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}