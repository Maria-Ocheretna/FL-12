function countNumbers() {
    let strToArray = Array.from(arguments);
    let ArrayToStr = strToArray.toString();
    let myNumber = '';
    for (let i = 0; i < ArrayToStr.length; i++) {
        if (!isNaN(parseInt(ArrayToStr.charAt(i)))) {
        myNumber = myNumber + ArrayToStr.charAt(i);
        }
    }
    let n1 = myNumber.split('');
    let countNumbs = n1.reduce(function (allNumbers, number) { 
        if (number in allNumbers) {
          allNumbers[number]++;
        } else {
          allNumbers[number] = 1;
        }
        return allNumbers;
}, {});
return countNumbs;
}

countNumbers();
