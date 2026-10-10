// Module ID: 9903
// Function ID: 9904
// Dependencies: [41, 42, 93, 95, 98, 9837]

// Module 9903
import _mod9837 from "module_9837" /* 9837 */;
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
class PTMergeDateRangeRefiner {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, PTMergeDateRangeRefiner);
    const obj = _getPrototypeOf(PTMergeDateRangeRefiner);
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
_inherits(PTMergeDateRangeRefiner, fn(_mod9837).default);
const entry = {
  key: "patternBetween",
  value: function patternBetween() {
    return /^\s*(?:-)\s*$/i;
  }
};
const items = [entry];

export default _createClass(PTMergeDateRangeRefiner, items);
