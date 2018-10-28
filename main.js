function openNav() {
    document.getElementById('menu').style.display = "block";
    document.getElementById('shortMenu').style.display = "none";
}

function closeNav() {
    document.getElementById('menu').style.display = "none";
    document.getElementById('shortMenu').style.display = "block";

}
setTimeout(function() {
    closeNav();
}, 50);