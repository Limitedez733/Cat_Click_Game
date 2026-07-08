function spawnCat() {
    const cat = document.createElement("img");
    //alert("nya.");
    cat.src = "cat.png";
    cat.style.width = "160px";

    cat.style.position = "absolute";

    const x = Math.random() * (window.innerWidth - 160);
    const y = Math.random() * (window.innerHeight - 160);

    cat.style.left = x + "px";
    cat.style.top = y + "px";

    document.body.appendChild(cat);

}