// Module ID: 8158
// Function ID: 64492
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31]

// Module 8158 (_isNativeReflectConstruct)
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
const tmp2 = ((Component) => {
  class Stop {
    constructor() {
      self = this;
      tmp = Stop(this, apply);
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
      tmp3Result.setNativeProps = () => {
        const parent = tmp3Result.props.parent;
        if (parent) {
          parent.forceUpdate();
        }
      };
      return tmp3Result;
    }
  }
  callback2(Stop, Component);
  let items = [
    {
      key: "render",
      value: function render() {
        return null;
      }
    }
  ];
  return callback(Stop, items);
})(require("result").Component);
tmp2.displayName = "Stop";

export default tmp2;
