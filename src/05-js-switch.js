/**
 * This quiz is to test your knowledge of Switch Statements.
 *
 * 1. Create a repository by cloning: https://github.com/jorgecarmona/npm-project-template
 * 2. Follow the README for instructions
 * 3. When you finish the quiz, create a PR on you repository
 * 4. Submit to your lead
 */

/**
 * Question 1
 * Given a variable color with a value "red", use a switch statement to set a variable feeling to "passionate" for "red", "calm" for "blue", and "neutral" for other colors.
 */

const color = "red";
switch (color) {
  case "red":
    feeling = "passionate";
    break;
  case "blue":
    feeling = "calm";
    break;
  default:
    feeling = "neutral";
    break;
}

console.log("[Question #1]: ", feeling);

/**
 * Question 2
 * Using a switch statement, check the value of the variable day (e.g., "Monday"). Return "Working day" for weekdays and "Weekend" for Saturday and Sunday.
 */

const day = "Monday";
switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    result = "Working day";
    break;
  case "Saturday":
  case "Sunday":
    result = "Weekend";
}
console.log("[Question #2]: ", result);

/**
 * Question 3
 * Given a variable score of 85, set a grade: "A" for 90 and above, "B" for 80-89, "C" for 70-79, "D" for 60-69, and "F" for below 60.
 */

const score = 85;
let grade;

switch (true) {
  case score >= 90:
    grade = "A";
    break;
  case score >= 80:
    grade = "B";
    break;
  case score >= 70:
    grade = "C";
    break;
  case score >= 60:
    grade = "D";
    break;
  case score <= 59:
    grade = "F";
}
console.log("[Question #3]: ", grade);

/**
 * Question 4
 * Use a switch statement to determine if the variable fruit is a "berry". Set "berry" for strawberries, blueberries, and raspberries. "Not a berry" for other fruits.
 */

const fruit = "blueberry";
switch (fruit) {
  case "strawberry":
  case "blueberry":
  case "raspberry":
    result = "berry";
    break;
  default:
    result = "Not a berry";
}
console.log("[Question #4]: ", result);

/**
 * Question 5
 * Check the value of the variable month (e.g., "January") and return which quarter of the year it belongs to.
 */

const month = "January";
switch (month) {
  case "January":
  case "Febrary":
  case "March":
    result = "First quarter";
    break;
  case "April":
  case "May":
  case "June":
    result = "Second quarter";
  case "July":
  case "August":
  case "September":
    result = "Third quarter";
    break;
  case "Octuber":
  case "November":
  case "December":
    result = "Fourth quarter";
    break;
}
console.log("[Question #5]: ", result);

/**
 * Question 6
 * Use a switch statement to determine if a number is "small", "medium", or "large". Consider numbers 1-3 as "small", 4-6 as "medium", and 7-9 as "large".
 */

const number = 8;
let size;
switch (true) {
  case number >= 1 && number <= 3:
    size = "Small";
    break;
  case number >= 4 && number <= 6:
    size = "Medium";
    break;
  case number >= 7 && number <= 9:
    size = "Large";
}
console.log("[Question #6]: ", size);

/**
 * Question 7
 * Determine the type of the variable pet (e.g., "dog"). Return "Canine" for a dog, "Feline" for a cat, and "Unknown" for other pets.
 */

const pet = "dog";
switch (pet) {
  case "dog":
    result = "Canine";
    break;
  case "cat":
    result = "Canine";
    break;
  default:
    result = "Unknown";
}
console.log("[Question #7]: ", result);

/**
 * Question 8
 * Given a variable transportMode with a value like "car", return "Fast" for "plane", "Medium" for "car", and "Slow" for "bicycle".
 */

const transportMode = "car";
switch (transportMode) {
  case "plane":
    result = "Fast";
    break;
  case "car":
    result = "Medium";
    break;
  case "bicycle":
    result = "Slow";
}
console.log("[Question #8]: ", result);

/**
 * Question 9
 * For a variable direction with values like "N", determine the full direction name. "N" for "North", "S" for "South", etc.
 */

const direction = "N";
switch (direction) {
  case "N":
    result = "North";
    break;
  case "S":
    result = "South";
    break;
  case "E":
    result = "East";
    break;
  case "W":
    result = "West";
}
console.log("[Question #8]: ", result);
/**
 * Question 10
 * Determine the type of drink based on the variable drink. "Water" for "H2O", "Coffee" for "C8H10N4O2", and "Unknown" for other values.
 */

const drink = "Coffee";
switch (drink) {
  case "Water":
    result = "H2O";
    break;
  case "Coffee":
    result = "C8H10N4O2";
    break;
  default:
    result = "Unknown";
}
console.log("[Question #10]: ", result);
