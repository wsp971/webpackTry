import {Component} from 'aaaa';
import ReactDOM from 'react-dom';

// const colorbox = require("../lib/jquery.colorbox");
import "../lib/jquery.colorbox";

// import "jquery-mousewheel";
// require("../lib/jquery-mousewheel");
// import '../lib/jquery-mousewheel'

// import "lib/jquery.spinner";
// import test1 from "mousewheel";

import spa2 from 'lib/spa2.js';

import common from 'lib/commonlib';

// common();
common.test();
import "lib/jquery-mousewheel";
import "lib/jquery.datetimepicker.full";



console.log(spa2);
// require("mousewheel");


// import "../lib/jquery.datetimepicker.full";

import {observable} from "mobx";
import {observer} from 'mobx-react/custom'

require("../../css/app.css");
console.log($);
// console.log(colorbox);

var timerData = observable({
    secondsPassed: 0
});

// var timerData = {
//     secondsPassed: 0
// }

setInterval(() => {
    timerData.secondsPassed++;
}, 1000);

@observer class Timer extends React.Component {
    render() {
        return (<span>Seconds passed: { this.props.timerData.secondsPassed } </span> )
    }
}
ReactDOM.render(<Timer timerData={timerData} />, document.getElementById("mount"));













//  @observer class TodoListView extends Component {
//     render() {
//         return <div>
//             <ul>
//                 {this.props.todoList.todos.map(todo =>
//                     <TodoView todo={todo} key={todo.id} />
//                 )}
//             </ul>
//             Tasks left: {this.props.todoList.unfinishedTodoCount}
//         </div>
//     }
// }
//
// const TodoView = observer(({todo}) =>
//     <li>
//         <input
//             type="checkbox"
//             checked={todo.finished}
//             onClick={() => todo.finished = !todo.finished}
//         />{todo.title}
//     </li>
// )
//
//
//
// const store = new TodoList();
//
// ReactDOM.render(<TodoListView todoList={store} />, document.getElementById('mount'));


@observer
class TodoList extends React.Component {
    render() {
        const store = this.props.store;
        return (
            <div>
                { store.report }
                <ul>
                    { store.todos.map(
                        (todo, idx) => <TodoView todo={ todo } key={ idx } />
                    ) }
                </ul>
                { store.pendingRequests > 0 ? <marquee>Loading...</marquee> : null }
                <button onClick={ this.onNewTodo }>New Todo</button>
                <small> (double-click a todo to edit)</small>
                <RenderCounter />
            </div>
        );
    }
}


@observer
class TodoView extends React.Component{
    render(){
        return (
            <ul>
                { this.props.todoList.map(function(todo,i){
                    return (<li key={i}>{todo}</li>)
                }) }
            </ul>
        )
    }
}
window.todo = observable(["readbook","try it"]);

ReactDOM.render(<TodoView todoList={todo}/>, document.getElementById("todolist"));
class Welcome extends React.Component{
    render(){
        return (
            <h1>hello {this.props.name}</h1>
        )
    }
}
var name = "wsp";
ReactDOM.render(<Welcome name={name}/>,document.getElementById("welcome"));