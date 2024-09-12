function hideOptions() {
    document.querySelector(".intro").style.display = "none";
    document.querySelector("html").setAttribute("class", "scrollEnabled");
}
setTimeout(() => {
    document.querySelector(".intro").style.display = "flex";
    document.querySelector(".intro").style.opacity = 1;
    document.querySelector(".intro").style.animation = "fadeout 1.5s forwards";
    document.querySelector(".intro").style.opacity = 0;
    setTimeout(hideOptions, 950);
}, 3000);