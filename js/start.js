function getAwayStartBtn(event) {
    const button = document.querySelector(".start__btn");
    const load = document.querySelector(".start__loading-bar");
    button.classList.add("clicked");

    gsap.set(button, {
        opacity: 1
    });

    gsap.to(".clicked", {x: -1000, duration: 1, opacity: 0});

    load.classList.add("active");

    gsap.set(load, {
        x: '100%',
        opacity: 0
    });
  
    gsap.to(load, {
        x: '0%',
        opacity: 1, 
        duration: 2,
        ease: 'power4.out'
    });

};

//функція загрузки
function getLoaded() {
    const load = document.querySelector(".start__loading-bar")
    const loadProgress = document.querySelector(".start__loading-cover");


    let perProgress = 100;
    const interval = setInterval(() => {
        if (perProgress > -1) {
            loadProgress.style.right = perProgress +"%";
            perProgress--;
        } else {
            clearInterval(interval);
        }
    }, 40);
    setTimeout(() => {
        gsap.to(load, {
            opacity: 0, 
            duration: 1,
            ease: 'power4.out',
            onComplete: function() {
                if (load.style.opacity === "0") {
                    load.classList.remove("active");
                    updateGameContent("menu.html")
                }
            }
        });
    }, 4000);
};

//функція кліка на стартову кнопку
function createRipple(event) {
    const button = event.currentTarget;

  
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
  
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");
  
    const ripple = button.getElementsByClassName("ripple")[0];
  
    if (ripple) {
      ripple.remove();
    }
  
    button.appendChild(circle);

    setTimeout(() => {
        getAwayStartBtn();
    }, 500);

    setTimeout(() => {
        getLoaded();
    }, 1500);
};

const startBtn = document.querySelector(".start__btn")
startBtn.addEventListener("click", createRipple);



function updateGameContent(content) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', content, true);
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
        document.querySelector(".game__container").innerHTML = xhr.responseText;
        }
    };
    
    xhr.send();
};





