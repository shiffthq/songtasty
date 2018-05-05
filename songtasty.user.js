/* global $ */

// ==UserScript==
// @name        SongTasty
// @version     0.1.1
// @description SongTasty歌曲下载
// @author      iSayme
// @namespace   https://github.com/isayme
// @homepage    https://github.com/isayme
// @supportURL  https://github.com/shiffthq/songtasty/issues
// @icon        http://www.songtasty.com/favicon.ico
// @include     http://www.songtasty.com/song/*
// @include     http://songtasty.com/song/*
// @run-at      document-end
// @grant       none
// ==/UserScript==

;(function () {
  function getName () {
    return $('.playinfos h1').text()
  }

  function enableDownload () {
    return $('#audiob')
      .removeAttr('controlslist')
      .attr('download', getName())
  }

  enableDownload()
})()
