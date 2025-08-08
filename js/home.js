document.getElementById('donate-btn').addEventListener('click',function(){
    const donateAmount = getInputFieldById('donate-amount') 
    const MainBalance = getTextFieldById ('balance')
   const  newBalance = MainBalance+donateAmount
    document.getElementById('balance').innerText=(newBalance);
  
//  add to history
           const div = document.createElement('div')
           div.innerHTML =`
           <div class="border-2 rounded-lg p-5 container mx-auto my-5 space-y-3">
            <p class="text-xl font-bold">${donateAmount} Taka is Donated for famine-2024 at Noakhali, Bangladesh </p>
            <p class="text-gray-500">${formatted} </p>
            </div>
           `
         document.getElementById('history-container').appendChild(div)




    if (isNaN(donateAmount) || donateAmount.trim() === "") {
      alert(" Please enter a valid number as donation amount!");
      return;
    }



  
})



// feni
document.getElementById('donate-btn-fenni').addEventListener('click',function(){
    const donateAmountfenni = getInputFieldById('donate-amount-fenni') 
    const MainBalancefenni = getTextFieldById ('balance-fenni')
   const  newBalancefenni = MainBalancefenni+donateAmountfenni
   document.getElementById('balance-fenni').innerText=(newBalancefenni)


   //  add to history
           const div = document.createElement('div')
           div.innerHTML =`
           <div class="border-2 rounded-lg p-5 container mx-auto my-5 space-y-3">
            <p class="text-xl font-bold">${donateAmountfenni} Taka is Donated for famine-2024 at Feni, Bangladesh </p>
            <p class="text-gray-500">${formatted} </p>
            </div>
           `
         document.getElementById('history-container').appendChild(div)



    if (isNaN(donateAmountfenni) || donateAmountfenni.trim() === "") {
      alert(" Please enter a valid number as donation amount!");
    }
   
})


// kota 

document.getElementById('donate-btn-kota').addEventListener('click',function(){
    const donateAmountkota = getInputFieldById('donate-amount-kota') 
    const MainBalancekota = getTextFieldById ('balance-kota')
   const  newBalancekota = MainBalancekota+donateAmountkota
   document.getElementById('balance-kota').innerText=(newBalancekota)

   //  add to history
           const div = document.createElement('div')
           div.innerHTML =`
           <div class="border-2 rounded-lg p-5 container mx-auto my-5 space-y-3">
            <p class="text-xl font-bold">${donateAmountkota} Taka is Donated for Injured in the Quota Movement </p>
            <p class="text-gray-500">${formatted} </p>
            </div>
           `
         document.getElementById('history-container').appendChild(div)



    if (isNaN(donateAmountkota) || donateAmountkota.trim() === "") {
      alert(" Please enter a valid number as donation amount!");
    }
   
})
