import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    isvisible=false
    name
    handleClick(){
        this.isvisible=true;
    }
    changeHandeler(event){
        this.name=event.target.value;
    }
    get helloMethod(){
        return this.name === 'hello';
    }

}