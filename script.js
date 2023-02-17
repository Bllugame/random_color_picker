function randomcolor() {
    const color = [];
    for (let i = 0; i < 6; i++) {
        const rnd = Math.floor(Math.random() * 16);
        color.push(rnd.toString(16));
    }
    const hexColor = "#" + color.join("");
    document.body.style.backgroundColor = hexColor;
    document.getElementById("paragraph").innerHTML = hexColor.toUpperCase();
}
