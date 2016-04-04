// TRAFFIC LIGHT DASH!
//
// Write a function that can answer this questions by parsing this string:
//
// There are 9 traffic lights on my way to work. On my way in 3 were red, 2 were green.
//
// How many lights were orange?
//
// Make sure this function work for other journeys too!

function findOrange(inputString){
  var newString = inputString.split(" ");
  // console.log(newString);
  var numbers = [];
  for (var i = 0 ; i < newString.length ; i++) {
      if (!isNaN(newString[i])) {
        numbers.push(Number(newString[i]));
      }
  }
    console.log("Numbers array :" + numbers);

    var noOfOrange = numbers[0] - numbers[1] - numbers[2];
    // console.log("No of orange lights: " + noOfOrange);
    return noOfOrange ;
}

var string = 'There are 9 traffic lights on my way to work. On my way in 3 were red, 2 were green.'
var noOfOrange = findOrange(string);
console.log("The no of orange traffic lights are " + noOfOrange);
