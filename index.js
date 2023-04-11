let checkEligibility= () => {

    let salary = document.getElementById("sal").value;
    let cibil = document.getElementById("cb").value;

    var eligible;

if(salary > 21000 && cibil >= 700)
eligible = 'You are eligible to take loan';
else if(salary > 25000 || cibil > 800)
eligible = 'You are eligible';
else if(salary <= 21000  && cibil > 700)
eligible = 'We are sorry!'

document.getElementById('eligible').innerHTML =
        '<b>' + eligible + '</b>';
}
  

let reload = () =>{
    window.location.reload()
}

var myDate = new Date();
var hrs = myDate.getHours();

var greet;

switch (true) {
  case hrs > 17 : greet = "Good Evening </br> Welcome to  our Loan App!";
  break;
  case hrs > 12 : greet = "Good Afternoon </br> Welcome to  our Loan App!";
  break;
  case hrs > 6 : greet = "Good Morning </br> Welcome to  our Loan App!";
  break;
  default: greet = "Welcome... Sorry we are out for maintenance";
}

document.getElementById('greet').innerHTML =
'<b>' + greet + '</b> Please check your Loan eligibility.';