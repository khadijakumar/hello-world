
// create a function that will add all the information from the user and display it in the webpage
function addlist(){
    // call paragraph
    let p = document.getElementById("#Author");
    // store the Authors info
    let input = document.getElementById("#enter").value;
    p.textContent +=" " + " " + "Author:"+ input;
    
    // call paragraph
    let p1 = document.getElementById("#Book");
    // add information about the book
    let input1 = document.getElementById("#enter1").value;
    p1.textContent += " " + " " + "Book:" + input1 ;
    
    // call paragraph
    let p2 = document.getElementById("#Genre");
    // add the Genre off the book
    let input2 = document.getElementById("#enter2").value;
    p2.textContent +=" "+ " " + "Genre:" +  input2;
    
    
    // call paragraph
    let p3 = document.getElementById("#Review");
    // add the review information of the book
    let input3 = document.getElementById("#enter3").value;
    p3.textContent +=" "+ " " + "Review:" + input3;
    
  }