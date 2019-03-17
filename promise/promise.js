const PENDING = 'pending'//初始态
const FULFILLED = 'fulfilled'//初始态
const REJECTED = 'rejected'//初始态
function Promise(executor) {
self = this;
self.status = PENDING;

//定义存放成功回调的数组
self.onResolvedCallbacks = [];
//定义存放失败回调的数组
self.onRejectedCallbacks = [];
//当调用此方法的时候，如果promise状态为pending的话则转为成功态。如果已经是成功态或者失败态，则什么都不做
function resolve(value) {//2.1.1
  //如果是初始态，则转成成功态
  if(self.status == PENDING){
    self.status == FULFILLED;
    self.value = value; //成功后会得到一个值，这个值不能改
    //调用所有成功的回调
    self.onResolvedCallbacks.forEach(cb => cb(self.value))
  };
}

function reject(reason) {//2.1.2
  //如果是初始态，则转成失败态
  if(self.status == PENDING) {
    self.status = REJECTED;
    self.reason = reason; //失败原因给了reason
    //调用所有失败的回调
    self.onRejectedCallbacks.forEach(cb => cb(self.reason))
  }
}
try {
  //因为函数执行可能会异常，所以需要捕获
  executor(resolve, reject)
}catch(e) {
  //如果这个函数执行失败了，则用失败的原因reject这个promise
  reject(e);
}
}
//onFulfilled 是用来接收promise成功的值或者失败的原因
Promise.prototype.then = function(onFulfilled, onRejected) {
    //如果成功和失败的回调没有传，则表示这个then没有任何逻辑，只会把值往后抛
    onFulfilled = typeof onFulfilled == 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected == 'function' ? onRejected : reason => {throw reason};
    //如果当前的promise状态已经是成功态了，onFulfilled 直接取值
    let self = this;
    let promise2;
    //给同步的
    if(self.status == FULFILLED) {
        let x = onFulfilled(self.value);
    }
    //给同步的
    if(self.status == FULFILLED) {
        let x = onRejected(self.reason);
    }

    //异步的
    if(self.status == PENDING) {
        self.onResolvedCallbacks.push(onFulfilled)
        self.onRejectedCallbacks.push(onRejected)
    }
}

module.exports = Promise