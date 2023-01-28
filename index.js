class Telephone{
    constructor(){
        this.observers = new Set();
        this.phoneNumbers = new Set();
    }

    addPhoneNumber(phoneNumber){
        this.phoneNumbers.add(phoneNumber);
    }

    removePhoneNumber(phoneNumber){
        if(this.phoneNumbers.has(phoneNumber)) {
            this.phoneNumbers.delete(phoneNumber);
        } else{
            this.notify(`${phoneNumber} is not in the phone list`)
        }
    }

    dialPhoneNumber(phoneNumber){
        if(this.phoneNumbers.has(phoneNumber)){
            this.notify(`${phoneNumber} \n Now Dialling ${phoneNumber}`)
        } else{
            this.notify(`${phoneNumber} has not been added to the phone list`)
        }
    }

    add(obs){
        this.observers.add(obs);
    }

    remove(obs){
        this.observers.delete(obs);
    }

    notify(data){
        for(let observer of this.observers){
            observer.update(data);
        }
    }
}

class Observer{
    constructor(){}
    update(data){
        console.log(data);
    }
}

const telcom = new Telephone();
const line1 = new Observer();
const line2 = new Observer();

telcom.addPhoneNumber('+23407035506513')
telcom.addPhoneNumber('+23407030006513')

telcom.add(line1);
telcom.add(line2);
telcom.dialPhoneNumber('+23407035506513');
