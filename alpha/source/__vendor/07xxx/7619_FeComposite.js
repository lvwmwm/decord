// Module ID: 7619
// Function ID: 7620
// Name: FeComposite
// Dependencies: [41, 42, 93, 95, 98, 19, 21, 7620, 7614, 7615]

// Module 7619 (FeComposite)
import Fragment from "Fragment" /* 21 */;
import extractFeFlood from "extractFeFlood" /* 7614 */;
import _modDef7615 from "module_7615" /* 7615 */;
import _modDef7620 from "module_7620" /* 7620 */;
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
class FeComposite {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, FeComposite);
    const obj = _getPrototypeOf(FeComposite);
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
_inherits(FeComposite, _modDef7615);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    _modDef7620;
    const obj2 = extractFeFlood;
    const merged = Object.assign(obj2.extractFilter(this.props));
    const obj3 = extractFeFlood;
    const merged1 = Object.assign(obj3.extractFeComposite(this.props));
    return <tmp ref={function ref(arg0) {
      return self.refMethod(arg0);
    }} />;
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(FeComposite, items);
importDefaultResultResult.displayName = "FeComposite";
let obj = { k1: 0, k2: 0, k3: 0, k4: 0 };
let merged = Object.assign(importDefaultResultResult.defaultPrimitiveProps);
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;
