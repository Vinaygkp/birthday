 const form = document.getElementById('login-form');
        const codeInput = document.getElementById('code');
        const resultDiv = document.getElementById('result');

        const secretCode = 'vinay'; // The correct name
        const nextPageUrl = 'home.html'; // The page to go to on success

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const userInput = codeInput.value.trim();

            if (userInput.toLowerCase() === secretCode.toLowerCase()) {
                resultDiv.textContent = 'Welcome, Birthday Girl!';
                form.style.transition = "transform 0.5s ease, opacity 0.5s ease";
                form.style.transform = "scale(1.1)";
                form.style.opacity = "0";
                setTimeout(() => {
                    window.location.href = nextPageUrl;
                }, 500);
            } else {
                resultDiv.textContent = 'Oops! That\'s not the right name.';
                form.animate([
                    { transform: 'translateX(0px)' }, { transform: 'translateX(-10px)' },
                    { transform: 'translateX(10px)' }, { transform: 'translateX(-10px)' },
                    { transform: 'translateX(10px)' }, { transform: 'translateX(0px)' }
                ], {
                    duration: 500,
                    iterations: 1
                });
            }
        });

        // Fade in form on page load
        window.onload = () => {
            setTimeout(() => {
                form.classList.add('active');
            }, 200);
        };
        
        // --- Generate Floating Hearts ---
        const createFloatingHearts = (container, count) => {
            for (let i = 0; i < count; i++) {
                const heart = document.createElement('i');
                heart.className = 'fa-solid fa-heart';
                heart.style.left = `${Math.random() * 100}%`;
                heart.style.animationDelay = `${Math.random() * 10}s`;
                heart.style.fontSize = `${15 + Math.random() * 20}px`;
                heart.style.animationDuration = `${15 + Math.random() * 15}s`;
                container.appendChild(heart);
            }
        };

        createFloatingHearts(document.querySelector('.floating-hearts'), 30);
        