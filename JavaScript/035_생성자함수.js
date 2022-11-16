let book = {
    책이름 : 'JavaScript'
    책가격 : 1000,
    저자 : '홍길동'
    출판일 : '22.10.11.'
}

let newbook = {}

newbook['책이름'] = 'JavaScript' //예를 들어 form에서 입력 받은 값
newbook['책가격'] = 1000000
newbook['저자'] = '소영, 보리'
newbook['출판일'] = '22.03.22.'

function Book(책이름, 책가격, 저자, 출판일) {
    this.책이름 = 책이름;
    this.책가격 = 책가격;
    this.저자 = 저자;
    this.출판일 = 출판일;
}

// let data = Book('CSS', 10, '유진', '22.07.18.')
// console.log(data) //undefined

let book1 = new Book('HTML', 10, 'kim', '22.09.07.')
let book2 = Book('CSS', 20, 'lee', '22.09.07.')
let book3 = new Book('JS', 30, 'park', '22.09.07.')

console.log(book1, book2, book3)

//new 키워드를 사용했을 경우
function Book(책이름, 책가격, 저자, 출판일){
    // this = {}
    this.책이름 = 책이름
    this.책가격 = 책가격
    this.저자 = 저자
    this.출판일 = 출판일
    // return this
}

//객체를 찍어내는 용도로도 사용할 수 있음.
//메모리 상으로 더 효율적임.

