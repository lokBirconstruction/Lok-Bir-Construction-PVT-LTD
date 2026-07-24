// Smooth scrolling for menu links

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior: "smooth"
        });

    });

});


// Simple welcome message in browser console

console.log("Welcome to Lok Bir Construction Pvt. Ltd.");