import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (cash: number) => {
    this.setBalance(this.getBalance() + cash);
    console.log(`Empréstimo concedido com sucesso! Novo saldo: ${this.getBalance()}`);
  };
}
