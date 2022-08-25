var skaterArray = ['Yuna','Gold','Rika','Young'];
// console.log(skaterArray[1],"skaterArray[1]");

var skaterObject = {
    'Korea':'Yuna',
    'Japan':'Rika',
    'USA':'Alysa',
    Russia:'Alena'
};

var i = 0;
console.group('Array loop');
while(i<skaterArray.length){
    console.log(i, skaterArray[i]);
    i = i + 1;
}
console.groupEnd('Array loop');

console.group('Object loop');
for(var name in skaterObject){
    console.log(name, skaterObject[name]);
}
console.groupEnd('Object loop')