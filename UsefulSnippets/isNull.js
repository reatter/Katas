//checks if an object is of type null
// since typeof null = "object"

function is_null(obj) {
    return typeof obj === "object" && obj == null
}
