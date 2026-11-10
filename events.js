//Changed from event to c_event due to a keyword conflict with VSCode

//Do not declare an additional variable as location outside of JSON code
const c_event = {
    name: "Campus Science Fair",
    location: "Student Union"
};
const heading = document.querySelector("#eventName");
const p2 = document.querySelector("#eventLocation");

heading.textContent = c_event.name;
p2.textContent = c_event.location; 

