// Module ID: 16043
// Function ID: 124038
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 5, 1352, 1348, 4142, 6651, 6711, 653, 5035, 4991, 1838, 3, 664, 587, 6997, 477, 686, 1184, 675, 1882, 507, 21, 22, 6895, 6898, 6896, 12652, 14450, 6709, 1327, 6719, 2]
// Exports: backgroundSync

// Module 16043 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import closure_4 from "_isNativeReflectConstruct";
import _callSuper from "_callSuper";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import ME from "ME";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "_isNativeReflectConstruct";

let closure_11;
let closure_12;
let closure_13;
let closure_5;
let closure_6;
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
function _backgroundSync() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function backgroundSyncPrivateChannels() {
  return _backgroundSyncPrivateChannels(...arguments);
}
function _backgroundSyncPrivateChannels() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function backgroundSyncGuildData() {
  return _backgroundSyncGuildData(...arguments);
}
function _backgroundSyncGuildData() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function backgroundSyncGuildChannels() {
  return _backgroundSyncGuildChannels(...arguments);
}
function _backgroundSyncGuildChannels() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function processChannelChanges() {
  return _processChannelChanges(...arguments);
}
function _processChannelChanges() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function writeMessageChanges(transaction) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  let closure_2 = arg3;
  let _slicedToArray = arg4;
  return transaction.transaction((arg0) => {
    let closure_0 = arg0;
    for (const key10005 in closure_0) {
      let tmp2 = key10005;
      let tmpResult = tmp(key10005);
      continue;
    }
  }, "Background Sync");
}
({ isPrivate: closure_5, isThread: closure_6 } = _callSuper);
({ AnalyticEvents: closure_11, Endpoints: closure_12, MAX_MESSAGES_PER_CHANNEL: closure_13 } = ME);
importDefaultResult = new importDefaultResult("BackgroundSync");
let closure_15 = 4 * require("set").Millis.HOUR;
const lastSyncTime = "lastSyncTime";
const lastSyncedPrivateChannelsMessageId = "lastSyncedPrivateChannelsMessageId";
const result = require("_callSuper").fileFinishedImporting("modules/app_database/background_sync/native/BackgroundSync.tsx");

export const backgroundSync = function backgroundSync(arg0) {
  return _backgroundSync(...arguments);
};
