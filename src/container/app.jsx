import React from 'react';
import Header from '../components/header';
import Paper from '../components/paper';
import {EditorState} from 'draft-js';

import {
    updateTitle,
    updateEditorState,
    UPDATE_TITLE_EVENT,
    UPDATE_PAPER_EVENT
} from '../api';

import '../styles/layout.scss';

export default function App({channel}) {

    const [editorState, setEditorState] = React.useState(
        () =>
            EditorState.createEmpty()
    );
    const [title, setTitle] = React.useState('');

    React.useEffect(() => {
        channel.bind(UPDATE_TITLE_EVENT, setTitle);
        channel.bind(UPDATE_PAPER_EVENT, setEditorState);
    });

    async function onUpdateTitle(newTitle) {
        await updateTitle({newTitle});
    }

    async function onUpdateEditorState(newEditorState) {
        await updateEditorState({newEditorState});
    }

    return (
        <div className="wrapper">
            <Header title={title}
                setTitle={onUpdateTitle}
                editorState={editorState}
                setEditorState={onUpdateEditorState}/>
            <div className="content">
                <Paper editorState={editorState}
                    onChange={onUpdateEditorState} />
            </div>
        </div>
    );
}
