var string = 'Xola is 13, Peter is 18, Oya is 29, Ellie is 20, Sive is 27';
var newString1 = string.replace(/is /g,"");
console.log(newString1);
console.log('______');

// var peopleList = newString1.split(', '); // split by comma and space
var peopleList = newString1.split(','); // split by comma
console.log(peopleList);
console.log('______');


for (var i = 0; i < peopleList.length ; i++) { // removes the leading and trailing whitespaces - but not working
  peopleList[i] = peopleList[i].trim();
}
console.log(peopleList);
console.log('______');

var nameAndAge = [];
var splitElement = [];
peopleList.forEach(function(person) {
  splitElement = person.split(' ');
  nameAndAge.push({
    name:(splitElement[0]) ,
    age :Number(splitElement[1]) }); // create an object with 2 keys - name and age with values
  });

console.log(nameAndAge);
console.log('______');


function findYounger(personObj){
  var Names = [];
  var personAge = personObj.age ;
  console.log("Input person name is : " + personObj.name + " input age:" + personObj.age);
  for (i in nameAndAge){
    if (nameAndAge[i].age < personAge) {
      Names.push(nameAndAge[i].name);
      console.log ("Names with ages less than 20 :" + Names);
    } // if
  } // for'
  return Names;
} // function

var names = findYounger(nameAndAge[3]);
console.log("People's names who have ages less than 20 :" + names);
