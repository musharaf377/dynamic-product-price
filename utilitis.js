// Number update function
function updateCaseNumber(isIncrease, id) {
    const caseNumberField = document.getElementById(id);
    const caseNumberStringValue = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberStringValue);

    let newCaseNumber;

    if (isIncrease) {
        newCaseNumber = previousCaseNumber + 1;
    } else if (isIncrease === false) {
        newCaseNumber = previousCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
}


// price update function
function priceUpdate(elementId, totalPrice) {
    document.getElementById(elementId).innerText = totalPrice;
}


// Calculate subtotal
function getSubtotalPrice(totalPriceId){
    const getTotalPrice = document.getElementById(totalPriceId);
    const totalPriceString = getTotalPrice.innerText;
    const phoneTotalPrice = parseInt(totalPriceString);
    return phoneTotalPrice;
}