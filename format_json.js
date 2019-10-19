export { formatJSON };

const indent = '\t';

function formatJSON (unformattedJSON) {
    if (Array.isArray(unformattedJSON)) {
        return formatArray(unformattedJSON);
    } else if (typeof unformattedJSON === 'object') {
        return formatObject(unformattedJSON);
    } else {
        throw new TypeError('Invalid input type');
    }
}

function formatObject (jsonObject, indentSize = 1) {
    let objectString = '{';
    let delimiter = '';
    for (let [key, value] of Object.entries(jsonObject)) {
        objectString = objectString + delimiter + '\n' + indent.repeat(indentSize) + "\"" + key + "\": " + formatValue(value, indentSize);
        if (delimiter === '') {
            delimiter = ',';
        }
    }
    objectString = objectString + '\n' + indent.repeat(indentSize - 1) + '}';
    return objectString;
};

function formatArray (jsonArray, indentSize = 1) {
    let arrayString = '[';
    let delimiter = '';
    for (let element of jsonArray) {
        arrayString = arrayString + delimiter + '\n' + indent.repeat(indentSize) + formatValue(element, indentSize);
        if (delimiter === '') {
            delimiter = ',';
        }
    }
    arrayString = arrayString + '\n' + indent.repeat(indentSize - 1) + ']';
    return arrayString;
};

function formatValue(value, indentSize = 1) {
    if (Array.isArray(value)) {
        return formatArray(value, indentSize + 1);
    } else if (value === null) {
        return 'null';
    } else if (typeof value === 'object') {
        return formatObject(value, indentSize + 1);
    } else if (typeof value === 'number') {
        return value;
    } else {
        return ("\"" + value + "\"");
    }
}