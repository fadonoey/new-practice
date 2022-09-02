class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
        console.log('constructor');
    }
}

var kim = new Person('kim', 20, 30);

console.log('kim', kim);
// kim.sum = function(){
//     return 'kim: '+(this.first+this.second);
// };
// var seoyeon = new Person('Seoyeon', 100, 100, 100);
// console.log('kim', kim.sum());
// console.log('Seoyeon', seoyeon.sum());