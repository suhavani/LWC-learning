import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {
    /// cretae custom Event and dispatch to parent
    closeHandler(){ 
        const myEvent = new CustomEvent('close', { 
            detail: { 
                msg:"Modal Closed Successfully!!"
            }
        })
        this.dispatchEvent(myEvent)
    }
}