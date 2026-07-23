// Module ID: 6967
// Function ID: 55716
// Name: _createForOfIteratorHelperLoose
// Dependencies: [4144, 1352, 1907, 1838, 3758, 4146, 653, 4949, 1212, 4312, 4345, 566, 2]
// Exports: getStreamCTAAriaLabel, getStreamCTAString, getStreamEligibleChannels, useCanWatchStream

// Module 6967 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ChannelRecordBase } from "_callSuper";
import { GUILD_VOCAL_CHANNELS_KEY } from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { Permissions } from "ME";

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
function canStreamInChannel(channel, closure_2, _isNativeReflectConstruct, arg3) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = true;
  }
  if (channel.isPrivate()) {
    return true;
  } else {
    const guild = closure_2.getGuild(channel.getGuildId());
    let prop;
    if (null != guild) {
      prop = guild.maxStageVideoChannelUsers;
    }
    let num2 = 0;
    if (null != prop) {
      num2 = prop;
    }
    let tmp5 = !(channel.isGuildStageVoice() && num2 <= 0);
    if (tmp5) {
      if (flag) {
        flag = !importDefault(4949)(channel, _isNativeReflectConstruct);
      }
      let tmp8 = !flag;
      if (tmp8) {
        const tmp10 = !_isNativeReflectConstruct.can(Permissions.STREAM, channel);
        let tmp11 = !tmp10;
        if (!tmp10) {
          tmp11 = null != guild && guild.afkChannelId !== channel.id;
          const tmp12 = null != guild && guild.afkChannelId !== channel.id;
        }
        tmp8 = tmp11;
      }
      tmp5 = tmp8;
    }
    return tmp5;
  }
}
function canWatchStream(basicChannel, closure_21, closure_16, closure_18, closure_12) {
  if (null == basicChannel) {
    const items = [false, obj.NO_PERMISSION];
    return items;
  } else {
    let isInChannelResult = closure_21.isInChannel(basicChannel.id);
    let isChannelFullResult = basicChannel instanceof ChannelRecordBase;
    if (isChannelFullResult) {
      obj = require(4312) /* _createForOfIteratorHelperLoose */;
      isChannelFullResult = obj.isChannelFull(basicChannel, closure_21, closure_16);
    }
    let tmp8 = importDefault(4949)(basicChannel, closure_18);
    const tmp9 = null != closure_12.getAwaitingRemoteSessionInfo() || null != closure_12.getRemoteSessionId();
    let result = require(4345) /* shouldAgeVerifyForAgeGate */.shouldAgeVerifyForAgeGate();
    if (result) {
      result = require(4345) /* shouldAgeVerifyForAgeGate */.shouldShowAgeGateForChannelId(basicChannel.id);
      const obj3 = require(4345) /* shouldAgeVerifyForAgeGate */;
    }
    if (tmp9) {
      let CHANNEL_FULL = obj.REMOTE_MODE;
    } else if (result) {
      CHANNEL_FULL = obj.AGE_RESTRICTED;
    } else {
      if (!tmp8) {
        if (!isInChannelResult) {
          CHANNEL_FULL = obj.NO_PERMISSION;
        }
      }
      let tmp16 = isChannelFullResult;
      if (isChannelFullResult) {
        tmp16 = !isInChannelResult;
      }
      if (tmp16) {
        CHANNEL_FULL = obj.CHANNEL_FULL;
      }
    }
    let tmp20 = !tmp9;
    if (!tmp9) {
      tmp20 = !result;
    }
    if (tmp20) {
      if (!isInChannelResult) {
        if (tmp8) {
          tmp8 = !isChannelFullResult;
        }
        isInChannelResult = tmp8;
      }
      tmp20 = isInChannelResult;
    }
    const items1 = [tmp20, CHANNEL_FULL];
    return items1;
  }
}
let obj = { REMOTE_MODE: 0, [0]: "REMOTE_MODE", CHANNEL_FULL: 1, [1]: "CHANNEL_FULL", NO_PERMISSION: 2, [2]: "NO_PERMISSION", AGE_RESTRICTED: 3, [3]: "AGE_RESTRICTED" };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/go_live/utils/StreamPermissionUtils.tsx");

export { canStreamInChannel };
export const getStreamCTAString = function getStreamCTAString(arg0) {
  if (obj.REMOTE_MODE === arg0) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    return intl5.string(require(1212) /* getSystemLocale */.t["1i3tSY"]);
  } else if (obj.CHANNEL_FULL === arg0) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    return intl4.string(require(1212) /* getSystemLocale */.t.elyVbv);
  } else if (obj.NO_PERMISSION === arg0) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.pgUTZC);
  } else if (obj.AGE_RESTRICTED === arg0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t.b5FqhF);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["7Xq/nV"]);
  }
};
export const getStreamCTAAriaLabel = function getStreamCTAAriaLabel(arg0) {
  if (obj.REMOTE_MODE === arg0) {
    const intl7 = require(1212) /* getSystemLocale */.intl;
    const intl8 = require(1212) /* getSystemLocale */.intl;
    const _HermesInternal4 = HermesInternal;
    return "" + intl7.string(require(1212) /* getSystemLocale */.t["7Xq/nV"]) + ": " + intl8.string(require(1212) /* getSystemLocale */.t["1i3tSY"]);
  } else if (obj.CHANNEL_FULL === arg0) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    const intl6 = require(1212) /* getSystemLocale */.intl;
    const _HermesInternal3 = HermesInternal;
    return "" + intl5.string(require(1212) /* getSystemLocale */.t["7Xq/nV"]) + ": " + intl6.string(require(1212) /* getSystemLocale */.t.elyVbv);
  } else if (obj.NO_PERMISSION === arg0) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    const intl4 = require(1212) /* getSystemLocale */.intl;
    const _HermesInternal2 = HermesInternal;
    return "" + intl3.string(require(1212) /* getSystemLocale */.t["7Xq/nV"]) + ": " + intl4.string(require(1212) /* getSystemLocale */.t.pgUTZC);
  } else if (obj.AGE_RESTRICTED === arg0) {
    const intl = require(1212) /* getSystemLocale */.intl;
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const _HermesInternal = HermesInternal;
    return "" + intl.string(require(1212) /* getSystemLocale */.t["7Xq/nV"]) + ": " + intl2.string(require(1212) /* getSystemLocale */.t.b5FqhF);
  } else {
    const intl9 = require(1212) /* getSystemLocale */.intl;
    const intl10 = require(1212) /* getSystemLocale */.intl;
    const _HermesInternal5 = HermesInternal;
    return "" + intl9.string(require(1212) /* getSystemLocale */.t["7Xq/nV"]) + ": " + intl10.string(require(1212) /* getSystemLocale */.t["9C444m"]);
  }
};
export const StreamUnavailableReasons = obj;
export { canWatchStream };
export const useCanWatchStream = function useCanWatchStream(stateFromStores) {
  const _require = stateFromStores;
  const items = [closure_8, _createForOfIteratorHelperLoose, closure_7, _isNativeReflectConstruct];
  return _require(566).useStateFromStoresArray(items, () => outer1_14(closure_0, outer1_8, outer1_6, outer1_7, outer1_3));
};
export const getStreamEligibleChannels = function getStreamEligibleChannels(arg0, closure_2, _isNativeReflectConstruct) {
  let iter2;
  const items = [];
  const tmp = _createForOfIteratorHelperLoose(arg0[GUILD_VOCAL_CHANNELS_KEY]);
  let iter = tmp();
  if (!iter.done) {
    do {
      let channel = iter.value.channel;
      let tmp2 = canStreamInChannel;
      if (canStreamInChannel(channel, closure_2, _isNativeReflectConstruct)) {
        let arr = items.push(channel);
      }
      iter2 = tmp();
      iter = iter2;
    } while (!iter2.done);
  }
  return items;
};
