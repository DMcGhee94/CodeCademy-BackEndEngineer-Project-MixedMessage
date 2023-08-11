import { StarSign } from "./modules/classes.js";
import { getUsersStarSign } from "./modules/functions.js";

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
console.log(allStarSigns);

let userStarSign = getUsersStarSign(['12', '08', '1994'], allStarSigns);
console.log(userStarSign);