let datetxt = "20 August 2025";
    let titleLetter = "To You";

    let datatxtletter ="Happy Birthday, Priti 🎉 🎂✨\n Har subah teri zindagi me naye rang le aaye,\n Har sham teri khushiyon ka geet gaye,\n Tere janmdin par dua hai yeh humari,\n Tu jahan rahe hamesha muskuraye. 💐  😊 \n\n– Your friend,\nVinay";

    let charArrDate = datetxt.split("");
    let charArrDateLetter = datatxtletter.split("");
    let charArrTitle = titleLetter.split("");
    let currentIndex = 0;
    let currentIndexLetter = 0;
    let currentIndexTitle = 0;
    let date_of_birth = document.querySelector(".date__of__birth span");
    let text_letter = document.querySelector(".text__letter p");
    let nextButton = document.querySelector(".next-button"); // Get the button

    setTimeout(function () {
      let timeDatetxt = setInterval(function () {
        if (currentIndex < charArrDate.length) {
          date_of_birth.textContent += charArrDate[currentIndex];
          currentIndex++;
        } else {
          let i = document.createElement("i");
          i.className = "fa-solid fa-star";
          document.querySelector(".date__of__birth").prepend(i);
          document
            .querySelector(".date__of__birth")
            .appendChild(i.cloneNode(true));
          clearInterval(timeDatetxt);
        }
      }, 100);
    }, 12000);

    var intervalContent;
    var intervalTitle;
    $("#btn__letter").on("click", function () {
      $(".box__letter").slideDown();
      setTimeout(function () {
        $(".letter__border").slideDown();
      }, 1000);
      setTimeout(function () {
        intervalTitle = setInterval(function () {
          if (currentIndexTitle < charArrTitle.length) {
            document.querySelector(".title__letter").textContent +=
              charArrTitle[currentIndexTitle];
            let i = document.createElement("i");
            i.className = "fa-solid fa-heart";
            document.querySelector(".title__letter").appendChild(i);
            currentIndexTitle++;
          } else {
            clearInterval(intervalTitle);
          }
        }, 100);
      }, 2000);
      setTimeout(function () {
        document.querySelector("#heart__letter").classList.add("animationOp");
        document.querySelector(".love__img").classList.add("animationOp");
        document.querySelector("#mewmew").classList.add("animationOp");
      }, 2800);
      setTimeout(function () {
        document.querySelectorAll(".heart").forEach((item) => {
          item.classList.add("animation");
        });
      }, 3500);
      setTimeout(function () {
        intervalContent = setInterval(function () {
          if (currentIndexLetter < charArrDateLetter.length) {
            text_letter.textContent += charArrDateLetter[currentIndexLetter];
            currentIndexLetter++;
          } else {
            clearInterval(intervalContent);
            // SHOW THE BUTTON WHEN LETTER IS COMPLETE
            nextButton.style.display = "inline-block";
          }
        }, 50);
      }, 6000);
    });
    $(".close").on("click", function () {
      clearInterval(intervalContent);
      document.querySelector(".title__letter").textContent = "";
      text_letter.textContent = "";
      currentIndexLetter = 0;
      currentIndexTitle = 0;
      nextButton.style.display = "none"; // HIDE THE BUTTON
      document.querySelector("#heart__letter").classList.remove("animationOp");
      document.querySelector(".love__img").classList.remove("animationOp");
      document.querySelector("#mewmew").classList.remove("animationOp");
      document.querySelectorAll(".heart").forEach((item) => {
        item.classList.remove("animation");
      });
      $(".box__letter").slideUp();
      $(".letter__border").slideUp();
    });

    // === NEW LOVE ANIMATIONS START ===

    $(document).ready(function () {
      // 1. Floating Hearts
      const wrapper = document.getElementById("wrapper");
      if (wrapper) {
        setInterval(() => {
          const heart = document.createElement("i");
          heart.className = "fa-solid fa-heart floating-heart";

          heart.style.left = Math.random() * 100 + "vw";
          heart.style.animationDuration = Math.random() * 5 + 7 + "s"; // Slower, more gentle
          heart.style.fontSize = Math.random() * 1 + 1 + "rem"; // 1rem to 2rem
          heart.style.setProperty("--sway", (Math.random() - 0.5) * 100 + "px");

          wrapper.appendChild(heart);

          setTimeout(() => {
            heart.remove();
          }, 12000); // Remove after animation
        }, 300); // Create a heart every 300ms
      }

      // 2. Cursor Trail Heart
      const cursorHeart = document.createElement("i");
      cursorHeart.className = "fa-solid fa-heart cursor-heart";
      document.body.appendChild(cursorHeart);

      document.addEventListener("mousemove", function (e) {
        if (cursorHeart.style.opacity === "0") {
          cursorHeart.style.opacity = "1";
        }
        cursorHeart.style.left = e.clientX + "px";
        cursorHeart.style.top = e.clientY + "px";
      });

      document.addEventListener("mouseleave", function () {
        cursorHeart.style.opacity = "0";
      });

      // 3. Click Burst Animation
      document.addEventListener("click", function (e) {
        // Don't trigger burst on buttons, links, or the close icon
        if (
          e.target.tagName === "BUTTON" ||
          e.target.tagName === "A" ||
          e.target.closest(".close")
        ) {
          return;
        }

        for (let i = 0; i < 6; i++) {
          // create 6 hearts
          const heart = document.createElement("i");
          heart.className = "fa-solid fa-heart click-heart";

          const x = (Math.random() - 0.5) * 150 + "px"; // wider spread
          const y = (Math.random() - 0.5) * 150 + "px";

          heart.style.left = e.clientX + "px";
          heart.style.top = e.clientY + "px";
          heart.style.setProperty("--x", x);
          heart.style.setProperty("--y", y);
          heart.style.fontSize = Math.random() * 1 + 0.5 + "rem";

          // Use shades of pink and red
          heart.style.color = `hsl(${340 + Math.random() * 20}, 100%, 70%)`;

          document.body.appendChild(heart);

          setTimeout(() => {
            heart.remove();
          }, 800);
        }
      });
    });

    /* // === NEW LOVE ANIMATIONS END === */
