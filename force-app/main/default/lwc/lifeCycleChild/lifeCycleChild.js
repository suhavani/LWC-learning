import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {
    constructor(){
        super();
        console.log("Child constructor called")
    }
    connectedCallback(){
        console.log("child connectedcallback called")
        throw new Error("Loading of child component failed");

    }
    renderedCallback(){
        console.log("child renderedcallback called")
    }
    disconnectedCallback(){
        alert("child disconnectedcallback called")
        
    }
}