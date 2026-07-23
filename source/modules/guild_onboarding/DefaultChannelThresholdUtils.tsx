// Module ID: 8415
// Function ID: 67016
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 1838, 5058, 5059, 653, 5057, 5065, 483, 4470, 1212, 2]
// Exports: checkChattableChannelThresholdMetAfterChannelPermissionDeny, isDefaultChannelThresholdMetAfterDelete

// Module 8415 (_createForOfIteratorHelperLoose)
import fetchOnboardingPrompts from "fetchOnboardingPrompts";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { NUM_DEFAULT_CHATTABLE_CHANNELS_MIN as closure_7 } from "_createForOfIteratorHelperLoose";
import ME from "ME";

let GuildSettingsSections;
let closure_8;
let closure_9;
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
function _isDefaultChannelThresholdMetAfterDelete() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function isChattableChannelThresholdMetAfterChannelChange() {
  return _isChattableChannelThresholdMetAfterChannelChange(...arguments);
}
function _isChattableChannelThresholdMetAfterChannelChange() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _checkChattableChannelThresholdMetAfterChannelPermissionDeny() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
({ GuildFeatures: closure_8, GuildSettingsSections, Permissions: closure_9 } = ME);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_onboarding/DefaultChannelThresholdUtils.tsx");

export const isDefaultChannelThresholdMetAfterDelete = function isDefaultChannelThresholdMetAfterDelete(guildId, id) {
  return _isDefaultChannelThresholdMetAfterDelete(...arguments);
};
export const checkChattableChannelThresholdMetAfterChannelPermissionDeny = function checkChattableChannelThresholdMetAfterChannelPermissionDeny(getGuildId, VIEW_CHANNEL, allow) {
  return _checkChattableChannelThresholdMetAfterChannelPermissionDeny(...arguments);
};
