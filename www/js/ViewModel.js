'use strict';

// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
    this.firstName = "Alvaro";
    this.lastName = "Muñoz";
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());