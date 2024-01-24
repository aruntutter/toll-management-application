"use strict";

// Get references to the icon and dropdown content
const filterIcon = document.getElementById("filter-icon");
const dropdownContent = document.getElementById("dropdown-content");

// Function to toggle the visibility of the dropdown content
function toggleDropdown() {
  dropdownContent.classList.toggle("dropdown-none");
}

// Add an event listener to the filter icon
filterIcon.addEventListener("click", toggleDropdown);

// Get elements by their IDs for adding vehicle
let addVehicleEntry = document.getElementById("add-vehicle-entry");
let addVehicleForm = document.getElementById("add-vehicle-form");
let cross = document.getElementById("cross");

// Function to remove the "form" class from the addVehicleForm element
function removeVehicleFormClass() {
  addVehicleForm.classList.remove("form");
}

// Add an event listener to addVehicleEntry
addVehicleEntry.addEventListener("click", removeVehicleFormClass);

// Function to add the "form" class to addVehicleForm when the cross is clicked
function crossClick() {
  addVehicleForm.classList.add("form");
}

cross.addEventListener("click", crossClick);

// Get elements by their IDs for adding a new toll
let addNewToll = document.getElementById("add-new-toll");
let addNewTollForm = document.getElementById("add-toll-form");
let crossTwo = document.getElementById("cross-Two");

// Function to remove the "form" class from the addNewTollForm element
function removeNewTollFormClass() {
  addNewTollForm.classList.remove("form");
}

// Add an event listener to addNewToll
addNewToll.addEventListener("click", removeNewTollFormClass);

// Function to add the "form" class to addNewTollForm when crossTwo is clicked
function crossClicked() {
  addNewTollForm.classList.add("form");
}

crossTwo.addEventListener("click", crossClicked);
