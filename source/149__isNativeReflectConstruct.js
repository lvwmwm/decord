// Module ID: 149
// Function ID: 2372
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 134, 148]

// Module 149 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _defineProperties from "_defineProperties";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}

export default ((arg0) => {
  class ReadOnlyText {
    constructor() {
      self = this;
      tmp = outer1_2(this, ReadOnlyText);
      obj = outer1_5(ReadOnlyText);
      tmp2 = outer1_4;
      if (outer1_7()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(ReadOnlyText, arg0);
  let obj = {
    key: "nodeName",
    get() {
      return "#text";
    }
  };
  const items = [obj, ];
  obj = {
    key: "nodeType",
    get() {
      return ReadOnlyText(outer1_1[5]).TEXT_NODE;
    }
  };
  items[1] = obj;
  return callback(ReadOnlyText, items);
})(require("_isNativeReflectConstruct"));
