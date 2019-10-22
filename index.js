import { formatJSON } from './format_json.js';

export function parseJSON() {
    const unformattedJSON = document.getElementById('json_text').value;
    try {
        document.getElementById('formatted_json_text').value = formatJSON(JSON.parse(unformattedJSON));
    } catch (e) {
        if (e instanceof SyntaxError) {
            alert('Invalid JSON');
        } else {
            alert('An error occured');
        }
    }
}

document.querySelector('button').addEventListener('click', parseJSON);