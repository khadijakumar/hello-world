
import java.util.Scanner;

class LCMRecursion{
  // create a function to find the lcm of two  values
	// method to recursively return the LCM method below
    public static int ReturnLCM(int x, int y) 
    { 
    if (x == 0) 
        return y;  
    return ReturnLCM(y % x, x);  
    } 
      
    // method to return LCM of two numbers i.e the lowest common of the multiples of each of the numbers
    static int LCM(int x, int y) 
    { 
        return (x*y)/ReturnLCM(x, y); 
    }
    
  public static void main(String[]args){
    LCMRecursion lcm = new LCMRecursion();
    Scanner request = new Scanner(System.in);
    System.out.println("Please enter the first number:");
    int x = request.nextInt();
    System.out.println("Please enter the second number:");
    int y = request.nextInt();
    System.out.println("The Lowest Common Multiple of " + x + " and " + y + " is " + LCM(x,y));
  }
}
