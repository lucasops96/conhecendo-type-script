import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";




const people:PeopleAccount = new PeopleAccount(23,'Lucas',3)
console.log(people)
people.deposit()

const company:CompanyAccount = new CompanyAccount('DIO',410)
console.log(company.deposit())