document.querySelector('form').addEventListener('submit', function (event) {
    const emailInput = document.getElementById('email');
    if (!emailInput.value.includes('@')) {
        event.preventDefault(); // Prevent form submission
        alert('Please enter a valid email address with "@" symbol.');
    }
});
document.querySelector('form').addEventListener('submit', function (event) {
    const emailLoginInput = document.getElementById('emailLogin');
    if (!emailLoginInput.value.includes('@')) {
        event.preventDefault(); // Prevent form submission
        alert('Please enter a valid email address with "@" symbol.');
    }
});
//Hide and show password
const passwordInput = document.getElementById('password');
const passwordConfirmInput = document.getElementById('confirmPassword');
const togglePasswordButton = document.getElementById('toggle-password');
const toggleConfirmPasswordButton = document.getElementById('toggle-confirm-password');

togglePasswordButton.addEventListener('click', function () {
    togglePasswordVisibility(passwordInput, togglePasswordButton);
});

toggleConfirmPasswordButton.addEventListener('click', function () {
    togglePasswordVisibility(passwordConfirmInput, toggleConfirmPasswordButton);
});

function togglePasswordVisibility(inputElement, toggleElement) {
    if (inputElement.type === 'password') {
        inputElement.type = 'text';
        toggleElement.textContent = 'Hide';
    } else {
        inputElement.type = 'password';
        toggleElement.textContent = 'Show';
    }
}



  //fetch data from local storage
  const storedEmail = localStorage.getItem('email');
  const emaillInput = document.getElementById('email');
  const loginButton = document.getElementById('loginButton');
  const notificationDiv = document.getElementById('notification');

  if (storedEmail) {
      emailInput.value = storedEmail;
  }

  loginButton.addEventListener('click', function () {
      // Replace this with your actual login logic
      const enteredEmail = emailInput.value;
      const enteredPassword = document.getElementById('password').value;

      if (enteredEmail === 'example@example.com' && enteredPassword === 'password') {
          displayNotification('success', 'Login successful!');
          // Redirect or perform other actions upon successful login
      } else {
          displayNotification('error', 'Login unsuccessful. Please check your credentials.');
      }
  });

  function displayNotification(type, message) {
      notificationDiv.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
  }
  
  //Checking if the passwords are valid and they match
   const passwordSetupForm = document.getElementById('passwordSetupForm');
        const passworInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirmPassword');

        passwordSetupForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const password = passwordInput.value;
            const confirmPassword = confirmPasswordInput.value;

            if (password.length < 8) {
                alert('Password must be at least 8 characters long.');
                return;
            }

            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                return;
            }

            // Password meets requirements
            alert('Password set successfully.');
        });


