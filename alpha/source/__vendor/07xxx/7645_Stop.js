// Module ID: 7645
// Function ID: 7646
// Name: Stop
// Dependencies: [41, 42, 93, 95, 98, 19]

// Module 7645 (Stop)
import react from "react" /* 19 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import map from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class Stop {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    _classCallCheck(this, Stop);
    const items1 = [...items];
    const obj = _getPrototypeOf(Stop);
    const tmp2 = _getPrototypeOf;
    const tmp3 = map;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result.setNativeProps = () => {
      const parent = props.props.parent;
      if (parent) {
        parent.forceUpdate();
      }
    };
    return tmp3Result;
  }
}
_inherits(Stop, react.Component);
const entry = {
  key: "render",
  value: function render() {
    return null;
  }
};
let items = [entry];
const importDefaultResultResult = _createClass(Stop, items);
importDefaultResultResult.displayName = "Stop";

export default importDefaultResultResult;
