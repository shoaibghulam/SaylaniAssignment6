//             chapters  21-25

// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var firstName = prompt("Enter First Name");
// var lastName = prompt("Enter Last Name");
// var fullName= firstName + " "+ lastName;
// alert(fullName)


// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var mobileModel= prompt("Enter Mobile Model")
//   console.log("Lenght of String "+mobileModel.length)


// 3.Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser

// var country="Pakistani";
// console.log(country.indexOf('n'));

// 4.Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.
// var country="Hello World";
// console.log('last index of ' +country.lastIndexOf("l"));

// 5.Repeat Q1 using string concat() method.
// var firstName = prompt("Enter First Name");
// var lastName = prompt("Enter Last Name");
// var fullName= concat(firstName , " ", lastName);
// console.log(fullname); error
// it is impossible to add to string becuase it is used for array



//6.Write a program to replace the “Hyder” to “Islam” in the
//word “Hyderabad” and display the result in your browser.
// var city= "Hyderabad";
// var res= city.replace('Hyder','Islam');
// console.log(res);

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

// var msg="Ali and Sami are best friends. They play cricket and football together.";
// var x= msg.repeat('and');
// console.log(x);
// var res= msg.replace('and','&');
// var final= res.replace('and','&');
// console.log(final); 





// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
// var data="472";
// var x= parseInt(data);
// console.log(typeof(x));

// 10. Write a program that takes user input. Convert and
// // show the input in capital letters.
// var toCapital=prompt("Enter Input")
// console.log(toCapital.toUpperCase());


// 11. Write a program that takes user input. Convert and
// show the input in title case.


// function toTitle(str) {
  
//     str = str.toLowerCase();

//     str = str.split(' ');
   
//     for (var i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  
//     }
    
  
//     return str.join(' '); 
//   }
//   var title=prompt("enter title");
//   console.log(toTitle(title));

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
// var data=35.36;
// var res= data.toString();
//  console.log(res.replace('.',''));


// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// var username=prompt("Enter username");
// if(/[^a-zA-Z0-9\-\/]/.test(username)){
//     alert("Please Enter Valid Username");
// }
// else{
//     alert("Login Successful");
// }



// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:
// var order= prompt("Welcome to Baloch Bakkery  what do you want");
// var item = ["cake", "apple pie", "cookie", "chips", "patties"];
// item.forEach(datas);
// function datas(items,index){
//    if(order==items){
//        console.log(order +" is available it index no "+ index);
//    }
    
// }


// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// // table at the end of this document.


// var password= prompt("enter password");
//     // Validate lowercase letters
//     var lowerCaseLetters = /[a-z]/g;
//     var upperCaseLetters = /[A-Z]/g;
//     var numbers = /[0-9]/g;
//     if(password.match(lowerCaseLetters) && password.match(upperCaseLetters) && password.match(numbers) && password.length <=6) {
//          alert("Password is correct");
//     }
//     else{
//         alert("Plase enter correnct password");
//     }


// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser. 
// var university = "University of Karachi";
// var data = university.split('');
// data.forEach(mydata);
// function mydata(item){
//    console.log(item)
// }

// 17. Write a program to display the last character of a user
// // input.
// var data= "shoaib ghulam";
// var x= data.length;
// console.log(data.charAt(x-1));

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.


// var msg="The quick brown fox jumps over the lazy dog";
// var count=0;
// occurrences = msg.split(' ');
// occurrences.forEach(counter);
// function counter(word){
   
//    if(word=='the' || word=="The"){
//        count++;
//    }
   
// }
// console.log(count);





//     chapters26 to 30


// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
// var val = parseFloat(prompt("Enter value"));
// console.log("real value "+ val);
// var valround= Math.round(val);
// var valfloor= Math.floor(val);
// var valceil= Math.ceil(val);
// console.log('The round Value '+ valround)
// console.log('The floor Value '+ valfloor)
// console.log('The ciel Value '+ valceil)


// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// var val = parseFloat(prompt("Enter value"));
// console.log("real value "+ val);
// var valround= Math.round(val);
// var valfloor= Math.floor(val);
// var valceil= Math.ceil(val);
// console.log('The round Value '+ valround)
// console.log('The floor Value '+ valfloor)
// console.log('The ciel Value '+ valceil)


// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var val = parseFloat(prompt("Enter value"));
// var myval = Math.abs(val)
// console.log(myval);


// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:
// var dice = Math.floor(Math.random()*6)+1;
// document.write(`<h1 style="text-align:center;">random dice value: ${dice} </h1>`);

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser
// var coin = Math.floor(Math.random()*2)+1;
// if(coin == 2){
//     console.log(coin+' random coin value: Head');
    
// }
// else{
//     console.log(coin+' random coin value: Tails');

// }


// // 6. Write a program that shows a random number between 1
// // and 100 in your browser.
// var number = Math.floor(Math.random()*100)+1;
// console.log('random number between 1 and 100: '+number);


// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// var weight = prompt("Enter your weaight");
//  document.write("Your weight is "+weight);



// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

// var number = parseInt(prompt("Enter a number between 1 to 10"));
// var secret = Math.floor(Math.random()*10)+1;
// if(number==secret){
//     alert("congratulate the user");
// }
// else{
//     alert('Try Again');
// }


// chapters31 to 34
const monthalpa = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dtime = new Date();

// 1. Write a program that displays current date and time in
// your browser.
// let dtime= new Date();
// document.write(dtime);


// 2. Write a program that alerts the current month in words.
// For example December.

// let month = dtime.getMonth();
// alert(monthalpa[month]);


// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.
// let day = dtime.getDay();
// alert(days[day]);



// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.
// let day=days[dtime.getDay()];

// if (day=='Sunday' || day=='Saturday'){
//     alert("it's fun day");
// }


// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// date= dtime.getDate();

// if(date<16){
//     alert('First fifteen days of the month')
// }
// else{
//     alert('Last days of the month');
// }


// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.
// let midnight = new Date(1970,1,1);
// document.write('Current Date '+ dtime);
// let second =dtime.valueOf();
// let minute =  dtime - midnight;
// document.write('<br>Elapsed millisecond since January 1 , 1970 :'+ second);
// document.write('<br>Elapsed minute since January 1 , 1970 :'+ minute);


// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// let hours = dtime.getHours();
// let amorpm = hours >= 12 ? 'PM' : 'AM';
// alert("it's  "+amorpm)

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// let lastyear = new Date("2020-12-30");
// document.write(lastyear);

// Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
// let rdate= new Date('2015-6-18');
// nowdate = dtime.getDate()* rdate.getDate();
// document.write(nowdate+' days have passed since 1st Ramadan , 2015')


// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015
// let rdate= new Date('2015-6-18');
// let minute =  dtime - rdate;
// document.write('<br>on Referece Dat set  :'+ rdate);
// document.write('<br>Elapsed seconds since January 1 , 1970 :'+ minute);


// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.
// let birthyear= new Date('1996');
// age = dtime.getFullYear() - birthyear.getFullYear();
// document.write('your age is '+ age+'<br> your birth year is '+ birthyear.getFullYear());

//   chapters35-38

// 1. Write a function that displays current date & time in your
// browser.
//  const datetime = () => {
//      let d = new Date()
//      document.write(d);
//  }
//  datetime();

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.
// const greets= (fname , lname)=>{
//     document.write("welcome  "+ fname +" "+ lname);
// }
// greets('Shoaib','Ghulam');


// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.
// const sum =( x ,y )=> x+y;

// let x=sum(22,3);
// document.write(x);


// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

// function Calculator(num1,num2,num3,operator){
//   switch(operator){
//       return num1+num2+num3;
//     break;
//     case '-':
//       return num1-num2-num3;
//       break;
//       case '*':
//       return num1*num2*num3;
//     break;
//     case '/':
//       return num1/num2/num3;
//     break;
//     default:
//       return "Operator Not found"

//   }
// }
// let x=Calculator(2,2,2,'s');
// alert(x);

// // 5. Write a function that squares its argument.
// const sqr= num=> Math.sqrt(num);
// let x= sqr(2);
// document.write(x);

// 6. Write a function that computes factorial of a number.
// const factorial= num =>{
//      let result =1;
//     for(let x=1 ; x<=num; x++){
//       result=result*x;
//       document.write(x+" ");
//     }
//     document.write("="+result);
// }
// factorial(3);

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// function hyp(side1,side2){
//   let h;
//   h = (((side1 * side1) + (side2 * side2))**(1/2)); 
//   return h; 
// }
// let x=hyp(2,2)
// document.write(x);


// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
// function area(width,height){
//     return width*height;
// }
// let a= area(2,2);
// document.write("The Area of width and height= "+a);


// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

// function palindrome(str) {
  
//   var checker = /[\W_]/g; 
  
//   var lowRegStr = str.toLowerCase().replace(checker, '');
// var reverseStr = lowRegStr.split('').reverse().join(''); 
//  return reverseStr === lowRegStr; 
// }

// let data=palindrome("A man, a plan, a canal. Panama");
// document.write(data);


// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
// function sentence(str){
//   let x = str;
//   let y = x[0].toUpperCase();
//   let data =  str.replace(str[0],y);
//   document.write(data);
  
// }
// sentence('my name is shoaib');


// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'
// function wordsize(str){
//   var bigword="";
//   let data = str.split(' ');
//    let x =data.length;
//    for(let y=0; y<=x; y++){
//       for(let z=0; z<=x; z++){
//       if(data[y].length > data[z].length){
//        bigword=data[z];
//       }
     
//    }
   
//   }
//   alert(ans);
// }

// wordsize('Webbbbbbbbbbbbbbbbbbbbbb Devselopment Tutorial');