function randomcolor() {
    let color = "#"
    for (let i = 0; i < 6; i++) {
        let rnd = (Math.floor(Math.random() * 16));
        color += rnd.toString(16);
    }
    document.body.style.backgroundColor = color;
    document.getElementById("paragraph").innerHTML = color.toUpperCase();
}