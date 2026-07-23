// Module ID: 12734
// Function ID: 99114
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 6, 7, 15, 17, 18, 1194, 653, 4191, 664, 4449, 12735, 4278, 21, 477, 620, 22, 4015, 10579, 4227, 4297, 2]

// Module 12734 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import shallowEqual from "shallowEqual";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { VideoToggleState } from "ME";
import { SimulcastOverrideQuality } from "DesktopSources";
import getChromeVersion from "getChromeVersion";
import tmp2 from "TypedEventEmitter";

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
function getDefaultWants(any) {
  let obj = require(12735) /* getBrowserInvertedWantsConfig */;
  if (obj.getBrowserInvertedWantsConfig("RTCMediaSinkWantsManager.getDefaultWants").invertWants) {
    obj = {};
    const merged = Object.assign(obj);
  } else {
    obj = { any };
  }
  return obj;
}
let obj = { any: 0 };
let closure_13 = 30 * require("set").Millis.SECOND;
let closure_14 = 120 * require("set").Millis.SECOND;
let closure_15 = -1 !== getChromeVersion.getFirefoxVersion();
obj = { UserSSRCUpdate: "user-ssrc-update", Update: "update" };
let result = require("_defineProperties").fileFinishedImporting("lib/RTCMediaSinkWantsManager.tsx");

export default tmp2;
export const DEFAULT_WANTS_FULL = { any: 100 };
export const DEFAULT_WANTS_DISABLED = obj;
export const RTCMediaSinkWantsManagerEvent = obj;
