/* global $ */

// ==UserScript==
// @name        SongTasty
// @version     0.1.0
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
  function getDownloadURL () {
    return $('#audiob').attr('src')
  }

  function getName () {
    return $('.playinfos h1').text()
  }

  $(`.red a[title='高速下载本歌曲']`)
    .attr('href', getDownloadURL())
    .attr('download', getName())
})()
