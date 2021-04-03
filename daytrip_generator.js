"use strict";

let destinationSelection = ["Benson", "Aksarben", "Village Pointe", "Blackstone", "Old Market"];
let restaurantSelection = ["Zios", "Runza", "Canes", "Block 16"];
let transportationSelection = ["Ollie the Trollie", "Metro", "Uber", "Horseback Drawn Carridge"];
let entertainmentSelection = ["Stand up at Funny Bone", "Random Craft workshop", "Farmer's Market", "Play at Playhouse"];

function getRandomValue(selectionArray){
    let randomValue = Math.floor(Math.random() * selectionArray.length);
    return selectionArray[randomValue];
}

getRandomValue(destinationSelection); 

let confirmedArrray = [];

function confirmRandom (randomValue, randomValueArray, finalArray){
    let verify = confirm("Please confirm " + randomValue);
    let nextRandom;
    let nextRandomVerify;
    for (let i = 0; i < randomValueArray.length; i++) {
    }
        if (verify == true){
            finalArray.push(randomValue);
        } else{
            confirm("Please confirm ")
        }
}
let destination = getRandomValue(destinationSelection);
confirmRandom(destination, confirmedArrray);
let restaurant = getRandomValue(restaurantSelection);
let transportation = getRandomValue(transportationSelection);
let entertainment = getRandomValue(entertainmentSelection);

console.log("Ok, you trip has been planned! You will be going to " + destination + ". Lunch will be provided by: " + restaurant + ". We will be getting to " + entertainment + " via " + transportation + ".");