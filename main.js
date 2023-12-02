let equal_click = 0;
const buttons = document.querySelectorAll(".button");
const input = document.querySelector(".input");
const equal = document.querySelector(".button-equal");
const del = document.querySelector(".del");
const ac = document.querySelector(".ac");

// window.addEventListener("load", () => {
//   input.value = "";
// });

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (equal_click == 1) {
      input.value = "";
      equal_click = 0;
    }
    input.value += button.innerText;
  });
});

equal.addEventListener("click", () => {
  equal_click = 1;
  let input_value = input.value;
  try {
    let solution = eval(input_value);
    Number.isInteger(solution)
      ? (input.value = solution)
      : (input.value = solution.toFixed(2));
  } catch (error) {
    alert("Invalid Input");
  }
});

ac.addEventListener("click", () => {
  input.value = "";
});

del.addEventListener("click", () => {
  input.value = input.value.substr(0, input.value.length - 1);
});
