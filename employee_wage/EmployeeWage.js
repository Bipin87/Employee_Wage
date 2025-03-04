// UC1: To Check Employee Presence
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;

if (empCheck === IS_ABSENT) {
    console.log("Employee is ABSENT");
} else {
    console.log("Employee is PRESENT");
}

// UC2: Calculating Employee Wage

// Constants for work types and wages
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

// Generate a random number to decide work type
empCheck = Math.floor(Math.random() * 10) % 3; 

// Determine employee work hours based on empCheck
let empHrs = 0;
switch (empCheck) {
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
    default:
        empHrs = 0; 
}

// Calculate wage
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Employee worked:", empHrs, "hours");
console.log("Employee Wage: $" + empWage);

// UC3: Refactored code to write a function for daily working hours
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0; // Employee is absent
    }
}

// Generate employee work type again
let empHrsNew = getWorkingHours(Math.floor(Math.random() * 10) % 3);

// Calculate wage using refactored function
let empWageNew = empHrsNew * WAGE_PER_HOUR;
console.log("Refactored - Employee worked:", empHrsNew, "hours");
console.log("Refactored - Employee Wage: $" + empWageNew);