let outputLetter = document.getElementById("outputLetter");
const alpha = ["a", "b", "c", "d", "e", "f", "g", "h" ,"i", "j", "k" , "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function keyPress(e){
    let key;
    let char;

    if(window.event) {
        key = e.keyCode;
    } else if(e.which){
        key = e.which;
    }

    console.log(key)
    console.log(alpha.length)

    char = String.fromCharCode(key);
    outputLetter.innerHTML = char;
}