const banner = document.getElementById("banner");
const container = document.getElementById("container");
const slide = document.getElementById("material-symbols-outlined")
const svg = document.getElementById("svg");
const left = document.getElementById("left");

let margin = 0;
let topBanner = 0;

slide.addEventListener("click", () => {

    
    if (topBanner != 5) {
        topBanner += 1;
        margin -= 370;
        console.log(margin)
        banner.style.transform = `translateX(${margin}px)`
    }

    if (topBanner == 5) {
        slide.style.visibility = "none"
        slide.style.opacity = "0"
    }

    if (topBanner != 0) {
        left.style.visibility = "visible"
        left.style.opacity = "1"
    }
})

left.addEventListener("click", () => {

    if (topBanner != 0) {
        topBanner -= 1;
        console.log("slide");
        margin += 370;
        console.log(margin)
        banner.style.transform = `translateX(${margin}px)`
    }

    if (topBanner == 0) {
        left.style.visibility = "none"
        left.style.opacity = "0"
    }

    if (topBanner != 5)
    slide.style.visibility = "visible"
    slide.style.opacity = "1"
})

container.addEventListener("mouseover", () => {

    if (topBanner != 5) {
        slide.style.visibility = "visible"
        slide.style.opacity = "1"
    }

    if (topBanner != 0) {
        left.style.visibility = "visible"
        left.style.opacity = "1"
    }
})

container.addEventListener("mouseleave", () => {

    slide.style.visibility = "hidden"
    slide.style.opacity = "0"

    left.style.visibility = "hidden"
    left.style.opacity = "0"
})