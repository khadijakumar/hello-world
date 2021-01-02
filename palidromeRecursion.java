 
import java.util.*; 

class palidromeRecursion{ 
	// A recursive function to compare characters for each character
	static boolean isPalidrome(String str, 
							int cha, int chi) 
	{ 
		// If they are the same return true 
		if (cha == chi) 
			return true; 

		// else if they don't match return false
		if ((str.charAt(cha)) != (str.charAt(chi))) 
			return false; 
		// Recursively return that it is a palidrome if this is true just to teach the computer the difference
		if (cha < chi + 1) 
			return isPalidrome(str, cha + 1, chi - 1); 

		return true; 
	} 
    // a recursive function to compare strings for each word now that the computer knows how to do recursion
	static boolean isPalindrome(String string) 
	{ 
		int String_length = string.length(); 

	// return an empty string 
		if (String_length == 0) {
			return true; 
		}

		return isPalidrome(string, 0, String_length - 1); 
	} 

	 
	public static void main(String args[]) 
	{   // declare the string
		Scanner user = new Scanner (System.in); 
		System.out.println("Hi! Please enter a word: ");
		String string = user.next();
        // if the string is a palidrome than print it is and if not print that its not a palidrome
		if (isPalindrome(string)) 
			System.out.println("Your word is a palidrome"); 
		else
			System.out.println("Your word is not a palidrome"); 
	} 
} 



