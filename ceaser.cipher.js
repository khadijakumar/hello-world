console.log("Hello! welcome to Your Ceasar cipher. let's create encoded massages :-) \n");
// request user input
let usertext = prompt("please enter your secrete massage: \n");
let cypher ="";
let messages = "";
let revert = "";

function covert(cypher){
  for( let x = 0 ; x <= usertext.length; x++){
     // create an ascii value sentence from the users input
     
      let code = usertext.charCodeAt(x);
     // give options for different inputs and for the Upper case letter inputs
      if(usertext[x] == usertext.toUpperCase()){
        if(code > 65 && code < 76){
          cypher = Number(code) + 15;
          revert += String.fromCharCode(cypher);
          messages = revert;
      
      }
      else if(code => 76){
        cypher = Number(code) - 11;
        revert += String.fromCharCode(cypher);
        messages = revert;
      
      }  
    }
  
    // create an option for the user input if the letter are lower
    
    if( code >79 && code <= 107){
      cypher = Number(code) + 15;
      revert += String.fromCharCode(cypher);
      messages = revert;
    
    }
    else if( code > 107){
      cypher = Number(code) - 11;
      revert += String.fromCharCode(cypher);
      messages = revert;
    }
    

     
  }
  return messages;
} 

// print out the results
console.log("Your  message as per your insert: \n" + usertext);  
console.log("And your encoded message is: \n" + covert(cypher));