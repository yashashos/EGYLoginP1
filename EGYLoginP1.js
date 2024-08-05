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

(() => {
    'use strict';

    const credentials = {
        email: "YASDZ2024@gmail.com", //Write your email here.
        password: "112345YASDZ@" // Type your account password on bls.
    };

    const loginUrl = "https://egypt.blsspainglobal.com/Global/Account/Login".toLowerCase();
    const currentUrl = window.location.href.toLowerCase();

    function fillLoginDetails() {
        for (let i = 1; i <= 10; i++) {
            const userId = document.getElementById(`UserId${i}`);
            const password = document.getElementById(`Password${i}`);

            if (userId && password) {
                userId.value = credentials.email;
                password.value = credentials.password;
                break; // Stop the loop once the fields are found and filled
            }
        }

        const btnVerify = document.querySelector("#btnVerify");
        if (btnVerify) {
            setTimeout(() => {
                btnVerify.click();
            }, 1000); // Delay of 1 second (1000 milliseconds)
        }
    }

    if (currentUrl.startsWith(loginUrl)) {
        const intervalId = setInterval(() => {
            fillLoginDetails();
            if (document.querySelector("#UserId1") && document.querySelector("#Password1")) {
                clearInterval(intervalId); // Stop the interval once elements are found and filled
            }
        }, 500); // Check every 500 milliseconds
    }
})();
