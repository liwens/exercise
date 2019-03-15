let MyPromise = require('./promise');
let p1 = new MyPromise(function (resolve, reject) {
    setTimeout(() => {
        let numn = Math.random();
        if (num < 0.5) {
            resolve(num)
        } else {
            reject()
        }
    });
})