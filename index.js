function hideOptions() {
    document.querySelector(".intro").style.display = "none";
    document.querySelector("html").setAttribute("class", "scrollEnabled");
}
setTimeout(() => {
    document.querySelector(".intro").style.display = "flex";
    document.querySelector(".intro").style.opacity = 0;
    setTimeout(hideOptions, 2500);
}, 3000);
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then((reg) => {
        console.log('Service worker registered:', reg);
      })
      .catch((error) => {
        console.error('Service worker registration failed:', error);
      });
  });
}
