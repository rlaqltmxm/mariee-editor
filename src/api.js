const HOSTNAME = 'http://localhost:3000';

export const CHANNEL_NAME = 'new-docs';
export const UPDATE_PAPER_EVENT = 'update-paper';
export const UPDATE_TITLE_EVENT = 'update-title';

export function updateTitle(payload) {
    return fetch(`${HOSTNAME}/${UPDATE_TITLE_EVENT}`, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
    });
}

export function updateEditorState(payload) {
    return fetch(`${HOSTNAME}/${UPDATE_PAPER_EVENT}`, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
    });
}
