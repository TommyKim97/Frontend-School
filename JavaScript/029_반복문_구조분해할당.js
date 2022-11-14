let value = [10, 1, 100, 300, 10];
let value2 = {
    one : 1,
    two : 2,
    three : 3,
    four : 4
}

Object.keys(value);
Object.keys(value2);

for (i in value2) {
    //for of로 순회를 돌 수 없음
    console.log(i);
}

//구조분해할당은 for문에서만 쓰는 것은 아님

for (i of value2) {
    //of로 순회를 돌아야 key와 value를 한꺼번에 출력하고 싶은 것 -> error
    console.log (i);
} // error

Object.entries(value);
Object.entries(value2);

for (i of Object.entries(value2)) {
    console.log(i);
}

for (i of Object.entries(value2)) {
    console.log(`key는 ${i[0]}이고 value는 ${i[1]} 입니다.`)
}

for ([i, j] of Object.entries(value2)) {
    console.log(`key는 ${i}이고 value는 ${j} 입니다.`);
    //key는 one이고 value는 1 입니다.
    //key는 two이고 value는 2 입니다.
    //key는 three이고 value는 3 입니다.
    //key는 four이고 value는 4 입니다.
}

for ([i, j] of [[10, 20],[30,40]]) {
    console.log(i,j);
} //10 20 //30 40

for ([i,j] of [[10, 20, 300], [30,40,500]]) {
    console.log(i,j); 
    //10 20
    //30 40
    //300과 500을 받지 못했음
}

for ([i,j, ...k] of [[10, 20, 300, 1, 2], [30, 40, 500, 1]]) {
    //몇 개 들어 있는지 모르는 경우
    console.log(i,j,k);
    //10 20 [300, 1, 2]
    //30 40 [500, 1]
}

for ([[i,j], k] of [[[10, 20], 300], [[30,40],500]]) {
    console.log(i,j,k);
    //10 20 300
    //30 40 500
}

for ([i,j] of [[[10, 20], 300], [[30, 40], 500]]) {
    console.log(i,j);
    //[10, 20] 300
    //[30, 40] 500
}

//일반 변수 선언의 구조분해할당
// let a, b, c;
// [a,b] = [10, 20]; // [10, 20]
// a //10
// b //20

let one, two, three;
[one, two, three] = '010-1234-5678'.split('-'); //['010', '1234', '5678']
one //'010'
two //'1234'
three //'5678'

let one1, two1, three1, four1;
[one1, two1, three1, four1] = '010-1234-5678-9999'.split('-'); //['010', '1234', '5678', '9999']
four1 //'9999'


//구조분해할당 문제
data = [10, 20, 30, 40, 50
]
//문제1
//a, b, c를 각각 분헤
//a에는 10, b에는 20, 30, 40, c에는 50을 할당하기
[a, ...b, c] = [10, 20, 30, 40, 50] //(X)
[a, b, c] = [data[0], [data[1], data[2], data[3]], data[4]]; //0


//문제2
//d, e, f를 각각 분헤
//d에는 10,20, 30 e에는 40, f에는 50을 할당하기
[...d, e, f] = [10, 20, 30, 40, 50]; // (X)
[d, e, f] = [[data[0], data[1], data[2]], data[3], data[4]]; // O

//문제3 (정상 작동, 마지막에만 사용할 수 있습니다.)
//g, h, i를 각각 분헤
//g에는 10, h에는 20, i에는 30, 40, 50을 할당하기
let g, h, i;
// [g, h, i] = [10, 20, [30, 40, 50]];
[g, h, ...i] = [10, 20, 30, 40, 50];


//Object 구조분해할당
let data = {
    name : 'young',
    age : 200,
    money : 100,
    userId : 'iguana'
}
let {name, age} = data

let {name, age} = {name: 'young', age: 200};


let data = {
    name : 'young',
    age : 200,
    money : 100,
    company: 'iguana'
}
let {name, age, ...rest} = data

// 순서를 뒤바꿔 봅시다.
let data = {
    name : 'young',
    money : 100,
    company: 'iguana',
    age : 200,
}
let {name, age, ...rest} = data

//RORO 기법 등의 디자인 패턴에서도 구조분해할당을 많이 사용함

let a = [10, 20, 30];
a.push(100); //a의 뒤에 데이터를 넣음
a.unshift(1000); //a 의 맨앞에 데이터를 넣음

//스프레드 용법으로도 같은 표현이 가능함
let a = [10, 20, 30];
a= [1000, ...a, 100];

let a = [1, 2, 3];
let b = [10, 20, 30];
let c = [...a, ...b]; //이렇게 합친 값을 다시 구조분해할당

let str = 'hello world';
console.log([str]); //['hello world']

let str = 'hello world';
console.log([...str]); 
//['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd']

'!'.repeat(10);
[...'!'.repeat(10)]; //['!', '!', '!', '!', '!', '!', '!', '!', '!', '!']


