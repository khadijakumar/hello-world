<!-- Hi!  before we begin,since we are separating the html anad php pages we need to keep them connected using include_once, as follows:-->
<?php include_once("user.php") ?>

<!DOCTYPE>
<html>
 <!--cool! here we will first create a logout link so that when the user clicks it, they will be automatically logged out of the page or session,as follows:-->
   <header>
     <h3>Please enter your details to SignUp :-)</h3>
    </header>
  </head>
  <body>
  
  <!--now lets create a basic html form-->
  <form action="user.php" method= "post">
   Full Name:<br> <input name="fullname" id="fullname" type="text"><br><br>
   Username:<br> <input name="username" id="username" type="text"><br><br>
   Date of birth: <br> <input type="date" name="DOB" id="DOB"><br><br>
   <!--quick note, placing the action attribute by the button clicks will help if you have multiple actions i.e in this case we have one action that will send the form data for processing to user.php. -->
   <input action="user.php" name="fullname" type="submit" value="SignUp"><br><br>
  </form> 
  </body>
</html>