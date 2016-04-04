// Write a function:
//
// * that can find all the numbers in a sentence;
// * that find all words shorter than 3 in a sentence;
// * that can find all the numbers in a sentence bigger than 15;
// * that count all the words in a sentence;
// * that count all numbers in a sentence.
// Use this sentence to test:
//
// I saw 3 bears, and 7 toads in 50 meters from the tallest tree in the park.
//
// But use other sentences to test it as well.

function findNumbersInASentence(inputStr){
  var nums = [];
  var inputStr = inputStr.replace( /,/g, "" ) // removes the comma's
  var inputStr = inputStr.replace(/\.+$/,""); // remove the trailing .
  console.log(inputStr);
  var splitLine = inputStr.split(' '); // splits by the array
  console.log(splitLine);
  splitLine.forEach(function(line){
      if(!isNaN(line)) {
        nums.push(Number(line));
      }
  })
  return nums ;
}

function findWordsLessThanThree(inputStr) {
  var inputStr = inputStr.replace( /,/g, "" ); // removes all the commas
  var inputStr = inputStr.replace(/\.+$/,""); // remove the trailing .
  // console.log(inputStr);
  var splitLine = inputStr.split(' ');        // splits the line by space
  console.log("findWordsLessThanThree:" + splitLine);
  var shortWords = splitLine.filter(function(word){
    if (isNaN(word)) {
      return word.length < 3;
    } // if
  }) // filter
  return shortWords;
} // function

var inputString = 'I saw 3 bears, and 7 toads in 50 meters from the tallest tree in the park.';
// var sentenceNumbers = findNumbersInASentence(inputString);
// console.log("The numbers in the sentence are :" + sentenceNumbers);

var shortWordsinSentence = findWordsLessThanThree(inputString);
console.log("The shortWords in the sentence < 3 :" + shortWordsinSentence);
