function hideOptions() {
    document.querySelector(".intro").style.display = "none";
    document.querySelector("html").setAttribute("class", "scrollEnabled");
}
function getMonthInText(number) {
            if (number == 1) {
                return "January"
            }
            if (number == 2) {
                return "February"
            }
            if (number == 3) {
                return "March"
            }
            if (number == 4) {
                return "April"
            }
            if (number == 5) {
                return "May"
            }
            if (number == 6) {
                return "June"
            }
            if (number == 7) {
                return "July"
            }
            if (number == 8) {
                return "August"
            }
            if (number == 9) {
                return "September"
            }
            if (number == 10) {
                return "October"
            }
            if (number == 11) {
                return "November"
            }
            if (number == 12) {
                return "December"
            }
        }
var oldPercentage = 0;
var newPercentage = 0;
var finish = 100;
var number = Math.floor(Math.random()*100);
var percentageUpdater;
var limit = 10;
var underPercentage = 0;
var month = getMonthInText(new Date().getMonth()+1);
var logo = document.querySelector(".logo");
var loadinglogo = document.querySelector(".loadinglogo");
var funfacts = {
    regular: [
        "Did you know every 165-200 earth years, Neptune will have a new year!?",
        "Did you know you can go back to your childhood if you go to a different planet?",
        "Did you know your age changes when you go to a planet like Neptune?",
        "Did you know most likely, you might be over 100 years old if you went to Neptune?",
        "Did you know FunJunk is made by Itzgametime Vip? Subscribe to him!",
        "I can't think of a fun fact right now.. Please reload to find one!"
    ],
    halloween: [
        "Did you know that original jack 'o lanterns were not pumpkins?",
        "Did you know wearing costumes started as a way to avoid ghosts?",
        "Did you know candy corn was invented in the 1880s and was not originally a Halloween candy?",
        "Did you know the average trick-or-treater consumes about 7,000 calories' worth of candy on Halloween?",
        "Did you know average americans spend over $12 billion to buy candy and halloween costumes!?"
    ],
    christmas: [
        "Did you know the first artificial Christmas trees were made from goose feathers in Germany?",
        "Did you know Jingle Bells was originally a Thanksgiving song?",
        "Did you know Rudolph the Red-Nosed Reindeer was a marketing gimmick? Rudolph is fake!?",
        "Is it a theory that Santa is fake or real!? Is he is fake, is he A LEGEND!?"
    ]
}
var introColors = {
    regular: [
        "linear-gradient(40deg, rgb(227, 109, 117), rgb(154, 223, 235))",
        "linear-gradient(40deg, rgb(109, 223, 227), rgb(235, 154, 204))",
        "linear-gradient(40deg, rgba(103, 4, 10, 1), rgba(154, 168, 235, 1))",
        "linear-gradient(rgb(41, 41, 204), rgb(235, 154, 204))"
    ],
    halloween: [
        "linear-gradient(40deg, orange, rgba(176, 111, 6, 1))",
        "linear-gradient(40deg, rgba(103, 4, 10, 1), rgba(154, 168, 235, 1))",
        "linear-gradient(rgb(41, 41, 204), rgb(235, 154, 204))"
    ],
    christmas: [
        "linear-gradient(40deg, rgba(58, 202, 29, 1), darkred)",
        "linear-gradient(40deg, darkred, rgba(58, 202, 29, 1)",
        "linear-gradient(40deg, rgba(103, 4, 10, 1), rgba(154, 168, 235, 1))",
        "linear-gradient(40deg, rgb(109, 223, 227), rgb(235, 154, 204))",
        "linear-gradient(rgb(41, 41, 204), rgb(235, 154, 204))"
    ],
    newyear: [
        "linear-gradient(40deg, lightblue, blue)",
        "linear-gradient(40deg, blue, darkblue)",
        "linear-gradient(rgb(41, 41, 204), rgb(235, 154, 204))"
    ]
};
var icons = [
    "icon.png",
    "newicon.png"
];
var chosenIcon = icons[Math.floor(Math.random()*icons.length)];
document.querySelector(".iconImg").href = chosenIcon;
if (month == "January") {
    var chosenIntroColor = introColors.newyear[Math.floor(Math.random()*introColors.newyear.length)];
    var chosenIntroFact = funfacts.regular[Math.floor(Math.random()*funfacts.regular.length)];
    document.querySelector(".funfact").innerHTML = chosenIntroFact;
    document.querySelector("#titleEventSponsor").innerHTML = "Use FunJunk as your default playtime app:";
    document.querySelector("#imgEventSponsor").src = "./banners/defaultplaysource.png";
    document.querySelector("#descEventSponsor").innerHTML = "Make FunJunk your default playtime app by installing it!";
    document.querySelector("#linkEventSponsor").href = "./link/frombanner/defaultplaytimeapp.html";
    logo.src = "logo.png";
    loadinglogo.src = "logo.png";
}
else if (month == "October") {
    var chosenIntroColor = introColors.halloween[Math.floor(Math.random()*introColors.halloween.length)];
    var chosenIntroFact = funfacts.halloween[Math.floor(Math.random()*funfacts.halloween.length)];
    document.querySelector(".funfact").innerHTML = chosenIntroFact;
    document.querySelector("#titleEventSponsor").innerHTML = "Is there something fun to do on FunJunk in Halloween?";
    document.querySelector("#imgEventSponsor").src = "./banners/halloween.png";
    document.querySelector("#descEventSponsor").innerHTML = "Yes! You absolutely can! Click the link down below to start:";
    document.querySelector("#linkEventSponsor").href = "./link/frombanner/halloween.html";
    logo.src = "halloweenLogoVariant.png";
    loadinglogo.src = "halloweenLogoVariant.png";
}
else if (month == "November") {
    var chosenIntroColor = introColors.christmas[Math.floor(Math.random()*introColors.christmas.length)];
    var chosenIntroFact = funfacts.christmas[Math.floor(Math.random()*funfacts.christmas.length)];
    document.querySelector(".funfact").innerHTML = chosenIntroFact;
    document.querySelector("#titleEventSponsor").innerHTML = "Is there something fun to do while we wait for Christmas?";
    document.querySelector("#imgEventSponsor").src = "./banners/christmasBanner.png";
    document.querySelector("#descEventSponsor").innerHTML = "Yes! You absolutely can! Click the link down below to start (Ho Ho Ho):";
    document.querySelector("#linkEventSponsor").href = "./link/frombanner/christmas.html";
    logo.src = "christmasLogoVariant.png";
    loadinglogo.src = "christmasLogoVariant.png";
}
else if (month == "December") {
    var chosenIntroColor = introColors.christmas[Math.floor(Math.random()*introColors.christmas.length)];
    var chosenIntroFact = funfacts.christmas[Math.floor(Math.random()*funfacts.christmas.length)];
    document.querySelector(".funfact").innerHTML = chosenIntroFact;
    document.querySelector("#titleEventSponsor").innerHTML = "Is there something fun to do while we wait for Christmas?";
    document.querySelector("#imgEventSponsor").src = "./banners/christmasBanner.png";
    document.querySelector("#descEventSponsor").innerHTML = "Yes! You absolutely can! Click the link down below to start (Ho Ho Ho):";
    document.querySelector("#linkEventSponsor").href = "./link/frombanner/christmas.html";
    logo.src = "christmasLogoVariant.png";
    loadinglogo.src = "christmasLogoVariant.png";
}
else {
    var chosenIntroColor = introColors.regular[Math.floor(Math.random()*introColors.regular.length)];
    var chosenIntroFact = funfacts.regular[Math.floor(Math.random()*funfacts.regular.length)];
    document.querySelector(".funfact").innerHTML = chosenIntroFact;
    document.querySelector(".funfact").innerHTML = chosenIntroFact;
    document.querySelector("#titleEventSponsor").innerHTML = "Use FunJunk as your default playtime app:";
    document.querySelector("#imgEventSponsor").src = "./banners/defaultplaysource.png";
    document.querySelector("#descEventSponsor").innerHTML = "Make FunJunk your default playtime app by installing it!";
    document.querySelector("#linkEventSponsor").href = "./link/frombanner/defaultplaytimeapp.html";
    logo.src = "logo.png";
    loadinglogo.src = "logo.png";
}
document.querySelector(".intro").style.background = chosenIntroColor;
document.body.style.background = chosenIntroColor;
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