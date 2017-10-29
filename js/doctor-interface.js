import { Doctor } from './../js/doctor.js';

$(document).ready(function() {
  $('form#doctorSearch').submit(function(event) {
    event.preventDefault();
    let condition = $('#condition').val();
    let doctorName = $('#doctorName').val();
    let searchDoctor = new Doctor();
    searchDoctor.getDoctor(condition);
    $('#condition').val("");
    $('#doctorName').val("");

  });
});





// this file is to receive user inputs
