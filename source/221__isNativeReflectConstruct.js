// Module ID: 221
// Function ID: 3067
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 201]

// Module 221 (_isNativeReflectConstruct)
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
  class CloseEvent {
    constructor(arg0, arg1) {
      self = this;
      tmp = CloseEvent(this, CloseEvent);
      items = [, ];
      items[0] = arg0;
      items[1] = arg1;
      obj = outer1_3(CloseEvent);
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
  callback2(CloseEvent, arg0);
  let obj = {
    key: "wasClean",
    get() {
      return this._wasClean;
    }
  };
  let items = [obj, , ];
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
})(require("Event"));
