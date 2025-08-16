const book = document.querySelector('.book');
        const pages = Array.from(document.querySelectorAll('.page'));
        const pageCount = pages.length;
        let currentPage = 0;

        book.addEventListener('click', function(e) {
            if (e.target.closest('a')) return;
            
            const rect = book.getBoundingClientRect();
            const clickX = e.clientX - rect.left;

            if (clickX < rect.width / 2) {
                currentPage = Math.max(0, currentPage - 1);
            } else {
                currentPage = Math.min(pageCount, currentPage + 1);
            }
            updateBook();
        });

        function updateBook() {
            const isBookOpen = currentPage > 0 && currentPage < pageCount;
            const bookTransform = isBookOpen ? `translateX(50%) rotateX(10deg)` : `rotateX(10deg)`;
            book.style.transform = bookTransform;
            
            pages.forEach((page) => {
                const pageNum = parseInt(page.dataset.pageNum, 10);
                const isFlipped = pageNum < currentPage;
                
                page.style.transform = `rotateY(${isFlipped ? -180 : 0}deg)`;
                // **THE FIX IS HERE:** This new z-index logic is more robust.
                // It ensures flipped pages are always behind the current pages.
                page.style.zIndex = isFlipped ? pageNum : pageCount - pageNum;
            });
        }
        
        updateBook();

        const createFloatingHearts = (container, count) => {
            for (let i = 0; i < count; i++) {
                const heart = document.createElement('i');
                heart.className = 'fa-solid fa-heart';
                heart.style.left = `${Math.random() * 100}%`;
                heart.style.animationDelay = `${Math.random() * 10}s`;
                heart.style.fontSize = `${15 + Math.random() * 20}px`;
                heart.style.animationDuration = `${10 + Math.random() * 15}s`;
                container.appendChild(heart);
            }
        };
        createFloatingHearts(document.querySelector('.floating-hearts'), 30);