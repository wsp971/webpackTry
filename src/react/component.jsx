import React from 'react';

class Greeting extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

class Welcome extends React.Component{
    render(){
        return <h1> hello , {this.props.name}</h1>
    }
}

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {time: new Date().toLocaleDateString()}
    }
    componentDidMount(){
        this.timeId = setInterval(() => this.showtime(),1000)
    }
    showtime(){
         var date = new Date();
         this.setState({time:date.getSeconds()})
    }
    componentWillUnmount (){
        clearInterval(this.timeId);
    }
    render(){
        return <h2> HELLO THIS IS {this.state.time}</h2>
    }
}



export {Greeting,Welcome, Clock};
