// Log in button
document.getElementById('btn-login').addEventListener('click',function(e){
   e.preventDefault();
   

    const mobileNumber = 12345678910;
    const pinNumber = 1234;

    const mobileNumberValue = document.getElementById('mobile-number').value;
    const mobileNumberValueConverted = parseInt(mobileNumberValue);

    const pinNumberValue = document.getElementById('pin-number').value;
    const pinNumberValueConverted = parseInt(pinNumberValue);

    const alertBox = document.getElementById('alert');

    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
        window.location.href="./home.html"
    }else{
        alertBox.classList.remove('hide');
        setTimeout(() => {
            alertBox.classList.add('hide');
        }, 3000);
    }
})

