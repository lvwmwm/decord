// Module ID: 8449
// Function ID: 8450
// Name: _isNativeReflectConstruct
// Dependencies: [41, 42, 93, 95, 98, 19, 21, 8450, 8447, 8448]

// Module 8449 (_isNativeReflectConstruct)
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import "noop";
import { jsx } from "jsxProd";

const FeColorMatrix = arg1;
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
class FeColorMatrix {
  constructor() {
    self = this;
    tmp = _isNativeReflectConstruct(this, FeColorMatrix);
    tmp2 = __esModule;
    obj = __esModule(FeColorMatrix);
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
require("_inherits")(FeColorMatrix, require("_isNativeReflectConstruct"));
let obj = {
  key: "render",
  value: function render() {
    const self = this;
    const obj = {
      ref(arg0) {
        return self.refMethod(arg0);
      }
    };
    const tmp = importDefault(8450);
    const merged = Object.assign(self(8447).extractFilter(this.props));
    const obj2 = self(8447);
    const merged1 = Object.assign(self(8447).extractIn(this.props));
    const obj3 = self(8447);
    const merged2 = Object.assign(self(8447).extractFeColorMatrix(this.props));
    return <tmp ref={function ref(arg0) {
      return self.refMethod(arg0);
    }} />;
  }
};
const items = [obj];
const importDefaultResultResult = importDefaultResult(FeColorMatrix, items);
importDefaultResultResult.displayName = "FeColorMatrix";
obj = {};
let merged = Object.assign(importDefaultResultResult.defaultPrimitiveProps);
obj.type = "matrix";
obj.values = "";
importDefaultResultResult.defaultProps = obj;

export default importDefaultResultResult;
