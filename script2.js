const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // Name validation
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Invalid email format';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Password validation
    if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    if (isValid) {
        // Handle form submission (e.g., send data to server)
        console.log('Form submitted successfully!');
        form.submit(); // Submit the form after validation
    }
});

nameInput.addEventListener('input', () => {
    nameError.textContent = '';
});

emailInput.addEventListener('input', () => {
    emailError.textContent = '';
});

passwordInput.addEventListener('input', () => {
    passwordError.textContent = '';
});
