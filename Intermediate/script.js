let santa = "not visible";
var element = document.getElementById("pic")

function santaToggle() {
    if (santa == "not visible") {
        pic.style.marginLeft = "0px";
        pic.style.transition = "1s";
    } else {
        pic.style.marginLeft = "-400px";
        santa = "not visible";
    }
}

document.getElementById("menu-btn").addEventListener("click", santaToggle);