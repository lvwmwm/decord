// Module ID: 8066
// Function ID: 63999
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 8034]

// Module 8066 (_isNativeReflectConstruct)
import pickNotNil from "pickNotNil";
import _defineProperties from "_defineProperties";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
const tmp2 = ((Component) => {
  class FeDistantLight {
    constructor() {
      self = this;
      tmp = outer1_2(this, FeDistantLight);
      obj = outer1_5(FeDistantLight);
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
  callback2(FeDistantLight, Component);
  const items = [
    {
      key: "render",
      value: function render() {
        const result = FeDistantLight(outer1_1[6]).warnUnimplementedFilter();
        return null;
      }
    }
  ];
  return callback(FeDistantLight, items);
})(require("result").Component);
tmp2.displayName = "FeDistantLight";
tmp2.defaultProps = {};

export default tmp2;
