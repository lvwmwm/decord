// Module ID: 7626
// Function ID: 7627
// Name: FeGaussianBlur
// Dependencies: [41, 42, 93, 95, 98, 19, 21, 7627, 7614, 7615]

// Module 7626 (FeGaussianBlur)
import Fragment from "Fragment" /* 21 */;
import extractFeFlood from "extractFeFlood" /* 7614 */;
import _modDef7615 from "module_7615" /* 7615 */;
import _modDef7627 from "module_7627" /* 7627 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
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
class FeGaussianBlur {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, FeGaussianBlur);
    const obj = _getPrototypeOf(FeGaussianBlur);
    const tmp2 = _getPrototypeOf;
    const tmp3 = _possibleConstructorReturn;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(FeGaussianBlur, _modDef7615);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    _modDef7627;
    const obj2 = extractFeFlood;
    const merged = Object.assign(obj2.extractFilter(this.props));
    const obj3 = extractFeFlood;
    const merged1 = Object.assign(obj3.extractIn(this.props));
    const obj4 = extractFeFlood;
    const merged2 = Object.assign(obj4.extractFeGaussianBlur(this.props));
    return <tmp ref={function ref(arg0) {
      return self.refMethod(arg0);
    }} />;
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(FeGaussianBlur, items);
importDefaultResultResult.displayName = "FeGaussianBlur";
let obj = { stdDeviation: 0, edgeMode: "none" };
let merged = Object.assign(importDefaultResultResult.defaultPrimitiveProps);
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;
