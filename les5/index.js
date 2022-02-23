// Promise
console.log('Request data...')

// CallBack
// setTimeout(() => {
//     console.log('Prepering data...')

//     const backendData = {
//         server: 'aws',
//         prot: 2000,
//         status: 'working'
//     }

//     setTimeout(() => {
//         backendData.modified = true
//         console.log('Data recieved', backendData)
//     }, 2000)
// }, 2000 )

// Promise example
const p = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Prepering data...')
        const backendData = {
            server: 'aws',
            prot: 2000,
            status: 'working'
        }
        resolve(backendData)
    }, 2000);
})

// The first decision
// p.then(data => {
//     const p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true
//             resolve(data)
//         }, 2000)
//     })
//     p2.then(clientData => {
//         console.log('Data recieved', clientData)
//     })
// })

// The second decision
// p.then(data => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true
//             resolve(data)
//         }, 2000)
//     })
// })
//     .then(clientData => {
//         clientData.fromPromise = true
//         return clientData
//     })
//     .then(data => {
//        console.log('Modified', data)
//     })
//     .catch(err => console.log('Error: ', err)) // проверка на ошибки
//     .finally(() => console.log('Finally'))


const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}

// sleep(2000).then(() => console.log('After 2 sec'))
// sleep(3000).then(() => console.log('After 3 sec'))

Promise.all([sleep(2000), sleep(5000)])
    .then(() => {
        console.log('All promises')
})

Promise.race([sleep(2000), sleep(5000)])
    .then(() => {
        console.log('Race promises')
})