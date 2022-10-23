// ==UserScript==
// @name         下载niconico视频
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Liang
// @include      *://www.nicovideo.jp/*
// @match        *://www.nicovideo.jp/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nicovideo.jp
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector("body").appendChild(document.createElement('a'));
    document.querySelector("body > a").classList.add("downloadTag");
    var downloadTag = document.querySelector(".downloadTag");
    downloadTag.innerHTML = "下载视频";
    downloadTag.style.position = 'absolute';
    downloadTag.style.left = '0%';
    downloadTag.style.top = '50%';
    downloadTag.style.backgroundColor = "red"
    downloadTag.setAttribute('target','_blank');

    var video;
    var videosrc;

    setTimeout(()=>{
        video = document.querySelector("#MainVideoPlayer video");
        videosrc = video.attributes.src.value;//下载链接
        downloadTag.setAttribute('href',videosrc);
    }, 2000);

    setTimeout(()=>{
        video = document.querySelector("#MainVideoPlayer video");
        videosrc = video.attributes.src.value;//下载链接
        downloadTag.setAttribute('href',videosrc);
    }, 3000);

    setTimeout(()=>{
        video = document.querySelector("#MainVideoPlayer video");
        videosrc = video.attributes.src.value;//下载链接
        downloadTag.setAttribute('href',videosrc);
    }, 4000);

    setTimeout(()=>{
        video = document.querySelector("#MainVideoPlayer video");
        videosrc = video.attributes.src.value;//下载链接
        downloadTag.setAttribute('href',videosrc);
    }, 5000);

    setTimeout(()=>{
        video = document.querySelector("#MainVideoPlayer video");
        videosrc = video.attributes.src.value;//下载链接
        downloadTag.setAttribute('href',videosrc);
    }, 6000);

    setTimeout(()=>{
        video = document.querySelector("#MainVideoPlayer video");
        videosrc = video.attributes.src.value;//下载链接
        downloadTag.setAttribute('href',videosrc);
    }, 7000);

    setTimeout(()=>{
        video = document.querySelector("#MainVideoPlayer video");
        videosrc = video.attributes.src.value;//下载链接
        downloadTag.setAttribute('href',videosrc);
    }, 8000);

    setTimeout(()=>{
        video = document.querySelector("#MainVideoPlayer video");
        videosrc = video.attributes.src.value;//下载链接
        downloadTag.setAttribute('href',videosrc);
    }, 9000);

    setTimeout(()=>{
        video = document.querySelector("#MainVideoPlayer video");
        videosrc = video.attributes.src.value;//下载链接
        downloadTag.setAttribute('href',videosrc);
    }, 10000);

    // Your code here...
})();