class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
        
    }
}

class PersonPlus extends Person{
    avg(){
        return (this.first+this.second)/2;
    }
}

var kim = new PersonPlus('kim', 20, 30);

console.log('kim', kim);
console.log('kim avg', kim.avg());
// kim.sum = function(){
//     return 'kim: '+(this.first+this.second);
// };
// var seoyeon = new Person('Seoyeon', 100, 100, 100);
// console.log('kim', kim.sum());
// console.log('Seoyeon', seoyeon.sum());