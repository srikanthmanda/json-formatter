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

document.getElementById('format_json').addEventListener('click', parseJSON);

function copyToClipboard() {
    const formattedJSON = document.getElementById('formatted_json_text');
    formattedJSON.select();
    document.execCommand("copy");
}

document.getElementById('copy_formatted_json').addEventListener("click", copyToClipboard);