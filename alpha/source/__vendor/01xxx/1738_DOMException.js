// Module ID: 1738
// Function ID: 1739
// Name: DOMException
// Dependencies: [42, 41, 93, 95, 98, 158]

// Module 1738 (DOMException)
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
const React3 = { IndexSizeError: 1, HierarchyRequestError: 3, WrongDocumentError: 4, InvalidCharacterError: 5, NoModificationAllowedError: 7, NotFoundError: 8, NotSupportedError: 9, InUseAttributeError: 10, InvalidStateError: 11, SyntaxError: 12, InvalidModificationError: 13, NamespaceError: 14, InvalidAccessError: 15, TypeMismatchError: 17, SecurityError: 18, NetworkError: 19, AbortError: 20, URLMismatchError: 21, QuotaExceededError: 22, TimeoutError: 23, InvalidNodeTypeError: 24, DataCloneError: 25 };
class DOMException {
  constructor() {
    let constructResult;
    let str = arg0;
    if (arg0 === undefined) {
      str = "";
    }
    let str2 = arg1;
    if (arg1 === undefined) {
      str2 = "Error";
    }
    const self = this;
    _classCallCheck(this, DOMException);
    const items = [str];
    const obj = _getPrototypeOf(DOMException);
    const tmp = DOMException;
    const tmp3 = _getPrototypeOf;
    const tmp4 = map;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp3(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp4Result = tmp4(self, constructResult);
    Object.setPrototypeOf(tmp4Result, tmp.prototype);
    tmp4Result.name = str2;
    let num = closure_4[str2];
    if (num == null) {
      num = 0;
    }
    tmp4Result.code = num;
    return tmp4Result;
  }
}
_inherits(DOMException, _wrapNativeSuperDefault(Error));
const DOMException_export = _createClass(DOMException);

export { DOMException_export as DOMException };
