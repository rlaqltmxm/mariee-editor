import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './container/layout';
import Pusher from 'pusher-js';
import {updateDocument} from './api';

// Pusher.logToConsole = true;

// const pusher = new Pusher('a3eb2b3ae9b441d9c8ff', {
//     cluster: 'ap3'
// });

// const channel = pusher.subscribe('my-channel');
// channel.bind('my-event', function(data) {
//     console.log(data);
// });

updateDocument(null, 'hello')

ReactDOM.render(<Layout channel={null}/>, document.getElementById('root'));
