frame = document.getElementById("service")

document.getElementById("show").onclick = function() {
    if (frame.style.display == "none"){
        frame.style.display = "block";
    }
}

document.getElementById("hide").onclick = function() {
    if (frame.style.display == "block"){
        frame.style.display = "none";
    }
}