
class hero{
    constructor(type,attack){

    
    this.type=type
    this.attack=attack

}





  



    aventury()
{
    console.log(`Um novo heroi chegou na cidade   de idade  ${this.attack} e chamado ${this.type}. `)
}

    ///function 
    atacar()
{
    console.log(`O ${this.type} atacou usando ${this.attack} .`) 

}

}
let nameHero = new hero ("xenovasco","25 anos");
let resultado = new hero ("Monge","artes marciais");

nameHero.aventury();
resultado.atacar();