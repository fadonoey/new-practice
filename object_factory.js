var d1 = new Date('2022-08-31');
console.log('d1.getMonth()', d1.getMonth());

function Person(name,first, second, third){
    this.name = name;
    this.first = first;
    this.second = second;
    this.third = third;
    this.sum = function(){
        return this.first+this.second;
    }
}

var kim = new Person('kim', 20, 30, 40);
var seoyeon = new Person('Seoyeon', 100, 100, 100)
console.log('Person()', Person());
console.log('new Person()', new Person());

console.log('kim', kim);
console.log('Seoyeon', seoyeon);
console.log('Seoyeon', seoyeon.sum());