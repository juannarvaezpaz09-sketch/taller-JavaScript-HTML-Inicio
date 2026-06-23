const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const successMessage = document.getElementById('successMessage');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Limpiar mensajes previos
    emailError.textContent = '';
    passwordError.textContent = '';
    successMessage.style.display = 'none';
    emailError.style.display = 'none';
    passwordError.style.display = 'none';

    let isValid = true;

    // Validar email
    if (!emailInput.value.trim()) {
        emailError.textContent = 'El correo electrónico es requerido';
        emailError.style.display = 'block';
        isValid = false;
    } else if (!emailInput.validity.valid) {
        emailError.textContent = 'Ingresa un correo válido';
        emailError.style.display = 'block';
        isValid = false;
    }

    // Validar contraseña
    if (!passwordInput.value.trim()) {
        passwordError.textContent = 'La contraseña es requerida';
        passwordError.style.display = 'block';
        isValid = false;
    } else if (passwordInput.value.length < 6) {
        passwordError.textContent = 'La contraseña debe tener al menos 6 caracteres';
        passwordError.style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        successMessage.style.display = 'block';
        console.log('Formulario válido. Enviando datos...');
        console.log({
            email: emailInput.value,
            password: passwordInput.value,
            remember: document.getElementById('remember').checked
        });
        // Redirigir al index tras iniciar sesión usando window.location.href
        window.location.href = 'index.html';
    }
});

// Limpiar error al escribir en los campos
emailInput.addEventListener('input', () => {
    if (emailError.style.display === 'block') {
        emailError.style.display = 'none';
    }
});

passwordInput.addEventListener('input', () => {
    if (passwordError.style.display === 'block') {
        passwordError.style.display = 'none';
    }
});