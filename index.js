
let pwd = document.getElementById("signupPwd");
let confirmPwd = document.getElementById("confirmPwd");
let email = document.getElementById("email");
let toggle = document.getElementById('toggle');
let toggle1 = document.getElementById('toggle1');
let toggleBtn = document.getElementById('togglebtn');
let signinPwd = document.getElementById('signinPwd');

let emailChecked = false;
let pwdChecked = false;

function checkPassword() {
    const pattern = /^(?=.*[A-Z])(?=.*[a-z]{3,})(?=.*\d{2,})(?=.*[@$!^*]).{8,}$/;
    console.log(pwd.value);
    if (pattern.test(pwd.value)) {
        pwdChecked = true;
        matchPassword();
    }
    else {
        alert("Password is invalid. Please make sure it includes at least 1 capital letter, minimum 4 letters, only one symbol (@, $, !, ^, or *), minimum 2 numbers, and is at least 8 characters long.")
    }
}

function matchPassword() {
    console.log(confirmPwd.value)
    if (pwd.value === confirmPwd.value) {

    }
    else {
        alert("Password not matched");
    }
}

function checkEmail() {
    console.log(email.value);
    const pattern = /^[a-z]{2,}[a-z0-9]*\d{3,}@gmail\.com$/;

    if (pattern.test(email.value)) {
        emailChecked = true;
    }
    else {
        alert("Email is invalid. Please make sure it does not contain capital letters, includes at least 2 letters and 3 numbers, only includes @ as the symbol, has a valid domain name (gmail.com), and ends with gmail.com.")
    }
}

function checkEveryThing() {
    checkEmail();
    checkPassword();
    if (emailChecked == true && pwdChecked == true) {
        window.location.href = "index.html"
    }

}


function togglePwd() {
    if (pwd.type === "password") {
        pwd.type = "text";
        toggle.innerHTML = `<i class="fa-regular fa-eye"  onclick="togglePwd()">`
    }
    else {
        pwd.type = "password"
        toggle.innerHTML = `<i class="fa-regular fa-eye-slash"  onclick="togglePwd()">`
    }
}

function toggleCPwd() {
    if (confirmPwd.type === "password") {
        confirmPwd.type = "text";
        toggle1.innerHTML = `<i class="fa-regular fa-eye"  onclick="toggleCPwd()">`
    }
    else {
        confirmPwd.type = "password"
        toggle1.innerHTML = `<i class="fa-regular fa-eye-slash"  onclick="toggleCPwd()">`
    }
}

function toggleSPwd() {
    if (signinPwd.type === "password") {
        signinPwd.type = "text";
        toggleBtn.innerHTML = `<i class="fa-regular fa-eye"  onclick="toggleSPwd()">`
    }
    else {
        signinPwd.type = "password"
        toggleBtn.innerHTML = `<i class="fa-regular fa-eye-slash"  onclick="toggleSPwd()">`
    }
}