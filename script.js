function hideAll(){

let sections=document.querySelectorAll(".section")

sections.forEach(s=>s.style.display="none")

}

function startBooking(){

hideAll()
document.getElementById("step1").style.display="block"

}

function nextSeats(){

hideAll()
document.getElementById("step2").style.display="block"

}

function nextPayment(){

hideAll()
document.getElementById("step3").style.display="block"

}

function generateSeat(){

let row=Math.floor(Math.random()*10)+1
let seat=Math.floor(Math.random()*20)+1

alert("🎲 Your random seat is Row "+row+" Seat "+seat)

}

function makePayment(){

let success=Math.random()

if(success<0.4){

alert("💀 Payment Failed! Bank says you're broke.")
return

}

let movie=document.getElementById("movie").value
let seats=document.getElementById("seats").value
let payment=document.getElementById("payment").value

let ticket="Movie: "+movie+"<br>"
ticket+="Seats: "+seats+"<br>"
ticket+="Payment: "+payment+"<br><br>"
ticket+="🍿 Popcorn costs more than ticket"

document.getElementById("ticketText").innerHTML=ticket

hideAll()
document.getElementById("ticket").style.display="block"

}

function cancelBooking(){

alert("Booking cancelled. Go watch YouTube instead 😭")

hideAll()

}
