// ==UserScript==
// @name         bilibili隐藏head
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  bilibili在播放视频界面隐藏head和广告(resize触发)
// @author       soporior
// @match        *://www.bilibili.com/video*
// @icon         http://www.w3.org/2000/svg
// @grant        none
// ==/UserScript==

// @match     *://www.bilibili.com/video* //匹配网站
// ==UserScript==
// @name         bilibili隐藏head
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  bilibili隐藏head
// @author       soporior
// @match        *://www.bilibili.com/video*
// @icon         http://www.w3.org/2000/svg
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  //获取屏幕缩放比例
  function getRatio() {
    var ratio = 0;
    var screen = window.screen;
    var ua = navigator.userAgent.toLowerCase();

    if (window.devicePixelRatio !== undefined) {
      ratio = window.devicePixelRatio;
    } else if (~ua.indexOf("msie")) {
      if (screen.deviceXDPI && screen.logicalXDPI) {
        ratio = screen.deviceXDPI / screen.logicalXDPI;
      }
    } else if (
      window.outerWidth !== undefined &&
      window.innerWidth !== undefined
    ) {
      ratio = window.outerWidth / window.innerWidth;
    }

    if (ratio) {
      ratio = Math.round(ratio * 100);
    }
    return ratio;
  }
  window.onresize = () => {
    const headDom = document.getElementById("biliMainHeader");
    // 把videoWall(视频窗口放大到全屏)
    const videoWall = document.getElementsByClassName(
      "bpx-player-video-area"
    )[0];
    //关闭nav
    if (!headDom) {
      return;
    }
    const ratio = getRatio();
    if (ratio >= 188) {
      videoWall.style.position = "fixed";
      videoWall.style.top = "0";
      videoWall.style.left = "0";
      videoWall.style.width = "100vw";
      videoWall.style.zIndex = "999";

      headDom.style.display = "none";
    } else {
      videoWall.style.position = "relative";
      videoWall.style.top = "";
      videoWall.style.left = "";
      videoWall.style.width = "";
      videoWall.style.zIndex = "";
      headDom.style.display = "block";
    }
    //关闭广告
    const vcd = document.getElementsByClassName("vcd");
    if (typeof vcd != "undefined") {
      vcd.forEach((element) => {
        element.style.display = "none";
      });
    }
  };
})();
