// Module ID: 7604
// Function ID: 7605
// Name: FeConvolveMatrix
// Dependencies: [41, 42, 93, 95, 98, 7575, 7598]

// Module 7604 (FeConvolveMatrix)
import warnOnce from "warnOnce" /* 7575 */;
import _modDef7598 from "module_7598" /* 7598 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
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
class FeConvolveMatrix {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, FeConvolveMatrix);
    const obj = _getPrototypeOf(FeConvolveMatrix);
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
_inherits(FeConvolveMatrix, _modDef7598);
const entry = {
  key: "render",
  value: function render() {
    const obj = warnOnce;
    const result = obj.warnUnimplementedFilter();
    return null;
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(FeConvolveMatrix, items);
importDefaultResultResult.displayName = "FeConvolveMatrix";
let obj = {};
const merged = Object.assign(importDefaultResultResult.defaultPrimitiveProps);
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;
