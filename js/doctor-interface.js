import { Doctor } from './../js/doctor.js';

$(document).ready(function() {
  $('#conditionSearch').submit(function(event) {
    event.preventDefault();
    let doctor = new Doctor();
    let condition = $('#condition').val();
    let location = $('#location').val();
    $('#condition').val("");
    $('#location').val("");

    doctor.listDoctorsByCondition(condition, location);
  });
});





// this file is to receive user inputs
