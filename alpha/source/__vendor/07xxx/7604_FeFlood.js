// Module ID: 7604
// Function ID: 7605
// Name: FeFlood
// Dependencies: [41, 42, 93, 95, 98, 19, 21, 7605, 7588, 7589]

// Module 7604 (FeFlood)
import Fragment from "Fragment" /* 21 */;
import extractFeFlood from "extractFeFlood" /* 7588 */;
import _modDef7589 from "module_7589" /* 7589 */;
import _modDef7605 from "module_7605" /* 7605 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react from "react" /* 19 */;

const extractFeFloodDefault = extractFeFlood;

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
class FeFlood {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, FeFlood);
    const obj = _getPrototypeOf(FeFlood);
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
_inherits(FeFlood, _modDef7589);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    _modDef7605;
    const obj2 = extractFeFlood;
    const merged = Object.assign(obj2.extractFilter(this.props));
    const merged1 = Object.assign(extractFeFloodDefault(this.props));
    return <tmp ref={function ref(arg0) {
      return self.refMethod(arg0);
    }} />;
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(FeFlood, items);
importDefaultResultResult.displayName = "FeFlood";
let obj = { floodColor: "black", floodOpacity: 1 };
let merged = Object.assign(importDefaultResultResult.defaultPrimitiveProps);
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;
