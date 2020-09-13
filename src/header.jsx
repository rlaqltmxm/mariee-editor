import React from 'react';
import {Editor, EditorState} from 'draft-js';
import './styles/header.scss';

export default function Header() {
    const [title, setTitle] = React.useState('');

    function onChangeTitle({ target: { value }}) {
        setTitle(value);
    }

    return (
        <div className="header-wrapper">
            <div className="upper">
                <div className="paper-title">
                    <input id="title-input"
                        value={title}
                        onChange={onChangeTitle}
                        placeholder="제목 없는 문서" />
                </div>
            </div>
            <Toolbar />
        </div>
    );
}

export function Toolbar() {
    return (<div className="toolbar-wrapper"></div>)
}
