export abstract class DioAccount {
    private readonly name:string
    private readonly accountNumber:number
    private balance:number = 0
    private status:boolean = true


    constructor(name:string, accountNumber:number){
        this.name = name
        this.accountNumber = accountNumber
    }

    // setName = (name:string):void=>{
    //     this.name = name
    //     console.log('Nome alterado com sucesso!')
    // }

    getName = ():string=>{
        return this.name
    }

    deposit = (value:number):void =>{
        if(this.validateStatus()){
            this.balance = this.balance + value
            console.log(`Você depositou R$ ${value}`)
        }
    }

    withdraw =(value:number):void=>{
        if(this.validateStatus() && this.balance > value){
            this.balance = this.balance - value
            console.log(`Você sacou R$ ${value}`)
        }
    }

    setBalance=(value:number):void=>{
        this.balance = value
    }

    getBalance=():number=>{
        return this.balance
    }

    getStatus=():boolean =>{
        return this.status
    }

    private validateStatus=():boolean=>{
        if(this.status){
            return this.status
        }

        throw new Error('Status desativado')
    }
}