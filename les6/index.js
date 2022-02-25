// Объекты Object.create (getters, setters)


// const person = Object.create({}, {
//     name: {
//         value: 'Bob'
//     },
//     birthDay: {
//         value: "01/01/2000"
//     },
// })
// for (let key in person) {
//     console.log('Key', key)
// } // В данном случае циклы не работают

// ==========Обычный объект===========
// const person = {
//     name: 'Bob',
//     age: 23
// }

// for (let key in person) {
//     console.log('Key:', key)
// } 


// Рабочий цикл enumerable: true (по умиолчанию false)
const person = Object.create(
    {
        calculateAge() {
            console.log('Age:', new Date().getFullYear() - this.birthYear)
        }
    }, 
    {
    name: {
        value: 'Bob',
        enumerable: true, // при помощи enumerable мы можем получать данные через цикл
        writable: true,  // изменение данных
        configurable: true // удаление ключей
    },
    birthYear: {
        value: 2000,
        enumerable: false,
        writable: false,
        configurable: false
    },
    age: {
        get() {
            return new Date().getFullYear() - this.birthYear
        },
        set(value) {
            document.body.style.background = 'red'
            console.log('Set age', value)
        }
    }
})

// объект по умолчанию не может быть изменен => writable: true
// person.name = 'Max'

for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key, person[key])
    }
}
