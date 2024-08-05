// ==UserScript==
// @name         EGY-Login
// @namespace    https://t.me/essekhaya
// @version      2
// @description  EGY-Login
// @author       Editing by YASDZ - https://t.me/essekhaya
// @match        https://egypt.blsspainglobal.com/*
// @icon         https://i.postimg.cc/Y90Cjt1k/70af4927-b500-403b-b0fe-1e704ed9d7ad.jpg
// @grant        none
// ==/UserScript==






const email = "yas2022@gmail.com"; //Write your email here.
const passwordValue = "A2571976@@"; // Type your account password on bls.

const loginUrlPrefix = "https://egypt.blsspainglobal.com/Global/Account/Login".toLowerCase();

if (window.location.href.toLowerCase().startsWith(loginUrlPrefix)) {
  for (let i = 1; i <= 10; i++) {
    const userId = document.getElementById(`UserId${i}`);
    const password = document.getElementById(`Password${i}`);

    if (userId && password) {
      userId.value = email;
      password.value = passwordValue;
    }
  }

  const btnVerify = document.querySelector("#btnVerify");
  if (btnVerify) {
    setTimeout(() => {
      btnVerify.click();
    }, 1000); // مهلة ثانية (1000 ملي ثانية)
  }
}

