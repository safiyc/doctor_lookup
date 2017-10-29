import { Doctor } from './../js/doctor.js';

$(document).ready(function() {
  $('form#doctorSearch').submit(function(event) {
    event.preventDefault();
    let condition = $('#condition').val();
    let doctorName = $('#doctorName').val();
    $('#condition').val("");
    $('#doctorName').val("");

  });
});





// this file is to receive user inputs
