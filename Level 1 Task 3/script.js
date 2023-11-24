const buttons = document.querySelectorAll(".btn");
const operations = document.querySelectorAll(".op");
const display = document.querySelector(".box-display");
const clearBtn = document.querySelector("#clear");
const total = document.querySelector("#total");
const backspace = document.querySelector("#backspace");

buttons.forEach((e) => {
  e.addEventListener("click", () => {
    display.textContent += e.value;
  });
});
operations.forEach((e) => {
  e.addEventListener("click", () => {
    display.textContent += e.value;
  });
});

total.addEventListener("click", () => {
  display.textContent = eval(display.textContent);
});

clearBtn.addEventListener("click", () => {
  display.textContent = "";
});

backspace.addEventListener("click", () => {
  let text = display.textContent;
  text = text.substring(0, text.length - 1);
  display.textContent = text;
});
