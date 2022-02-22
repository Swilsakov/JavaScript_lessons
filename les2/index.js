function hello() {
    console.log('Hello', this)
}

const person = {
    name: 'Max',
    age: 24,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)

        console.groupEnd()
    }

}


const lena = {
    name: 'Elena',
    age: 21,
}

// person.logInfo.bind(lena, 'Frontend', '996999929399')() // bind - вызывается после того как указали ()
// person.logInfo.call(lena, 'Frontend', '996999929399') // call - сразу вызывает функцию в использование без ()
person.logInfo.apply(lena, ['Frontend', '996999929399']) // apply - получает данные через массив



/// =================================================


const array = [1, 2, 3, 4, 5]

// function multBy(arr, n){
//     return arr.map(function(i) {
//         return i * n
//     })
// }

// console.log(multBy(array, 12))


Array.prototype.multBy = function(n) {
    return this.map(function(i) {
        return i * n
    })
}

console.log(array.multBy(22))