let form = document.getElementById("myForm");
let  nam = document.querySelector(".error-name");
let  phone = document.querySelector(".error-phone");
let  email = document.querySelector(".error-email");
let  text = document.querySelector(".error-message");
let  submit = document.querySelector(".error-submit");


// console.log(form, nam, phone, email, text, submit)



function handleForm(event) {
     event.preventDefault(); 
}

form.addEventListener('submit', handleForm);






function nameValid() {
    let namo = document.querySelector(".input-name").value;
    
    if (namo.length == 0) {
        nam.innerHTML = "Enter name";
        return false;
    }
    if (!namo.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        nam.innerHTML = "Enter Full name";
        return false;
    }
    
    nam.innerHTML =`<p style="color: green;" font-size: 14px; >valid</p>`;
    return true; 
}



function emailValid() {
    let emailInput = document.querySelector(".input-email").value;

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.length === 0) {
        email.innerHTML = "Enter email";
        return false;
    }
    if (!emailInput.match(emailPattern)) {
        email.innerHTML = "Enter a valid email";
        return false;
    }

    email.innerHTML =`<p style="color: green;" font-size: 14px; >valid</p>`;
    return true; 
}




function phoneValid() {
    let phoneInput = document.querySelector(".input-phone").value;

    let phonePattern = /^\d{10}$/;

    if (phoneInput.length === 0) {
        phone.innerHTML = "Enter phone number";
        return false;
    }
    if (!phoneInput.match(phonePattern)) {
        phone.innerHTML = "Invalid phoneNo";
        return false;
    }

    phone.innerHTML =`<p style="color: green;" font-size: 14px; >valid</p>`;
    return true;
}


function textareaValid() {
    let textareaInput = document.querySelector(".input-text").value;

    if (textareaInput.length === 0) {
        text.innerHTML = "minimum 30 characters";
        return false;
    }
    if (textareaInput.length < 30) {
        text.innerHTML = "minimum 30 characters";
        return false;
    }

    text.innerHTML =`<p style="color: green;" font-size: 14px; >valid</p>`;
    return true;
}


function validateForm() {
    let nameValidResult = nameValid();
    let emailValidResult = emailValid();
    let phoneValidResult = phoneValid();
    let textareaValidResult = textareaValid();
    
    if (!nameValidResult || !emailValidResult || !phoneValidResult || !textareaValidResult) {
        alert("Enter valid details");
        return false;
    }
    else {

        alert("Form submitted successfully!");
        return true;
    }
}