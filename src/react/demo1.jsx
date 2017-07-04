import React from 'react';
import ReactDOM from 'react-dom';
import {Greeting,Welcome,Clock} from "./component.jsx";

ReactDOM.render(
    <h2>Hello Webpack cao caocao</h2>,
    document.getElementById('hello')
);


ReactDOM.render(
    <div> hello,world</div>,
    document.getElementById("test")
);

var name = ["wsp","alice0","wsq","hahaha","wswsws","sahfshadfsdhafdhf"];


ReactDOM.render(
    <div>
        {
            name.map(function(name,i){
                return <div key = {i}>hello {name}</div>;
            })
        }
    </div>,
    document.getElementById("namelist")
);

var arr = [<h1>hello world</h1>,<h2>i hate react</h2>];

ReactDOM.render(
     <div>{arr}</div>,
    document.getElementById("content")
);

class HelloMessage extends  React.Component {
    render (){
        return <h1>hello {this.props.name}</h1>
    }
}
//
// var HelloMessage = React.createClass({
//     render: function(){
//         return <h1> hello {this.props.name}</h1>
//     }
// })
ReactDOM.render(<HelloMessage name="wsq"/>,document.getElementById("component"));


var MyTitle = React.createClass({
    propTypes: {
        title : React.PropTypes.string.isRequired
    },
    render: function (){
        return <h1> {this.props.title}</h1>
    }
});

var data = "asdfadsf";
ReactDOM.render(<MyTitle title={data}/>,
document.getElementById("title")
);

var LikeButton = React.createClass({
   getInitialState: function () {
       return {like: false};
   } ,
    handleClick : function(){
       this.setState({like: !this.state.like});
    },
    render: function(){
       var text = this.state.like ? "like": "don`t like";
       return (<p onClick={this.handleClick}>
           you {text} this , click to toggle;
       </p>);
    }
});

ReactDOM.render(<LikeButton/>,
document.getElementById("likebutton"));


var Input = React.createClass({
   getInitialState: function(){
       return {value : "hello "};
   },
    handleChange: function (e){
       this.setState({value : e.target.value});
    },
    render : function(){
       var value  = this.state.value;
       return (
           <div>
               <input type="text" value = {value} onChange = {this.handleChange}/>
               <p>{value}</p>
           </div>
       );
    }
});
ReactDOM.render(<Input/>,document.getElementById("input"));

ReactDOM.render(<Greeting name="wsp"/>,document.getElementById("greet"));

ReactDOM.render(<Welcome name="shenzhen"/>,document.getElementById("welcome"));

ReactDOM.render(<Clock/>, document.getElementById("clock"));

function tick(){
    const element = (
        <div>
            <h1>hello wrold</h1>
            <h2>it is {new Date().getSeconds()}</h2>
        </div>
    );

    ReactDOM.render(element,document.getElementById("clock"));
}

// setInterval(tick,1000);

class MyComponent extends  React.Component {
    show (){
        this.refs.myTextInput.getDOMNode().focus.bind(this);
    }
    handleClick(){
        this.show();
    }
    render(){
        return (
            <div>
                <input type="text" ref="myTextInput" />
                <input type="text"  />
                <input type="button" value="Focus the text input" onClick={this.handleClick} />
            </div>
        );
    }
}

ReactDOM.render(
    <MyComponent />,
    document.getElementById('example')
);




