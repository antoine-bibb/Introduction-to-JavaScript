/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let votingAge = '18'
if(votingAge > '18'){
    console.log(true)
}else{
    console.log('your not of required age yet!')
}




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let drinkingAge = '20'

if(drinkingAge >= '21'){
    console.log('heres your drink')
}else (drinkingAge < '21')
console.log('would you like a pop?')





//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let x = Number("1999");
console.log(x)



//Task d: Write a function to multiply a*b 

const multiply = (a,b) => {
    return a * b;
  } 
  console.log(multiply(20,15));



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function newAge(yourAge){
let dogYears = 7*yourAge;
console.log(`you are `+ dogYears + ` years old in Dog Years`)
}
newAge(30);




/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
 

  function adult(weight){
      if (weight <= 5){
          return(weight*.05);
      }else if(weight >= 6 && weight <= 10){
          return(weight*.04);
      }else if(weight >= 11 && weight <= 15){
          return (weight*.03)
      }else{
          return(weight*.02);
      }
  }
  function pup(age, weight){
      if (age >= .1666 && age <= .333){
return(weight*.1);
      }else if(age >=.333 && age <= .5833){
          return(weight*.05);
      }else{
          return(weight*.04);
      }
  }
 function foodBal(age, weight){
     if(age < 1){
         return pup(age,weight);
     }else{
         return adult(weight);
     }
  }
console.log(foodBal(1,15));
foodBal(1,15);


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
var playerChoice = ("Do you choose rock, paper or scissors?");
var compChoice = Math.random();
if (compChoice < 0.34) {
    compChoice = "rock";
} else if(compChoice <= 0.67) {
    compChoice = "paper";
} else {
    compChoice = "scissors";
}

var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
    return "The result is a tie!";
}
if(choice1 === "rock") {
    if(choice2 === "scissors") {
        return "rock wins";
    } else {
        return "paper wins";
    }
}
if(choice1 === "paper") {
    if(choice2 === "rock") {
        return "paper wins";
    } else {
        if(choice2 === "scissors") {
            return "scissors wins";
    }
}
if(choice1 === "scissors") {
    if(choice2 === "rock") {
        return "rock wins";
    } else {
        if(choice2 === "paper") {
            return "scissors wins";
        }
    }
}
}
};
console.log("player Choice: " + playerChoice);
console.log("Comp Choice: " + compChoice);
compare(playerChoice, compChoice);
  
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
function lengthConverter(kilometers) {
    let kilos = kilometers*0.62137;
    console.log(`this equals `+ kilos +` miles`)
  }
lengthConverter(24);

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  function conversion(feet){
      let ft= feet*0.032808;
      console.log(`this equals `+ ft +` centimeters`)
  }
  conversion(13);




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
function annoyingSong() {  
    var bottles;
    var bottlesLeft;
    for (i = 99; i >= 1; i--) {
      if (i == 1) {
        bottles = "bottle";
        bottlesLeft = "No more bottles of soda on the wall!";
      } else {
        bottles = "bottles";
        bottlesLeft = i - 1 + " bottles of soda on the wall!";
      } console.log(i+ " " + bottles + " of soda on the wall,");
      console.log(i+ " " + bottles + " of soda,");
      console.log("Take one down, pass it around,");
      console.log(bottlesLeft);
      } 
      
  }
  console.log(annoyingSong());  




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
function myGrading(score) {
    var gscore;
  
    switch(true) {
      case (score <= 100 && score >= 90):
         gscore = 'A';
          break;
      case (score <= 89 && score >= 80):
          gscore = 'B';
           break;
      case (score <= 79 && score >= 70):
          gscore = 'C';
           break;
         case (score <= 69 && score >= 60):
          gscore = 'D';
           break;
      case (score <= 59 && score >= 0):
          gscore = 'F';
          break;
  
      case (score > 100 && score < 0):
          gscore = 'INVALID SCORE';
          break; 
  
      default:
        return 'INVALID SCORE';
    }
    
    var last_digit = score%10;
    if(last_digit <=2 && last_digit >= 0 && score != 100){
      gscore+='-';
    }
    else if((last_digit <=9 && last_digit >= 7) || score == 100){
      gscore+='+';
    }
  
    return gscore;
  };
  
  console.log(myGrading(91));
  console.log(myGrading(75));
  console.log(myGrading(100));
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
var playerChoice = prompt("Do you choose rock, paper or scissors?");
var compChoice = Math.random();
if (compChoice < 0.34) {
    compChoice = "rock";
} else if(compChoice <= 0.67) {
    compChoice = "paper";
} else {
    compChoice = "scissors";
}

var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
    return "The result is a tie!";
}
if(choice1 === "rock") {
    if(choice2 === "scissors") {
        return "rock wins";
    } else {
        return "paper wins";
    }
}
if(choice1 === "paper") {
    if(choice2 === "rock") {
        return "paper wins";
    } else {
        if(choice2 === "scissors") {
            return "scissors wins";
    }
}
if(choice1 === "scissors") {
    if(choice2 === "rock") {
        return "rock wins";
    } else {
        if(choice2 === "paper") {
            return "scissors wins";
        }
    }
}
}
};
console.log("player Choice: " + playerChoice);
console.log("Comp Choice: " + compChoice);
compare(playerChoice, compChoice);




