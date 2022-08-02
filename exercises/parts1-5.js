// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
// Part 1: Declare (5) Variables With Type
var SpacecraftName = 'Determination';
var speedmph = 17500;
var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
var milesPerKilometer = 0.621;
// Part 2: Print Days to Mars
var milesToMars = kilometersToMars * milesPerKilometer;
var hoursToMars = milesToMars / speedmph;
var daysToMars = hoursToMars / 24;
var milesToTheMoon = kilometersToTheMoon * milesPerKilometer;
var hoursToTheMoon = milesToTheMoon / speedmph;
var DaysToTheMoon = hoursToTheMoon / 24;
// Code an output statement here (use a template literal):
// Part 3: Create a Function ("getDaysToLocation")
function getDaysToLocation(milesAway, hoursTolocation) {
    var milesAway = kilometersAway * milesPerKilometer;
    var hours = milesAway / speedmph;
    return hours / 24;
}
console.log("".concat(getDaysToLocation(kilometersToMars, hoursToMars), " and ").concat(SpacecraftName, "}"));
console.log("".concat(getDaysToLocation(kilometersToTheMoon, hoursToTheMoon)));
console.log("The space shuttle ".concat(SpacecraftName, " will take ").concat(daysToMars, " days to reach mars "));
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// Part 4: Create a Spacecraft Class
// Create an instance of the class here:
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
