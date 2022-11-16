//콜백함수는 나중에 부르기 위해서 사용

function sum(x, y, 콜백함수) {
    콜백함수(x + y);
    // return x + y;
}

function documentWriter(s) {
    document.write('콜백함수', s)
}

// sum(10, 20, console.log);
sum(10, 20, documentWriter) //함수를 아규먼트로 전달하는 것

//콜백함수는 함수를 아규먼트로 전달해 코드 어딘가에서 호출하는 것
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// 구문 : arr.map(callback(currentValue[, index[, array]])[, thisArg])

let arr = [10, 20, 30, 40, 50]
arr.map(제곱);

function 제곱(x) {
    return x ** 2
} // x => x ** 2
arr.map(x => x**2)

//자료형마다 다른 forEach가 있기 때문에 사용시 주의해야 한다
//노드에서의 forEach는 IE에서 작동하지 않는다.
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// arr.forEach(callback(currentvalue[, index[, array]])[, thisArg])
// https://caniuse.com/mdn-api_nodelist_foreach


function 두배(x) {
    console.log(x * 2)
}

let arr = [10, 20, 30, 40, 50]
arr.forEach(두배)


//문제 : 화살표함수를 사용해 아래 map과 동일한 기능을 하는 forEach문을 완성하기
let arr = [10, 20, 30, 40, 50]
arr.map(x => x**2)

//정답
let arr1 = [10, 20, 30, 40, 50];
let arr2 = [];

arr1.forEach((x)=> arr.push(x**2));

//정답2
let result = []
arr.forEach(e => {
    result.push(e ** 2)
})
console.log(result)