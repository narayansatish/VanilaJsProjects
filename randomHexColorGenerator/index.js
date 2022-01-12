function genRandomColor() {
    document.getElementById("value").innerHTML = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("app").style.backgroundColor = document.getElementById("value").innerHTML;
}


