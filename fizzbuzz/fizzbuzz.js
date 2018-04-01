/*
Print number
Print Fizz if number is divisor of 3
Print Buzz if number is divisor of 5
Print FizzBuzz if number is divisor of both
*/
function fizzbuzz(number) {

    let returnValue = number;

    if (number%3 === 0) {
        returnValue = "Fizz";
    }
    if (number%5 === 0) {
        if (returnValue == "Fizz")
            returnValue += "Buzz!";
        else
            returnValue = "Buzz";

    }



    return returnValue;
}
