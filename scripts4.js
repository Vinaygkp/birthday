// --- Your Image Data and Captions ---
  const notesData = [
  { image: "10.png", text: "Aur ek baar… Happy Birthday, yaar! Apne din ka har pal enjoy karo." },
  { image: "4.png", text: "Tum n hamesha haste raha karo dekho kiyni cute lag rahi ho haste hue " },
  { image: "11.png", text: "Sabse sundar ladki" },
  { image: "5.png", text: "Tumhari presence ek aisi magic hai jo bina kuch kahe dil ko sukoon de deti hai, aur har moment ko special bana deti hai." },
  { image: "7.png", text: "Tum sach me sabse best girl ho jo mujhe kabhi mili hai." },
  { image: "3.png", text: "Bas yaad rakhna — tum hamesha meri favourite person rahogi." },
  { image: "8.jpg", text: "Tum itni khoobsurat aur dayalu ho — andar se bhi aur bahar se bhi." },
  { image: "2.png", text: "Tumhari smile sach me sabse cutest cheez hai jo maine kabhi dekhi hai." }
];


    // --- Paper Dragging Logic ---
    class Paper {
      constructor(paperElement) {
        this.paper = paperElement;
        this.isHolding = false;
        this.offsetX = 0;
        this.offsetY = 0;
        this.hoverInterval = null;
        this.init();
      }

      init() {
        this.paper.addEventListener('mousedown', (e) => this.start(e.clientX, e.clientY));
        this.paper.addEventListener('touchstart', (e) => this.start(e.touches[0].clientX, e.touches[0].clientY), { passive: false });
        
        document.addEventListener('mousemove', (e) => this.move(e.clientX, e.clientY));
        document.addEventListener('touchmove', (e) => this.move(e.touches[0].clientX, e.touches[0].clientY), { passive: false });
        
        window.addEventListener('mouseup', () => this.end());
        window.addEventListener('touchend', () => this.end());

        this.paper.addEventListener('mouseenter', () => this.startHoverEffect());
        this.paper.addEventListener('mouseleave', () => this.stopHoverEffect());
      }

      start(x, y) {
        if (this.isHolding) return;
        this.isHolding = true;
        this.paper.style.zIndex = highestZ++;
        const rect = this.paper.getBoundingClientRect();
        this.offsetX = x - rect.left;
        this.offsetY = y - rect.top;
      }

      move(x, y) {
        if (!this.isHolding) return;
        this.paper.style.left = `${x - this.offsetX}px`;
        this.paper.style.top = `${y - this.offsetY}px`;
      }

      end() { this.isHolding = false; }
      
      startHoverEffect() {
        this.stopHoverEffect();
        this.hoverInterval = setInterval(() => {
          const heart = document.createElement('i');
          heart.className = 'fa-solid fa-heart hover-heart';
          const rect = this.paper.getBoundingClientRect();
          heart.style.left = `${rect.left + Math.random() * rect.width}px`;
          heart.style.top = `${rect.top}px`;
          document.body.appendChild(heart);
          setTimeout(() => heart.remove(), 1000);
        }, 150);
      }
      
      stopHoverEffect() { clearInterval(this.hoverInterval); }
    }

    let highestZ = 5;

    // --- Generate Papers from Data ---
    notesData.forEach(note => {
        const paperDiv = document.createElement('div');
        paperDiv.className = 'paper';
        paperDiv.innerHTML = `
            <div class="image-container">
                <img src="${note.image}" alt="A special memory">
            </div>
            <p>${note.text}</p>
        `;
        document.body.appendChild(paperDiv);
        
        // Random initial position
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        paperDiv.style.left = `${Math.random() * (vw * 0.7)}px`;
        paperDiv.style.top = `${150 + Math.random() * (vh * 0.5)}px`; // Start papers lower down
        paperDiv.style.transform = `rotateZ(${Math.random() * 40 - 20}deg)`;
        
        new Paper(paperDiv);
    });

    // --- Generate Background Animations ---
    const createHearts = (container, count, className) => {
        for (let i = 0; i < count; i++) {
            const heart = document.createElement('i');
            heart.className = `fa-solid fa-heart ${className}`;
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.top = `${Math.random() * 100}%`;
            heart.style.fontSize = `${5 + Math.random() * 15}px`;
            heart.style.transform = `rotate(${Math.random() * 360}deg)`;
            container.appendChild(heart);
        }
    };
    
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

    createHearts(document.querySelector('.particles'), 80, 'particle');
    createFloatingHearts(document.querySelector('.floating-hearts'), 30);
    