function showPage(page){

let pages=document.querySelectorAll(".page");

pages.forEach(p=>p.style.display="none");

document.getElementById(page).style.display="block";

}

showPage("home");


function selectSeat(seat){

alert("You selected seat: "+seat);

if(Math.random()>0.5){

alert("Seat already taken! Try again!");

}

}


function cancelBooking(){

alert("Booking Confirmed Successfully!");

alert("Or maybe not...");

}


function confirmBooking(){

alert("Booking Cancelled!");

alert("Thank you for nothing.");

}