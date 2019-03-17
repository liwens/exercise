let MyPromise = require('./promise');
let p1 = new MyPromise(function (resolve, reject) {
    setTimeout(() => {
        let num = Math.random();
        if (num < 0.5) {
            resolve(num)
        } else {
            reject('失败')
        }
    });
})


p1.then(function(data) {
    console.log(data)
    throw Error('成功回调出错了')
},function(reason) {
    console.log(reason)
}).then(function(data) {
    console.log(data)
},function(reason) {
    console.log(reason)
})

