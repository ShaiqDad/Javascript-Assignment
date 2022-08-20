// Q-1: Write a JavaScript function that reverse a number.
// var number= +prompt("Enter the Number:");
// function reverseNum(number){
//     var reverseNumber=number.toString().split("").reverse().join("");
//     document.write(reverseNumber);
// }
// reverseNum(number);

// Q-2 Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam, radar or level.

// var palindrome= +prompt("Enter the number or string");
// function reverse(palindrome){
//     var reverseNumber= palindrome.toString().split("").reverse().join("");
//     var reverseValue=reverseNumber.toString();
//     if(reverseValue==reverseNumber){
//         document.write("Palindrome")
//     }else{
//         document.write("not Palindrome")
//     }
// }
// reverse(palindrome);



//Q-7 Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// var str= prompt('Enter the sentence');
// function countVowels(str){
//     var count= str.match(/[aeiou]/gi).length;
//     document.write(str + "<br>"+"Vowels " +count);
// }
// countVowels(str);

//Q-8 Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// var number= prompt("enter the number");
// function prime(number){
//     var n=2;
//     if(number%2==0){
//         document.write("This is prime number");
//     }else{
//         document.write("This is not prime number");
//     }
// }
// prime(number);

//Q-9
// var put= prompt("enter the values");
// function values(put){
//     alert(typeof put);
// }
// values(put);

// Q-10 Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
// function array(arr){
//     arr.sort();
//     var len= arr.length;
//     var lowestSecondNumber= arr[1];
//     var greatestSecondNumber= arr[len-2];
//     document.write("Lowest second number:"+ lowestSecondNumber + "\n" ,"Greatest second number:"+ greatestSecondNumber);
    
// }
// array([1,2,3,4,5]);
