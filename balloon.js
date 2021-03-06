// How many of each colour balloon did we order?
// How much do all the balloons cost?
// If it costs R2.00 to inflate each balloon with helium, how much extra would that cost?
// If there are 25 people coming to the party, are there enough balloons for everyone to
// get one balloon? Do you have any spare?

function findHowManyBalloons(qnty1,inputStr){
  // console.log(qnty1);
  var inputStr = inputStr.replace( /sets of /g, "" ); // removes all the sets of
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
    console.log(splitElement);
    balloonQntyAndColour.push({
      quantity:Number(splitElement[0]) ,
      color :(splitElement[1]) }); // create an object with 2 keys - quantity and color
      // console.log(balloonQntyAndColour);
    });

    var balloonQuantity = [];
    // var howmany = 0;
    for (var i = 0 ; i < balloonQntyAndColour.length ; i++) { // displaying my map
      balloonQuantity[i] = qnty1 * balloonQntyAndColour[i].quantity;
      console.log("quantity:" + balloonQuantity[i]) ;
    }
    return balloonQuantity;
}

//How much do all the balloons cost?
function findHowMuchBalloons(howManyBalloons,inputStr) {
  var inputStr = inputStr.replace( /for /g, "" ); // removes all the fors
  var inputStr = inputStr.replace( /and/,""); // removes and
  var inputStr = inputStr.replace( /R/g,""); // removes R
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
  var balloonPriceAndColour = [];
  BalloonList.forEach(function(balloon) {
    splitElement = balloon.split(' ');
    console.log(splitElement);
    balloonPriceAndColour.push({
      price:Number(splitElement[0]) ,
      color :(splitElement[1]) }); // create an object with 2 keys - price and color
      console.log(balloonPriceAndColour);
    });

    var balloonPrice = [];
    var totalCost = 0;
    for (var i = 0 ; i < balloonPriceAndColour.length ; i++) { // displaying my map
      balloonPrice[i] = howManyBalloons[i] * balloonPriceAndColour[i].price;
      totalCost += balloonPrice[i];
      console.log("price:" + balloonPrice[i] + "total:" + totalCost) ;
    }
    return totalCost;
  }

function addHelium (helium,howManyBalloons) {
  var heliumExtra = [];
  var totalHelium = 0;
  howManyBalloons.forEach(function(balQnty){
    heliumExtra = helium * balQnty;
    totalHelium += heliumExtra ;
    // console.log("Helium for each color:" + heliumExtra + " totalHelium: " + totalHelium);
  })
  return totalHelium;
}

function findBalloonsPerPerson(noOfPeople,howManyBalloons){
  var balloonsPerPerson = [];
  var totalNoOfBalloons = 0;
  howManyBalloons.forEach(function(numOfBalloons){
    totalNoOfBalloons += numOfBalloons;
  })

  console.log("totalNoOfBalloons:" + totalNoOfBalloons);
  var spareBalloons = totalNoOfBalloons % noOfPeople ;
  console.log("Spare balloons :" + spareBalloons);
  return spareBalloons;
}

// How many people won’t have balloons?
// Which colour has the most balloons, and which one has the least?
// var str3 = "5 red balloons, 1 blue balloon, and 3 yellow balloons popped";
function findWhoWontHaveBalloons(inputStr,howManyBalloons) {
  var inputStr = inputStr.replace( /balloons/g, "" ); // removes all the balloons
  var inputStr = inputStr.replace( /balloon/g, "" ); // removes all the balloon
  var inputStr = inputStr.replace( /and/,"");
  var inputStr = inputStr.replace( /popped/,"");
  console.log("inputStr:"+ inputStr);

var BalloonList = inputStr.split(','); // split by comma
console.log(BalloonList);
console.log('______');

for (var i = 0; i < BalloonList.length ; i++) { // removes the leading and trailing whitespaces
  BalloonList[i] = BalloonList[i].trim();
 }
 console.log(BalloonList);
 console.log('______');

 var splitElement = [];
 var balloonNoAndColour = [];
 BalloonList.forEach(function(balloon) {
   splitElement = balloon.split(' ');
   console.log(splitElement);
   balloonNoAndColour.push({
     num: (splitElement[0]) ,
     color :(splitElement[1]) }); // create an object with 2 keys - num and color
     console.log(balloonNoAndColour);
   });

   var howManyPopped = 0;
   for (var i = 0 ; i < balloonNoAndColour.length ; i++) {
     howManyPopped += Number(balloonNoAndColour[i].num);
   }
   console.log("how many popped:" + howManyPopped);
   var values = [];
   values.push(howManyPopped);

   var howManyOfPerColor = [];
   for (var i = 0 ; i < howManyBalloons.length ; i++) {
     howManyOfPerColor[i] = howManyBalloons[i] - balloonNoAndColour[i].num;
     console.log("howManyOfPerColor : " + howManyOfPerColor[i]);
     values.push(howManyOfPerColor[i]);
   }

   console.log(values);
   return values ;
}

var str1 = '4 sets of red, 3 sets of blue, and 3 sets of yellow.';
var str2 = 'R4 for red, R5 for blue, and R5.50 for yellow.';
var qnty = 3;

var howManyBalloons = findHowManyBalloons(qnty,str1);
console.log("How many balloons for red :" + howManyBalloons[0] + " blue :" + howManyBalloons[1] + " yellow :" + howManyBalloons[2] );
console.log('______');

var howMuchBalloons = findHowMuchBalloons(howManyBalloons,str2);
console.log("Total cost for all balloons:" + howMuchBalloons) ;
console.log('______');

var helium = 2;
var totalHeliumCost = addHelium(helium,howManyBalloons);
var totalCostWithHelium = howMuchBalloons + totalHeliumCost ;
console.log("Total cost with helium : " + totalCostWithHelium);
console.log('______');

var noOfPeople = 25;
var yayOrnay = "no" ;
var spares = findBalloonsPerPerson(noOfPeople,howManyBalloons);
if (spares > 0)
  { yayOrnay = "yes"};

console.log("Are there enough balloons per person ?" + yayOrnay);
console.log("The number of spare balloons are :" + spares);
console.log('______');

// How many people won’t have balloons?
// Which colour has the most balloons, and which one has the least?

var str3 = "5 red balloons, 1 blue balloon, and 3 yellow balloons popped";
var poppedTotal = findWhoWontHaveBalloons(str3,howManyBalloons);
console.log('______');
console.log("No of balloons which popped:" + poppedTotal[0]);
console.log('______');
console.log("No of ballons remaining - red:" + poppedTotal[1] + " blue:" + poppedTotal[2] + " yellow:" + poppedTotal[3]);
