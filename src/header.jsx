import React from 'react';
import {RichUtils} from 'draft-js';
import './styles/header.scss';

export default function Header({ editorState, setEditorState }) {
    const [title, setTitle] = React.useState('');

    function onChangeTitle({ target: { value }}) {
        setTitle(value);
    }

    function toggleStyles(key) {
        switch (key) {
            case 'header-one':
            case 'header-two':
            case 'header-three':
            case 'header-four':
            case 'header-five':
            case 'header-six':
            case 'unordered-list-item':
            case 'ordered-list-item':
            case 'blockquote':
            case 'code-block':
                const updated = RichUtils.toggleBlockType(editorState, key);
                console.log(RichUtils.getCurrentBlockType(updated))
                setEditorState(updated);
                return;
            case 'Bold':
            case 'Italic':
            case 'Underline':
                return;
        }
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
            <Toolbar onToggleStyle={toggleStyles}
                editorState={editorState} />
        </div>
    );
}

const blockTypes = [
    {key: 'header-one', shorten: 'H1'},
    {key: 'header-two', shorten: 'H2'},
    {key: 'header-three', shorten: 'H3'},
    {key: 'header-four', shorten: 'H4'},
    {key: 'header-five', shorten: 'H5'},
    {key: 'header-six', shorten: 'H6'},
    {key: 'unordered-list-item', shorten: 'UL'},
    {key: 'ordered-list-item', shorten: 'OL'},
    {key: 'blockquote', shorten: 'Blockquote'},
    {key: 'code-block', shorten: 'Code'},
];

export function Toolbar({ editorState, onToggleStyle }) {

    function isOptionActive(key) {
        switch (key) {
            case 'header-one':
            case 'header-two':
            case 'header-three':
            case 'header-four':
            case 'header-five':
            case 'header-six':
            case 'unordered-list-item':
            case 'ordered-list-item':
            case 'blockquote':
            case 'code-block':
                return RichUtils.getCurrentBlockType(editorState) === key;
            default:
                return false;
        }
    }

    function getClassName(key) {
        let name = 'block-type-btn';
        if (isOptionActive(key)) name += ' active';
        return name;
    }

    return (
        <div className="toolbar-wrapper">
            {blockTypes.map((t, i) => (
                <span key={i}
                    className={getClassName(t.key)}
                    onClick={() => onToggleStyle(t.key)}
                >
                    {t.shorten}
                </span>
            ))}
        </div>
    );
}
