// Dio banking

// name, accountNumber
// depositar, sacar

import { CompanyAccount } from "./class/CompanyAccount"; // getLoan
import { PeopleAccount } from "./class/PeopleAccount"; // deposit, withdraw
import { NewAccount } from "./class/NewAccount";


const peopleAccount: PeopleAccount = new PeopleAccount(1234, 'Alexandre', 123);
const companyAccount: CompanyAccount = new CompanyAccount('Google', 9876);
const newAccount: NewAccount = new NewAccount('something', 122);

peopleAccount.deposit(10);
peopleAccount.withdraw(5);

companyAccount.deposit(20);
companyAccount.getLoan(20);

newAccount.additionDeposit(30);