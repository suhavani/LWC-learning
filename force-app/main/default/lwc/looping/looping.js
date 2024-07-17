import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    carList=["Audi","Ford","Maruti","Hyundai","Mercedes"];
    ceoList=[
        {
            id:1,
            company:"Google",
            name:"Sunadr Pichai"
        },
        {
            id:2,
            company:"Apple Inc.",
            name:"Tim Cook"
        },
        {
            id:3,
            company:"Facebook",
            name:"Mark Zuckerberg"
        },
    ];
}