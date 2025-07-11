'use strict';

const mockData = require('./mockData.js').data;
const prompt = require('prompt-sync')();

// Your code here

// Access mockData test
console.log(mockData);
// First name first person
// console.log(mockData[0].first_name);
// All first names
// mockData.forEach(person1 => {
  // console.log(person1.first_name);
// });
// Search for person with last name Cobb
// const person2 = mockData.find(p => p.last_name === "Cobb");
// if (person2) {
  // console.log(person2.first_name); // Output: "Ryun"
// }

// Create an empty profile object to store all information about the user. 

// An empty profile object to store all information about the user
const userProfile = {
  first_name: "",
  last_name: "",
  age: Number(""),
  gender: "",
  gender_interest: "",
  location: "",
  min_age_interest: Number(""),
  max_age_interest: Number("")
}

// An array and prompt with questions used to fill in the userProfile
const userProfileQuestions = [
    "What is your first name? ",
    "What is your last name? ",
    "What is your age? ",
    "What is your gender? (F, M, X) ",
    "Which genders are you interested in dating? (F, M, X) ",
    "What is your location? (city, rural) ",
    "What is de minimum age of a person you are interested in dating? ",
    "What is the maximum age of a person you are interested in dating? "
];



/*
Create and prompt multiple questions that allow you to collect all the data needed to fill the profile object. 
The properties of the profile object are the same as the data given in mockData.js. 
The question you prompt should be clear and related to the property. 
*/