function keyPress(e){
    let key;
    let char;

    if(window.event) {
        key = e.keyCode
    } else if(e.which){
        key = e.which
    }

    char = String.fromCharCode(key)

    console.log(char)

}