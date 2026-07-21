// Module ID: 13251
// Function ID: 100557
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 13251 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let tmp2 = (arg0) => {
  class CallKitLifecycleManager {
    constructor() {
      self = this;
      tmp = CallKitLifecycleManager(this, CallKitLifecycleManager);
      obj = closure_3(CallKitLifecycleManager);
      tmp2 = closure_2;
      if (closure_5()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = CallKitLifecycleManager;
  callback2(CallKitLifecycleManager, arg0);
  let obj = {
    key: "_initialize",
    value() {

    }
  };
  const items = [obj, ];
  obj = {
    key: "_terminate",
    value() {

    }
  };
  items[1] = obj;
  return callback(CallKitLifecycleManager, items);
}(importDefault(dependencyMap[5]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/calls/mobile/CallKitManager.android.tsx");

export default tmp2;
