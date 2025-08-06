document.getElementById('donate-btn').addEventListener('click',function(){
    const donateAmount = getInputFieldById('donate-amount') 
    const cashOutBalance = getTextFieldById ('cash-balance')
    const cashOutTotalBalance = cashOutBalance - donateAmount
 document.getElementById('cash-balance').innerText= (cashOutTotalBalance)

 if(donateAmount>cashOutBalance){
    alert ('you dont have enough money')
    return;
 }

})


// feni

document.getElementById('donate-btn-fenni').addEventListener('click',function(){
    const donateAmountfeni = getInputFieldById('donate-amount-fenni') 
    const cashOutBalancefeni = getTextFieldById ('cash-balance')
    const cashOutTotalBalancefeni = cashOutBalancefeni - donateAmountfeni
 document.getElementById('cash-balance').innerText= (cashOutTotalBalancefeni)

 if(donateAmountfeni>cashOutBalancefeni){
    alert ('you dont have enough money')
    return;
 }

})


// kota 

document.getElementById('donate-btn-kota').addEventListener('click',function(){
    const donateAmount = getInputFieldById('donate-amount-kota') 
    const cashOutBalance = getTextFieldById ('cash-balance')
    const cashOutTotalBalance = cashOutBalance - donateAmount
 document.getElementById('cash-balance').innerText= (cashOutTotalBalance)

 if(donateAmount>cashOutBalance){
    alert ('you dont have enough money')
    return;
 }

})