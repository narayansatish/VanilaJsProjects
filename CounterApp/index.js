function decrease() {
    document.getElementById("value").innerHTML = parseInt(document.getElementById("value").innerHTML) - 1;
    if (parseInt(document.getElementById("value").innerHTML) === -1) {
        document.getElementById("value").style.color = "red";

        console.log(document.getElementById("value").style.color);
    }

}
function increase() {
    document.getElementById("value").innerHTML = parseInt(document.getElementById("value").innerHTML) + 1;
    if (parseInt(document.getElementById("value").innerHTML) === 0)
        document.getElementById("value").style.color = "green";
}
function reset() {
    document.getElementById("value").innerHTML = 0;
    document.getElementById("value").style.color = "green";
}