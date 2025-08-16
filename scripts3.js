 // ===== Heart Burst on Click =====
        document.addEventListener("click", function (e) {
            // Ignore clicks on interactive elements
            if (e.target.closest('.mail, .boxMail, .box-giftbox img, .next-button, #closeModal, #copy a')) {
                return;
            }

            for (let i = 0; i < 5; i++) {
                const heart = document.createElement("div");
                heart.classList.add("click-heart");
                heart.style.left = e.clientX + "px";
                heart.style.top = e.clientY + "px";
                heart.style.setProperty('--x', (Math.random() - 0.5) * 200 + 'px');
                heart.style.setProperty('--y', (Math.random() - 0.5) * 200 + 'px');
                heart.style.fontSize = (Math.random() * 15 + 10) + 'px';
                document.body.appendChild(heart);
                setTimeout(() => heart.remove(), 800);
            }
        });

        // ===== Mail Icon Click to Open Modal =====
        const mailIcon = document.querySelector(".mail");
        const boxMail = document.getElementById("boxMail");
        const closeModal = document.getElementById("closeModal");

        mailIcon.addEventListener("click", () => {
            boxMail.classList.add("active");
        });

        // ===== Close Modal =====
        closeModal.addEventListener("click", () => {
            boxMail.classList.remove("active");
        });

        // Optional: Close modal by clicking outside
        boxMail.addEventListener("click", (e) => {
            if (e.target === boxMail) {
                boxMail.classList.remove("active");
            }
        });