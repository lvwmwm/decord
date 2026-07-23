// Module ID: 270
// Function ID: 3382
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 201]

// Module 270 (_isNativeReflectConstruct)
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
  class CustomEvent {
    constructor(arg0, arg1) {
      self = this;
      tmp = CustomEvent(this, CustomEvent);
      items = [, ];
      items[0] = arg0;
      items[1] = arg1;
      obj = outer1_3(CustomEvent);
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
      detail = undefined;
      if (null != arg1) {
        detail = arg1.detail;
      }
      tmp2Result._detail = detail;
      return tmp2Result;
    }
  }
  callback2(CustomEvent, arg0);
  let items = [
    {
      key: "detail",
      get() {
        return this._detail;
      }
    }
  ];
  return callback(CustomEvent, items);
})(require("Event"));
