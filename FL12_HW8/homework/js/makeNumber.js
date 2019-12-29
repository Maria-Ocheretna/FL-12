function makeNumber() {
    let strToArray = Array.from(arguments);
    let ArrayToStr = strToArray.toString();
    let myNumber = '';
    for (let i = 0; i < ArrayToStr.length; i++) {
        if (!isNaN(parseInt(ArrayToStr.charAt(i)))) {
        myNumber = myNumber + ArrayToStr.charAt(i);
        }
    }
    return myNumber;
}

makeNumber();

