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

function toggleView() {
  let viewAllTolls = document.getElementById("view-all-tolls");
  let outputTitle = document.getElementById("output-title");
  let filterInput = document.getElementById("filter-input");

  if (viewAllTolls.innerText === "View all tolls") {
    viewAllTolls.innerText = "Back to vehicle logs";
    filterInput.innerHTML = `<label>Tollgate List</label>
    <input type="text" placeholder="Search a Vehicle">`;
    outputTitle.innerHTML = `
        <h4 id="toll-name">TOLL NAME</h4>
        <h4 id="vehicle-name">CAR/JEEP/VAN</h4>
        <h4 id="lcv">LCV</h4>
        <h4 id="truck-bus">TRUCK/BUS</h4>
        <h4 id="heavy-vehicle">HEAVY VEHICLE</h4>
      `;
  } else {
    viewAllTolls.innerText = "View all tolls";
    filterInput.innerHTML = `<label>Toll Entries/Vehicle Entries</label>
        <div class="dropdown">
          <i class="fas fa-filter" id="filter-icon"></i>
          <div class="dropdown-content dropdown-none" id="dropdown-content">
            <a href="#">All</a>
            <a href="#">Kappalur</a>
            <a href="#">Chengalpattu</a>
            <a href="#">Krishnagiri</a>
          </div>
        </div>
        <input type="text" placeholder="Search a Vehicle">`;
    outputTitle.innerHTML = `
        <h4 id="toll-name">VEHICLE TYPE</h4>
        <h4 id="vehicle-name">VEHICLE NUMBER</h4>
        <h4 id="lcv">DATE/TIME</h4>
        <h4 id="truck-bus">TOLL NAME</h4>
        <h4 id="heavy-vehicle">TARIFF</h4>
      `;
  }
}
