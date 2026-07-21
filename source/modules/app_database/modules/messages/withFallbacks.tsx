// Module ID: 6713
// Function ID: 52170
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: withFallbacks

// Module 6713 (_createForOfIteratorHelperLoose)
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
      let tmp2 = closure_2;
      let tmp3 = closure_2(iter.value, 2);
      let putResult = extendedMemoryLru.put(tmp3[0], tmp3[1]);
      let iter2 = tmp();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
  return extendedMemoryLru;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const ChannelTypes = arg1(dependencyMap[3]).ChannelTypes;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/app_database/modules/messages/withFallbacks.tsx");

export const withFallbacks = function withFallbacks(extendedMemoryLru, arg1) {
  if (extendedMemoryLru.totalLength >= arg1) {
    return extendedMemoryLru;
  } else {
    const ExtendedMemoryLru = arg1(dependencyMap[4]).ExtendedMemoryLru;
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
                  let tmp9 = arg1;
                  let tmp10 = dependencyMap;
                  let obj = arg1(dependencyMap[5]);
                  isReadableChannelResult = obj.isReadableChannel(tmp6);
                }
                if (isReadableChannelResult) {
                  let tmp11 = arg1;
                  let tmp12 = dependencyMap;
                  let obj2 = arg1(dependencyMap[6]);
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
            let tmp4 = tmp3;
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
