// Balance Hide

document.getElementById('balance-container').addEventListener('click',function(){
    const totalBalance = document.getElementById('total-balance');

    totalBalance.classList.toggle('hide');

})

//Logout button

document.getElementById('btn-log-out').addEventListener('click',function(){
     window.location.href="./index.html"
})

// Add Money

document.getElementById('btn-add-money').addEventListener('click',function(e){
    e.preventDefault();

    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const addAmount = parseInt(document.getElementById("add-amount").value);
    const pin = parseInt(document.getElementById("add-pin").value);

    const totalBalance = parseInt(document.getElementById('total-balance').innerText);

    const validPin = 1234;

    const accountAlertBox = document.getElementById('account-alert');

    if(accountNumber.length < 11){
        accountAlertBox.classList.remove('hide');
        setTimeout(() => {
            accountAlertBox.classList.add('hide');
        }, 3000);
        return;
    }

    const pinAlertBox = document.getElementById('pin-alert');

    if(pin !== validPin ){
        pinAlertBox .classList.remove('hide');
        setTimeout(() => {
            pinAlertBox.classList.add('hide');
        }, 3000);
        return;
    }

    const totalNewAvailableBalance = addAmount + totalBalance;

    document.getElementById('total-balance').innerText = totalNewAvailableBalance;
})

// Cashout Money

document.getElementById('btn-cashout').addEventListener('click',function(e){
    e.preventDefault();

    const agentNumber = document.getElementById("agent-number").value;
    const cashoutAmount = parseInt(document.getElementById("cashout-amount").value);
    const cashoutPin = parseInt(document.getElementById("cashout-pin").value);

    const totalBalance = parseInt(document.getElementById('total-balance').innerText);

    const validPin = 1234;

    const totalRemainBalance = totalBalance - cashoutAmount;

    document.getElementById('total-balance').innerText = totalRemainBalance;

})

//Option Toggle - Reuseable function 

function handleToggle(id){
    const forms = document.getElementsByClassName('forms');

    for(const form of forms){
        form.classList.add('hide');
    }

   document.getElementById(id).classList.remove('hide');

   //Here we are using reuseable function 
}


// Active Button Function 

function handleActiveButton(id){

    // Active Button 
    const activeBtns = document.getElementsByClassName('active-btn')

    for(const btn of activeBtns ){
       btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
       btn.classList.add("border-[#0808081a]")
    }

    document.getElementById(id).classList.remove("border-[#0808081a]","bg-[#f4f5f7]")
    document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]")

}

// Toggles

document.getElementById('tgl-btn-add-money').addEventListener('click',function(){

    handleToggle('add-money-container')

    handleActiveButton('tgl-btn-add-money')

})





document.getElementById('tgl-btn-cashout').addEventListener('click',function(){

    handleToggle('cashout-container')

    handleActiveButton('tgl-btn-cashout')

})

document.getElementById('tgl-btn-transfer-money').addEventListener('click',function(){

    handleToggle('transfer-money-container')

    handleActiveButton('tgl-btn-transfer-money')
    
})


document.getElementById('tgl-btn-get-bonus').addEventListener('click',function(){

    handleToggle('get-bonus-container')

    handleActiveButton('tgl-btn-get-bonus')
})

document.getElementById('tgl-btn-pay-bill').addEventListener('click',function(){

    handleToggle('pay-bill-container')

    handleActiveButton('tgl-btn-pay-bill')

})

document.getElementById('tgl-btn-transaction').addEventListener('click',function(){

    handleToggle('transaction-container')

    handleActiveButton('tgl-btn-transaction')
    

})

