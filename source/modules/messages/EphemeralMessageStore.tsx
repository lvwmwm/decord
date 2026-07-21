// Module ID: 4346
// Function ID: 38525
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4346 (_isNativeReflectConstruct)
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
function dropChannelIfEmpty(channelId, value) {
  if (0 === value.size) {
    map.delete(channelId);
  }
}
function clearAll() {
  if (0 === map.size) {
    return false;
  } else {
    map.clear();
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
const MessageFlags = arg1(dependencyMap[6]).MessageFlags;
let closure_9 = [];
const map = new Map();
let tmp3 = (Store) => {
  class EphemeralMessageStore {
    constructor() {
      self = this;
      tmp = closure_2(this, EphemeralMessageStore);
      obj = closure_5(EphemeralMessageStore);
      tmp2 = closure_4;
      if (closure_11()) {
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
  const arg1 = EphemeralMessageStore;
  callback2(EphemeralMessageStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_7);
    }
  };
  const items = [obj, ];
  obj = {
    key: "getMessages",
    value(arg0) {
      const value = closure_10.get(arg0);
      if (null != value) {
        if (0 !== value.size) {
          const _Array = Array;
          let arr = Array.from(value.values());
        }
        return arr;
      }
      arr = closure_9;
    }
  };
  items[1] = obj;
  return callback(EphemeralMessageStore, items);
}(importDefault(dependencyMap[9]).Store);
tmp3.displayName = "EphemeralMessageStore";
tmp3 = new tmp3(importDefault(dependencyMap[10]), {
  MESSAGE_CREATE: function handleMessageCreate(arg0) {
    let channelId;
    let message;
    ({ channelId, message } = arg0);
    const flags = message.flags;
    let num = 0;
    if (null != flags) {
      num = flags;
    }
    if (obj.hasFlag(num, MessageFlags.EPHEMERAL)) {
      let value = map.get(channelId);
      if (null == value) {
        const _Map = Map;
        const map = new Map();
        const result = map.set(channelId, map);
        value = map;
      }
      const result1 = value.set(message.id, arg1(dependencyMap[8]).createMessageRecord(message));
      if (value.size > 50) {
        const iter2 = value.keys().next();
        while (true !== iter2.done) {
          let deleteResult = value.delete(iter2.value);
          if (value.size <= 50) {
            break;
          }
        }
        const iter = value.keys();
      }
    } else {
      return false;
    }
    const obj = arg1(dependencyMap[7]);
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    let channel_id;
    let id;
    message = message.message;
    ({ channel_id, id } = message);
    if (null != channel_id) {
      if (null != id) {
        let value = map.get(channel_id);
        if (null == value) {
          return false;
        } else {
          value = value.get(id);
          if (null == value) {
            return false;
          } else {
            const result = value.set(id, arg1(dependencyMap[8]).updateMessageRecord(value, message));
          }
        }
      }
    }
    return false;
  },
  MESSAGE_DELETE: function handleMessageDelete(channelId) {
    channelId = channelId.channelId;
    const value = map.get(channelId);
    if (null != value) {
      if (value.delete(channelId.id)) {
        dropChannelIfEmpty(channelId, value);
      }
    }
    return false;
  },
  MESSAGE_DELETE_BULK: function handleMessageDeleteBulk(channelId) {
    let iter3;
    channelId = channelId.channelId;
    const value = map.get(channelId);
    if (null == value) {
      return false;
    } else {
      const tmp2 = _createForOfIteratorHelperLoose(channelId.ids);
      const iter = tmp2();
      let iter2 = iter;
      let flag2 = false;
      let flag3 = false;
      if (!iter.done) {
        do {
          if (value.delete(iter2.value)) {
            flag2 = true;
          }
          iter3 = tmp2();
          iter2 = iter3;
          flag3 = flag2;
        } while (!iter3.done);
      }
      if (flag3) {
        dropChannelIfEmpty(channelId, value);
      } else {
        return false;
      }
    }
  },
  CLEAR_MESSAGES: function handleClearMessages(channelId) {
    channelId = channelId.channelId;
    if (map.has(channelId)) {
      map.delete(channelId);
    } else {
      return false;
    }
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    if (!map.delete(channel.channel.id)) {
      return false;
    }
  },
  THREAD_DELETE: function handleThreadDelete(channel) {
    if (!map.delete(channel.channel.id)) {
      return false;
    }
  },
  GUILD_DELETE: function handleGuildDelete() {
    let iter3;
    if (0 === map.size) {
      return false;
    } else {
      const tmp3 = _createForOfIteratorHelperLoose(map.keys());
      const iter = tmp3();
      let iter2 = iter;
      let flag = false;
      let flag2 = false;
      if (!iter.done) {
        do {
          let value = iter2.value;
          let tmp5 = closure_7;
          if (null == closure_7.getChannel(value)) {
            let tmp6 = closure_10;
            let deleteResult = closure_10.delete(value);
            flag = true;
          }
          iter3 = tmp3();
          iter2 = iter3;
          flag2 = flag;
        } while (!iter3.done);
      }
      return flag2;
    }
  },
  CACHE_LOADED: clearAll,
  CONNECTION_OPEN: clearAll,
  OVERLAY_INITIALIZE: clearAll,
  LOGOUT: clearAll
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/messages/EphemeralMessageStore.tsx");

export default tmp3;
