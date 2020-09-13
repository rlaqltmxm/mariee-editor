import React from 'react';
import {Editor, EditorState} from 'draft-js';
import './styles/paper.scss';

export default function Paper() {
    const [editorState, setEditorState] = React.useState(
        () =>
            EditorState.createEmpty()
    );

    function logs(any) {
        console.log(any);
    }

    return (
        <div className="paper-wrapper">
            <Editor editorState={editorState}
                    onChange={logs} />
        </div>
    );
}
