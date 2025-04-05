document.addEventListener("DOMContentLoaded", function () {
  const resultInput = document.getElementById("result");
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const value = this.getAttribute("data-value");
      if (value) {
        resultInput.value += value;
      }
    });
  });

  document.getElementById("equals").addEventListener("click", function () {
    try {
      resultInput.value = eval(resultInput.value);
    } catch (error) {
      resultInput.value = "Error";
    }
  });

  document.getElementById("clear").addEventListener("click", function () {
    resultInput.value = "";
  });

  document.getElementById("backspace").addEventListener("click", function () {
    resultInput.value = resultInput.value.slice(0, -1);
  });

  document.getElementById("plusminus").addEventListener("click", function () {
    if (resultInput.value) {
      if (resultInput.value.charAt(0) === "-") {
        resultInput.value = resultInput.value.slice(1);
      } else {
        resultInput.value = "-" + resultInput.value;
      }
    }
  });
});
