function viewportHandler() {
    setZoomDoc(window.devicePixelRatio)

}

function setDocSize(height) {
    fs = height * 1.25 / 100;
    cv = document.querySelector(".cv")
    cv.style.fontSize = `${fs}px`
    cv.style.height = `${height}px`;
    cv.style.width = `${8.5 * height / 11}px`
}

function setZoomDoc(zoom) {
    fs = zoom * 1.25;
    cv = document.querySelector(".cv")
    cv.style.fontSize = `${fs}vh`
    cv.style.height = `${100*zoom}vh`;
    cv.style.width = `${8.5 * 100*zoom / 11}vh`
}

function toogleStyle() {
    cv = document.querySelector(".cv")
    cv.classList.toggle("dev")
    cv.classList.toggle("classic")
}
window.addEventListener('resize', viewportHandler)
window.addEventListener("click", toogleStyle)
viewportHandler()