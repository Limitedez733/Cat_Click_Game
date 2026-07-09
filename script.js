let catCount = 0;
let isWorldConquered = false;
let qutoSpawnInterval = null;


function spawnCat() {
    if (isWorldConquered) return;

    createcat();
    catCount++;

    if (catCount >=20) {
        conquerWorld();
    }

}

function createcat() {
    const cat = document.createElement("img");
    //alert("nya.");
    cat.src = "cat.png";
    //cat.style.width = "160px";
    const size = 50 + Math.random() * 150;

    cat.style.width = size + "px";

    cat.style.position = "absolute";

    const x = Math.random() * (window.innerWidth - size);
    const y = Math.random() * (window.innerHeight - size);

    cat.style.left = x + "px";                    
    cat.style.top = y + "px";

    document.body.appendChild(cat);

    if (Math.random() < 0.2) {
        spawnMessage();
    }
}

function spawnMessage() {
    console.log("give me message");

    const messages = [
        "nya.",
        "nyanyanyanya",
        "nyaaaaaaaaaaaaaaa"
    ];
    const text = document.createElement("div");

    const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];

    text.textContent = randomMessage;

    text.style.position = "absolute";
    text.style.left = Math.random() * (window.innerWidth - 160) + "px";
    text.style.top = Math.random() * (window.innerHeight - 160) + "px";

    text.style.fontSize = "30px";
    text.style.fontWeight = "bold";
    text.style.color = "black";
    text.style.zIndex = "9999";

    document.body.appendChild(text);
}

function conquerWorld() {
    isWorldConquered = true;

    const button = document.getElementById("CAT");
    button.ariaDisabled = true;
    button.textContent = "cat is all";

    const message = document.getElementById("message");
    if (message) {
        message.textContent = "CAT: world is mine.";
    }

    autoSpawnInterval = setInterval(function () {
        console.log(catCount);

        if (catCount >= 100) {
            clearInterval(autoSpawnInterval);
            return;
        }

        createcat();
        catCount++;
    }, 100);
}

