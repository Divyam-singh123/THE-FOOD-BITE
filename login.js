document.addEventListener("DOMContentLoaded", function () {
    // Select the form element
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission
  
      // Get the input values
      const email = document.querySelector("input[type='email']").value.trim();
      const password = document.querySelector("input[type='password']").value.trim();
  
      // Validate fields
      if (email === "" || password === "") {
        alert("Please fill in both fields.");
      } else if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
      } else {
        alert("Login successful!\nLogin is submitted.");
        console.log(`Email: ${email}, Password: ${password}`); // Log to console for debugging
        form.reset(); // Optionally reset the form after submission
      }
    });
  
    // Function to validate email format
    function validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }
  });
  