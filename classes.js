

class formaDeBolo{
    constructor(saborDaMassa , saborRecheio){
        //this. defini sua variavel (let saborDaMassa)
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio

    }
    //function
    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio ${this.saborRecheio}`)
    
    }
    assar(){
        console.log("Bolo assando " + this.saborDaMassa);
    }
}

let boloFesta = new formaDeBolo("massa de chocolate" , " recheio morango")
let boloFim = new formaDeBolo("massa de goiaba" , " recheio morango")
//console.log(boloFesta);
// o ponto chama a varivel recsitada. 
//console.log(boloFesta.saborDaMassa);

boloFesta.escrever();
boloFim.escrever();

