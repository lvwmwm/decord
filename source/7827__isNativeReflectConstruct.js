// Module ID: 7827
// Function ID: 7828
// Name: _isNativeReflectConstruct
// Dependencies: [41, 42, 93, 95, 98, 19, 21, 7828, 7813, 7814]

// Module 7827 (_isNativeReflectConstruct)
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import "noop";
import { jsx } from "jsxProd";

const FeOffset = arg1;
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
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
class FeOffset {
  constructor() {
    self = this;
    tmp = _isNativeReflectConstruct(this, FeOffset);
    tmp2 = __esModule;
    obj = __esModule(FeOffset);
    tmp3 = __esModule;
    if (_isNativeReflectConstruct()) {
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
require("_inherits")(FeOffset, require("_isNativeReflectConstruct"));
let obj = {
  key: "render",
  value: function render() {
    const self = this;
    const merged = Object.assign(this.props);
    const obj = {
      ref(arg0) {
        return self.refMethod(arg0);
      }
    };
    const tmp = importDefault(7828);
    const merged1 = Object.assign(self(7813).extractFilter(this.props));
    const obj2 = self(7813);
    const merged2 = Object.assign(self(7813).extractIn(this.props));
    return <tmp ref={function ref(arg0) {
      return self.refMethod(arg0);
    }} />;
  }
};
const items = [obj];
const importDefaultResultResult = importDefaultResult(FeOffset, items);
importDefaultResultResult.displayName = "FeOffset";
obj = {};
let merged = Object.assign(importDefaultResultResult.defaultPrimitiveProps);
obj.dx = 0;
obj.dy = 0;
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;
