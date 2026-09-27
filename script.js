// ================= ORDER BUTTONS =================

const orderButtons = document.querySelectorAll(
    ".hero-btn,  .card button, .morning-content button"
);

orderButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        alert("☕ Thank you! Your order has been received.");

    });

});


// ================= SIGN IN =================

const signIn = document.querySelector("#sign-in a");

signIn.addEventListener("click", function (event) {

    event.preventDefault();

    alert("Sign In page coming soon!");

});


// ================= SIGN UP =================

const signUpButton = document.querySelector("#sign-in button");

signUpButton.addEventListener("click", function () {

    alert("Welcome to Bean Scene! Sign Up page coming soon.");

});


// ================= LEARN MORE =================

const learnMoreButton = document.querySelector(".discover-content button");

learnMoreButton.addEventListener("click", function () {

    document.querySelector(".coffee-blends").scrollIntoView({
        behavior: "smooth"
    });

});


// ================= JOIN US =================

const joinButton = document.querySelector(".cta button");

joinButton.addEventListener("click", function () {

    alert("🎉 Welcome to Bean Scene! Thank you for joining us.");

});


// ================= NAVIGATION =================

const navLinks = document.querySelectorAll(".link a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const text = link.textContent.toLowerCase();

        if (text === "home") {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }

        else if (text === "menu") {

            document.querySelector(".coffee-blends").scrollIntoView({
                behavior: "smooth"
            });

        }

        else if (text === "about us") {

            document.querySelector(".different").scrollIntoView({
                behavior: "smooth"
            });

        }

        else if (text === "contact us") {

            document.querySelector(".testimonial").scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ================= TESTIMONIAL SLIDER =================

const reviews = [

    {
        text: "The coffee was absolutely delicious! The flavor was rich, smooth, and fresh. It is the perfect place to relax and enjoy a great cup of coffee.",
        name: "Jonny Thomas",
        position: "Project Manager"
    },

    {
        text: "I loved the coffee here! The taste was amazing, the quality was great, and the atmosphere made the whole experience even better. Definitely coming back!",
        name: "Sarah Williams",
        position: "Graphic Designer"
    },

    {
        text: "Amazing coffee and excellent quality! Every cup is fresh, flavorful, and perfectly prepared. A wonderful experience from start to finish.",
        name: "Mahnoor Hassan",
        position: "Software Developer"
    }

];


let currentReview = 0;


// Get testimonial elements

const reviewText = document.querySelector(".review p");
const reviewName = document.querySelector(".review h3");
const reviewPosition = document.querySelector(".review span");

const previousButton = document.querySelector(".arrow.left");
const nextButton = document.querySelector(".arrow.right");


// Function to display review

function showReview(index) {

    reviewText.textContent = reviews[index].text;

    reviewName.textContent = reviews[index].name;

    reviewPosition.textContent = reviews[index].position;

}


// Previous review

previousButton.addEventListener("click", function () {

    currentReview--;

    if (currentReview < 0) {
        currentReview = reviews.length - 1;
    }

    showReview(currentReview);

});


// Next review

nextButton.addEventListener("click", function () {

    currentReview++;

    if (currentReview >= reviews.length) {
        currentReview = 0;
    }

    showReview(currentReview);

});