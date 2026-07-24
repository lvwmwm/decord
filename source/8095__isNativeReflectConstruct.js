// Module ID: 8095
// Function ID: 64132
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 33, 8096]

// Module 8095 (_isNativeReflectConstruct)
import jsxProd from "jsxProd";
import __INTERNAL_VIEW_CONFIG from "__INTERNAL_VIEW_CONFIG";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import "result";
import { jsx } from "jsxProd";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
const tmp3 = ((Component) => {
  class Defs {
    constructor() {
      self = this;
      tmp = outer1_2(this, Defs);
      obj = outer1_5(Defs);
      tmp2 = outer1_4;
      if (outer1_8()) {
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
  callback2(Defs, Component);
  const items = [
    {
      key: "render",
      value: function render() {
        return outer1_7(Defs(outer1_1[7]), { children: this.props.children });
      }
    }
  ];
  return callback(Defs, items);
})(require("result").Component);
tmp3.displayName = "Defs";

export default tmp3;
