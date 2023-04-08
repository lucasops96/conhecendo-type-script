import { DioAccount } from "./DioAccount";


export class NewAccount extends DioAccount{
    constructor(name:string, accountNumber:number){
        super(name,accountNumber)
    }

    deposit = (value: number):void => {
        if(this.getStatus()){
            this.setBalance(this.getBalance() + (value + 10))
            console.log(`Você depositou R$ ${value}`)
        }
    };
}