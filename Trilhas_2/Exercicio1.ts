class ContaBancaria {
    private titular: string;
    private saldo: number;
constructor(titular:string, saldo:number){
    this.titular = titular;
    this.saldo = saldo;
}

 public depositar(saldo){
saldo = this.saldo + saldo;
 }

 public retirar(saldo){
    saldo = this.saldo - saldo;
     }

     public mostrarSaldo(){
        console.log(`O saldo atual do titular ${this.titular} é: ${this.saldo}`)
     }
    
}

const conta1 = new ContaBancaria("Valdecir", 120);
conta1.mostrarSaldo();
conta1.depositar(122);
conta1.mostrarSaldo();
conta1.retirar(200);
conta1.mostrarSaldo();