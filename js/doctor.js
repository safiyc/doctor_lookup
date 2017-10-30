var apiKey = require('./../.env').apiKey;

export class Doctor {

  getDoctors(condition) {
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${condition}&location=wa-seattle&skip=0&limit=10&user_key=${apiKey}`).then(function(response) {
      let doctors = response;
      doctors.data.forEach(function(doctor) {
        $('.showDoctors').append(`
          <p>Name: ${doctor.profile.first_name} ${doctor.profile.last_name}</p>
          <p>Address: ${doctor.practices[0].visit_address.street}<br>
          ${doctor.practices[0].visit_address.city}, ${doctor.practices[0].visit_address.state},
          ${doctor.practices[0].visit_address.zip}</p>
          <p>Phone: ${doctor.practices[0].phones[0].number}</p>
          <p>Website: ${doctor.practices[0].website}</p>
          <p>Accepting New Patients: ${doctor.practices[0].accepts_new_patients}</p>`);
      })
    })
    .fail(function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
  }
}



// this file is to make API request and display results
