// Module ID: 161
// Function ID: 2461
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 162, 99, 100, 129]

// Module 161 (_isNativeReflectConstruct)
import _classPrivateFieldBase from "_classPrivateFieldBase";
import _classPrivateFieldKey from "_classPrivateFieldKey";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_5 from "_classPrivateFieldBase";
import importDefaultResult1 from "_classPrivateFieldKey";
import setPlatformObject from "setPlatformObject";

function _isNativeReflectConstruct() {
  let _classPrivateFieldBase = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _classPrivateFieldBase;
  }
  const result = _isNativeReflectConstruct();
}
let closure_6 = { IndexSizeError: 1, HierarchyRequestError: 3, WrongDocumentError: 4, InvalidCharacterError: 5, NoModificationAllowedError: 7, NotFoundError: 8, NotSupportedError: 9, InUseAttributeError: 10, InvalidStateError: 11, SyntaxError: 12, InvalidModificationError: 13, NamespaceError: 14, InvalidAccessError: 15, TypeMismatchError: 17, SecurityError: 18, NetworkError: 19, AbortError: 20, URLMismatchError: 21, QuotaExceededError: 22, TimeoutError: 23, InvalidNodeTypeError: 24, DataCloneError: 25 };
let obj = { INDEX_SIZE_ERR: 1, DOMSTRING_SIZE_ERR: 2, HIERARCHY_REQUEST_ERR: 3, WRONG_DOCUMENT_ERR: 4, INVALID_CHARACTER_ERR: 5, NO_DATA_ALLOWED_ERR: 6, NO_MODIFICATION_ALLOWED_ERR: 7, NOT_FOUND_ERR: 8, NOT_SUPPORTED_ERR: 9, INUSE_ATTRIBUTE_ERR: 10, INVALID_STATE_ERR: 11, SYNTAX_ERR: 12, INVALID_MODIFICATION_ERR: 13, NAMESPACE_ERR: 14, INVALID_ACCESS_ERR: 15, VALIDATION_ERR: 16, TYPE_MISMATCH_ERR: 17, SECURITY_ERR: 18, NETWORK_ERR: 19, ABORT_ERR: 20, URL_MISMATCH_ERR: 21, QUOTA_EXCEEDED_ERR: 22, TIMEOUT_ERR: 23, INVALID_NODE_TYPE_ERR: 24, DATA_CLONE_ERR: 25 };
let closure_7 = importDefaultResult1("name");
let closure_8 = importDefaultResult1("code");
const tmp4 = ((arg0) => {
  class DOMException {
    constructor(arg0, arg1) {
      self = this;
      tmp = DOMException(this, DOMException);
      items = [];
      items[0] = arg0;
      obj = outer1_3(DOMException);
      tmp2 = outer1_2;
      if (outer1_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_3;
        constructResult = Reflect.construct(obj, items, outer1_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      definePropertyResult = Object.defineProperty(tmp2Result, outer1_7, { writable: true, value: undefined });
      definePropertyResult1 = Object.defineProperty(tmp2Result, outer1_8, { writable: true, value: undefined });
      if (undefined === arg1) {
        tmp17 = outer1_5;
        tmp18 = outer1_7;
        str = "Error";
        outer1_5(tmp2Result, outer1_7)[outer1_7] = "Error";
        tmp19 = outer1_8;
        num2 = 0;
        outer1_5(tmp2Result, outer1_8)[outer1_8] = 0;
      } else {
        tmp9 = outer1_5;
        tmp10 = outer1_7;
        _String = String;
        tmp11 = outer1_5(tmp2Result, outer1_7);
        tmp11[outer1_7] = String(arg1);
        tmp12 = outer1_8;
        tmp14 = outer1_6;
        tmp15 = outer1_6[tmp2Result.name];
        tmp16 = null;
        num = 0;
        tmp13 = outer1_5(tmp2Result, outer1_8);
        if (null != tmp15) {
          num = tmp15;
        }
        tmp13[tmp12] = num;
      }
      return tmp2Result;
    }
  }
  callback2(DOMException, arg0);
  let obj = {
    key: "name",
    get() {
      return outer1_5(this, outer1_7)[outer1_7];
    }
  };
  let items = [obj, ];
  obj = {
    key: "code",
    get() {
      return outer1_5(this, outer1_8)[outer1_8];
    }
  };
  items[1] = obj;
  return callback(DOMException, items);
})(require("_wrapNativeSuper")(Error));
let closure_9 = tmp4;
for (const key10049 in obj) {
  let tmp6 = key10049;
  let _Object = Object;
  obj = { enumerable: true };
  obj.value = obj[key10049];
  let definePropertyResult1 = Object.defineProperty(tmp4, key10049, obj);
  let _Object2 = Object;
  obj = { enumerable: true };
  obj.value = obj[key10049];
  let definePropertyResult2 = Object.defineProperty(tmp4.prototype, key10049, obj);
  continue;
}
setPlatformObject = {
  clone(message) {
    return new closure_9(message.message, message.name);
  }
};
setPlatformObject.setPlatformObject(tmp4, setPlatformObject);

export default tmp4;
