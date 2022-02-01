function submitData() {
    var fname = document.forms["sum"]["fname"].value;
    var lname = document.forms["sum"]["lname"].value;
    var age = document.forms["sum"]["bdate"].value;

    // var sum = fname + lname + bdate;

    var result = document.getElementById("written");
    result.innerHTML = `<h3>My name is <span id="fnameCheck">${fname}</span> ${lname}, and i am ${age}</h3>`;

    // var fname = document.forms["sum"]["fname"].value;
    // var length = fname.replace( /\s/g, '' ).length;

    // switch (true) {
    //     case (length >= 5):
    //         result.innerHTML = fname;
    //         result.style.background = "green";
    //         break;
    //     case (length < 5):
    //         result.innerHTML = fname;
    //         result.style.background = "red";
    //         break;
    // }

    if (fname.length >= 5) {
        document.getElementById("fnameCheck").style.background = "green";
    } else {
        document.getElementById("fnameCheck").style.background = "red";
    }

    return false;
}