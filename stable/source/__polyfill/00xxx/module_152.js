// Module ID: 152
// Function ID: 153
// Dependencies: [41, 42, 93, 95, 98, 133]

// Module 152
import _modDef133 from "module_133" /* 133 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import map from "_possibleConstructorReturn" /* 93 */;
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
class CustomEvent {
  constructor(arg0, detail) {
    let constructResult;
    const self = this;
    _classCallCheck(this, CustomEvent);
    const items = [arg0, detail];
    const obj = _getPrototypeOf(CustomEvent);
    const tmp2 = _getPrototypeOf;
    const tmp3 = map;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = tmp3(self, constructResult);
    detail = undefined;
    if (detail != null) {
      detail = detail.detail;
    }
    tmp3Result._detail = detail;
    return tmp3Result;
  }
}
_inherits(CustomEvent, _modDef133);
let obj = {
  key: "detail",
  get() {
    return this._detail;
  }
};
let items = [obj];

export default _createClass(CustomEvent, items);
