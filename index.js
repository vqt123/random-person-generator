import data from './data.js';

function generateRandomWomanProfile() {
    const race = data.races[Math.floor(Math.random() * data.races.length)];
    const countries = data.raceToCountries[race];
    const country = countries[Math.floor(Math.random() * countries.length)];    
    const gender = 'woman';
    const hair_colors = data.raceToHairColors[race];
    const hair_color = hair_colors[Math.floor(Math.random() * hair_colors.length)]
    const first_name = (gender == 'woman') ? data.countryToFemaleNames[country][Math.floor(Math.random() * data.countryToFemaleNames[country].length)] : data.countryToMaleNames[country][Math.floor(Math.random() * data.countryToMaleNames[country].length)];
    const last_name = data.countryToLastNames[country][Math.floor(Math.random() * data.countryToLastNames[country].length)];


    return { first_name, last_name, race, country, gender, hair_color};
}

function generateRandomManProfile() {
    const race = data.races[Math.floor(Math.random() * data.races.length)];
    const countries = data.raceToCountries[race];
    const country = countries[Math.floor(Math.random() * countries.length)];    
    const gender = 'man';
    const hair_colors = data.raceToHairColors[race];
    const hair_color = hair_colors[Math.floor(Math.random() * hair_colors.length)]
    const first_name = (gender == 'woman') ? data.countryToFemaleNames[country][Math.floor(Math.random() * data.countryToFemaleNames[country].length)] : data.countryToMaleNames[country][Math.floor(Math.random() * data.countryToMaleNames[country].length)];
    const last_name = data.countryToLastNames[country][Math.floor(Math.random() * data.countryToLastNames[country].length)];


    return { first_name, last_name, race, country, gender, hair_color};
}


function generateRandomProfile() {
    const race = data.races[Math.floor(Math.random() * data.races.length)];
    const countries = data.raceToCountries[race];
    const country = countries[Math.floor(Math.random() * countries.length)];    
    const gender = data.genders[Math.floor(Math.random() * data.genders.length)];
    const hair_colors = data.raceToHairColors[race];
    const hair_color = hair_colors[Math.floor(Math.random() * hair_colors.length)]
    const first_name = (gender == 'woman') ? data.countryToFemaleNames[country][Math.floor(Math.random() * data.countryToFemaleNames[country].length)] : data.countryToMaleNames[country][Math.floor(Math.random() * data.countryToMaleNames[country].length)];
    const last_name = data.countryToLastNames[country][Math.floor(Math.random() * data.countryToLastNames[country].length)];


    return { first_name, last_name, race, country, gender, hair_color};
}


export {generateRandomProfile, generateRandomWomanProfile, generateRandomManProfile};