const range = {
    wrapper: document.querySelector(".range"),
    bg: document.querySelector(".range__bg"),
    slider: document.querySelector(".range__slider"),
    progress: document.querySelector(".range__progress")
};
  
range.wrapper.onclick = e => {
    if (e.target === range.slider) return;
  
    let newLeft = e.offsetX - range.slider.offsetWidth / 2;
  
    if (newLeft < 0) newLeft = 0;
  
    const rightEdge = range.bg.offsetWidth - range.slider.offsetWidth;
    if (newLeft > rightEdge) newLeft = rightEdge;
  
    range.slider.style.left = `${newLeft}px`;
    range.progress.style.width = `${newLeft + range.slider.offsetWidth}px`;

    document.querySelector(".progress-count").textContent = `${Math.floor(newLeft/2)} words`;
};
range.slider.onmousedown = e => {
    e.preventDefault();

    let shiftX = e.clientX - range.slider.getBoundingClientRect().left;

    const onMouseUp = () => {
        document.removeEventListener("mouseup", onMouseUp);
        document.removeEventListener("mousemove", onMouseDrag);
    };
    
    const onMouseDrag = e => {
        let newLeft = e.clientX - shiftX - range.bg.getBoundingClientRect().left;

        if (newLeft < 0) newLeft = 0;

        const rightEdge = range.bg.offsetWidth - range.slider.offsetWidth;
        if (newLeft > rightEdge) newLeft = rightEdge;

        range.slider.style.left = `${newLeft}px`;
        range.progress.style.width = `${newLeft + range.slider.offsetWidth}px`;

        document.querySelector(".progress-count").textContent = `${Math.floor(newLeft/2)} words`;
    };
    
        document.addEventListener("mousemove", onMouseDrag);
        document.addEventListener("mouseup", onMouseUp);
};

const secondRange = {
    wrapper: document.querySelector(".second-range"),
    bg: document.querySelector(".second-range__bg"),
    slider: document.querySelector(".second-range__slider"),
    progress: document.querySelector(".second-range__progress")
};
  
secondRange.wrapper.onclick = e => {
    if (e.target === secondRange.slider) return;
  
    let newLeft = e.offsetX - secondRange.slider.offsetWidth / 2;
  
    if (newLeft < 0) newLeft = 0;
  
    const rightEdge = secondRange.bg.offsetWidth - secondRange.slider.offsetWidth;
    if (newLeft > rightEdge) newLeft = rightEdge;
  
    secondRange.slider.style.left = `${newLeft}px`;
    secondRange.progress.style.width = `${newLeft + secondRange.slider.offsetWidth}px`;

    document.querySelector(".second-progress-count").textContent = `${Math.floor(newLeft/2)} sec`;
};
secondRange.slider.onmousedown = e => {
    e.preventDefault();

    let shiftX = e.clientX - secondRange.slider.getBoundingClientRect().left;

    const onMouseUp = () => {
        document.removeEventListener("mouseup", onMouseUp);
        document.removeEventListener("mousemove", onMouseDrag);
    };
    
    const onMouseDrag = e => {
        let newLeft = e.clientX - shiftX - secondRange.bg.getBoundingClientRect().left;

        if (newLeft < 0) newLeft = 0;

        const rightEdge = secondRange.bg.offsetWidth - secondRange.slider.offsetWidth;
        if (newLeft > rightEdge) newLeft = rightEdge;

        secondRange.slider.style.left = `${newLeft}px`;
        secondRange.progress.style.width = `${newLeft + secondRange.slider.offsetWidth}px`;

        document.querySelector(".second-progress-count").textContent = `${Math.floor(newLeft/2)} sec`;
    };
    
        document.addEventListener("mousemove", onMouseDrag);
        document.addEventListener("mouseup", onMouseUp);
};


