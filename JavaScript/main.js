import { StarSign } from "./modules/classes.js";
import { getUsersStarSign, randomArrayResult } from "./modules/functions.js";
import { variableArray } from "./modules/variables.js";

const aries = new StarSign('Aries', ['21', '03'], ['19', '04']);
const taurus = new StarSign('Taurus', ['20', '04'], ['20', '05']);
const gemini = new StarSign('Gemini', ['21', '05'], ['20', '06']);
const cancer = new StarSign('Cancer', ['21', '06'], ['22', '07']);
const leo = new StarSign('Leo', ['23', '07'], ['22', '08']);
const virgo = new StarSign('Virgo', ['23', '08'], ['22', '09']);
const libra = new StarSign('Libra', ['23', '09'], ['23', '10']);
const scorpio = new StarSign('Scorpio', ['23', '10'], ['21', '11']);
const sagittarius = new StarSign('Sagittarius', ['22', '11'], ['21', '12']);
const capricorn = new StarSign('Capricorn', ['22', '12'], ['19', '01']);
const aquarius = new StarSign('Aquarius', ['20', '01'], ['18', '02']);
const pisces = new StarSign('Pisces', ['19', '02'], ['20', '03']);

const allStarSigns = [
    aries
    , taurus
    , gemini
    , cancer
    , leo
    , virgo
    , libra
    , scorpio
    , sagittarius
    , capricorn
    , aquarius
    , pisces
];

const birthdayDatePicker = document.getElementById("horoscope-birthday");
const magic8BallButton = document.getElementById("magic-8-ball-button");
const youAreButton = document.getElementById("you-are-button");
const youShouldButton = document.getElementById("you-should-button");

birthdayDatePicker.onchange = function() {
    let output = document.getElementById("horoscope-output");
    let userBirthday = [birthdayDatePicker.value.split("-")[2], 
                        birthdayDatePicker.value.split("-")[1], 
                        birthdayDatePicker.value.split("-")[0]
                    ];

    let userStarSign = getUsersStarSign(userBirthday, allStarSigns);

    if (output.style.display === "none" || !output.style.display) {
        output.style.display = "block";
    };
    output.innerHTML = `Your star sign is ${userStarSign.sign}, because your birthday is ${userBirthday[0]}-${userBirthday[1]}-${userBirthday[2]} and that cycle is between ${userStarSign.startDate.toLocaleDateString('en-us', { year:"numeric", month:"numeric", day:"numeric"})} and ${userStarSign.endDate.toLocaleDateString('en-us', { year:"numeric", month:"numeric", day:"numeric"})}.`;
};

const randomArrayButtons = [
    [magic8BallButton, "magic-8-ball-output", variableArray.magic8Ball]
    , [youAreButton, "you-are-output", variableArray.youAre]
    , [youShouldButton, "you-should-output", variableArray.youShould]
];

magic8BallButton.onclick = function() {
    let output = document.getElementById("magic-8-ball-output");
    let result = randomArrayResult(variableArray.magic8Ball);

    if (output.style.display === "none" || !output.style.display) {
        output.style.display = "block";
    };
    output.innerHTML = result;
};

youAreButton.onclick = function() {
    let output = document.getElementById("you-are-output");
    let result = randomArrayResult(variableArray.youAre);

    if (output.style.display === "none" || !output.style.display) {
        output.style.display = "block";
    };
    output.innerHTML = `You are having a ${result}`;
};

youShouldButton.onclick = function() {
    let output = document.getElementById("you-should-output");
    let result = randomArrayResult(variableArray.youShould);

    if (output.style.display === "none" || !output.style.display) {
        output.style.display = "block";
    };
    output.innerHTML = `You should ${result}`;
};



/*
let userBirthday = ['12', '08', '1994'];

let userStarSign = getUsersStarSign(userBirthday, allStarSigns);

console.log(`Your star sign is ${userStarSign.sign}, because your birthday is ${userBirthday[0]}-${userBirthday[1]}-${userBirthday[2]} and that cycle is between ${userStarSign.startDate} and ${userStarSign.endDate}.`)
console.log(`You are going to have a ${randomArrayResult(variableArray.youAre)}`);
console.log(`You should ${randomArrayResult(variableArray.youShould)}`);
console.log(`Magic 8 Ball says: ${randomArrayResult(variableArray.magic8Ball)}`);
*/