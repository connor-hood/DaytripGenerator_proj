"use strict";

let destinationSelection = ["Benson", "Aksarben", "Village Pointe", "Blackstone", "Old Market"];
let restaurantSelection = ["Zios", "Runza", "Canes", "Block 16"];
let transportationSelection = ["Ollie the Trollie", "Metro", "Uber", "Horseback"];
let entertainmentSelection = ["Stand up at Funny Bone", "Random Craft workshop", "Farmer's Market", "Play at Playhouse"];

function getRandomValue(selectionArray){
    let randomValue = Math.floor(Math.random() * selectionArray.length);
    console.log(selectionArray[randomValue]);
    return selectionArray[randomValue];
}

let destination = getRandomValue(destinationSelection);
let restaurant = getRandomValue(restaurantSelection);
let transportation = getRandomValue(transportationSelection);
let entertainment = getRandomValue(entertainmentSelection);

console.log("Ok, you trip has been planned! You will be going to " + destination + ". Lunch will be provided by: " + restaurant + ". We will be getting to " + entertainment + " via " + transportation + ".");