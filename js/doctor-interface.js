import { Doctor } from './../js/doctor.js';

$(document).ready(function() {
  $('form#doctorSearch').submit(function(event) {
    event.preventDefault();
    let condition = $('#condition').val();
    let doctorName = $('#doctorName').val();
    let searchDoctor = new Doctor();
    $('#condition').val("");
    $('#doctorName').val("");

    if(condition.length > 0) {
      searchDoctor.getDoctors(condition);
    } else if (doctorName.length > 0) {
      searchDoctor.getDoctors(doctorName)
    } else if ((condition.length == 0) && (doctorName.length == 0)) {
      $('.noResults').append('There are no results for your search.');
    }
  });
});





// this file is to receive user inputs
