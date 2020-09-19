const HOSTNAME = 'http://localhost:3000';

export async function updateDocument(payload) {
    await fetch(HOSTNAME + '/update-docs', {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
    });
}

export function fetchDocument(channel) {

}
