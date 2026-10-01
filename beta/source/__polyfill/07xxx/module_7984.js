// Module ID: 7984
// Function ID: 7985
// Dependencies: [41, 42, 93, 95, 98, 19, 21, 7985, 7986, 7933]

// Module 7984
import Fragment from "Fragment" /* 21 */;
import multiplyMatricesDefault from "multiplyMatrices" /* 7933 */;
import _modDef7985 from "module_7985" /* 7985 */;
import extractGradientDefault from "extractGradient" /* 7986 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react from "react" /* 19 */;

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
const jsx = Fragment.jsx;
class LinearGradient {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, LinearGradient);
    const obj = _getPrototypeOf(LinearGradient);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(LinearGradient, multiplyMatricesDefault);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    const props = this.props;
    const obj = { x1: props.x1, y1: props.y1, x2: props.x2, y2: props.y2 };
    _modDef7985;
    const merged = Object.assign(obj);
    const merged1 = Object.assign(extractGradientDefault(props, this));
    return <tmp ref={function ref(arg0) {
      return self.refMethod(arg0);
    }} />;
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(LinearGradient, items);
importDefaultResultResult.displayName = "LinearGradient";
importDefaultResultResult.defaultProps = { x1: "0%", y1: "0%", x2: "100%", y2: "0%" };

export default importDefaultResultResult;
