export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }
  getBalance() {
    return this.balance;
  }
  setBalance(balance: number) {
    this.balance = balance;
  }

  deposit = (cash: number) => {
    this.balance += cash;
    console.log(`Você depositou ${cash} reais. Saldo atual de ${this.balance}`);
  };
  withdraw = (cash: number) => {
    if (this.validateWithDraw(cash)) {
      this.balance -= cash;
      console.log(`Você sacou ${cash} reais. Saldo atual de ${this.balance}`);
    } else {
      console.log("Você não possui saldo o suficiente para sacar esse valor");
    }
  };
  private validateWithDraw = (cash: number) => {
    return this.balance > cash ? true : false;
  };
}
