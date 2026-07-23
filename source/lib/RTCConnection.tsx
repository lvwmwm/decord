// Module ID: 4204
// Function ID: 36266
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 6, 7, 15, 17, 18, 4205, 4215, 8898, 8837, 1194, 1348, 1838, 4177, 4202, 10766, 4223, 1849, 653, 1851, 12731, 4191, 4206, 574, 675, 1184, 3, 12732, 561, 491, 12734, 12736, 10579, 10767, 1430, 477, 3741, 1443, 686, 12737, 1360, 4226, 24, 4953, 12738, 12739, 10575, 4124, 6913, 12740, 12742, 12743, 12744, 4227, 12745, 12746, 12748, 6991, 12749, 8857, 6706, 12750, 12751, 10511, 12753, 4470, 1212, 1193, 4297, 2]

// Module 4204 (_createForOfIteratorHelperLoose)
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "ME";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_17 from "_isNativeReflectConstruct";
import closure_18 from "_isNativeReflectConstruct";
import closure_19 from "_isNativeReflectConstruct";
import closure_20 from "_isNativeReflectConstruct";
import closure_21 from "_isNativeReflectConstruct";
import ME from "ME";
import { PremiumTypes } from "GuildFeatures";
import { BROWSER_SUPPORTS_UNIFIED_PLAN as closure_28 } from "parsed";
import DesktopSources from "DesktopSources";
import tmp4 from "TypedEventEmitter";

let closure_22;
let closure_23;
let closure_24;
let closure_25;
let closure_26;
let closure_29;
let closure_30;
let closure_31;
let closure_32;
let closure_33;
let closure_34;
let closure_35;
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
function getEventHistoryString() {
  let length;
  const items = [];
  require(4206) /* sleep */;
  let num = 0;
  if (0 < length.length) {
    do {
      let tmp3 = arr2[num];
      let obj = {};
      let tmp4 = obj;
      let tmp5 = tmp3;
      let merged = Object.assign(tmp3);
      obj["t"] = tmp2 - tmp3.t;
      let arr = items.push(obj);
      num = num + 1;
      length = arr2.length;
    } while (num < length);
  }
  return JSON.stringify(items);
}
({ AnalyticEvents: closure_22, ChannelTypes: closure_23, RTCConnectionStates: closure_24, RTCConnectionQuality: closure_25, BoostedGuildTiers: closure_26 } = ME);
({ Features: closure_29, MediaEngineContextTypes: closure_30, ConnectionStates: closure_31, Codecs: closure_32, MediaTypes: closure_33, SpeakingFlags: closure_34, DISABLED_DEVICE_ID: closure_35 } = DesktopSources);
let str = "ws:";
if (obj.test("https:")) {
  str = "wss:";
}
let closure_37 = { CONNECTION_CREATE: 0, [0]: "CONNECTION_CREATE", CONNECTION_DESTROY: 1, [1]: "CONNECTION_DESTROY", CONNECT: 2, [2]: "CONNECT", MLS_FAILURE: 3, [3]: "MLS_FAILURE", MESSAGE_RECEIVE: 4, [4]: "MESSAGE_RECEIVE", MESSAGE_SEND: 5, [5]: "MESSAGE_SEND", SET_ENDPOINT: 6, [6]: "SET_ENDPOINT", RECONNECT: 7, [7]: "RECONNECT", SET_STATE: 8, [8]: "SET_STATE", SET_NEXT_CHANNEL_ID: 9, [9]: "SET_NEXT_CHANNEL_ID", MLS_INIT: 10, [10]: "MLS_INIT", SECURE_FRAMES_INIT: 11, [11]: "SECURE_FRAMES_INIT" };
let c38 = 0;
let closure_39 = [];
obj = /^https/;
let result = require("_defineProperties").fileFinishedImporting("lib/RTCConnection.tsx");

export default tmp4;
