import React from 'react';
import Header from './header';
import Paper from './paper';
import './styles/layout.scss';

export default function Layout() {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Paper/>
            </div>
        </div>
    );
}
