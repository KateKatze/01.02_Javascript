let santa = "not visible";
var element = document.getElementsByClassName("pic");
console.log(element);

for (let i = 0; i < element.length; i++) {
    element[i].addEventListener("click", function() {
        this.remove();
    })
}

var pic = document.getElementsByClassName("pic");

function santaToggle() {
    for (let i = )
        if (santa == "not visible") {
            pic.style.marginLeft = "0px";
            pic.style.transition = "1s";
        } else {
            pic.style.marginLeft = "-400px";
            santa = "not visible";
        }
}

document.getElementsByClassName("pic").addEventListener("click", santaToggle);


// didn´t work, look the ex list 03.02