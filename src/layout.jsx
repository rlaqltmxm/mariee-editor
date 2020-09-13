import React from 'react';
import Header from './header';
import Paper from './paper';
import {EditorState} from 'draft-js';
import './styles/layout.scss';

export default function Layout() {

    const [editorState, setEditorState] = React.useState(
        () =>
            EditorState.createEmpty()
    );

    function onUpdateChildState(next) {
        setEditorState(next);
    }

    return (
        <div className="wrapper">
            <Header editorState={editorState}
                setEditorState={onUpdateChildState}/>
            <div className="content">
                <Paper editorState={editorState}
                    onChange={onUpdateChildState} />
            </div>
        </div>
    );
}
