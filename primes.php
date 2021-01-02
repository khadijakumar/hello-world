<html>
  <head>
    <title>PHP Test</title>
  </head>
  <body>
    <?php 
      # we will first request the user for a number of choice 
      $usernum = readline('please enter a number of coice :');
   
      # now we will create a function that will determine if the number enetered by the user is a prime number or not..lets see..
     function isPrime(){

        if($usernum % 2 === 0){
      
         echo 'Congradulations! This is definintely a prime number.';
        }
        else{
       
         echo 'Sorry, this is not a prime number';
        }
      }
      isPrime();
      # now lets print the first 10 prime numbers using the html ul(for unordered lists)..

      # first lets create an array of prime numbers
      $primes = [2,3,5,7,11,13,17,19,23,29];
      
      echo '<h1 style= color:maroon> Here are the first 10 Prime numbers.</h1><br>';
      # now to print them down the list as points we use <li>, we use a for esch loop to retrieve each value of the array.
      foreach($primes as $number){
         echo '<ul><li> '. $number.'</li></ul>';
      }
    ?> 
    
  </body>
</html>
