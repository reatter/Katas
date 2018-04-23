// DeepEquals exercise

// recursive comparison with ===

function is_null(obj) {
    return typeof obj === "object" && obj == null
}


//test objects

let test1 = {property1: 1,
    property2:"Gurke"
}

let test2 = {property1: 1,
    property2:"Gurke"
}

let test3 =  {property1: 1,
    property2:"Gurke",
    abos:{nerdflix:"shill"}
}

let test4 = {property1: 1,
    property2:"Gurke",
    abos:{nerdflix:"shill"}}

    // implementation

    function keys(object) {
        return Object.keys(object)
    }

/*
checks if two arrays/objects have the same property keys
*/
function hasEqualKeys(ob1, ob2) {
    _equals = true
    for (let key of keys1) {
        if(!(key in keys2))
            _equals = false
    }
    return _equals
}

    function deepEquals(ob1, ob2) {
        let keys1 = keys(ob1)
        let keys2 = keys(ob2)


        console.log("keys1: ", keys1, " ", "keys2: ",keys2)
        console.log(keys1 == keys2)



        return _equals
    }

    deepEquals(test1,test2)
