// How many of each colour balloon did we order?
// How much do all the balloons cost?
// If it costs R2.00 to inflate each balloon with helium, how much extra would that cost?
// If there are 25 people coming to the party, are there enough balloons for everyone to
// get one balloon? Do you have any spare?

function findHowManyBalloons(qnty1,inputStr){
  var inputStr = inputStr.replace( /sets of /g, "" ); // removes all the commas
  var inputStr = inputStr.replace( /and/,"");
  var inputStr = inputStr.replace(/\.+$/,""); // remove the trailing .
  console.log(inputStr);
  var BalloonList = inputStr.split(','); // split by comma
  console.log(BalloonList);
  console.log('______');

  for (var i = 0; i < BalloonList.length ; i++) { // removes the leading and trailing whitespaces
    BalloonList[i] = BalloonList[i].trim();
  }

  console.log(BalloonList);

  var splitElement = [];
  var balloonQntyAndColour = [];
  BalloonList.forEach(function(balloon) {
    splitElement = balloon.split(' ');
    balloonQntyAndColour.push({
      quantity:Number(splitElement[0]) ,
      color :(splitElement[1]) }); // create an object with 2 keys - quantity and color
    });

  
}






var str1 = '4 sets of red, 3 sets of blue, and 3 sets of yellow.';
var str2 = 'R4 for red, R5 for blue, and R5.50 for yellow.';
var qnty = 3;

var howManyBalloons = findHowManyBalloons(qnty,str1);
