import React from 'react';
import {render} from 'react-dom';
import FakeComponent from './fakeComponent';

render(
    <div style={{width: '50%', marginLeft: 'auto', marginRight: 'auto', marginTop: '30px'}}>
        <h2>Paragraph with 3 line</h2>
        <FakeComponent fake={{
            type: 'p',
            header: false,
            line: 3
        }}/>

        <h2>Paragraph with header</h2>
        <FakeComponent fake={{
            type: 'p',
            header: true,
            line: 5
        }}/>

        <h2>Paragraph with custom style</h2>
        <FakeComponent fake={{
            type: 'p',
            header: true,
            line: 3,
            styleForComponent: {
                padding: '20px',
                border:'5px solid #aac8ff'
            },
            styleForLine: {
                backgroundColor: '#aac8ff',
                marginBottom: '8px',
                height: '8px'
            },
            styleForHeader: {
                backgroundColor: '#aac8ff',
                marginBottom: '15px',
                height: '20px'
            }
        }}/>

        <h2>Paragraph with custom class</h2>
        <FakeComponent fake={{
            type: 'p',
            header: true,
            line: 4,
            className: 'customClass'
        }}/>


        <h2>Comment with 5 line</h2>
        <FakeComponent fake={{
            type: 'c',
            header: false,
            line: 3
        }}/>

        <h2>Comment with header & 3 line</h2>
        <FakeComponent fake={{
            type: 'c',
            header: true,
            line: 5
        }}/>

        <h2>Comment with custom style</h2>
        <FakeComponent fake={{
            type: 'c',
            header: true,
            line: 3,
            styleForAvatar: {
                backgroundColor: '#aac8ff',
                width: '100px',
                height: '100px'
            },
            styleForComponent: {
                padding: '20px'
            },
            styleForLine: {
                backgroundColor: '#aac8ff',
                marginBottom: '10px',
                height: '10px'
            },
            styleForHeader: {
                backgroundColor: '#aac8ff',
                marginBottom: '15px',
                height: '20px'
            }
        }}/>

        <h2>Comment with custom class</h2>
        <FakeComponent fake={{
            type: 'c',
            header: true,
            line: 4,
            className: 'customClass'
        }}/>

    </div>, document.getElementById('root'));
