// Module ID: 6710
// Function ID: 52109
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6, 7, 15, 17, 18, 1348, 4051, 1196, 1906, 6711, 6712, 6713, 6715, 6716, 6717, 6718, 2]

// Module 6710 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import bound from "module_25";
import tmp6 from "_isNativeReflectConstruct";
import importDefaultResult from "_isNativeReflectConstruct";

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
function handleSelectedChannelStoreChanged() {
  const channelId = store.getChannelId();
  if (null != channelId) {
    tmp6.recordChannel(channelId);
  }
}
function handleConnectionOpenSupplemental() {
  const result = tmp6.dropUnreachableChannels();
  tmp6.replaceLru(require(6718) /* _createForOfIteratorHelperLoose */.withFallbacks(extendedMemoryLru, 1250));
}
function handleChannelUpdate(id) {
  id = id.id;
  const isReadableChannelResult = require(6716) /* isReadableChannel */.isReadableChannel(id);
  let tmp2 = isReadableChannelResult;
  if (isReadableChannelResult) {
    tmp2 = id === store.getChannelId();
  }
  if (tmp2) {
    tmp6.recordChannel(id);
  }
  if (!isReadableChannelResult) {
    tmp6.deleteChannel(id);
  }
}
function handleChannelUpdates(channels) {
  let done;
  const tmp = _createForOfIteratorHelperLoose(channels.channels);
  let iter = tmp();
  if (!iter.done) {
    do {
      let tmp2 = handleChannelUpdate;
      let tmp3 = handleChannelUpdate(iter.value);
      let iter2 = tmp();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
}
function handleChannelDelete(channel) {
  tmp6.deleteChannel(channel.channel.id);
}
function handleThreadUpdate(channel) {
  handleChannelUpdate(channel.channel);
}
function handleThreadDelete(channel) {
  tmp6.deleteChannel(channel.channel.id);
}
function handleGuildDelete(guild) {
  let flag = !guild.guild.unavailable;
  if (flag) {
    tmp6.deleteGuild(guild.guild.id);
    flag = true;
  }
  return flag;
}
function handleLoginSuccess() {
  extendedMemoryLru.clear();
  lru.clear();
  let c14 = false;
}
function handleCacheLoadedLazyNoCache() {
  let c14 = true;
}
let c11 = null;
let extendedMemoryLru = new require("_createForOfIteratorHelperLoose").ExtendedMemoryLru(750, 500);
let lru = new require("Lru").Lru(15);
let c14 = false;
let closure_15 = tmp6;
tmp6.displayName = "SaveableChannelsStore";
tmp6.LATEST_SNAPSHOT_VERSION = 1;
tmp6 = new tmp6();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/app_database/modules/messages/SaveableChannelsStore.tsx");

export default tmp6;
export const MAXIMUM_MESSAGES_PER_CHANNEL_DM = 25;
export const MAXIMUM_MESSAGES_PER_CHANNEL_NON_DM = 25;
export const MAXIMUM_MESSAGES_PER_CHANNEL_DEFAULT = 1;
export const MAXIMUM_MESSAGES_PER_CHANNEL_EVER = bound;
