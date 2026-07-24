// Module ID: 7080
// Function ID: 56670
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 6, 7, 15, 17, 102, 18, 27, 653, 4123, 3, 6997, 1212, 4711, 4674, 4706, 7081, 477, 7082, 4664, 4665, 22, 7083, 2]

// Module 7080 (_createForOfIteratorHelperLoose)
import _get from "_get";
import _inherits from "_inherits";
import getActivityIndicator from "get ActivityIndicator";
import MessageAttachmentUploadTarget from "MessageAttachmentUploadTarget";
import set from "set";
import closure_8 from "_get";
import _stageAttachmentFiles from "_stageAttachmentFiles";
import get_ActivityIndicator from "get ActivityIndicator";
import ME from "ME";
import MESSAGE_GROUP_SPACING from "MESSAGE_GROUP_SPACING";
import importDefaultResult from "_possibleConstructorReturn";
import tmp8 from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
({ AbortCodes: closure_10, NOOP: closure_11 } = ME);
({ DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE: closure_12, FileUploadErrorTypes: closure_13 } = MESSAGE_GROUP_SPACING);
importDefaultResult = new importDefaultResult("CloudUploader(Native).tsx");
const nativeEventEmitter = new get_ActivityIndicator.NativeEventEmitter(get_ActivityIndicator.NativeModules.MediaManager);
let result = require("_defineProperties").fileFinishedImporting("lib/uploader/native/CloudUploader.tsx");

export default tmp8;
