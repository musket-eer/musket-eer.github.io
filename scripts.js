// Form Submission
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());
    console.log("Form Submitted:", data);
});

// Define the redirectTo function
function redirectTo(page) {
    window.location.href = page;
}

// Time Spent on Site
let startTime = Date.now();
window.addEventListener("beforeunload", function() {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    console.log("Time spent on site:", timeSpent, "seconds");
});

// Toggle Color Theme
document.getElementById("themeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
});

// Toggle Font Style
document.getElementById("fontToggle").addEventListener("click", function() {
    document.body.style.fontFamily = document.body.style.fontFamily === 'Arial' ? 'Times New Roman' : 'Arial';
});

document.getElementById("fontToggle").addEventListener("click", function() {
    document.body.style.fontFamily = document.body.style.fontFamily === 'Arial' ? 'Times New Roman' : 'Arial';
});

// Form Submission
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());
    console.log("Form Submitted:", data);
});


// Time Spent on Site
window.addEventListener("beforeunload", function() {
    let startTime = Date.now();
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    console.log("Time spent on site:", timeSpent, "seconds");
});

// Toggle Color Theme
document.getElementById("themeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-theme");
});

// Toggle Font Style
document.getElementById("fontToggle").addEventListener("click", function() {
    document.body.style.fontFamily = document.body.style.fontFamily === 'Arial' ? 'Times New Roman' : 'Arial';
});
it  