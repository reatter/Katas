// implement a list object which has a list as its next property
// the last element is null terminated
// implement listToArray and arrayToList

let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
}


// rescurse functions, i am very smart
function show(input) {
    console.log(input.value)
    if(input.rest != null)
        show(input.rest)
}


show(list)
