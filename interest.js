const form = document.querySelector("#interestForm");
const username = document.querySelector("#name");
const email = document.querySelector("#email");
const interestInput = document.querySelector("#interest");
const result = document.querySelector("#result");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Form submitted!");

    const nameValue = username.value;
    const emailValue = email.value;
    const interestValue = interestInput.value;
    
    console.log("Name:", nameValue);
    console.log("Email:", emailValue);
    console.log("Interest:", interestValue);

    if(nameValue === "") {
        result.textContent = "You're missing your name.";
    }else if(emailValue === "") {
        result.textContent = "You're missing your email.";
    }else if(interestValue === "") {
        result.textContent = "You're missing your interest.";
    }else if(interestValue === "volunteer"){
        result.textContent = "Explore our volunteer opportunities.";
    }else if(interestValue === "events"){
        result.textContent = "Check out our upcoming events.";
    }else{
        result.textContent = "Learn about our mentoring program.";
    }
});