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
  var splitLine = inputStr.split(' '); // splits by space and puts it in an array
  console.log(splitLine);
  console.log("_____________________________________________")
  splitLine.forEach(function(line){
      if(!isNaN(line)) {                   // checking if it is a number
        nums.push(Number(line));           // pushes it into the array nums
      }
  })
  return nums ;
}

function findWordsLessThanThree(inputStr) {
  var inputStr = inputStr.replace( /,/g, "" ); // removes all the commas
  var inputStr = inputStr.replace(/\.+$/,""); // remove the trailing .
  // console.log(inputStr);
  var splitLine = inputStr.split(' ');        // splits the line by space
  // console.log("findWordsLessThanThree:" + splitLine); // shows the array
  // console.log("_____________________________________________")
  var shortWords = splitLine.filter(function(word){
    if (isNaN(word)) {                        // using filter , if its a word return
      return word.length < 3;                 // if the length is < 3 characters
    } // if
  }) // filter
  return shortWords;                          // returns it to the calling function
} // function

function findNumBiggerThan15(sentenceNumbers){
  var noBiggerThan15 = sentenceNumbers.filter(function(num){ // filer the string input sentenceNumbers
    return num > 15;                                         // returning numbers > 50 to var noBiggerThan15
  })
  // console.log("Nums > 15: " + noBiggerThan15);
  return noBiggerThan15;                                     // returns this to the calling function
}

function findWordCount (inputStr) {
  var inputStr = inputStr.replace( /,/g, "" ); // removes all the commas
  var inputStr = inputStr.replace(/\.+$/,""); // remove the trailing .
  // console.log(inputStr);
  var splitLine = inputStr.split(' ');        // splits the line by space
  var wrdCount = 0 ;
  splitLine.forEach(function(word){
    if (isNaN(word)) {                        // if the string is not a number ie a wordCount , increment count
      wrdCount++;
    } // if
  }) // forEach
  // console.log("words count " + wrdCount);
  return wrdCount;
}

function findNumberCount(sentenceNum) {
  var totalNums = 0 ;
  for (i in sentenceNum) {
    totalNums++ ;
  }
  // console.log("total nums :" + totalNums);
  return totalNums ;
}

// var inputString = 'I saw 3 bears, and 7 toads in 50 meters from the tallest tree in the park.';
var inputString = 'I saw 35 bears, and 17 toads in 50 meters ,1 meter from the ground from the tallest tree in the Linkin garden parks.';
var sentenceNumbers = findNumbersInASentence(inputString);
console.log("The numbers in the sentence are : " + sentenceNumbers);
console.log("_____________________________________________");

var shortWordsinSentence = findWordsLessThanThree(inputString);
console.log("The shortWords in the sentence < 3 : " + shortWordsinSentence);
console.log("_____________________________________________");

var numbersBiggerThan15 = findNumBiggerThan15(sentenceNumbers); // parsing sentenceNumbers
console.log("The numbers in the sentence > 15 : " + numbersBiggerThan15)
console.log("_____________________________________________");

var numCount = findNumberCount(sentenceNumbers);
console.log("The total number count in the sentence : " + numCount);
console.log("_____________________________________________");

var wordCount = findWordCount(inputString);
console.log("The total word count in the sentence : " + wordCount);
console.log("_____________________________________________");
