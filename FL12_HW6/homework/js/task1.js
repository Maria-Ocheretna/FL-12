let valueA = parseFloat(prompt('Enter value A'));
let valueB = parseFloat(prompt('Enter value B'));
let valueC = parseFloat(prompt('Enter value C'));
const numb2 = 2;
const numb4 = 4;
let discr = Math.pow(valueB,numb2) - numb4 * valueA * valueC;
let x, x1, x2;

if(valueA === 0 || isNaN(valueA) || isNaN(valueB) || isNaN(valueC)) {
    console.log('Invalid input data');
    } else if(discr > 0) {
        console.log('x1 = ' + Math.round(x1 = (-valueB + Math.sqrt(discr))/numb2 * valueA));
        console.log('x2 = ' + Math.round(x2 = (-valueB - Math.sqrt(discr))/numb2 * valueA));
            } else if(discr === 0) {
                console.log('x = ' + Math.round(x = -valueB/numb2 * valueA));
                    } else {
                        console.log('no solution');
                        }   