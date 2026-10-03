// Module ID: 261
// Function ID: 262
// Dependencies: [42, 41, 93, 95, 98, 158]

// Module 261
import _wrapNativeSuperDefault from "_wrapNativeSuper" /* 158 */;
import _createClass from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
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
class HeadlessJsTaskError {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, HeadlessJsTaskError);
    const obj = _getPrototypeOf(HeadlessJsTaskError);
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
_inherits(HeadlessJsTaskError, _wrapNativeSuperDefault(Error));

export default _createClass(HeadlessJsTaskError);
