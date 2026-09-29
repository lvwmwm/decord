// Module ID: 8814
// Function ID: 8815
// Dependencies: [41, 42, 93, 95, 98, 19, 21, 8815, 8798, 8799]

// Module 8814
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import _modDef8798 from "module_8798" /* 8798 */;
import _modDef8799 from "module_8799" /* 8799 */;
import _modDef8815 from "module_8815" /* 8815 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;

const FeFlood = fn;
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
class FeFlood {
  constructor() {
    self = this;
    tmp = closure_3(this, FeFlood);
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(FeFlood);
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
_inherits(FeFlood, _modDef8799);
const entry = {
  key: "render",
  value: function render() {
    const self = this;
    const obj = {
      ref(arg0) {
        return self.refMethod(arg0);
      }
    };
    const merged = Object.assign(FeFlood(8798).extractFilter(this.props));
    const merged1 = Object.assign(_modDef8798(this.props));
    return <tmp ref={function ref(arg0) {
      return self.refMethod(arg0);
    }} />;
  }
};
const items = [entry];
const importDefaultResultResult = _createClass(FeFlood, items);
importDefaultResultResult.displayName = "FeFlood";
let obj = {};
let merged = Object.assign(importDefaultResultResult.defaultPrimitiveProps);
obj.floodColor = "black";
obj.floodOpacity = 1;
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;
