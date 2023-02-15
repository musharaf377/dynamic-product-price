
// event listener
document.getElementById('btn-case-plus').addEventListener('click',function(){
    
    let newCaseNumber = updateCaseNumber(true, 'case-number-field');
    const totalCasePrice = newCaseNumber * 59;
    priceUpdate('total-price', totalCasePrice);

});

document.getElementById('btn-case-minus').addEventListener('click', function(){

    let newCaseNumber = updateCaseNumber(false, 'case-number-field');
    const totalCasePrice = newCaseNumber * 59;
    priceUpdate('total-price', totalCasePrice);

});

// phone function
document.getElementById('btn-phone-plus').addEventListener('click', function(){
    let newPhoneNumber = updateCaseNumber(true, 'phone-number-field');

    const totalCasePrice = newPhoneNumber * 1250;
    priceUpdate('phone-total', totalCasePrice);
});

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    let newPhoneNumber = updateCaseNumber(false, 'phone-number-field');
    
    const totalCasePrice = newPhoneNumber * 1250;
    priceUpdate('phone-total', totalCasePrice);
});