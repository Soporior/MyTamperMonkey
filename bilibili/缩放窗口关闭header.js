// ==UserScript==
// @name         bilibili隐藏head
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  bilibili隐藏head
// @author       soporior
// @match        *://www.bilibili.com/video* //匹配网站
// @icon         http://www.w3.org/2000/svg
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
   //获取屏幕缩放比例
    function getRatio()
    {
        var ratio=0;
        var screen=window.screen;
        var ua=navigator.userAgent.toLowerCase();

        if(window.devicePixelRatio !== undefined)
        {
            ratio=window.devicePixelRatio;
        }
        else if(~ua.indexOf('msie'))
        {
            if(screen.deviceXDPI && screen.logicalXDPI)
            {
                ratio=screen.deviceXDPI/screen.logicalXDPI;
            }

        }
        else if(window.outerWidth !== undefined && window.innerWidth !== undefined)
        {
            ratio=window.outerWidth/window.innerWidth;
        }

        if(ratio)
        {
            ratio=Math.round(ratio*100);
        }
        return ratio;
    };
    window.onresize=()=>{
        const headDom = document.getElementById("biliMainHeader");
        if(!headDom){
        return
        }
        const ratio = getRatio()
        if(ratio>=188){
           headDom.style.display = "none";

        }else{
            headDom.style.display = "block";

        }

    }


   
})();