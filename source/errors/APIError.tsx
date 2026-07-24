// Module ID: 4030
// Function ID: 33565
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 653, 1212, 507, 2]

// Module 4030 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import getSystemLocale from "getSystemLocale";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { Links } from "ME";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
const tmp2 = ((V8APIError) => {
  class APIErrorWithDefaultMessage {
    constructor(arg0, arg1) {
      self = this;
      tmp = APIErrorWithDefaultMessage;
      tmp2 = outer1_3(this, APIErrorWithDefaultMessage);
      items = [, , ];
      items[0] = V8APIError;
      items[1] = arg1;
      if (null != arg1) {
        tmp7 = APIErrorWithDefaultMessage;
        tmp8 = outer1_1;
        num2 = 6;
        intl2 = APIErrorWithDefaultMessage(outer1_1[6]).intl;
        obj = {};
        tmp9 = outer1_7;
        obj.statusPageURL = outer1_7.STATUS;
        tmp10 = globalThis;
        _HermesInternal = HermesInternal;
        str = "";
        obj.details = "" + arg1;
        formatToPlainStringResult = intl2.formatToPlainString(APIErrorWithDefaultMessage(outer1_1[6]).t.aKRa0Q, obj);
      } else {
        tmp3 = APIErrorWithDefaultMessage;
        tmp4 = outer1_1;
        num = 6;
        intl = APIErrorWithDefaultMessage(outer1_1[6]).intl;
        obj = {};
        tmp5 = outer1_7;
        obj.statusPageURL = outer1_7.STATUS;
        formatToPlainStringResult = intl.formatToPlainString(APIErrorWithDefaultMessage(outer1_1[6]).t.aTVNes, obj);
      }
      items[2] = formatToPlainStringResult;
      obj3 = outer1_5(tmp);
      tmp11 = outer1_4;
      if (outer1_8()) {
        tmp13 = globalThis;
        _Reflect = Reflect;
        tmp14 = outer1_5;
        constructResult = Reflect.construct(obj3, items, outer1_5(self).constructor);
      } else {
        constructResult = obj3.apply(self, items);
      }
      return tmp11(self, constructResult);
    }
  }
  callback2(APIErrorWithDefaultMessage, V8APIError);
  return callback(APIErrorWithDefaultMessage);
})(require("_isNativeReflectConstruct").V8APIError);
let result = require("_possibleConstructorReturn").fileFinishedImporting("errors/APIError.tsx");

export default tmp2;
