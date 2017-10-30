import { Doctor } from './../js/doctor.js';

$(document).ready(function() {
  $('form#doctorSearch').submit(function(event) {
    event.preventDefault();
    let condition = $('#condition').val();
    let doctorName = $('#doctorName').val();
    let searchDoctor = new Doctor();
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
