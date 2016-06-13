// var component = require('./component');
// require('./index.less');
// document.body.appendChild(component());
// 
// 
// 
// import './index.less';

// import component from './component';

// let content = document.getElementById("content");
// content.appendChild(component());
// 



import React from 'react';
import ReactDOM from 'react-dom';
 
class HelloReact extends React.Component {
  render() {
    return <h1>Hello React!</h1>
  }
}
ReactDOM.render(<HelloReact/>, document.getElementById('content'));



