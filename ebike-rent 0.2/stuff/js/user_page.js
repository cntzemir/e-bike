'use strict';

const user_rent_now = document.querySelector(".user_rent_now")
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const close_user_settings = document.querySelector(".close-user_rent_now")
const user_rent_btn = document.querySelectorAll(".user_rent_btn")
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
//---
const login_btn = document.querySelector(".login_btn")
const email_check = document.querySelector(".email_check")
const password_check = document.querySelector(".password_check")
const wrapper = document.querySelector(".wrapper")
//Change Page
const market_btn = document.querySelector(".market_btn")
//Page1
const page1_1 = document.querySelector(".page1_1")
//Page2
const page2_1 = document.querySelector(".page2_1")
const page2_2 = document.querySelector(".page2_2")
const page2_3 = document.querySelector(".page2_3")
const page2_4 = document.querySelector(".page2_4")
//BTN
const btn_rentt = document.querySelector(".btn_rentt")
const btn_sendd = document.querySelector(".btn_sendd")

function showRentMessage() {
    alert("Your request has been created and we will call you as soon as possible");
    closeModal()
    window.location.replace("satınalım.html");
}

btn_rentt.addEventListener("click",function(){showRentMessage()})
let user_details = {
    user_info: [],
    add_info: function (account_id= undefined, name = undefined, age = undefined, address = undefined, phone = undefined, id = undefined, passaportid = undefined) {
        this.user_info.push([account_id,,name,age,address,phone,id,passaportid])
        console.log(this.user_info);
    }
}

let system = {
    login_info: false,
    account_id: undefined,
    accounts_email: ["aa", "renters@gmail.com", "admin@gmail.com"],
    accounts_password: ["11", "rent123", "admin123"],
    check: function (mail, password) {
        for (let i = 0; i < system.accounts_email.length; i++) {
            if (system.accounts_email[i] === mail && system.accounts_password[i] === password) {
                system.account_id = i
                system.login_info = true
                alert("Mail ve şifre Doğrulama Başarılı!");
                //changePage("user_rent")
                this.set_info()
                console.log(system,user_details);
                changePage()

            }
        }
    },
    set_info: function (accounts_id= undefined,name = undefined, age = undefined, address = undefined, phone = undefined, id = undefined, passaportid = undefined) {
        accounts_id = this.account_id
        user_details.add_info(accounts_id,name,age,address,phone,id,passaportid)
    }
}

const changePage = function() {
        page1_1.classList.add("hidden")
        page2_1.classList.remove("hidden")
        page2_2.classList.remove("hidden")
        page2_3.classList.remove("hidden")
        page2_4.classList.remove("hidden")
}
market_btn.addEventListener("click", function(){changePage("user_rent")})

signupBtn.onclick = (()=>{
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
  });
  loginBtn.onclick = (()=>{
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
  });
  signupLink.onclick = (()=>{
    signupBtn.click();
    return false;
  });


const closeModal = function () {
    user_rent_now.classList.add("hidden")
    overlay.classList.add("hidden")
}

const openModal = function() {
    user_rent_now.classList.remove("hidden")//birçok classı kullanabiliyoz
    overlay.classList.remove("hidden")
}


for(let i = 0;i < user_rent_btn.length; i++)
    user_rent_btn[i].addEventListener("click",openModal);
    close_user_settings.addEventListener("click",closeModal)
    overlay.addEventListener("click",closeModal)

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(email_check.value,password_check.value)
    system.check(email_check.value,password_check.value)
    //sistem = email_check.value,password_check.value
    event.preventDefault();
});

