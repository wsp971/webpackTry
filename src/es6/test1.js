import{test1,test2} from "./module.js";

import {sum as Sum} from "./module.js";

import custom  from "./module2";


console.log(test1,test2);
console.log(Sum(1,5));
custom();


class Cat{
    constructor(name){
        this.name = name;
    }
    print(){
        console.log(this.name);
    }
}
var mycat = new Cat("haha");
mycat.print();

