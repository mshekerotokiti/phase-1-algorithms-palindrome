function isPalindrome(word) {
  // Write your algorithm here
  //create a function to check for palindrome that returns true or false
   // convert string to an array
  //reverse the array values
   // convert array back to a string
  //set conditions to check for palindrome
}

/* 
  Add your pseudocode here
function isPalindrome with a one argument =:string
declare variable then split the string:  anArray=string.split("")
 declare variable for reversing the array: reverseArray=anArray.reverse()
 declare variable to convert array back to string: reverseArrayString=reverseArray.join("")
 conditions: if string === equals to the reverseArrayString :return ('It is a palindrome');

  else : return('It is not a palindrome') 

//call the function
isPalindrome("madam")
isPalindrome("ab")

*/

/*
  Add written explanation of your solution here
*/
function isPalindrome(string) {
  const anArray = string.split('');

  const reverseArray = anArray.reverse(); 

  const reverseArrayString = reverseArray.join('');

  if(string === reverseArrayString) {
      return true
  }
  else {
     return false
  }
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"))

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
isPalindrome("abba");
isPalindrome("racecar");
isPalindrome("a");
isPalindrome("robot");
isPalindrome("ab");
