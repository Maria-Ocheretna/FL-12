let valueA = parseInt(prompt('Enter value A'));
let valueB = parseInt(prompt('Enter value B'));
let valueC = parseInt(prompt('Enter value C'));

if(isNaN(valueA) || isNaN(valueB) || isNaN(valueC)) {
    alert('input values should be ONLY numbers');
    } else if(valueA <= 0 || valueB <= 0 || valueC <= 0) {
        alert('A triangle must have 3 sides with a positive definite length');
        } else if(valueA + valueB <= valueC || valueB + valueC <= valueA || valueA + valueC <= valueB) {
            alert('Triangle doesn’t exist');
            } else if(valueA === valueB && valueB === valueC) {
                console.log('Equilateral triangle');
                    } else if(valueA === valueB && valueB !== valueC || valueB === valueC && valueC !== valueA 
                    || valueC === valueA && valueA !== valueB) {
                        console.log('Isosceles triangle');
                            } else {
                                console.log('Scalene triangle');
                                }