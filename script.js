const display = document.querySelector("#display");

function appendValue(value) {
  if (display.textContent === "0") {
    display.textContent = value;
  } else {
    display.textContent = display.textContent + value;
  }
}

function clearDisplay() {
  display.textContent = "0";
}

function backspace() {
  display.textContent = display.textContent.slice(0, -1) || 0;
}

function operater() {
  let result = eval(display.textContent.replace("%", "/100"));
  display.textContent = result;
}