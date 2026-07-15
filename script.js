function isDate(input) {
    // Check if it's a valid Date object
    if (input instanceof Date) {
        return !isNaN(input.getTime());
    }

    // Check if it's a string or number that can be parsed into a valid date
    if (typeof input === "string" || typeof input === "number") {
        const date = new Date(input);
        return !isNaN(date.getTime());
    }

    // All other types are invalid
    return false;
}