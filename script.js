const billAmount = document.querySelector("#billAmounts");
const peopleNumber = document.querySelector("#people-amount");
const totalPerPerson = document.querySelector("#total-per-person");
const tipPerPerson = document.querySelector("#tip-per-person");
const selectTip = document.querySelectorAll("#services");
const tipCustom = document.querySelector("#tip-custom");
const resets = document.querySelector("#reset");

let percent = 0;

function calculateTip() {
    
  const tipAmount = billAmount.value * (percent / 100);

  const totalAmountPerPerson =
    (+billAmount.value + tipAmount) / peopleNumber.value;

  console.log(peopleNumber.value);

  const tipAmountPerPerson = tipAmount / peopleNumber.value;

  totalPerPerson.innerHTML = "$" + totalAmountPerPerson.toFixed(2);

  tipPerPerson.innerHTML = "$" + tipAmountPerPerson.toFixed(2);
}

billAmount.addEventListener("input", calculateTip);
peopleNumber.addEventListener("input", calculateTip);
selectTip.forEach((element) => {
  element.addEventListener("click", (event) => {
    percent = parseInt(event.target.textContent);

    event.target.classList.add("greenButton-active");

    calculateTip();
  });
});
tipCustom.addEventListener("input", (event) => {
  percent = parseInt(event.target.value);

  calculateTip();
});
resets.addEventListener("click", () => {
  resets.classList.toggle("reset-button-active");
});
