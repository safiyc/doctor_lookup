// var apiKey = require('./../.env').apiKey;

export class Doctor {
  constructor() {
  }
  listDoctorsByCondition(condition, location) {
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
}


// this file is to make API request and display results
