
class toyota{
    constructor(type){
        this.type
    }
}
class commercial extends toyota{
    constructor(type,name,engine,price){
        super(type);
        this.name = Avanza;
        this.engine = automatic;
        this.price = "500" ;
    }
    newCar1(){
        console.log(`${this.name} for comersial line`)
    }
}
class passanger extends toyota{
    constructor (type,name,engine,price){
        super(type);
        this.name = name;
        this.engine = engine;
        this.price = price;
    }
    newCar2 (){
        console.log(`${this.name} for passanger line`)
    }
}

const Rush = new commercial ("SUV","rush","manual","200jt");
const Avanza = new commercial ("SUV","Avanza","Automatic","350jt");
const Vios = new passanger ("Sedan","Vios","Hibrid","230jt");

console.log(Rush);
console.log(Avanza);
console.log(Vios);

Rush.newCar1();
Avanza.newCar1();
Vios.newCar2();