"use strict";

let destinationSelection = ["Benson", "Aksarben", "Village Pointe", "Blackstone", "Old Market"];
let restaurantSelection = ["Zios", "Runza", "Canes", "Block 16"];
let transportationSelection = ["Ollie the Trollie", "Metro", "Uber", "Horseback Drawn Carridge"];
let entertainmentSelection = ["Stand up at Funny Bone", "Random Craft workshop", "Farmer's Market", "Play at Playhouse"];

let userInputDest = prompt("What part of town would you like to go to?");
let userInputRest = prompt("Where would you like to have lunch catered by?");
let userInputTran = prompt("What is your preferred mode of transportation?", "Ollie The trollie, Metro, Uber, Horseback Drawn Carridge");
let userInputEnt = prompt("What activity would you like to do?", "Stand up at Funny Bone, Random Craft Workshop, Farmer's Market, Play at Playhouse");

let finalSelectionArray = [];

function checkForRandom(input, selectionArray, finalArray){
    let randomValue = Math.floor(Math.random() * selectionArray.length); 
    for (let i = 0; i < selectionArray.length; i++) {
        if (input === selectionArray[i]){
}

console.log(checkForRandom(userInputDest, destinationSelection, finalSelectionArray));
console.log(checkForRandom(userInputRest, restaurantSelection, finalSelectionArray));
console.log(checkForRandom(userInputTran, transportationSelection, finalSelectionArray));
console.log(checkForRandom(userInputEnt, entertainmentSelection, finalSelectionArray));
