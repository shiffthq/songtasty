/* global $ */

// ==UserScript==
// @name        SongTasty
// @version     0.1.3
// @description SongTasty歌曲下载
// @author      iSayme
// @namespace   https://github.com/isayme
// @homepage    https://github.com/isayme
// @supportURL  https://github.com/shiffthq/songtasty/issues
// @icon        http://www.songtasty.com/favicon.ico
// @include     http://www.songtasty.com/song/*
// @include     http://songtasty.com/song/*
// @include     https://www.songtasty.com/song/*
// @include     https://songtasty.com/song/*
// @run-at      document-end
// @grant       none
// ==/UserScript==

;(function () {
  function getName () {
    return $('.playinfos h1').text()
  }

  function getDownloadUrl () {
    return $('#radioPlayer audio').attr('src')
  }

  function enableDownload (name, url) {
    $('.jp-audio a:contains("下载")')
      .attr('download', name)
      .attr('href', url)
  }

  var timer = setInterval(function () {
    var url = getDownloadUrl()
    if (url) {
      clearInterval(timer)
      enableDownload(getName(), url)
    }
  }, 300)
})()
