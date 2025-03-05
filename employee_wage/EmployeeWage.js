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

// UC4: Calculating Wages for a Month
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;

for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
}

// Calculate total wage for the month
let totalEmpWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("Total Hours: " + totalEmpHrs + " Emp Wage: $" + totalEmpWage);


// UC5: Calculating wages till total working hours or days reached
const MAX_HRS_IN_MONTH = 100;
const NUM_OF_WORKING_DAYS_LIMIT = 10;

let totalEmpHrsUC5 = 0;
let totalWorkingDaysUC5 = 0;

while (totalEmpHrsUC5 < MAX_HRS_IN_MONTH && totalWorkingDaysUC5 < NUM_OF_WORKING_DAYS_LIMIT) {
    totalWorkingDaysUC5++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrsUC5 += getWorkingHours(empCheck);
}

// Calculate total wage for UC5
let totalEmpWageUC5 = totalEmpHrsUC5 * WAGE_PER_HOUR;
console.log("\nUC5 Total Days: " + totalWorkingDaysUC5 + " Total Hrs: " + totalEmpHrsUC5 + " Emp Wage: $" + totalEmpWageUC5);


// UC6: Storing Daily Wages in an Array
function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

const MAX_HRS_IN_MONTH_UC6 = 160;
const NUM_OF_WORKING_DAYS_UC6 = 20;

let totalEmpHrsUC6 = 0;
let totalWorkingDaysUC6 = 0;
let empDailyWageArr = [];

while (totalEmpHrsUC6 < MAX_HRS_IN_MONTH_UC6 && totalWorkingDaysUC6 < NUM_OF_WORKING_DAYS_UC6) {
    totalWorkingDaysUC6++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrsUC6 += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}

let totalEmpWageUC6 = calcDailyWage(totalEmpHrsUC6);
console.log("UC6 Total Days:", totalWorkingDaysUC6, "Total Hrs:", totalEmpHrsUC6, "Emp Wage: $" + totalEmpWageUC6);

// Print Daily Wages Array
console.log("Daily Wages:", empDailyWageArr);

//UC7: Employee Wage Problem to use Object Helper Functions and Arrow Functions to perform following operations

// UC7A: Calculate total Wage using Array reduce method
const totalWages = empDailyWageArr.reduce((total, dailyWage) => total + dailyWage, 0);
console.log("UC7A Total Wage using reduce:", totalWages);

// UC7B: Show Day along with Daily Wage using map function
let dailyCounter = 0;
const mapDayWithWageArr = empDailyWageArr.map(dailyWage => `Day ${++dailyCounter}: $${dailyWage}`);
console.log("UC7B Daily Wage Map:", mapDayWithWageArr);

// UC7C: Show Days when full-time wage of 160 was earned
const fullDayWageArr = mapDayWithWageArr.filter(dailyWage => dailyWage.includes("160"));
console.log("UC7C Days with Full-time Wage:", fullDayWageArr);

// UC7D: Find first occurrence of Full-time Wage
const firstFullTimeWageDay = mapDayWithWageArr.find(dailyWage => dailyWage.includes("160"));
console.log("UC7D First Full-time Wage Day:", firstFullTimeWageDay);

// UC7E: Check if all elements in Full-time Wage Array hold Full-time Wage
const allFullTimeWage = fullDayWageArr.every(dailyWage => dailyWage.includes("160"));
console.log("UC7E All entries Full-time Wage:", allFullTimeWage);

// UC7F: Check if there is any Part-time Wage
const anyPartTimeWage = mapDayWithWageArr.some(dailyWage => dailyWage.includes("80"));
console.log("UC7F Any Part-time Wage:", anyPartTimeWage);

// UC7G: Count number of days Employee worked
const totalDaysWorked = empDailyWageArr.reduce((numOfDays, dailyWage) => (dailyWage > 0 ? numOfDays + 1 : numOfDays), 0);
console.log("UC7G Number of Days Employee Worked:", totalDaysWorked);
