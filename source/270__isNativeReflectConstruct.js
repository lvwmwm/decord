// Module ID: 270
// Function ID: 3382
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 270 (_isNativeReflectConstruct)
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

export default (arg0) => {
  class CustomEvent {
    constructor(arg0, arg1) {
      self = this;
      tmp = CustomEvent(this, CustomEvent);
      items = [, ];
      items[0] = arg0;
      items[1] = arg1;
      obj = closure_3(CustomEvent);
      tmp2 = closure_2;
      if (closure_5()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj, items, closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      detail = undefined;
      if (null != arg1) {
        detail = arg1.detail;
      }
      tmp2Result._detail = detail;
      return tmp2Result;
    }
  }
  let closure_0 = CustomEvent;
  callback2(CustomEvent, arg0);
  const items = [
    {
      key: "detail",
      get() {
        return this._detail;
      }
    }
  ];
  return callback(CustomEvent, items);
}(importDefault(dependencyMap[5]));
