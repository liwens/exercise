const PENDING = 'pending'; //初始态
function myPromise() {
    let self = this; //先换成当前promise实例
    self.status = PENDING;
    //定义存放成功的回调的数组
    self.onResolvedCallbacks = [];
    //定义存放失败的回调的数组
    self.onRejectedCallbacks = [];
    //当调用此方法的时候，如果promise状态为pending，则转为成功态，如果已经是成功态或者失败态了，则什么都不做

    function resolve() {
        if (self.status == '')
    }

    function reject() {

    }
    try {
        //因为此函数执行可能会出异常，所以需要捕获，如果出错了，需要用错误对象reject
        exector();
    } catch (e) {
        //如果这函数执行失败了，则用失败的原因reject这个函数
        reject(e);
    }
}