document.addEventListener("keydown", function (e) {
    if (e.code === "KeyA") {
        console.log("The 'A' key is pressed.");
        let audio = new Audio("A.mp3");
        audio.play()
    } else if (e.code === "KeyS") {
        console.log("The 'S' key is pressed.");
        let audio = new Audio("S.mp3");
        audio.play()

    } else if (e.code === "KeyD") {
        console.log("The 'D' key is pressed.");
        let audio = new Audio("D.mp3");
        audio.play()
    } else if (e.code === "KeyF") {
        console.log("The 'F' key is pressed.");
        let audio = new Audio("F.mp3");
        audio.play()
    } else if (e.code === "KeyG") {
        console.log("The 'G' key is pressed.");
        let audio = new Audio("G.mp3");
        audio.play()
    } else if (e.code === "KeyH") {
        console.log("The 'H' key is pressed.");
        let audio = new Audio("H.mp3");
        audio.play()
    } else if (e.code === "KeyJ") {
        console.log("The 'J' key is pressed.");
        let audio = new Audio("J.mp3");
        audio.play()
    } else if (e.code === "KeyW") {
        console.log("The 'W' key is pressed.");
        let audio = new Audio("W.mp3");
        audio.play()
    } else if (e.code === "KeyE") {
        console.log("The 'E' key is pressed.");
        let audio = new Audio("E.mp3");
        audio.play()
    } else if (e.code === "KeyT") {
        console.log("The 'T' key is pressed.");
        let audio = new Audio("T.mp3");
        audio.play()
    } else if (e.code === "KeyY") {
        console.log("The 'Y' key is pressed.");
        let audio = new Audio("Y.mp3");
        audio.play()
    } else if (e.code === "KeyU") {
        console.log("The 'U' key is pressed.");
        let audio = new Audio("U.mp3");
        audio.play()
    } else {
        console.log("This keyboard doesn't have that key!");
    }
});