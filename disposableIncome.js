

//  create an income array to store the object
 const incomes = [];
 const expenses = [];
// create a function to add all the incomes
function add (ev){
  
  // create an object to store the users information

  //create the incomes object
  let income = {
    name : document.getElementById("#income").value,
    amount : document.getElementById("#income1").value
  }
  // crate a the expenses object
  let expense = {
    name : document.getElementById("#expenses").value,
    amount : document.getElementById("#expenses1").value
  }
 
  
  // append the expense object in to the array
  expenses.push(expense);
  // clear the form for more inputs
  document.querySelector("form").reset();
  
  
  // display the expenses in the webpage
  let p1 = document.getElementById("#FinancialEX");
  p1.textContent = "\n" + JSON.stringify(expenses), "t", 2
  ;
  // store the object
  sessionStorage.setItem("expenses", JSON.stringify(expenses)); 
 

  // append the object into the empty array
  incomes.push(income);
  // clear the for for more entries
  document.querySelector("form").reset();
  
  
  //display the objects on the webpage
  let p = document.getElementById("#FinancialS");
  p.textContent = "\n" + JSON.stringify(incomes, "t", 2);

  //save the object in storage
  sessionStorage.setItem("incomes:", JSON.stringify(incomes));
  
  disposableIncome();
  
  if(income.amount == ""){
    income.amount = 0;
  }else{document.getElementById("#FinancialS");
  p.textContent = "\n" + JSON.stringify(incomes, "t", 2);}
  
  // create a pop up message
  let txt;
  let person;
  person = alert("Please more sources of income or expenses you might have!");
  
  if (person == null || person == " ") {
    txt = "User cancelled the prompt.";
  } 
  else {
    txt = "Extra: "+ person ;
  }
}
// create an event listener function
document.addEventListener("DOMContentLoader", (event) => {
  document.getElementById("#income").addEventListener("click", addIncome());
});


// create an event listener function
document.addEventListener("DOMContentLoader", (event) =>{
  document.getElementById("#button2").addEventListener("click", addExpense());
});

//create a fuction to get the total amount of disposable income
let total;
function disposableIncome(){
 // iterate through the income values to get the total income
  totalincome =0;
  for(x = 0; x < incomes.length ; x++){
    totalincome += parseFloat(incomes[x].amount);
  }
  document.getElementById("#Total").textContent += "\n" +  totalincome;
  // iterate through all the expenses to get  the total monthly expenses
  totalexpenses =0;
  for(y= 0; y < expenses.length ; y++){
    totalexpenses += parseFloat(expenses[y].amount);
  }
  document.getElementById("#Total").textContent += "\n" + totalexpenses;
  // subtract the totalexpenses from the total income
  let total = totalincome - totalexpenses;
  
  // display the disposable income
  document.getElementById("#Total").textContent = "Your Total Disposable income is: " + " " + total;
}