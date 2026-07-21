// Module ID: 5053
// Function ID: 43127
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5053 (_isNativeReflectConstruct)
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

export const NativeGesture = (BaseGesture) => {
  class NativeGesture {
    constructor() {
      self = this;
      tmp = NativeGesture(this, NativeGesture);
      obj = closure_3(NativeGesture);
      tmp2 = closure_2;
      if (closure_5()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, [], closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.config = {};
      tmp2Result.handlerName = "NativeViewGestureHandler";
      return tmp2Result;
    }
  }
  let closure_0 = NativeGesture;
  callback2(NativeGesture, BaseGesture);
  let obj = {
    key: "shouldActivateOnStart",
    value: function shouldActivateOnStart(shouldActivateOnStart) {
      this.config.shouldActivateOnStart = shouldActivateOnStart;
      return this;
    }
  };
  const items = [obj, ];
  obj = {
    key: "disallowInterruption",
    value: function disallowInterruption(disallowInterruption) {
      this.config.disallowInterruption = disallowInterruption;
      return this;
    }
  };
  items[1] = obj;
  return callback(NativeGesture, items);
}(arg1(dependencyMap[5]).BaseGesture);
