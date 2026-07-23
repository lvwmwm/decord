// Module ID: 220
// Function ID: 3058
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 201]

// Module 220 (_isNativeReflectConstruct)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let _classCallCheck = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _classCallCheck;
  }
  const result = _isNativeReflectConstruct();
}

export default ((arg0) => {
  class MessageEvent {
    constructor(arg0, arg1) {
      self = this;
      tmp = MessageEvent(this, MessageEvent);
      items = [, ];
      items[0] = arg0;
      items[1] = arg1;
      obj = outer1_3(MessageEvent);
      tmp2 = outer1_2;
      if (outer1_5()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_3;
        constructResult = Reflect.construct(obj, items, outer1_3(self).constructor);
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
  callback2(MessageEvent, arg0);
  let obj = {
    key: "data",
    get() {
      return this._data;
    }
  };
  let items = [obj, , ];
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
})(require("Event"));
