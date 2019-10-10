const indent = '\t';

function formatObject (jsonObject, indentSize = 1) {
    let objectString = '{';
    let delimiter = '';
    for (let [key, value] of Object.entries(jsonObject)) {
        let keyValue;
        if (Array.isArray(value)) {
            keyValue = formatArray(value, indentSize + 1);
        } else if (typeof value === 'object') {
            keyValue = formatObject(value, indentSize + 1);
        } else {
            keyValue = "\"" + value + "\"";
        }
        objectString = objectString + delimiter + '\n' + indent.repeat(indentSize) + "\"" + key + "\": " + keyValue;
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
        let keyValue;
        if (Array.isArray(element)) {
            keyValue = formatArray(element, indentSize + 1);
        } else if (typeof element === 'object') {
            keyValue = formatObject(element, indentSize + 1);
        } else {
            keyValue = "\"" + element + "\"";
        }
        arrayString = arrayString + delimiter + '\n' + indent.repeat(indentSize) + keyValue;
        if (delimiter === '') {
            delimiter = ',';
        }
    }
    arrayString = arrayString + '\n' + indent.repeat(indentSize - 1) + ']';
    return arrayString;
};

// console.log(formatObject({"a": 1, b: [2, 3, 4], c: {d: 6, e: [7, 8], f: 9}}));