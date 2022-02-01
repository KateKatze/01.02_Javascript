function submitData() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var age = document.getElementById("bdate").value;
    var prof1 = document.getElementById("IT").checked;
    var prof2 = document.getElementById("Hospitality").checked;
    var prof3 = document.getElementById("Medicine").checked;
    console.log(prof1, prof2, prof3);
    var prof = "";
    var color = "";
    switch (true) {
        case (prof1 == true):
            prof = "IT";
            color = "purple";
            break;

        case (prof2 == true):
            prof = "Hospitality";
            color = "yellow";
            break;

        case (prof3 == true):
            prof = "Medicine";
            color = "blue";
            break;
    }
    var result = document.getElementById("written");
    result.innerHTML = `<h3>My name is <span id="fnameCheck">${fname}</span> ${lname}, and i am ${age}, working in <span id="profCheck" style="background: ${color}">${prof}</span></h3>`;

    if (fname.length >= 5) {
        document.getElementById("fnameCheck").style.background = "green";
    } else {
        document.getElementById("fnameCheck").style.background = "red";
    }

    for (let i = 0; i < 6; i++) {
        document.getElementsByClassName("zero")[i].value = "";
    }
}