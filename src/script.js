const toastElList = document.querySelectorAll('.toast')
const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl, option))



document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const message = document.getElementById('message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = form.username.value;
        const password = form.password.value;

        if (username === 'admin' && password === 'password') {
            message.textContent = 'Login successful';
            message.style.color = 'green';
            // Redirigir a la página de dashboard o perfil
            setTimeout(() => {
                window.location.href = '../index.html';
            }, 1000);
        } else {
            message.textContent = 'Invalid username or password';
            message.style.color = 'red';
        }
    });
});