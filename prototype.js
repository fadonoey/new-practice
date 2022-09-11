function Person(name,first, second, third){
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
}
Person.prototype.sum = function(){
    return 'prototype: '+(this.first+this.second);
};
var kim = new Person('kim', 20, 30, 40);
kim.sum = function(){
    return 'kim: '+(this.first+this.second);
};
var seoyeon = new Person('Seoyeon', 100, 100, 100);
console.log('kim', kim.sum());
console.log('Seoyeon', seoyeon.sum());
// console.log('Seoyeon all', seoyeon);