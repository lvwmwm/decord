// Module ID: 8102
// Function ID: 64174
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 31]

// Module 8102 (_isNativeReflectConstruct)
import _defineProperties from "_defineProperties";
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let _defineProperties = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _defineProperties;
  }
  const result = _isNativeReflectConstruct();
}
const tmp2 = ((Component) => {
  class FilterPrimitive {
    constructor() {
      self = this;
      tmp = outer1_1(this, apply);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = outer1_3(apply);
      tmp3 = outer1_2;
      if (outer1_5()) {
        if (!combined) {
          combined = [];
        }
        tmp5 = outer1_3;
        constructResult = Reflect.construct(obj, combined, outer1_3(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp3Result = tmp3(self, constructResult);
      apply = tmp3Result;
      tmp3Result.root = null;
      tmp3Result.refMethod = (root) => {
        _defineProperties.root = root;
      };
      tmp3Result.setNativeProps = (arg0) => {
        const root = tmp3Result.root;
        if (null != root) {
          root.setNativeProps(arg0);
        }
      };
      return tmp3Result;
    }
  }
  callback(FilterPrimitive, Component);
  return FilterPrimitive(FilterPrimitive);
})(require("result").Component);
tmp2.defaultPrimitiveProps = {};

export default tmp2;
