var contactForm = document.getElementById('contactForm'); 
var firstName = document.getElementById('firstName');
var companyName = document.getElementById('companyName'); 
var phoneNumber = document.getElementById('phoneNumber'); 
var email = document.getElementById('email'); 
var submitButton = document.getElementById('submitButton');


function afterSubmit(e) {
    e.preventDefault(); 

    var infoClient = {
        name : firstName.value,
        companyName : companyName.value,
        telephone : phoneNumber.value,
        emailAdress : email.value
    };

    var url = "https://script.google.com/macros/s/AKfycbxfNvhj1owoM-3A6aH6NBYoouVW3wyS3QQRaNlJGezTvYNflrE/exec";
    
    fetch(url, {
        method: 'POST',
        cache: 'no-cache',
        mode: 'no-cors',
        redirect: 'follow',
        body: JSON.stringify(infoClient)
    })
    .then(res => res.json())
    .then(res => {
        console.log(res);
        finalForm.reset();
    })
    .catch(err => {
        console.log(err);
        contactForm.reset();
        console.log('something went wrong ....');
    });
};

contactForm.addEventListener("submit", afterSubmit);
