// Module ID: 8223
// Function ID: 8224
// Name: FeFlood
// Dependencies: [41, 42, 93, 95, 98, 19, 21, 8224, 8207, 8208]

// Module 8223 (FeFlood)
import Fragment from "Fragment" /* 21 */;
import extractFeFlood from "extractFeFlood" /* 8207 */;
import _modDef8208 from "module_8208" /* 8208 */;
import _modDef8224 from "module_8224" /* 8224 */;
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
_inherits(FeFlood, _modDef8208);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    _modDef8224;
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
