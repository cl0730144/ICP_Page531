/*Individual Case Project
  Author: Chris Liddell
  Date:   April 18, 2020

calculates the time elapsed since a date entered by a user. The page should include a form 
that allows users to enter a day, month, and year. The page should then calculate and display 
the elapsed time in years, months, and days. Note that your program must include code to convert 
day values in excess of into months, and months in excess of   into years.

*/

"strict mode";

var dt = document.getElementById("day").value;  	
var mth = document.getElementById("month").value;
var yr = document.getElementById("year").value;
var cDt = new Date();   									//Gets current date (to the millisecond).
var userDate = new Date();

function timeElapsed(){
   userDate = new Date(dt + '/'+ mth + '/' + yr);
   var years = cDt.getFullYear() - userDate.getFullYear();
   var months = cDt.getMonth() - userDate.getMonth
   userDate.setYear( cDt.getFullYear() );

   if(today < userDate){
      years-- ;
   }
   alert("You are " + years + " years old.");
}


//get the current date
function currDate(){   
   var cMonth = cDt.getMonth()+1;
   var cDay = cDt.getDate();
   var cYear = cDt.getFullYear();

   //tester
   alert(cMonth + '/' + cDay + '/' + cYear);
}

	//place value in results paragraph
	document.getElementById("results").innerHTML = total;
}

//event listener
 function createEventListener() {
        var submitButton = document.getElementById("submitBtn");
          if(submitButton.addEventListener) {
            submitButton.addEventListener("click", getSum, false);
          } else if (submitButton.attachEvent) {
            submitButton.attachEvent("onclick", getSum);
          }
      }

if (window.addEventListener) {
        window.addEventListener("load",createEventListener, false);
      } else if (window.attachEvent) {
        window.attachEvent("onload", createEventListener);
      }


