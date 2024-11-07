/*=SHOW HIDDEN - PASSWORD =*/
const showHiddenPass = (loginPass, loginEye) => {
    const input = document.getElementById(loginPass),
          iconEye = document.getElementById(loginEye);
 
    iconEye.addEventListener('click', () => {
       // Change password to text
       if (input.type === 'password') {
          // Switch to text
          input.type = 'text';
 
          // Icon change
          iconEye.classList.add('ri-eye-line');
          iconEye.classList.remove('ri-eye-off-line');
       } else {
          // Change to password
          input.type = 'password';
 
          // Icon change
          iconEye.classList.remove('ri-eye-line');
          iconEye.classList.add('ri-eye-off-line');
       }
    });
 };
 
 showHiddenPass('login-pass', 'login-eye');
 
 // Admin credentials (hardcoded for this example)
 const adminEmail = 'admin';
 const adminPassword = 'Sanctuary';
 
 // Handle form submission
 const form = document.querySelector('.login__form');
 const emailInput = document.getElementById('login-email');
 const passwordInput = document.getElementById('login-pass');
 
 form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission behavior
 
    // Get the values from the inputs
    const enteredEmail = emailInput.value.trim();
    const enteredPassword = passwordInput.value.trim();
 
    // Check if the entered email and password match the admin credentials
    if (enteredEmail === adminEmail && enteredPassword === adminPassword) {
       alert('Login successful!');
       // Redirect to dashboard or other page if necessary
       window.location.href = 'index.html'; // Replace with your desired page
    } else {
       alert('Invalid email or password. Please try again.');
    }
 
    // Clear the input fields after login attempt
    emailInput.value = '';
    passwordInput.value = '';
 });
 