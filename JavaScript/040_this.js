function a() {
    console.log(this)//window
}

a();
//함수를 호출한 애가 this가 됨.
//누가 실행하냐에 따라 다름

function b() {
    console.log('hello world')
}
b() //hello world
window.b() //hello world

let test = {
    one : 1,
    two : 2,
    three : function() {
        console.log(this)
    }
}

test.three()

let test2 = test.three //undefined
