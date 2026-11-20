// Module ID: 7836
// Function ID: 7837
// Name: RadialGradient
// Dependencies: [41, 42, 93, 95, 98, 19, 21, 7837, 7822, 7769]

// Module 7836 (RadialGradient)
import Fragment from "Fragment" /* 21 */;
import multiplyMatricesDefault from "multiplyMatrices" /* 7769 */;
import extractGradientDefault from "extractGradient" /* 7822 */;
import _modDef7837 from "module_7837" /* 7837 */;
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
class RadialGradient {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, RadialGradient);
    const obj = _getPrototypeOf(RadialGradient);
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
_inherits(RadialGradient, multiplyMatricesDefault);
const entry = {
  key: "render",
  value: function render() {
    let cx;
    let cy;
    let fx;
    let r;
    let rx;
    let ry;
    const self = this;
    const props = this.props;
    ({ rx, ry, r, cx, cy, fx } = props);
    if (undefined === fx) {
      fx = cx;
    }
    let fy = props.fy;
    const obj = { fx, fy, rx, ry, cx, cy };
    if (undefined === fy) {
      fy = cy;
    }
    if (!rx) {
      rx = r;
    }
    if (!ry) {
      ry = r;
    }
    _modDef7837;
    const merged = Object.assign(obj);
    const merged1 = Object.assign(extractGradientDefault(props, this));
    return <tmp ref={function ref(arg0) {
      return self.refMethod(arg0);
    }} />;
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(RadialGradient, items);
importDefaultResultResult.displayName = "RadialGradient";
importDefaultResultResult.defaultProps = { cx: "50%", cy: "50%", r: "50%" };

export default importDefaultResultResult;
