const billAmount = document.querySelector("#billAmounts");
const peopleNumber = document.querySelector("#people-amount");
const totalPerPerson = document.querySelector("#total-per-person");
const tipPerPerson = document.querySelector("#tip-per-person");
const selectTip = document.querySelectorAll("#services");
const tipCustom = document.querySelector("#tip-custom");
const resets = document.querySelector("#reset");
const errorNumber = document.querySelector(".h2_no_zero");
const activeResetButton = document.querySelector(".reset-button-active");
const activeBorder = document.querySelector(".input_box_1");
const errorBorder = document.querySelector("#numberOfPeople");

let percent = 0;

function calculateTip() {
  if (billAmount.value && peopleNumber.value && percent > 0) {
    const tipAmount = billAmount.value * (percent / 100);

    const totalAmountPerPerson =
      (+billAmount.value + tipAmount) / peopleNumber.value;

    console.log(peopleNumber.value);

    const tipAmountPerPerson = tipAmount / peopleNumber.value;

    totalPerPerson.innerHTML = "$" + totalAmountPerPerson.toFixed(2);

    tipPerPerson.innerHTML = "$" + tipAmountPerPerson.toFixed(2);

    resets.classList.add("reset-button-active");
  } else {
    totalPerPerson.innerHTML = "0.00";
    tipPerPerson.innerHTML = "0.00";
  }
}

billAmount.addEventListener("input", function () {
  activeBorder.style.border = "2px solid #26C2AE";
  errorBorder.style.border = "none";
  calculateTip();
});
peopleNumber.addEventListener("input", function () {
  activeBorder.style.border = "none";

  if (peopleNumber.value === "0") {
    errorNumber.classList.add("h2_no_zero_active");
    totalPerPerson.innerHTML = "$" + "0.00";
    tipPerPerson.innerHTML = "$" + "0.00";
    errorBorder.style.border = "2px solid #E17052";
  } else {
    errorNumber.classList.remove("h2_no_zero_active");
    errorBorder.style.border = "2px solid #26C2AE";
  }
  calculateTip();
});
selectTip.forEach((element) => {
  element.addEventListener("click", (event) => {
    percent = parseInt(event.target.textContent);
    const activeButton = document.querySelector(".greenButton-active");
    activeBorder.style.border = "none";
    errorBorder.style.border = "none";
    if (activeButton) {
      activeButton.classList.remove("greenButton-active");
    }

    event.target.classList.add("greenButton-active");

    calculateTip();
  });
});
tipCustom.addEventListener("input", (event) => {
  const enteredValue = parseInt(event.target.value);
  if (enteredValue > 100) {
    event.target.value = 100;
    enteredValue = 100;
  }

  percent = enteredValue;

  calculateTip();
});
resets.addEventListener("click", () => {
  activeBorder.style.border = "none";
  errorBorder.style.border = "none";
  errorNumber.classList.remove("h2_no_zero_active");
  resetField();
});

function resetField() {
  billAmount.value = "";
  peopleNumber.value = "";
  totalPerPerson.innerHTML = "$" + "0.00";
  tipPerPerson.innerHTML = "$" + "0.00";
  tipCustom.value = "";
  percent = 0;
  const activeButton = document.querySelector(".greenButton-active");
  activeButton.classList.remove("greenButton-active");
  const activeResetButton = document.querySelector(".reset-button-active");
  activeResetButton.classList.remove("reset-button-active");
}
