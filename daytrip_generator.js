"use strict";

let destinationSelection = ["Benson", "Aksarben", "Village Pointe", "Blackstone", "Old Market"];
let restaurantSelection = ["Zios", "Runza", "Canes", "Block 16"];
let transportationSelection = ["Ollie the Trollie", "Metro", "Uber", "Horseback"];
let entertainmentSelection = ["Stand up at Funny Bone", "Random Craft workshop", "Farmer's Market", "Play at Playhouse"];

let userInputDest = prompt("What part of town would you like to go to?");
let userInputRest = prompt("Where would you like to have lunch catered by?");
let userInputTran = prompt("What is your preferred mode of transportation?");
let userInputEnt = prompt("What activity would you like to do?");

function checkForRandom(input, selectionArray, finalArray){
    let randomValue = Math.floor(Math.random() * selectionArray.length); 
    for (let i = 0; i < selectionArray.length; i++) {
        if (input == null || input != array[i]){
            finalArray.push(randomValue)
        }
        
    }
}




/* function getRandomValue(selectionArray){
    
    return selectionArray[randomValue];
} */
/* 
let destination = getRandomValue(destinationSelection);
let restaurant = getRandomValue(restaurantSelection);
let transportation = getRandomValue(transportationSelection);
let entertainment = getRandomValue(entertainmentSelection); */

let finalSelectionArray = [];

function addToFinal(option, finalArray){
    finalArray.push(option);
}
addToFinal(destination, finalSelectionArray);
addToFinal(restaurant, finalSelectionArray);
addToFinal(transportation, finalSelectionArray);
addToFinal(entertainment, finalSelectionArray);
console.log("Ok, you trip has been planned! You will be going to " + finalSelectionArray[0] + ". Lunch will be provided by: " + finalSelectionArray[1] + ". We will be getting to " + finalSelectionArray[2] + " via " + finalSelectionArray[3] + ".");