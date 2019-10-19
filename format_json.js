export { formatJSON };

const indent = '\t';

function formatJSON (input, indents = 0) {
    const inputType = typeof(input);
    if (inputType === 'string') {
        return ('\"' + input + '\"');
    } else if (inputType === 'number' || inputType === 'boolean' || input === null) {
        return input;
    } else if (Array.isArray(input)) {
        return formatArray(input, indents + 1);
    } else if (inputType === 'object') {
        return formatObject(input, indents + 1);
    }
}

function formatObject (jsonObject, indents = 1) {
    let objectString = '{';
    let delimiter = '';
    for (let [key, value] of Object.entries(jsonObject)) {
        objectString = objectString + delimiter + '\n'
            + indent.repeat(indents) + "\"" + key + "\": " + formatJSON(value, indents);
        if (delimiter === '') {
            delimiter = ',';
        }
    }
    objectString = objectString + '\n' + indent.repeat(indents - 1) + '}';
    return objectString;
}

function formatArray (jsonArray, indents = 1) {
    let arrayString = '[';
    let delimiter = '';
    for (let element of jsonArray) {
        arrayString = arrayString + delimiter + '\n'
            + indent.repeat(indents) + formatJSON(element, indents);
        if (delimiter === '') {
            delimiter = ',';
        }
    }
    arrayString = arrayString + '\n' + indent.repeat(indents - 1) + ']';
    return arrayString;
}