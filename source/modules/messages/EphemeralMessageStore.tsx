// Module ID: 4350
// Function ID: 38573
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1348, 653, 1360, 4351, 566, 686, 2]

// Module 4350 (_isNativeReflectConstruct)
import ME from "ME";
import hasFlag from "hasFlag";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { MessageFlags } from "ME";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
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
let closure_9 = [];
let map = new Map();
let tmp3 = ((Store) => {
  class EphemeralMessageStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, EphemeralMessageStore);
      obj = outer1_5(EphemeralMessageStore);
      tmp2 = outer1_4;
      if (outer1_11()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(EphemeralMessageStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_7);
    }
  };
  const items = [obj, ];
  obj = {
    key: "getMessages",
    value(arg0) {
      const value = outer1_10.get(arg0);
      if (null != value) {
        if (0 !== value.size) {
          const _Array = Array;
          let arr = Array.from(value.values());
        }
        return arr;
      }
      arr = outer1_9;
    }
  };
  items[1] = obj;
  return callback(EphemeralMessageStore, items);
})(require("initialize").Store);
tmp3.displayName = "EphemeralMessageStore";
tmp3 = new tmp3(require("dispatcher"), {
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
        map = new Map();
        const result = map.set(channelId, map);
        value = map;
      }
      const result1 = value.set(message.id, require(4351) /* createMinimalMessageRecord */.createMessageRecord(message));
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
    obj = require(1360) /* hasFlag */;
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
            const result = value.set(id, require(4351) /* createMinimalMessageRecord */.updateMessageRecord(value, message));
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
          let tmp5 = channel;
          if (null == channel.getChannel(value)) {
            let tmp6 = map;
            let deleteResult = map.delete(value);
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
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/messages/EphemeralMessageStore.tsx");

export default tmp3;
