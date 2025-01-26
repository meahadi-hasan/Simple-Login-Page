       // Toggle between Login and Register forms
        document.getElementById('showRegister').addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById('loginContainer').classList.remove('active');
            document.getElementById('registerContainer').classList.add('active');
        });

        document.getElementById('showLogin').addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById('registerContainer').classList.remove('active');
            document.getElementById('loginContainer').classList.add('active');
        });

        // Login Form Submission
        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Simple validation (for demonstration purposes)
            if (username === "admin" && password === "password123") {
                alert('Login successful!');
                // Redirect or perform other actions here
            } else {
                document.getElementById('login-error-message').textContent = 'Invalid username or password';
            }
        });

        // Register Form Submission
        document.getElementById('registerForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const newUsername = document.getElementById('newUsername').value;
            const newPassword = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            // Simple validation
            if (newPassword !== confirmPassword) {
                document.getElementById('register-error-message').textContent = 'Passwords do not match';
            } else {
                // Simulate account creation (for demonstration purposes)
                alert(`Account created for ${newUsername}`);
                document.getElementById('registerContainer').classList.remove('active');
                document.getElementById('loginContainer').classList.add('active');
                document.getElementById('registerForm').reset(); // Clear the form
            }
        });
