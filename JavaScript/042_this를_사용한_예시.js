function getEmptyRoomCount(hotel) {
    return hotel.방의개수 - hotel.예약자수;
}

let hotel = [
    {
        'name':'young hotel1',
        'rooms' : 40,
        'reservations':25,
        'availableRooms': function () {return this.rooms - this.reservations}
    }, {
        'name':'young hotel2',
        'rooms' : 30,
        'reservations':25,
        'availableRooms': function () {return this.rooms - this.reservations}
    }
]

//hotel[0]['rooms'] - hotel[0]['reservations']
console.log(hotel[0]['availabelRooms']()) // 아래 결과 값과 같습니다.
console.log(hotel[0].availableRooms()) // 자료구조 파악이 용이
console.log(getEmptyRoomCount(hotel[0])) // 메모리 공간에 이득
