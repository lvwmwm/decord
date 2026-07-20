// Module ID: 220
// Function ID: 3058
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 220 (_isNativeReflectConstruct)
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
  class MessageEvent {
    constructor(arg0, arg1) {
      self = this;
      tmp = MessageEvent(this, MessageEvent);
      items = [, ];
      items[0] = arg0;
      items[1] = arg1;
      obj = closure_3(MessageEvent);
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
      data = undefined;
      if (null != arg1) {
        data = arg1.data;
      }
      tmp2Result._data = data;
      origin = undefined;
      if (null != arg1) {
        origin = arg1.origin;
      }
      str = "";
      str2 = "";
      if (null != origin) {
        str2 = origin;
      }
      tmp2Result._origin = String(str2);
      lastEventId = undefined;
      if (null != arg1) {
        lastEventId = arg1.lastEventId;
      }
      if (null != lastEventId) {
        str = lastEventId;
      }
      tmp2Result._lastEventId = String(str);
      return tmp2Result;
    }
  }
  let closure_0 = MessageEvent;
  callback2(MessageEvent, arg0);
  let obj = {
    key: "data",
    get() {
      return this._data;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "origin",
    get() {
      return this._origin;
    }
  };
  items[1] = obj;
  obj = {
    key: "lastEventId",
    get() {
      return this._lastEventId;
    }
  };
  items[2] = obj;
  return callback(MessageEvent, items);
}(importDefault(dependencyMap[5]));
