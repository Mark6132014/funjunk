function hideOptions() {
    document.querySelector(".intro").style.display = "none";
    document.querySelector("html").setAttribute("class", "scrollEnabled");
}
var oldPercentage = 0;
var newPercentage = 0;
var finish = 100;
var number = Math.floor(Math.random()*100);
var percentageUpdater;
var limit = 10;
var underPercentage = 0;
var introColors = [
    "linear-gradient(40deg, rgb(227, 109, 117), rgb(154, 223, 235))",
    "linear-gradient(40deg, rgb(109, 223, 227), rgb(235, 154, 204))",
    "linear-gradient(40deg, rgba(103, 4, 10, 1), rgba(154, 168, 235, 1))"
];
var chosenIntroColor = introColors[Math.floor(Math.random()*introColors.length)];
document.querySelector(".intro").style.background = chosenIntroColor;
function updatePercentage() {
    percentageUpdater = setInterval(() => {
        number = Math.floor(Math.random()*101);
        if (number >= newPercentage) {
            newPercentage = number;
            document.querySelector(".percentage").innerHTML = newPercentage + "%";
            finished();
        } else if (newPercentage == finish) {
            finished();
        } else {
            underPercentage += 1;
            if (underPercentage == limit) {
                newPercentage += 1;
                underPercentage = 0;
                document.querySelector(".percentage").innerHTML = newPercentage + "%";
            }
        }
    }, 150);
}
function finishedAction(action) {
    action();
}
function finished() {
    if (newPercentage == finish) {
        clearInterval(percentageUpdater);
        console.log(newPercentage);
        finishedAction(() => {
            document.querySelector(".intro").style.display = "flex";
            document.querySelector(".intro").style.opacity = 0;
            setTimeout(hideOptions, 2500);
        });
    }
}
updatePercentage();
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
var menu = document.querySelector(".menu");
var closeBtnMenu = menu.querySelector(".close");
var options = document.querySelector(".options");
options.addEventListener("click", () => {
    menu.setAttribute("style", "position: fixed; top: 0; left: 0;");
});
closeBtnMenu.addEventListener("click", () => {
    menu.setAttribute("style", "position: fixed; top: 0; left: 100%;");
});