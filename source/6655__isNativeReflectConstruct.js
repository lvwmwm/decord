// Module ID: 6655
// Function ID: 6656
// Name: _isNativeReflectConstruct
// Dependencies: [41, 42, 93, 95, 98, 19, 21, 6586, 6656, 6595]

// Module 6655 (_isNativeReflectConstruct)
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import "noop";
import { jsx } from "jsxProd";

const Path = arg1;
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
class Path {
  constructor() {
    self = this;
    tmp = _isNativeReflectConstruct(this, Path);
    tmp2 = __esModule;
    obj = __esModule(Path);
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
require("_inherits")(Path, require("_isNativeReflectConstruct"));
const items = [
  {
    key: "render",
    value: function render() {
      const self = this;
      const props = this.props;
      let obj = {};
      const merged = Object.assign(self(6586).extract(this, props));
      obj.d = props.d;
      obj = {
        ref(arg0) {
          return self.refMethod(arg0);
        }
      };
      const obj2 = self(6586);
      const merged1 = Object.assign(obj);
      return jsx(importDefault(6656), {
        ref(arg0) {
          return self.refMethod(arg0);
        }
      });
    }
  }
];
const importDefaultResultResult = importDefaultResult(Path, items);
importDefaultResultResult.displayName = "Path";

export default importDefaultResultResult;
