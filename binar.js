// class Toyota {
//     constructor(lini) {
//         this.lini = lini;
//     }
//     introduce(){
//         console.log(`toyota will launch a new car for ${this.lini}`)
//     }
// }
// class offroad extends Toyota{
//     constructor(lini,name,color,seat){
//         super(lini);
//         this.name = name;
//         this.color = color;
//         this.seat = seat;
//     }
//     muddyRoads(){
//         console.log(`${this.name} for muddy roads`)
//     }
// }
// class family extends Toyota{
//     constructor(lini,name,color,seat){
//         super(lini);
//         this.name = name;
//         this.color = color;
//         this.seat = seat;
//     }
//     cityRoads(){
//         console.log(`${this.name} for city roads`)
//     }
// }
// const hylux = new offroad ("commercial","hylux","Blue","4");
// const avanza = new family ("passanger","avanza","black","6");

// console.log(hylux);
// console.log(avanza);

// hylux.muddyRoads();
// avanza.cityRoads();

class toyota{
    constructor(type){
        this.type
    }
}
class commercial extends toyota{
    constructor(type,name,engine,price){
        super(type);
        this.name = name;
        this.engine = engine;
        this.price = price;
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
