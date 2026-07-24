// Module ID: 6718
// Function ID: 52235
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 1348, 4970, 653, 6712, 6716, 6717, 2]
// Exports: withFallbacks

// Module 6718 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { ChannelTypes } from "ME";

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
function isSaveableChannel(type) {
  let tmp = type.type === ChannelTypes.DM;
  if (!tmp) {
    tmp = type.type === ChannelTypes.GROUP_DM;
  }
  if (!tmp) {
    tmp = type.type === ChannelTypes.GUILD_TEXT;
  }
  return tmp;
}
function addFallback(value, id, extendedMemoryLru) {
  if (!extendedMemoryLru.hasExtended(id.id)) {
    const obj = { guildId: value };
    ({ id: obj.channelId, type: obj.channelType } = id);
    obj.fallback = true;
    extendedMemoryLru.put(id.id, obj);
  }
}
function mergeInto(extendedMemoryLru, allEntries) {
  let done;
  const tmp = _createForOfIteratorHelperLoose(allEntries.allEntries());
  let iter = tmp();
  if (!iter.done) {
    do {
      let tmp2 = callback;
      let tmp3 = callback(iter.value, 2);
      let putResult = extendedMemoryLru.put(tmp3[0], tmp3[1]);
      let iter2 = tmp();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
  return extendedMemoryLru;
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/app_database/modules/messages/withFallbacks.tsx");

export const withFallbacks = function withFallbacks(extendedMemoryLru, arg1) {
  if (extendedMemoryLru.totalLength >= arg1) {
    return extendedMemoryLru;
  } else {
    const ExtendedMemoryLru = require(6712) /* _createForOfIteratorHelperLoose */.ExtendedMemoryLru;
    const prototype = ExtendedMemoryLru.prototype;
    extendedMemoryLru = new ExtendedMemoryLru(extendedMemoryLru.primaryCapacity, extendedMemoryLru.extendedCapacity);
    const diff = arg1 - extendedMemoryLru.totalLength;
    const tmp31 = _createForOfIteratorHelperLoose(guildFolders.getGuildFolders());
    const iter6 = tmp31();
    let iter5 = iter6;
    if (!iter6.done) {
      while (true) {
        let tmp = _createForOfIteratorHelperLoose;
        let tmp2 = _createForOfIteratorHelperLoose(iter5.value.guildIds);
        let iter = tmp2();
        let iter2 = iter;
        let tmp3 = tmp4;
        if (!iter.done) {
          while (true) {
            let value = iter2.value;
            let _Object = Object;
            let tmp5 = mutableBasicGuildChannelsForGuild;
            let values = Object.values(mutableBasicGuildChannelsForGuild.getMutableBasicGuildChannelsForGuild(value));
            let num = 0;
            let num2 = 0;
            if (0 < values.length) {
              while (true) {
                let tmp6 = values[num];
                let tmp7 = isSaveableChannel;
                let isReadableChannelResult = isSaveableChannel(tmp6);
                if (isReadableChannelResult) {
                  let tmp9 = require;
                  let tmp10 = dependencyMap;
                  let obj = require(6716) /* isReadableChannel */;
                  isReadableChannelResult = obj.isReadableChannel(tmp6);
                }
                if (isReadableChannelResult) {
                  let tmp11 = require;
                  let tmp12 = dependencyMap;
                  let obj2 = require(6717) /* isLimitedChannel */;
                  isReadableChannelResult = !obj2.isLimitedChannel(tmp6);
                }
                if (isReadableChannelResult) {
                  let tmp13 = addFallback;
                  let tmp14 = addFallback(value, tmp6, extendedMemoryLru);
                }
                if (extendedMemoryLru.totalLength >= diff) {
                  break;
                } else {
                  num = num + 1;
                  tmp3 = tmp6;
                  num2 = num;
                  continue;
                }
              }
              let tmp18 = mergeInto;
              let tmp19 = mergeInto(extendedMemoryLru, extendedMemoryLru);
              return extendedMemoryLru;
            }
            let iter3 = tmp2();
            let tmp15 = num2;
            iter2 = iter3;
            let tmp16 = value;
            let tmp17 = values;
            tmp4 = tmp3;
            continue;
          }
        }
        let iter4 = tmp31();
        iter5 = iter4;
      }
    }
    mergeInto(extendedMemoryLru, extendedMemoryLru);
    return extendedMemoryLru;
  }
};
