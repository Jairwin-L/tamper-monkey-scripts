// ==UserScript==
// @name         海贼王-樱花动漫
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Jairwin
// @match        http://www.yinghuacd.com/*
// @updateURL    https://github.com/Jairwin-L/tamper-monkey-scripts/blob/main/scripts/one-piece-ying-hua-dong-man.js
// @connect      localhost
// @run-at document-start
// @grant GM_addElement
// @grant GM_info
// ==/UserScript==

(async function () {
  "use strict";
  await ready();
  document.getElementById("HMRichBox")?.remove();
  document.getElementById("HMimageright")?.remove();
  document.getElementById("HMimageleft")?.remove();
  document.querySelector(".imgs")?.remove();
  document.querySelector(".area .movurls ul li");
  document.getElementById("HMcoupletIconright")?.remove();
  document.getElementById("HMcoupletIconleft")?.remove();
  document.querySelector(".playbg")?.remove();
  document.querySelector(".area .botit")?.remove();
  document.querySelector(".foot")?.remove();
  const currentEpisode = Number(
    document
      .querySelector(".area .movurls ul li a")
      .getAttribute("href")
      .split("-")[1]
      .split(".")[0] ?? 0
  );
  const hrefEpisode = Number(
    window.location.pathname.split("-")[1].split(".")[0] ?? 0
  );
  if (hrefEpisode === currentEpisode) return;
  if (hrefEpisode < currentEpisode) {
    window.location.href = `http://www.yinghuacd.com/v/2-${currentEpisode}.html`;
  }
  function ready() {
    return sleep(200);
  }
  /**
   *
   * @param {number} ms
   * @returns {Promise<number>}
   */
  function sleep(ms = 200) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
})();
