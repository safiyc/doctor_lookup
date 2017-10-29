// var apiKey = require('./../.env').apiKey;

export class Doctor {

  getDoctor(search) {
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${search}&location=wa-seattle&skip=0&limit=10&user_key=${apiKey}`).then(function(response) {
      let doctors = response;
      doctors.forEach(function(doctor) {
        $('.showDoctors').append(`
          <p>Name: ${doctor.data.profile.first_name} ${doctor.data.profile.last_game}</p>`
      })

      $('.showDoctors').append(`response.data[0].profile.first_name`);
    })
    .fail(function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
  }
}


// this file is to make API request and display results
