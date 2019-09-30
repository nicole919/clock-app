function updateClock() {
    let currentTime = new Date();

    let currentHours = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    //pad minutes and seconds with leading zeros, if required
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    //choose "AM" or "PM"
    let timeOfDay = (currentHours < 12) ? "AM" : "PM";
    currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
    currentHours = (currentHours == 0) ? 12 : currentHours;

    //compose string for display
    let currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + "" + timeOfDay;

    //update time display
    document.getElementById("clock").firstChild.nodeValue = currentTimeString;
}
updateClock();

let oneSecond = 1000;
setInterval(updateClock, oneSecond);

//buttons
let sleepyButton = document.getElementById("sleepy-cat");
let sleepyEvent = function () {
    document.getElementById("main-cat").src = "https://www.catster.com/wp-content/uploads/2017/07/gray-and-white-cat-asleep-with-whiskers-out.jpg";
}
sleepyButton.addEventListener("click", sleepyEvent)

let partyButton = document.getElementById("party-cat");
let partyEvent = function () {
    document.getElementById("main-cat").src = "https://i.pinimg.com/originals/89/9e/71/899e7132fd5125067051104e5e3e3073.jpg";
}
partyButton.addEventListener("click", partyEvent)

let hungryButton = document.getElementById("eating-cat");
let hungryEvent = function () {
    document.getElementById("main-cat").src = "https://www.petmd.com/sites/default/files/big-kitty-eating-picture-id872888452.jpg";
}
hungryButton.addEventListener("click", hungryEvent)



