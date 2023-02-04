// CALCULATOR

const display = document.querySelector(".display__content");
const numbers = document.querySelectorAll("button.number");
const operators = document.querySelectorAll("button.operator");
const deleteBtn = document.querySelector("button.del");
const resetBtn = document.querySelector("button.reset");
const dot = document.querySelector("button.dot");
const evaluateBtn = document.querySelector(".evaluate");

const appendContent = (e) => {
  if (
    (e.target.innerHTML === "+" && display.innerHTML.includes("+")) ||
    (e.target.innerHTML === "-" && display.innerHTML.includes("-")) ||
    (e.target.innerHTML === "*" && display.innerHTML.includes("*")) ||
    (e.target.innerHTML === "/" && display.innerHTML.includes("/")) ||
    (e.target.innerHTML === "." && display.innerHTML.includes("."))
  ) {
    return;
  } else if (
    display.innerHTML === "Syntax Error!" ||
    display.innerHTML === "Infinity"
  ) {
    return;
  }
  display.innerHTML += e.target.innerHTML;
};

const reset = () => {
  display.innerHTML = "";
};

const del = () => {
  if (
    display.innerHTML === "Syntax Error!" ||
    display.innerHTML === "Infinity"
  ) {
    reset();
  }
  display.innerHTML = display.innerHTML.slice(0, -1);
};

const evaluate = () => {
  if (display.innerHTML === "") {
    return;
  }
  try {
    display.innerHTML = eval(display.innerHTML);
  } catch {
    display.innerHTML = "Syntax Error!";
  }
  if (isNaN(display.innerHTML) || display.innerHTML === "Infinity") {
    setTimeout(() => (display.innerHTML = ""), 3000);
  }
};

numbers.forEach((number) => {
  number.addEventListener("click", (e) => appendContent(e));
});

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => appendContent(e));
});

dot.addEventListener("click", (e) => appendContent(e));
deleteBtn.addEventListener("click", del);
resetBtn.addEventListener("click", reset);
evaluateBtn.addEventListener("click", evaluate);

// THEME TOGGLE

const themes = document.querySelectorAll(".circle");

themes.forEach((theme) => {
  theme.addEventListener("click", (e) => {
    if (e.target === themes[0]) {
      document.body.classList.remove("t2", "t3");
      //   document.body.classList.remove("t3");
      document.body.classList.add("t1");
    } else if (e.target === themes[1]) {
      document.body.classList.remove("t1", "t3");
      //   document.body.classList.remove("t3");

      document.body.classList.add("t2");
    } else if (e.target === themes[2]) {
      document.body.classList.remove("t1", "t2");
      //   document.body.classList.remove("t2");

      document.body.classList.add("t3");
    }
  });
});
