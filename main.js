console.log("you are a rock star!");

// Lightning Exercise 1: Given two options of data structures 
// - array or object - which should you use? 
// You need to represent a red 2015 Ford Mustang in your code.
let car = {
    make: "Ford",
    model: "Mustang",
    year: "2015",
    color: "red"
}
console.log(car);

// Lightning Exercise 2: Given two options of data structures
//  - array or object - which should you use?
//   You need to store list of animal names in a shelter. 
//   The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky".

let animalNames = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"]
console.log(animalNames[0]);

// Lightning Exercise 3:
//  Define an object for four family members,
//   and put each object in an array named familyMembers. 
//   Each family member object that you create should have the same keys on them,
//    but the values will be different.

let mom = {
    hair_color: "brown",
    eye_color: "brown",
    fave_food: "green apple",
};
let dad = {
    hair_color: "grey",
    eye_color: "blue",
    fave_food: "stake",
};
let sister = {
    hair_color: "blonde",
    eye_color: "green",
    fave_food: "rice",
};
let brother = {
    hair_color: "red",
    eye_color: "hazel",
    fave_food: "green beans",
};

let familyMembers = [mom, dad, sister, brother];

console.log(familyMembers);

console.log(familyMembers[0]);




const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

// Lightning Exercises 1: Use dot notation to output all of the dimensions 
// of the Empire State Building to the console.

console.log(
    "dimension", 
    "height:", empireStateBuilding.height,
    "squareFit:", empireStateBuilding.squareFeet,
    "EW length:", empireStateBuilding.eastWestLength,
    "NW length:", empireStateBuilding.northSouthLength
    );

// Lightning Exercises 2: Use square bracket notation to output 
// the remaining 5 properties to the console. 
// Create 5 variables first with the keys as their values. 
// Use those variables to look up the values.

let stories = "stories";
let add = "address";
let con_date = "constructionDate";
let owner = "owner";
let arch = "architect";

console.log("other props", 
 empireStateBuilding[stories],
 empireStateBuilding[add],
 empireStateBuilding[con_date],
 empireStateBuilding[owner],
 empireStateBuilding[arch]
 );

 const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}
// Lightning Exercise 1: Output the names 
// of the part-time instructors followed 
// by the names of the full-time instructors 
// in the console.
console.log(nashvilleSoftwareSchool.instructors.fullTime[0]);

// const partTimeInstructors = nashvilleSoftwareSchool.instructors.partTime
let partTime = nashvilleSoftwareSchool.instructors.partTime
for (let i = 0; i < partTime.length; i++) {
    console.log(partTime[i]);
};
let fullTime = nashvilleSoftwareSchool.instructors.fullTime
for (let i = 0; i < fullTime.length; i++) {
    console.log(fullTime[i]);
}
// Lightning Exercise 2: Output only Andy and Zoe in the console.
let Andy = nashvilleSoftwareSchool.instructors.fullTime[4];
let Zoe = nashvilleSoftwareSchool.instructors.partTime[0];
console.log(Andy);
console.log(Zoe);