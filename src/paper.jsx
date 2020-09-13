import React from 'react';
import {Editor, EditorState} from 'draft-js';
import './styles/paper.scss';

export default function Paper({ editorState, onChange }) {

    return (
        <div className="paper-wrapper">
            <Editor editorState={editorState}
                    onChange={onChange} />
        </div>
    );
}
