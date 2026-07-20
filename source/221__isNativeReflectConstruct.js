// Module ID: 221
// Function ID: 3067
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 221 (_isNativeReflectConstruct)
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
  class CloseEvent {
    constructor(arg0, arg1) {
      self = this;
      tmp = CloseEvent(this, CloseEvent);
      items = [, ];
      items[0] = arg0;
      items[1] = arg1;
      obj = closure_3(CloseEvent);
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
      wasClean = undefined;
      if (null != arg1) {
        wasClean = arg1.wasClean;
      }
      tmp2Result._wasClean = Boolean(wasClean);
      code = undefined;
      if (null != arg1) {
        code = arg1.code;
      }
      tmp9 = Number(code) || 0;
      tmp2Result._code = tmp9;
      reason = undefined;
      if (null != arg1) {
        reason = arg1.reason;
      }
      str = "";
      if (null != reason) {
        _String = String;
        str = String(arg1.reason);
      }
      tmp2Result._reason = str;
      return tmp2Result;
    }
  }
  let closure_0 = CloseEvent;
  callback2(CloseEvent, arg0);
  let obj = {
    key: "wasClean",
    get() {
      return this._wasClean;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "code",
    get() {
      return this._code;
    }
  };
  items[1] = obj;
  obj = {
    key: "reason",
    get() {
      return this._reason;
    }
  };
  items[2] = obj;
  return callback(CloseEvent, items);
}(importDefault(dependencyMap[5]));
