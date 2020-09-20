import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/app';
import Pusher from 'pusher-js';
import {
    CHANNEL_NAME,
} from './api';

const pusher = new Pusher('a3eb2b3ae9b441d9c8ff', {
    cluster: 'ap3'
});
const channel = pusher.subscribe(CHANNEL_NAME);

ReactDOM.render(
    <App channel={channel} />,
    document.getElementById('root')
);
