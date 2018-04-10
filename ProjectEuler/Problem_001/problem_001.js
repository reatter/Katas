
/* Project Euler Problem 1
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

function multipleOfThree(number) {
    return (number != 0 && number%3 === 0);
}

function multipleOfFive(number) {
    return (number != 0 && number%5 === 0);
}

function addMultiplesOfThreeAndFive(max) {
    let sum = 0;

    for(var i = 0; i < max; i++) {
        if (multipleOfThree(i) || multipleOfFive(i)) {
            sum += i;
        }
    }

    return sum;
}
