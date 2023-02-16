
// event listener
document.getElementById('btn-case-plus').addEventListener('click',function(){
    
    let newCaseNumber = updateCaseNumber(true, 'case-number-field');
    const totalCasePrice = newCaseNumber * 59;
    priceUpdate('total-price', totalCasePrice);

    // Calculate subtotal
    const phoneTotalPrice = getSubtotalPrice('phone-total');
    const caseTotalPrice = getSubtotalPrice('total-price');

    const totalSubPrice = phoneTotalPrice + caseTotalPrice;

    const getSubtotalId = document.getElementById('sub-total');
    getSubtotalId.innerText = totalSubPrice;

});

document.getElementById('btn-case-minus').addEventListener('click', function(){

    let newCaseNumber = updateCaseNumber(false, 'case-number-field');
    const totalCasePrice = newCaseNumber * 59;
    priceUpdate('total-price', totalCasePrice);

    // calculate sub total
    const phoneTotalPrice = getSubtotalPrice('phone-total');
    const caseTotalPrice = getSubtotalPrice('total-price');

    const totalSubPrice = phoneTotalPrice + caseTotalPrice;

    const getSubtotalId = document.getElementById('sub-total');
    getSubtotalId.innerText = totalSubPrice;

});


// phone function
document.getElementById('btn-phone-plus').addEventListener('click', function(){
    let newPhoneNumber = updateCaseNumber(true, 'phone-number-field');

    const totalCasePrice = newPhoneNumber * 1250;
    priceUpdate('phone-total', totalCasePrice);

    //calculate subtotal
    const phoneTotalPrice = getSubtotalPrice('phone-total');
    const caseTotalPrice = getSubtotalPrice('total-price');

    const totalSubPrice = phoneTotalPrice + caseTotalPrice;

    const getSubtotalId = document.getElementById('sub-total');
    getSubtotalId.innerText = totalSubPrice;
   
});

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    let newPhoneNumber = updateCaseNumber(false, 'phone-number-field');
    
    const totalCasePrice = newPhoneNumber * 1250;
    priceUpdate('phone-total', totalCasePrice);

    //calculate subtotal
    const phoneTotalPrice = getSubtotalPrice('phone-total');
    const caseTotalPrice = getSubtotalPrice('total-price');

    const totalSubPrice = phoneTotalPrice + caseTotalPrice;

    const getSubtotalId = document.getElementById('sub-total');
    getSubtotalId.innerText = totalSubPrice;
});