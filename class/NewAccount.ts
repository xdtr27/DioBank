import { DioAccount } from "./DioAccount";

export class NewAccount extends DioAccount {

  additionDeposit = (cash: number) => {
   this.setBalance(this.getBalance() + cash + 10);
   console.log(`Novo saldo: ${this.getBalance()}`);
  }
};