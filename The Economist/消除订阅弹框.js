// ==UserScript==
// @name         hideEconomistOder
// @namespace    https://www.economist.com/
// @version      0.1
// @description  hideEconomistOder
// @author       soporior
// @match       *://www.economist.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=economist.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
function doIt() {
    const paywall = document.getElementsByClassName("paywall")[0]
    const fatherEl = paywall.parentElement
    const allFatherElEl = fatherEl.childNodes
    const allPaywallNodes = Array.prototype.slice.call(allFatherElEl, 2)
    allPaywallNodes.forEach(x => { x.style.display = "none" })

}
const text = []
const handle = setInterval(() => {

    const paywall = document.getElementsByClassName("paywall")[0]

    if (document.getElementsByTagName("article")[0] || document.getElementsByTagName("article")[0].innerHTML) {
        text.push(document.getElementsByTagName("article")[0].innerHTML)
    }
    if (paywall || text.length>20 ) {

       paywall && doIt()
        document.getElementsByTagName("article")[0].innerHTML = text[0]
        document.getElementById("piano-ribbon").style.display= "none"

        clearInterval(handle)
    }
}, 500)








    
})();