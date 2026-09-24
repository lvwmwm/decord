// Module ID: 8815
// Function ID: 8816
// Dependencies: [41, 42, 93, 95, 98, 19, 21, 8816, 8803, 8804]

// Module 8815
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import _modDef8804 from "module_8804" /* 8804 */;
import _modDef8816 from "module_8816" /* 8816 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;

const FeGaussianBlur = fn;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
_possibleConstructorReturnDefault;
const jsx = fn(21).jsx;
class FeGaussianBlur {
  constructor() {
    self = this;
    tmp = closure_3(this, FeGaussianBlur);
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(FeGaussianBlur);
    tmp3 = closure_4;
    if (closure_7()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(FeGaussianBlur, _modDef8804);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    const obj = {
      ref(arg0) {
        return self.refMethod(arg0);
      }
    };
    const merged = Object.assign(FeGaussianBlur(8803).extractFilter(this.props));
    const obj2 = FeGaussianBlur(8803);
    const merged1 = Object.assign(FeGaussianBlur(8803).extractIn(this.props));
    const obj3 = FeGaussianBlur(8803);
    const merged2 = Object.assign(FeGaussianBlur(8803).extractFeGaussianBlur(this.props));
    return <tmp ref={function ref(arg0) {
      return self.refMethod(arg0);
    }} />;
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(FeGaussianBlur, items);
importDefaultResultResult.displayName = "FeGaussianBlur";
let obj = {};
let merged = Object.assign(importDefaultResultResult.defaultPrimitiveProps);
obj.stdDeviation = 0;
obj.edgeMode = "none";
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;
