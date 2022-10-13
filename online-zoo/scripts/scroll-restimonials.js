const getSlider = document.querySelector('.testimonials__slide')

getSlider.addEventListener("input", () => {
    let scrollWindow = document.querySelector(".testimonials__carousel");
    let scrolWidth = scrollWindow.scrollWidth - scrollWindow.clientWidth;
    let sliderVal = getSlider.value;

    let scrollVal = Math.ceil(scrolWidth / 100)
    scrollWindow.scrollLeft = scrollVal * sliderVal;
})