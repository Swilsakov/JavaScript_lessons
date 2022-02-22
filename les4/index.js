// Event Loop, Асинхронность 

console.log('Start')

console.log('Start 2')

function timeout3sec() {
    console.log('timeout3sec')
}

window.setTimeout(function() {
    console.log('Inside timeout, after 2 seconds')
}, 2000) // 2000 = 2 seconds

setTimeout(timeout3sec, 3000)

setTimeout(function() {
    console.log('Inside settimeout 0')
}, 0)


console.log('End')

