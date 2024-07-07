// 1. Write a program that displays current date and time in
// your browser.

// var todaydate = new Date()
// document.write(todaydate);

// 2. Write a program that alerts the current month in words.
// For example December.

// var today = new Date()
// var month = today.getMonth()
// var months = ["jan","feb","march","apr","may","june","july","aug","sep","oct","nov","dec"];
// document.write("Current month :" +months[month]);

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// var type = prompt("Enter your day");
// var days = ("Sun","Mon","Tue","Wed","Thur","Sat");
// var day = today.getDay(); 
// var today = new Date();
// var str = day.toString();
// alert(days[day][str]);
// if(days == str){
//     alert("today is sat")
// }    
// else{
//     alert("today is not sat");
// }


// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.


// var days = new Date();
// var day = days.getDay();
// var allDays = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
// console.log(allDays[day])
// if(day=="sunday" && days=="sunday"){
//     alert("its a funday")
// }

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”

// var toDay = new Date();
// var date = toDay.getDate()
// var days = ["mon","tues","wed","thur","fri","sat","sun"]
// console.log(date);
// if(date < 16 ){
//     document.write("First fifteen days of the month")
// }
// else{
//     alert("Last days of the month")
// }

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

//   var today = new Date ();
//   document.write("current Date :"+today+"<br>");
//   var millisec = today.getTime()
//   document.write("Elapsed milliseconds since jan 1,1970 :"+ millisec+"<br>")
//  var minutes = today.getTime()/60000
// //  60sec * 1000 millisec 
// var conmin = minutes
// document.write("Elapsed minutes since jan 1,1970 :"+minutes)

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// var today = new Date();
//  var hours = today.getHours()%12;
//  var minutes = today.getMinutes();
//  var ampm ;
//  if(hours>=12){
//     ampm= "AM";
//  }
//  else{
//     ampm = "PM"
//  }
//  document.write("It's PM");

//  8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// var lastdate = new Date ("2020,12,31");
// document.write("<br>"+"later date :"+lastdate);

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

//  var ramadan = new Date("june 18 2015")
//  var today = new Date();
//  var passeddays = today - ramadan
//  var daysdifference =Math.floor(passeddays/(1000*60*60*24));
// document.write("171  days past since 1st ramadan:" +daysdifference);

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

// var decEnd = new Date("12 5 2015");
// var decEndSec = new Date("12 5 2015").getTime() / (1000 * 60);
// var decStrSec = new Date("1 1 2015").getTime() / (1000 * 60);
// var diff = decEndSec - decStrSec;
// document.write(
//   "On reference date :" +
//     decEnd +
//     "<br>" +
//     diff +
//     " seconds has passed since beginning of 2015"
// );
// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

// var today = new Date();
// var hours = today .getHours();
// document.write("current date :"+today+"<br>"+hours+"years ago ,"+today)

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// var userTime = prompt("how many years you want to goback:")
// var date = new Date ();
// var yearsAgo = new Date(date.getTime()-userTime * 365 * 24* 60 *60 *1000)
// alert(date+"100 years Back it was :"+ yearsAgo)

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

// var userInput = prompt("enter your date of birth ","mm-dd-yy");
// var userDate = new Date (userInput).getTime()/(1000*60*60*24*365);
// var userYear = userDate.getFullYear();
// var todayYear = today.getFullYear();
// var yearDiff = todayYear-userYear
// var today = new Date ().getTime()/(1000*60*60*24*365);
// var diff =Math.floor((today-userDate))
// document.write("Your Age is :"+diff+"<br>"+"your birthday year is :")
// document.write("<hr>")


// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,

// var name = prompt("enter your name :");
// var units = 410;
// var chargesPerUnit = 20;
// var currentMonth = new Date();
// var month = currentMonth.getMonth();
// var amountWithinDueDte = units * chargesPerUnit;
// var surCharges = 350;
// var grossAmount = amountWithinDueDte + surCharges;
// document.write(
//     name +
//     "<br>" +
//     "current Month :" +
//     month +
//     "<br>" +
//     "Number of units :" +
//     units +
//     "<br>" +
//     "Charges per Unit :" +
//     chargesPerUnit +
//     "<br>" +
//     "Net amount payable (with in due date): " +
//     amountWithinDueDte +
//     "<br>" +
//     "Late payment surcharges :" +
//     surCharges +
//     "<br>" +
//     "Gross amount Payable (After due Date: " +
//     grossAmount
// );

// chap 31 - 34 has completed.

