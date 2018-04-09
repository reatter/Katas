/*
Given a list of numbers, return whether any two sums to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
*/

"use strict" // avoid errors

function removeLargeSummands(k, list) {
    for (var i = 0; i < list.length; i++) {
        if (list[i] > k) {
            list.splice(i,1);
        }
    }
    return list;
}

function findSummand(k, list) {
    let summand = 0;

    for (var i = 0; i < list.length; i++) {
        if (list[i] <= k) {
            summand = list.slice(i);
            list.splice(i,1);
        }
    }
    return summand;
}

function sumToK(k, list) {
    let sumsUp = false;

    let summandA = 0;
    let summandB = 0;

    removeLargeSumands(k,list);
    summandA = findSummand(k,list);
    summandB = findSummand(k,List);

    if(summandA+summandB == k) {
        sumsUp = true;
    }

    return sumsUp;
}
