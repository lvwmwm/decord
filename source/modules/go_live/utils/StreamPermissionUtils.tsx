// Module ID: 6957
// Function ID: 55648
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: getStreamCTAAriaLabel, getStreamCTAString, getStreamEligibleChannels, useCanWatchStream

// Module 6957 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
function canStreamInChannel(channel, closure_2, closure_3, arg3) {
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
        flag = !importDefault(dependencyMap[7])(channel, closure_3);
      }
      let tmp8 = !flag;
      if (tmp8) {
        const tmp10 = !closure_3.can(Permissions.STREAM, channel);
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
      const obj = closure_21(dependencyMap[9]);
      isChannelFullResult = obj.isChannelFull(basicChannel, closure_21, closure_16);
    }
    let tmp8 = importDefault(dependencyMap[7])(basicChannel, closure_18);
    const tmp9 = null != closure_12.getAwaitingRemoteSessionInfo() || null != closure_12.getRemoteSessionId();
    let result = closure_21(dependencyMap[10]).shouldAgeVerifyForAgeGate();
    if (result) {
      result = closure_21(dependencyMap[10]).shouldShowAgeGateForChannelId(basicChannel.id);
      const obj3 = closure_21(dependencyMap[10]);
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
let closure_3 = importDefault(dependencyMap[0]);
const ChannelRecordBase = arg1(dependencyMap[1]).ChannelRecordBase;
const GUILD_VOCAL_CHANNELS_KEY = arg1(dependencyMap[2]).GUILD_VOCAL_CHANNELS_KEY;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const Permissions = arg1(dependencyMap[6]).Permissions;
const obj = { REMOTE_MODE: 0, [0]: "REMOTE_MODE", CHANNEL_FULL: 1, [1]: "CHANNEL_FULL", NO_PERMISSION: 2, [2]: "NO_PERMISSION", AGE_RESTRICTED: 3, [3]: "AGE_RESTRICTED" };
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/go_live/utils/StreamPermissionUtils.tsx");

export { canStreamInChannel };
export const getStreamCTAString = function getStreamCTAString(arg0) {
  if (obj.REMOTE_MODE === arg0) {
    const intl5 = arg1(dependencyMap[8]).intl;
    return intl5.string(arg1(dependencyMap[8]).t.1i3tSY);
  } else if (obj.CHANNEL_FULL === arg0) {
    const intl4 = arg1(dependencyMap[8]).intl;
    return intl4.string(arg1(dependencyMap[8]).t.elyVbv);
  } else if (obj.NO_PERMISSION === arg0) {
    const intl3 = arg1(dependencyMap[8]).intl;
    return intl3.string(arg1(dependencyMap[8]).t.pgUTZC);
  } else if (obj.AGE_RESTRICTED === arg0) {
    const intl2 = arg1(dependencyMap[8]).intl;
    return intl2.string(arg1(dependencyMap[8]).t.b5FqhF);
  } else {
    const intl = arg1(dependencyMap[8]).intl;
    return intl.string(arg1(dependencyMap[8]).t.7Xq/nV);
  }
};
export const getStreamCTAAriaLabel = function getStreamCTAAriaLabel(arg0) {
  if (obj.REMOTE_MODE === arg0) {
    const intl7 = arg1(dependencyMap[8]).intl;
    const intl8 = arg1(dependencyMap[8]).intl;
    const _HermesInternal4 = HermesInternal;
    return "" + intl7.string(arg1(dependencyMap[8]).t.7Xq/nV) + ": " + intl8.string(arg1(dependencyMap[8]).t.1i3tSY);
  } else if (obj.CHANNEL_FULL === arg0) {
    const intl5 = arg1(dependencyMap[8]).intl;
    const intl6 = arg1(dependencyMap[8]).intl;
    const _HermesInternal3 = HermesInternal;
    return "" + intl5.string(arg1(dependencyMap[8]).t.7Xq/nV) + ": " + intl6.string(arg1(dependencyMap[8]).t.elyVbv);
  } else if (obj.NO_PERMISSION === arg0) {
    const intl3 = arg1(dependencyMap[8]).intl;
    const intl4 = arg1(dependencyMap[8]).intl;
    const _HermesInternal2 = HermesInternal;
    return "" + intl3.string(arg1(dependencyMap[8]).t.7Xq/nV) + ": " + intl4.string(arg1(dependencyMap[8]).t.pgUTZC);
  } else if (obj.AGE_RESTRICTED === arg0) {
    const intl = arg1(dependencyMap[8]).intl;
    const intl2 = arg1(dependencyMap[8]).intl;
    const _HermesInternal = HermesInternal;
    return "" + intl.string(arg1(dependencyMap[8]).t.7Xq/nV) + ": " + intl2.string(arg1(dependencyMap[8]).t.b5FqhF);
  } else {
    const intl9 = arg1(dependencyMap[8]).intl;
    const intl10 = arg1(dependencyMap[8]).intl;
    const _HermesInternal5 = HermesInternal;
    return "" + intl9.string(arg1(dependencyMap[8]).t.7Xq/nV) + ": " + intl10.string(arg1(dependencyMap[8]).t.9C444m);
  }
};
export const StreamUnavailableReasons = obj;
export { canWatchStream };
export const useCanWatchStream = function useCanWatchStream(stateFromStores) {
  const arg1 = stateFromStores;
  const items = [closure_8, closure_6, closure_7, closure_3];
  return arg1(dependencyMap[11]).useStateFromStoresArray(items, () => callback(arg0, closure_8, closure_6, closure_7, closure_3));
};
export const getStreamEligibleChannels = function getStreamEligibleChannels(arg0, arg1, arg2) {
  let iter2;
  const items = [];
  const tmp = _createForOfIteratorHelperLoose(arg0[closure_5]);
  let iter = tmp();
  if (!iter.done) {
    do {
      let channel = iter.value.channel;
      let tmp2 = closure_13;
      if (closure_13(channel, arg1, arg2)) {
        let arr = items.push(channel);
      }
      iter2 = tmp();
      iter = iter2;
    } while (!iter2.done);
  }
  return items;
};
