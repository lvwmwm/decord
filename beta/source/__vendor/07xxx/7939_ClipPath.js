// Module ID: 7939
// Function ID: 7940
// Name: ClipPath
// Dependencies: [41, 42, 93, 95, 98, 19, 21, 7940, 7924, 7933]

// Module 7939 (ClipPath)
import Fragment from "Fragment" /* 21 */;
import extractProps from "extractProps" /* 7924 */;
import multiplyMatricesDefault from "multiplyMatrices" /* 7933 */;
import _modDef7940 from "module_7940" /* 7940 */;
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
class ClipPath {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ClipPath);
    const obj = _getPrototypeOf(ClipPath);
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
_inherits(ClipPath, multiplyMatricesDefault);
const entry = {
  key: "render",
  value: function render() {
    const props = this.props;
    _modDef7940;
    const obj2 = extractProps;
    const merged = Object.assign(obj2.extract(this, props));
    return <tmp ref={this.refMethod}>{props.children}</tmp>;
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(ClipPath, items);
importDefaultResultResult.displayName = "ClipPath";

export default importDefaultResultResult;
