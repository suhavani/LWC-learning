import {LightningElement} from 'lwc';

export default class HelloQuerySelector extends LightningElement {
    Handler(){
        const a=this.template.querySelector('h1')
        console.log(a.innerText)
    }
}