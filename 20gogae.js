// function getRandomIntInclusive(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
//   }
// var k = getRandomIntInclusive(3, 50);
// console.log(k);

k=10;
while(true){
    var num = document.getElementById('numInput').value;
    num = Number(num);
    if(k==num){
        document.write("정답입니다!")
        break;
    }
    else if(k > num){
        document.write("당신이 말한 숫자보다 큽니다.");
    }
    else{
        document.write("당신이 말한 숫자보다 작습니다.");
    }
}