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

    // Function to calculate and update price
    function updatePrice() {
        const pricePerTicket = parseFloat($("#ticketType").val());
        const quantity = parseInt($("#ticketQuantity").val());
        
        if (!isNaN(pricePerTicket) && !isNaN(quantity)) {
            const total = pricePerTicket * quantity;
            $("#totalPriceDisplay").text("Total Price: $" + total);
        } else {
            $("#totalPriceDisplay").text("Total Price: $0");
        }
    }

    // Trigger calculation when type or quantity changes
    $("#ticketType, #ticketQuantity").on("input change", function() {
        updatePrice();
    });

    // Existing "Buy Now" logic
    $(".buyBtn").click(function() {
        let date = $(this).data("date");
        $("#purchaseForm").show();
        $("#selectedDate").val(date);
        updatePrice(); // Run once when form opens
    });

    // Form submission
    $("#ticketForm").submit(function(event) {
        event.preventDefault();

        // Validation for Zip Code
        const zipValue = $("#zipCode").val();
        if (zipValue.length > 0 && !/^\d{5}$/.test(zipValue)) {
            $("#zipError").show();
            return;
        }

        // Get the data to pass to the next page
        const name = $("input[type='text']").first().val();
        const date = $("#selectedDate").val();
        const total = $("#totalPriceDisplay").text().replace("Total Price: $", "");

        // Redirect to confirmation page with data in the URL
        window.location.href = `confirmation.html?name=${encodeURIComponent(name)}&date=${encodeURIComponent(date)}&total=${total}`;
    });
});


function toggleNav() {
    var navbar = document.getElementById("navbar");
    if (navbar.className === "nav_bar") {
        navbar.className += " responsive";
    } else {
        navbar.className = "nav_bar";
    }
}

function initMap() {
    // Coordinates for Pittsburgh (you can change this later)
    var map = L.map('map').setView([40.444, -79.943], 13);

    // Add map tiles
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Add a marker
    L.marker([40.444, -79.943])
        .addTo(map)
        .bindPopup("MonoMuse Location")
        .openPopup();
}

let selectedTier = '';

function selectTier(tier) {
    // Remove 'selected' class from all cards
    document.querySelectorAll('.membership-card').forEach(card => {
        card.classList.remove('selected');
    });

    // Add 'selected' class to the clicked card
    const activeCard = document.getElementById(`tier-${tier}`);
    activeCard.classList.add('selected');
    
    // Store the choice
    selectedTier = tier;
}

function processSelection() {
    if (!selectedTier) {
        alert("Please select a membership tier first!");
    } else {
        alert(`Redirecting to checkout for the ${selectedTier.toUpperCase()} tier.`);
        // window.location.href = 'checkout.html?tier=' + selectedTier;
    }
}