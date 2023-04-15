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
    };
    
        document.addEventListener("mousemove", onMouseDrag);
        document.addEventListener("mouseup", onMouseUp);
};


