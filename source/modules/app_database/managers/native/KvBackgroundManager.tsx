// Module ID: 16069
// Function ID: 124308
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 5, 6, 7, 15, 17, 18, 11482, 6710, 6711, 664, 3, 1882, 1883, 1898, 6997, 477, 5078, 2]

// Module 16069 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import startBackgroundTask from "startBackgroundTask";
import AutomaticLifecycleManager from "AutomaticLifecycleManager";
import set from "set";
import closure_10 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_13 from "_createForOfIteratorHelperLoose";
import closure_14 from "_isNativeReflectConstruct";
import importDefaultResult from "_defineProperties";
import tmp5 from "AutomaticLifecycleManager";

let closure_11;
let closure_12;
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
({ MAXIMUM_MESSAGES_PER_CHANNEL_DEFAULT: closure_11, MAXIMUM_MESSAGES_PER_CHANNEL_EVER: closure_12 } = _createForOfIteratorHelperLoose);
let closure_15 = 5 * require("set").Millis.MINUTE;
importDefaultResult = new importDefaultResult("KvBackgroundManager");
tmp5 = new tmp5();
let result = require("_classCallCheck").fileFinishedImporting("modules/app_database/managers/native/KvBackgroundManager.tsx");

export default tmp5;
