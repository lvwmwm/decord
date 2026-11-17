// Module ID: 8310
// Function ID: 8311
// Name: FeBlend
// Dependencies: [41, 42, 93, 95, 98, 19, 21, 8311, 8312, 8313]

// Module 8310 (FeBlend)
import Fragment from "Fragment" /* 21 */;
import _modDef8311 from "module_8311" /* 8311 */;
import extractFeFlood from "extractFeFlood" /* 8312 */;
import _modDef8313 from "module_8313" /* 8313 */;
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
class FeBlend {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, FeBlend);
    const obj = _getPrototypeOf(FeBlend);
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
_inherits(FeBlend, _modDef8313);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    _modDef8311;
    const obj2 = extractFeFlood;
    const merged = Object.assign(obj2.extractFilter(this.props));
    const obj3 = extractFeFlood;
    const merged1 = Object.assign(obj3.extractIn(this.props));
    const obj4 = extractFeFlood;
    const merged2 = Object.assign(obj4.extractFeBlend(this.props));
    return <tmp ref={function ref(arg0) {
      return self.refMethod(arg0);
    }} />;
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(FeBlend, items);
importDefaultResultResult.displayName = "FeBlend";
let obj = { mode: "normal" };
let merged = Object.assign(importDefaultResultResult.defaultPrimitiveProps);
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;
