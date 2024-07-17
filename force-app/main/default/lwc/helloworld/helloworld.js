import { LightningElement,track } from 'lwc';

export default class Helloworld extends LightningElement {
    fullname="Zero to Hero"
    title="Salesorce"
    chnageHandeler(event){
        this.title=event.target.value
    }
     address={
        city:"Banglore",
        PostalCode:"311021",
        country:"India"
    }
    trackHandeler(event){
        //this.address.city=event.target.value
        this.address={...this.address,"city":event.target.value}
    }

    /*** Getter example */
    users=["Suhavnai", "Chandransh"]
    num1=10
    num2=20

    get firstUser(){
        return this.users[0]

    }
    get multiply(){
       return this.num1 * this.num2
    }
}