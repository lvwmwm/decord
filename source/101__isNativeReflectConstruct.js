// Module ID: 101
// Function ID: 1577
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 101 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let tmp2 = (arg0) => {
  class RCTDeviceEventEmitterImpl {
    constructor() {
      self = this;
      tmp = closure_2(this, RCTDeviceEventEmitterImpl);
      obj = closure_5(RCTDeviceEventEmitterImpl);
      tmp2 = closure_4;
      if (closure_8()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = RCTDeviceEventEmitterImpl;
  callback2(RCTDeviceEventEmitterImpl, arg0);
  const items = [
    {
      key: "emit",
      value: function emit(RCTDeviceEventEmitterImpl) {
        RCTDeviceEventEmitterImpl(closure_1[6]).beginEvent(() => "RCTDeviceEventEmitter.emit#" + arg0);
        const length = arguments.length;
        let num = 0;
        if (length > 1) {
          num = length - 1;
        }
        const array = new Array(num);
        for (let num2 = 1; num2 < length; num2 = num2 + 1) {
          array[num2 - 1] = arguments[num2];
        }
        const items = [RCTDeviceEventEmitterImpl];
        const obj = RCTDeviceEventEmitterImpl(closure_1[6]);
        !function _superPropGet(RCTDeviceEventEmitterImpl, emit, arg2, arg3) {
          RCTDeviceEventEmitterImpl = arg2;
          let prototype = RCTDeviceEventEmitterImpl;
          if (1) {
            prototype = RCTDeviceEventEmitterImpl.prototype;
          }
          const tmpResult = closure_6(closure_5(prototype), "emit", arg2);
          let fn = tmpResult;
          if (2) {
            fn = tmpResult;
            if ("function" === typeof tmpResult) {
              fn = (arg0) => tmpResult.apply(arg2, arg0);
            }
          }
          return fn;
        }(RCTDeviceEventEmitterImpl, "emit", this, 3)(items.concat(array));
        const tmp3 = function _superPropGet(RCTDeviceEventEmitterImpl, emit, arg2, arg3) {
          RCTDeviceEventEmitterImpl = arg2;
          let prototype = RCTDeviceEventEmitterImpl;
          if (1) {
            prototype = RCTDeviceEventEmitterImpl.prototype;
          }
          const tmpResult = closure_6(closure_5(prototype), "emit", arg2);
          let fn = tmpResult;
          if (2) {
            fn = tmpResult;
            if ("function" === typeof tmpResult) {
              fn = (arg0) => tmpResult.apply(arg2, arg0);
            }
          }
          return fn;
        }(RCTDeviceEventEmitterImpl, "emit", this, 3);
        RCTDeviceEventEmitterImpl(closure_1[6]).endEvent();
      }
    }
  ];
  return callback(RCTDeviceEventEmitterImpl, items);
}(importDefault(dependencyMap[7]));
tmp2 = new tmp2();
Object.defineProperty(global, "__rctDeviceEventEmitter", { configurable: true, value: tmp2 });

export default tmp2;
