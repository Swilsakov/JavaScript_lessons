const person = new Object ({
    name: 'Maxim',
    age: 23,
    greet: function() {
        console.log("Greet!")
    }
})


Object.prototype.sayHello = function() {
    console.log("Hello!")
}


const lena = Object.create(person)
lena.name = 'Elena'


const str = new String('I am string')





