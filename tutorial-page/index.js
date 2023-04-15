document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector(".title__rules");
    const mainRules = document.querySelector(".main__rules");
    const explainingRules = document.querySelector(".rules__explaining");

    gsap.set(title, {
        y: '30%',
        opacity: 0
    });
  
    gsap.to(title, {
        y: '0%',
        opacity: 1, 
        duration: 2,
        ease: 'power4.out'
    });

    setTimeout(() => {
        gsap.set(mainRules, {
            x: '-30%',
            opacity: 0
        });
      
        gsap.to(mainRules, {
            x: '0%',
            opacity: 1, 
            duration: 2,
            ease: 'power4.out'
        });
    }, 100);


    setTimeout(() => {
        gsap.set(explainingRules, {
            x: '30%',
            opacity: 0
        });
      
        gsap.to(explainingRules, {
            x: '0%',
            opacity: 1, 
            duration: 2,
            ease: 'power4.out'
        });
    }, 200);

})

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

};
const backBtn = document.querySelector(".back__btn")
backBtn.addEventListener("click", createRipple);





