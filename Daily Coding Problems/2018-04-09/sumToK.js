/*
Given a list of numbers, return whether any two sums to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
*/

"use strict" // avoid errors

/*
removes numbers larger than k from list and returns list
*/
function removeLargeNumbers(k, list) {
    for (var i = 0; i < list.length; i++) {
        if (list[i] > k) {
            list.splice(i--,1);
        }
    }
    return list;
}

/*
finds the maximum of a list
returns -Infinity if list is empty
*/
function findMax(list) {
    let max = -Infinity;

    for (var i = 0; i < list.length; i++) {
        if (list[i] > max) {
            max = list[i];
        }
    }
    return max;
}

/*
tries a number by substracting it from k and
looking up if there is the missing other summand
return found numbers, or delete number from list
*/
function tryNumber(number, list, k) {



    return numbers;
}
