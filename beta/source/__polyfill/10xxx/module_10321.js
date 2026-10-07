// Module ID: 10321
// Function ID: 10322
// Dependencies: [41, 42, 93, 95, 98, 10179]

// Module 10321
import _mod10179 from "module_10179" /* 10179 */;
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
let fn = this;
if (this) {
  fn = this.__importDefault;
}
if (!fn) {
  fn = (__esModule) => {
    let tmp2;
    const tmp = __esModule;
    if (!tmp) {
      tmp2 = { default: __esModule };
      const obj = { default: __esModule };
    } else {
      tmp2 = __esModule;
    }
    return tmp2;
  };
}
class UKMergeDateRangeRefiner {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, UKMergeDateRangeRefiner);
    const obj = _getPrototypeOf(UKMergeDateRangeRefiner);
    const tmp2 = _getPrototypeOf;
    const tmp3 = map;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(UKMergeDateRangeRefiner, fn(_mod10179).default);
const entry = {
  key: "patternBetween",
  value: function patternBetween() {
    return /^\s*(і до|і по|до|по|-)\s*$/i;
  }
};
const items = [entry];

export default _createClass(UKMergeDateRangeRefiner, items);
