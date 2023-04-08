import { CompanyAccount } from "./class/CompanyAccount";
import { NewAccount } from "./class/NewAccount";
import { PeopleAccount } from "./class/PeopleAccount";


const people:PeopleAccount = new PeopleAccount(23,'Lucas',3)
console.log(people)
people.deposit(400)
people.withdraw(45)
console.log(people.getBalance())


const company:CompanyAccount = new CompanyAccount('DIO',410)
console.log(company)
company.deposit(1200)
company.getLoan(5000)
console.log(company.getBalance())


const newAccount:NewAccount = new NewAccount('Miguel',123)
console.log(newAccount)
newAccount.deposit(250)
console.log(newAccount.getBalance())
