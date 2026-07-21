// Module ID: 6756
// Function ID: 52886
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6756 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
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
function handleConnectionReset() {
  set.clear();
}
function handleGuildReset(guild) {
  set.delete(guild.guild.id);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
const set = new Set();
let closure_9 = {};
let tmp3 = (Store) => {
  class ChannelStatusStore {
    constructor() {
      self = this;
      tmp = closure_2(this, ChannelStatusStore);
      obj = closure_5(ChannelStatusStore);
      tmp2 = closure_4;
      if (closure_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = ChannelStatusStore;
  callback2(ChannelStatusStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_7);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "getChannelStatus",
    value(guild_id) {
      if (null != guild_id) {
        if (null != guild_id.guild_id) {
          if (guild_id.type === ChannelStatusStore(closure_1[6]).ChannelTypes.GUILD_VOICE) {
            let tmp5;
            if (null != closure_9[guild_id.guild_id]) {
              tmp5 = tmp4[guild_id.id];
            }
            return tmp5;
          }
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "hasRequestedStatuses",
    value(arg0) {
      return set.has(arg0);
    }
  };
  items[2] = obj;
  return callback(ChannelStatusStore, items);
}(importDefault(dependencyMap[7]).Store);
tmp3.displayName = "ChannelStatusStore";
tmp3 = new tmp3(importDefault(dependencyMap[8]), {
  GUILD_CREATE: handleGuildReset,
  GUILD_DELETE: handleGuildReset,
  CONNECTION_RESUMED: handleConnectionReset,
  CONNECTION_OPEN: handleConnectionReset,
  VOICE_CHANNEL_STATUS_UPDATE: function handleVoiceChannelStatusUpdate(guildId) {
    if (null == closure_9[guildId.guildId]) {
      closure_9[guildId.guildId] = {};
    }
    closure_9[guildId.guildId][guildId.id] = guildId.status;
  },
  CHANNEL_INFO: function handleChannelInfo(guildId) {
    let done;
    guildId = guildId.guildId;
    closure_9[guildId] = {};
    const tmp = _createForOfIteratorHelperLoose(guildId.channels);
    let iter = tmp();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp2 = closure_9;
        closure_9[guildId][value.id] = value.status;
        let iter2 = tmp();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  },
  FETCH_CHANNEL_INFO: function handleFetchChannelInfo(guildId) {
    set.add(guildId.guildId);
  }
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/channel/ChannelStatusStore.tsx");

export default tmp3;
