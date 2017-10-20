(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// var apiKey = require('./../.env').apiKey;

var Doctor = exports.Doctor = function () {
  function Doctor() {
    _classCallCheck(this, Doctor);
  }

  _createClass(Doctor, [{
    key: "listDoctorsByCondition",
    value: function listDoctorsByCondition(condition, location) {
      $('.showDoctors').append("test");
    }
    // listDoctorsByCondition(condition, location) {
    //   $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${condition}&location=${location}&skip=0&limit=10&user_key=be56d99e25fceebd5df712622dc97243`).then(function(response) {
    // 'data' is retreived from API array
    // let list = response.data;
    // list.forEach(function(doctor) {
    //   $('.showDoctors').append('<li>' + doctor.data.practices.name + '</li>');
    // });
    // });
    // }

  }]);

  return Doctor;
}();

// this file is to make API request and display results

},{}],2:[function(require,module,exports){
'use strict';

var _doctor = require('./../js/doctor.js');

$(document).ready(function () {
  $('#conditionSearch').submit(function (event) {
    event.preventDefault();
    var doctor = new _doctor.Doctor();
    var condition = $('#condition').val();
    var location = $('#location').val();
    $('#condition').val("");
    $('#location').val("");

    doctor.listDoctorsByCondition(condition, location);
  });
});

// this file is to receive user inputs

},{"./../js/doctor.js":1}]},{},[2]);
