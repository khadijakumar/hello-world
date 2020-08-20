//create an array
let shoppinglist = ["frozen yoghurt", "lentiles","microwave popcorn","ice-tea"];
// create paragraph text
let message = document.querySelector("p");
message.textContent += "Your Shopping List:";

// get the ul using its id
let ul1 = document.getElementById("#groceries");
// create li for use of other places
let newli;

// call the function to the shoppinglist
shoppinglist.forEach(myfunction); 
function myfunction(item){
  // declare ul again for the purpose of the function
  ul1 = document.getElementById("#groceries");

  // declare li again for the purpose of the function
  let newli = document.createElement("li");

  // append the li in to the ul again for the purpose of the function
  ul1.appendChild(newli);

  // add all the shoppinglistitems to the list
  newli.textContent = item;
  
  // make the content editable do the user can remove and edit each element
  newli.setAttribute("contenteditable", "true");
}

// create a function to store the usre input
function store(){
  // store the user input
  let  user = document.getElementById("#user").value;
  let li = document.querySelector("li");
  li.textContent = user;
}


// hi mentor, everything seems to be working but i am unable to understand nor fix why the page keeps refreshing instead of just displaying the new item in replacement of frozen yoghurt