let x = document.getElementById("responsive-menu");

function responsiveNav() {
    let x = document.getElementById("sub-menu");
    if (x.style.display != 'block') {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}