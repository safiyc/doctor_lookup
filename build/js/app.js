(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
 exports.apiKey = "be56d99e25fceebd5df712622dc97243";

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var apiKey = require('./../.env').apiKey;

var Doctor = exports.Doctor = function () {
  function Doctor() {
    _classCallCheck(this, Doctor);
  }

  _createClass(Doctor, [{
    key: 'getDoctors',
    value: function getDoctors(condition) {
      $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + condition + '&location=wa-seattle&skip=0&limit=10&user_key=' + apiKey).then(function (response) {
        var doctors = response;
        doctors.data.forEach(function (doctor) {
          $('.showDoctors').append('\n          <p>Name: ' + doctor.profile.first_name + ' ' + doctor.profile.last_name + '</p>\n          <p>Address: ' + doctor.practices[0].visit_address.street + '<br>\n          ' + doctor.practices[0].visit_address.city + ', ' + doctor.practices[0].visit_address.state + ',\n          ' + doctor.practices[0].visit_address.zip + '</p>\n          <p>Phone: ' + doctor.practices[0].phones[0].number + '</p>\n          <p>Website: ' + doctor.practices[0].website + '</p>\n          <p>Accepting New Patients: ' + doctor.practices[0].accepts_new_patients + '</p>');
        });
      }).fail(function (error) {
        $('.showErrors').text('There was an error processing your request: ' + error.responseText + '. Please try again.');
      });
    }
  }]);

  return Doctor;
}();

// this file is to make API request and display results

},{"./../.env":1}],3:[function(require,module,exports){
'use strict';

var _doctor = require('./../js/doctor.js');

$(document).ready(function () {
  $('form#doctorSearch').submit(function (event) {
    event.preventDefault();
    var condition = $('#condition').val();
    var doctorName = $('#doctorName').val();
    var searchDoctor = new _doctor.Doctor();
    // $('#condition').val("");
    // $('#doctorName').val("");

    // if(condition != "") {
    // $('.showDoctors').removeClass('hide');
    //   $('.showDoctors').append(`First Name: ${searchDoctor.getDoctors.first_name}`);
    // }

    searchDoctor.getDoctors(condition);
  });
});

// this file is to receive user inputs

},{"./../js/doctor.js":2}]},{},[3]);
