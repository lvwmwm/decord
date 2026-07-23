// Module ID: 8082
// Function ID: 64105
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 8034]

// Module 8082 (_isNativeReflectConstruct)
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
  class FeSpotLight {
    constructor() {
      self = this;
      tmp = outer1_2(this, FeSpotLight);
      obj = outer1_5(FeSpotLight);
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
  callback2(FeSpotLight, Component);
  const items = [
    {
      key: "render",
      value: function render() {
        const result = FeSpotLight(outer1_1[6]).warnUnimplementedFilter();
        return null;
      }
    }
  ];
  return callback(FeSpotLight, items);
})(require("result").Component);
tmp2.displayName = "FeSpotLight";
tmp2.defaultProps = {};

export default tmp2;
