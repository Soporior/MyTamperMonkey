/*$$
 $ @Author: lxf
 $ @Date: 2023-05-08 16:28:50
 $ @LastEditors: lxf
 $ @LastEditTime: 2023-05-09 13:30:29
 $ @FilePath: \myTamperMonkey\The Economist\消除订阅弹框.js
 $*/
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

    if (document.getElementsByTagName("article")[0].innerHTML) {
        text.push(document.getElementsByTagName("article")[0].innerHTML)
    }
    if (paywall) {
        doIt()
        document.getElementsByTagName("article")[0].innerHTML = text[0]
        document.getElementById("piano-ribbon").style.display = "none"
        clearInterval(handle)
    }
}, 500)

