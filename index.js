
let pwd = document.getElementById("signupPwd");
let confirmPwd = document.getElementById("confirmPwd");
let email = document.getElementById("email");
let toggle = document.getElementById('toggle');
let toggle1 = document.getElementById('toggle1');
let toggleBtn = document.getElementById('togglebtn');
let signinPwd = document.getElementById('signinPwd');
let loginPopup = document.getElementById('loginPopup');
let emailPopup = document.getElementById('emailPopup');
let passwordPopup = document.getElementById('passwordPopup');
let cPasswordPopup = document.getElementById('cPasswordPopup');

let emailChecked = false;
let pwdChecked = false;
let cPwdChecked = false;

function checkPassword() {
    const pattern = /^(?=.*[A-Z])(?=.*[a-z]{3,})(?=.*\d{2,})(?=.*[@$!^*]).{8,}$/;
    console.log(pwd.value);
    if (pattern.test(pwd.value)) {
        pwdChecked = true;
        matchPassword();
    }
    else {
        passwordPopup.classList.add('open-passwordPopup');
    }
}

function matchPassword() {
    console.log(confirmPwd.value)
    if (pwd.value === confirmPwd.value) {
        cPwdChecked = true;
    }
    else {
        cPasswordPopup.classList.add('open-cPasswordPopup');
    }
}

function checkEmail() {
    console.log(email.value);
    const pattern = /^[a-z]{2,}[a-z0-9]*\d{3,}@gmail\.com$/;

    if (pattern.test(email.value)) {
        emailChecked = true;
    }
    else {
        emailPopup.classList.add("open-emailPopup");
    }
}

function checkEveryThing() {
    checkEmail();
    checkPassword();
    if (emailChecked == true && pwdChecked == true && cPwdChecked == true) {
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

function openLoginPopup() {
    loginPopup.classList.add('open-loginPopup');
}

function closeLoginPop() {
    loginPopup.classList.remove('open-loginPopup');

}

function closeEmail() {
    emailPopup.classList.remove("open-emailPopup");
}

function closePassword() {
    passwordPopup.classList.remove('open-passwordPopup');
}

function closeCPassword() {
    cPasswordPopup.classList.remove('open-cPasswordPopup');
}