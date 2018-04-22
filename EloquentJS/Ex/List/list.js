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

var is_array = function (value) {
    return Object.prototype.toString.apply(value) === '[object Array]';
}

// arrayToList [1,2,3]

function arrayToList(array) {
    if (!is_array(array)) {
        return
    }

    let list = {}

    list.value = array[0]
    let rest = array.slice(1)
    if (rest.length > 0) {
        list.rest = arrayToList(rest)
    } else {
       list.rest = null
    }

    return list
}


let result = arrayToList([1,2,3])
console.log(result)
