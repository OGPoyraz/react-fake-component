#react-fake-component

Bored from loading indicators? You can fake it.

This component highly inspired from [Kenan Yusuf's -Fake it'til you Make it- blog.](https://kyusuf.com/post/fake-it-til-you-make-it-css)

[🦄 Working Demo & Examples](http://ogpoyraz.com/react-fake-component)

![react-fake-component](http://ogpoyraz.com/react-fake-component/react-fake-component-demo.gif)


###Usage

Install

```bash
npm i --save react-fake-component 
```

add ```https://github.com/OGPoyraz/react-fake-component/blob/master/dist/style.css``` into your styles.

```js
// Import
import FakeComponent from 'react-fake-component';

// & Render
<FakeComponent fake={{
    type: 'c',
    header: true,
    line: 3,
    repeat:5,
    className: 'customClass',
    styleForComponent: {
        padding: '20px',
        border:'5px solid #aac8ff'
    },
    styleForDivider:{
        height:'1px',
        marginTop:'10px',
        marginBottom:'10px',
        backgroundColor:'#ddd'
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
    },
    styleForAvatar: {
        backgroundColor: '#aac8ff',
        width: '100px',
        height: '100px'
    }
}}/>
```

#### Changelog
##### 1.1.1
* _repeat_ property added. [#1](https://github.com/OGPoyraz/react-fake-component/issues/1)
* Divider && _styleForDivider_ added. [#2](https://github.com/OGPoyraz/react-fake-component/issues/2)

###Development

Clone repo & navigate into it

```bash
npm i
npm run development
```

& browse http://localhost:3000

Thanks for reading.
