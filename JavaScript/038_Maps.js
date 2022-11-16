let m = new Map();
//생성자 함수를 사용해 마치 오브젝트의 this를 받는 것 처럼 받을 수 있음
//map을 사용하면 완전히 오브젝트를 대체할 수 있음
m
    .set('one', 1) //메서드 체이닝, 점으로 연결
    .set('two', 2)
    .set('three', 3)
    .set('four', 4)
    .set(true, '참')
    .set([1, 2], '될까?')

console.log(m)
// 'one' => 1, 'two' => 2, 'three' => 3, 'four' => 4

//하나만 뽑아낼 수 있음
console.log(m.get('one')); //1
console.log(m.get(true));//참, object에서 가능하지 않음
console.log(m.get([1, 2])); //undefined, 각 객체가 다른 주소값을 가짐, 이렇게는 호출되지 않음

//python 비교분석
//1. Python
//python에서 아래 값은 다르게 나옴
// x = [1, 2]
// id(x)

//y = [1, 2]
// id (y)

//x == y //python에서는 true
//x is y //python에서는 false

//2. JavaScript
//[1, 2] === [1, 2] //false
//[1, 2] == [1, 2] //false
//let x = [1, 2]
//let y = [1, 2]
//x == y //false
//x === y //false

let m = new Map()
let test = [1,2]

m.set('one', 1) //메서드 체이닝
    .set(true, '참')
    .set(test, '될까?') //이렇게는 호출이 됨

console.log(m.get(test))

//Map에 해당 키값이 있는지 확인하기
m.has('하나')

//Map에 값을 제거하기
m.delete('one')
m.has('one')

//크기 구하기
m.size

let data = new Map([['one', 1], ['two',2]]) // O
let data = new Map(Object.entries({'one':1, 'two':2})) // O
let data = new Map({'one':1, 'two':2}) // X
// let data = new Map('hello world') // X
// let data = new Map([10, 20, 30, 40]) // X


//Map은 직접 순회가 가능하다는 게 가장 중요한 포인트이다.

let data = {'one':1, 'two':2}
for (const i of data) { // X 작동되지 않습니다!
    console.log(i)
}

let data = {'one':1, 'two':2}
for (const i of Object.entries(data)) {
    console.log(i)
}

let m = new Map();

m.set('하나', 1) // 메서드 체이닝
    .set('둘', 2)
    .set('셋', 3)
    .set('넷', 4)

for (const i of m) {
    console.log(i)
}

for (const [i, j] of m) {
    console.log(i, j)
}

m.keys()
m.values()
m.entries()


// Map - Object 간의 형변환
let 맵 = new Map(Object.entries({'one':1, 'two':2}))
let 오브젝트 = Object.fromEntries(맵)


// 맵과 object 100만개 순회 test

let map = new Map(); // 키 값의 중복이 안됩니다.
map.set('이호준', 1)
map.set('이호준', 2)
map.set('이호준', 3)