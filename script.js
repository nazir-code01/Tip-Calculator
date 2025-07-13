const billAmount = document.getElementById("input-box-for-bill");
const percentageAmount = document.getElementById("input-box-for-percentage");
const tipTextButton = document.querySelector(".tip-text");
const tipAmount = document.querySelector(".tip-amount");

tipTextButton.addEventListener("click", () => {
    let bill = billAmount.value;
    let percentage = percentageAmount.value;
    let rupeeIcon = document.createElement("i");
    rupeeIcon.classList.add("fa-solid","fa-indian-rupee","rupee-icon");

    if(bill <= 0 && percentage <= 0){
        alert("Enter Bill and percentage amount")
    }else{
        const tip = bill * (percentage/100);
        tipAmount.textContent = tip;
        tipAmount.appendChild(rupeeIcon);
    }
});