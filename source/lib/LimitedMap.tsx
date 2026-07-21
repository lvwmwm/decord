// Module ID: 7790
// Function ID: 62191
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 7790 (_isNativeReflectConstruct)
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
let closure_5 = importDefault(dependencyMap[5]);
const tmp2 = (arg0) => {
  class LimitedMap {
    constructor(arg0) {
      self = this;
      tmp = LimitedMap(this, LimitedMap);
      obj = closure_3(LimitedMap);
      tmp2 = closure_2;
      if (closure_6()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, [], closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.maxSize = arg0;
      return tmp2Result;
    }
  }
  let closure_0 = LimitedMap;
  callback2(LimitedMap, arg0);
  const items = [
    {
      key: "set",
      value(arg0, arg1) {
        const self = this;
        if (this.size >= this.maxSize) {
          self.delete(self.keys().next().value);
          const iter = self.keys();
        }
        const items = [arg0, arg1];
        return function _superPropGet(LimitedMap, set, self, arg3) {
          let prototype = LimitedMap;
          if (1) {
            prototype = LimitedMap.prototype;
          }
          const tmpResult = closure_4(closure_3(prototype), "set", self);
          let fn = tmpResult;
          if (2) {
            fn = tmpResult;
            if ("function" === typeof tmpResult) {
              fn = (arg0) => tmpResult.apply(arg2, arg0);
            }
          }
          return fn;
        }(LimitedMap, "set", self, 3)(items);
      }
    }
  ];
  return callback(LimitedMap, items);
}(importDefault(dependencyMap[6])(Map));
const result = arg1(dependencyMap[7]).fileFinishedImporting("lib/LimitedMap.tsx");

export default tmp2;
