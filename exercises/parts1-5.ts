// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 


// Part 1: Declare (5) Variables With Type
let SpacecraftName: string = 'Determination';
let speedmph: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400
let milesPerKilometer: number = 0.621


// Part 2: Print Days to Mars
let milesToMars:number = kilometersToMars*milesPerKilometer;
let hoursToMars: number = milesToMars/speedmph;
let daysToMars: number = hoursToMars/24
let milesToTheMoon:number = kilometersToTheMoon*milesPerKilometer
let hoursToTheMoon:number =milesToTheMoon/speedmph
let DaysToTheMoon:number = hoursToTheMoon/24
// Code an output statement here (use a template literal):



// Part 3: Create a Function ("getDaysToLocation")
function getDaysToLocation(milesAway:number, hoursTolocation:number):number{
    let milesAway:number = kilometersAway*milesPerKilometer;
    let hours:number = milesAway/speedmph;
    return hours/24
}
console.log(`${getDaysToLocation(kilometersToMars,hoursToMars)} and ${SpacecraftName}}`);
console.log(`${getDaysToLocation(kilometersToTheMoon,hoursToTheMoon)}`)

console.log(`The space shuttle ${SpacecraftName} will take ${daysToMars} days to reach mars `);

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
