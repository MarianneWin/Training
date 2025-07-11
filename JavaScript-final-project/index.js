'use strict';

const mockData = require('./mockData.js').data;
const prompt = require('prompt-sync')();

// Your code here

// Access mockData
// console.log(mockData);

// An empty profile object to store all information about the user
const userProfile = {
  first_name: "",
  last_name: "",
  age: 0,
  gender: "",
  gender_interest: "",
  location: "",
  min_age_interest: 0,
  max_age_interest: 0
}
/*
// Prompts to ask the user the userProfile questions and fill it in te object userProfile
userProfile.first_name = prompt("What is your first name? ");
userProfile.last_name = prompt("What is your last name? ");
userProfile.age = Number(prompt("What is your age? "));
userProfile.gender = prompt("What is your gender? (F, M, X) ");
userProfile.gender_interest = prompt("Which genders are you interested in dating? (F, M, X, B) ");
userProfile.location = prompt("What is your location? (city, rural) ");
userProfile.min_age_interest = Number(prompt("What is de minimum age of a person you are interested in dating? "));
userProfile.max_age_interest = Number(prompt("What is the maximum age of a person you are interested in dating? "));

console.log(userProfile);
*/
// Asking the user the userProfile questions, using a while loop to repeat the question until valid

// Making sure first name is not an empty string
while (true) {
  userProfile.first_name = prompt("What is your first name? ");
  if (userProfile.first_name !== "") {
    break;
  } else {
    console.log("Your answer is not valid.");
  }
}
// Making sure last name is not an empty string
while (true) {
  userProfile.last_name = prompt("What is your last name? ");
  if (userProfile.last_name !== "") {
    break;
  } else {
    console.log("Your answer is not valid.");
  }
}
// Making sure the age of the user is 18 or higher.
while (true) {
  userProfile.age = Number(prompt("What is your age? "));
  if (userProfile.age >= 18) {
    break;
  } else {
    console.log("You need to be 18 years or older to use this dating app.");
  }
}
// Making sure the minimum interested age interested age is 18 or higher.
while (true) {
  userProfile.min_age_interest = Number(prompt("What is de minimum age of a person you are interested in dating? "));
  if (userProfile.min_age_interest >= 18) {
    break;
  } else {
    console.log("The minimum age of a potential match has to be 18 years or older.");
  }
}
// Making sure the maximum interested age is higher than the minimum interested age. 
// Because the minimum age already has to be 18 or higher, the maximum age can never be younger than 18.
while (true) {
  userProfile.max_age_interest = Number(prompt("What is de maximum age of a person you are interested in dating? "));
  if (userProfile.max_age_interest > userProfile.min_age_interest) {
    break;
  } else {
    console.log("The maximum age of a potential match has to be higher than the minimum interested age.");
  }
}
// Making sure that gender can only be M, F, X. (X is all not male & female genders)
while (true) {
  userProfile.gender = prompt("What is your gender? (F, M, X) ");
  if (userProfile.gender === "F" || userProfile.gender === "M" || userProfile.gender === "X") {
    break;
  } else {
    console.log("You can only choose between F, M or X. Please try again.");
  }
}
// Making sure that the gender_interest can only be M, F, X. 
// I added B because you can be interested in more genders and some persons in the mockData have B as an answer.
while (true) {
  userProfile.gender_interest = prompt("Which genders are you interested in dating? (F, M, X, B) ");
  if (userProfile.gender_interest === "F" || userProfile.gender_interest === "M" || userProfile.gender_interest === "X" || userProfile.gender_interest === "B") {
    break;
  } else {
    console.log("You can only choose between F, M, X or B. Please try again.");
  }
}
// Making sure that location can only be “rural” or “city”.
while (true) {
  userProfile.location = prompt("What is your location? (city, rural) ");
  if (userProfile.location === "city" || userProfile.location === "rural") {
    break;
  } else {
    console.log("Please try again, chosing city or rural.");
  }
}

// Output to check if all userProfile answers are filled in correctly in the userProfile
console.log(`Your name is ${userProfile.first_name} ${userProfile.last_name}. Your age is ${userProfile.age}. 
  The minimum age you are interested in dating is ${userProfile.max_age_interest} and the maximum age is ${userProfile.max_age_interest}.
  Your gender is ${userProfile.gender} and your interested in dating ${userProfile.gender_interest}.
  Your location is ${userProfile.location}.`);

// A for...of loop to iterate the mockData array
const matches = [];
// Checking if criteria for age, gender and location of the user and potential matches meet
for (const person of mockData) {
  const personMeetsUserAgeCriteria = person.age >= userProfile.min_age_interest && person.age <= userProfile.max_age_interest;
  const userMeetsPersonAgeCriteria = userProfile.age >= person.min_age_interest && userProfile.age <= person.max_age_interest;
  const personMeetsUserGenderCriteria = person.gender === userProfile.gender_interest || userProfile.gender_interest === "B";
  const userMeetsPersonGenderCriteria = userProfile.gender === person.gender_interest || person.gender_interest === "B";
  const sameLocationUserAndPerson = userProfile.location === person.location
// If all criteria are met, add the persson to the matches
  if (personMeetsUserAgeCriteria && userMeetsPersonAgeCriteria && personMeetsUserGenderCriteria && userMeetsPersonGenderCriteria && sameLocationUserAndPerson) {
    matches.push(person);
  }
}
// Checking if there are any matches. If so, printing the amount of potential matches and the information of each match
if (matches.length > 0) {
  console.log(`There are ${matches.length} potential matches:`);
  for (const match of matches) {
    console.log(`Potential match: ${match.first_name} ${match.last_name}, age ${match.age}, minimum age interest ${match.min_age_interest}, maximum age interest ${match.max_age_interest}, gender ${match.gender}, gender interest ${match.gender_interest}, location ${match.location}`);
  }
} else {
  console.log("You do not have any matches at the moment. Do not give up!");
}
