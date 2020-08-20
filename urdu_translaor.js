console.log("Welcome! let's learn Urdu." + "\n");
// create key value pairs.
console.log("words to translate:");
let myMap = new Map();
myMap.set("1) Love", "Ishq");
myMap.set("2) Hot", "Gharam");
myMap.set("3) Difficult", "Mushkil");
myMap.set("4) Journey", "Manzil");
myMap.set("5) Heart", "Dil");
myMap.set("6) Your", "Teri");
myMap.set("7) Life", "Zindagi");
myMap.set("8) Short", "chota");
myMap.set("9) Big", "Bara");
myMap.set("10) Rose garden", "Gulzar");
// print out the key options to translate
for(let [key, values] of myMap){
  console.log( key );
}
// request user input
let user = prompt("Please select one of these words to translate into urdu:");
Number(user);

//give user options
if(user == 1){
    console.log( "your choosen word: Love is " + myMap.get("1) Love") + " in Urdu");
    
  }
else if(user == 2){
    console.log( "your choosen word: Hot is " + myMap.get("2) Hot") + " in Urdu");
    
  }
else if(user == 3){
    console.log( "your choosen word: Difficult is " + myMap.get("3) Difficult") + " in Urdu");
   
  }
else if(user == 4){
    console.log( "your choosen word: Journey is " + myMap.get("4) Journey") + " in Urdu");
    
  }
else if(user == 5){
    console.log( "your choosen word: Heart is " + myMap.get("5) Heart") + " in Urdu");
    
  }
else if(user == 6){
    console.log( "your choosen word: Your is " + myMap.get("6) Your") + " in Urdu");
    
  }
else if(user == 7){
    console.log( "your choosen word: Life is " + myMap.get("7) Life") + " in Urdu");
    
  }
else if(user == 8){
    console.log( "your choosen word: Short is " + myMap.get("8) Short") + " in Urdu");
    
  }
else if(user == 9){
    console.log( "your choosen word: Big is " + myMap.get("9) Big") + " in Urdu");
   
  }
else if(user == 10){
    console.log( "your choosen word: Rose garden is " + myMap.get("10) Rose garden") + " in Urdu");
    
  }
else{
    console.log("The word you are looking for is not in the list.");
  }