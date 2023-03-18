const billAmount = document.querySelector(".input_box_1");

const peopleNumber = document.querySelector(".ipnut_first");

const totalPerPerson = document.querySelector("#total-per-person");

let percent = 0 ;

function calculateTip() {

    const tipAmount = billAmount.value * ( percent / 100 );

    const totalAmountPerPerson = ( billAmount.value + tipAmount ) / peopleNumber.value ;

    const tipAmountPerPerson = tipAmount / peopleNumber.value ; 

    totalPerPerson.innerHTML = "$" + totalAmountPerPerson ;

}





