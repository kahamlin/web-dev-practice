// Lab 4: Fix the Form!

// Your job is to make the volunteer interest form work.

console.log("Volunteer form JavaScript loaded.");


const nameInput = document.querySelector("#name");
const result = document.querySelector("#result");

// TODO: Select the form, email input, and interest dropdown.
const form = document.querySelector("#volunteerForm");
const emailInput = document.querySelector("#email");
const interestInput = document.querySelector("#interest");

// TODO: Add a submit event listener to the form.
form.addEventListener("submit", function(event) {
// TODO: Prevent the default form submission.    
    event.preventDefault();

// TODO: Read the input values and check for missing information.
const name = nameInput.value;
const email = emailInput.value;
const interest = interestInput.value;

if(name === "" || email === "" || interest === "") {
    result.textContent = "Please complete all fields.";
}

// TODO: Display helpful errors or an interest-specific response.
if(interest === "outreach") {
    result.textContent = "Thank you for your interest in outreach!";
}else if(interest === "events") {
    result.textContent = "Thank you for your interest in events!";
}else if(interest === "mentoring") {
    result.textContent = "Thank you for your interest in mentoring!";
}  
  
});

