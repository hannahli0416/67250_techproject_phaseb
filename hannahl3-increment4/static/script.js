var x = 7
var y = 5
var z = x + y
console.log(z)
var A = "Hello "
var B = "world!"
var C = A + B
console.log(C)

function sumnPrint(x1, x2) {
    var result = x1 + x2;
    console.log(result);
}

sumnPrint(x, y)
sumnPrint(A, B)

if (C.length > z) {
    console.log(C);
}
else if (C.length < z) {
    console.log(z);
}
else {
    console.log("good job!");
}

L1 = ["Watermelon","Pineapple","Pear","Banana"];
L2 = ["Apple","Banana","Kiwi","Orange"];

// function findTheBanana(L) {
//     for (var i = 0; i < L.length; i++) {
//         if (L[i] === "Banana") {
//             alert("Found the banana!");
//         }
//     }
// }

// findTheBanana(L1);
// findTheBanana(L2);

var now = new Date();
var hour = now.getHours();

function greeting(x) {
    var greetingElem = document.getElementById("greeting");
    if (window.location.pathname.includes("index.html") &&greetingElem) {
        if (x >= 20 || x < 5){
            greetingElem.innerHTML = "Good night!";
        }
        else if (x < 12) {
            greetingElem.innerHTML = "Good morning!";
        }
        else if (x < 18) {
            greetingElem.innerHTML = "Good afternoon!";
        }
        else {
            greetingElem.innerHTML = "Good evening!";
        }
    }
        
}

function addYear() {
    var yearElem = document.getElementById("copyYear");
    if (yearElem) {
        var currentYear = new Date().getFullYear();
        yearElem.innerHTML = "© " + currentYear + " MonoMuse. All rights reserved.";
    }
}

function ActiveNav() {
    const navLinks = document.querySelectorAll('.nav_bar a');
    navLinks.forEach(link => {
        if (window.location.href == link.href) {
            link.classList.add('active');
        }
    });
}

ActiveNav();


 // When the "Read Less" button is clicked
 $("#readLess").click(function(){ 
    $("#longIntro").hide(); // Hide the long introduction text
    $("#readLess").hide();  // Hide the "Read Less" button itself
    $("#readMore").show();  // Show the "Read More" button  

  });
  
// When the "Read More" button is clicked
  $("#readMore").click(function(){
    $("#longIntro").show();  // Show the long introduction text
    $("#readLess").show();   // Show the "Read Less" button
    $("#readMore").hide();   // Hide the "Read More" button  
  });


$(document).ready(function() {

    // When user clicks "Buy Now"
    $(".buyBtn").click(function() {
        let date = $(this).data("date");

        $("#purchaseForm").show();              // show form
        $("#selectedDate").val(date);           // fill selected date
    });

    // When form is submitted
    $("#ticketForm").submit(function(event) {
        event.preventDefault(); // prevent page reload
        alert("redirecting to payment system.");
    });

});
