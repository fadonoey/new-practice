console.log(Math.PI);
console.log(Math.random());

var MyMath = {
    PI:Math.PI,
    random:function(){
        return Math.random();
    },
    floor:function(val){
        return Math.floor(val)
    }
}

console.log('MyMath.PI',MyMath.PI);
console.log('MyMath.random',MyMath.random());
console.log('MyMath.PI',MyMath.floor(2.56));