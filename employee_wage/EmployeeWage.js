// Constants
const IS_ABSENT = 0, IS_PART_TIME = 1, IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4, FULL_TIME_HOURS = 8, WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20, MAX_HRS_IN_MONTH = 100;

// Function to get working hours
const getWorkingHours = (empCheck) => {
    switch (empCheck) {
        case IS_PART_TIME: return PART_TIME_HOURS;
        case IS_FULL_TIME: return FULL_TIME_HOURS;
        default: return 0;
    }
};

// Function to calculate daily wage
const calcDailyWage = (empHrs) => empHrs * WAGE_PER_HOUR;

// Employee work tracking
let totalEmpHrs = 0, totalWorkingDays = 0;
let empDailyWageArr = [], empDailyHrsMap = new Map(), empDailyWageMap = new Map();

while (totalEmpHrs < MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    
    if (totalEmpHrs + empHrs > MAX_HRS_IN_MONTH) empHrs = MAX_HRS_IN_MONTH - totalEmpHrs;

    totalEmpHrs += empHrs;
    let dailyWage = calcDailyWage(empHrs);

    empDailyWageArr.push(dailyWage);
    empDailyHrsMap.set(totalWorkingDays, empHrs);
    empDailyWageMap.set(totalWorkingDays, dailyWage);
}

// Compute total wage and total hours worked using arrow functions
const totalWage = empDailyWageArr.reduce((sum, wage) => sum + wage, 0);
const totalHours = [...empDailyHrsMap.values()].reduce((sum, hours) => sum + hours, 0);
console.log(`Total Hours Worked: ${totalHours}, Total Wage Earned: $${totalWage}`);

// Categorize working days
let fullWorkingDays = [], partWorkingDays = [], nonWorkingDays = [];
empDailyHrsMap.forEach((hours, day) => {
    if (hours === FULL_TIME_HOURS) fullWorkingDays.push(day);
    else if (hours === PART_TIME_HOURS) partWorkingDays.push(day);
    else nonWorkingDays.push(day);
});

// Show categorized working days
console.log("Full Working Days:", fullWorkingDays.map(day => `Day ${day}`).join(", "));
console.log("Part Working Days:", partWorkingDays.map(day => `Day ${day}`).join(", "));
console.log("Non Working Days:", nonWorkingDays.map(day => `Day ${day}`).join(", "));

// Store data in an array of objects
const empDailyHrsAndWageArr = [];
empDailyHrsMap.forEach((hours, day) => {
    empDailyHrsAndWageArr.push({
        dayNum: day,
        dailyHours: hours,
        dailyWage: empDailyWageMap.get(day),
        toString() {
            return `Day ${this.dayNum}: Hours ${this.dailyHours}, Wage $${this.dailyWage}`;
        }
    });
});

// Print daily wage details properly
console.log("Daily Wage Details:\n" + empDailyHrsAndWageArr.map(obj => obj.toString()).join("\n"));
