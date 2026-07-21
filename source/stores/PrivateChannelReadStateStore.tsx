// Module ID: 12559
// Function ID: 96567
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12559 (_isNativeReflectConstruct)
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
function rebuildUnreads() {
  const privateChannelIds = privateChannelIds.getPrivateChannelIds();
  const found = privateChannelIds.filter((arg0) => mentionCount.getMentionCount(arg0) > 0);
  if (found.length > 20) {
    found.length = 20;
  }
  let flag = !arg1(dependencyMap[10]).areArraysShallowlyEqual(found, closure_12);
  if (flag) {
    closure_12 = found;
    const _Set = Set;
    const set = new Set(found);
    flag = true;
  }
  return flag;
}
function handleConnectionOpen() {
  return rebuildUnreads();
}
function handleGenericUpdate(channelId) {
  const channel = store.getChannel(channelId.channelId);
  let tmp2 = null == channel;
  if (!tmp2) {
    tmp2 = !isPrivate(channel.type);
  }
  let tmp4 = !tmp2;
  if (!tmp2) {
    tmp4 = rebuildUnreads();
  }
  return tmp4;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const isPrivate = arg1(dependencyMap[5]).isPrivate;
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
let closure_10 = importDefault(dependencyMap[8]);
let closure_11 = importDefault(dependencyMap[9]);
let closure_12 = [];
const set = new Set();
let tmp3 = (Store) => {
  class PrivateChannelReadStateStore {
    constructor() {
      self = this;
      tmp = closure_2(this, PrivateChannelReadStateStore);
      obj = closure_5(PrivateChannelReadStateStore);
      tmp2 = closure_4;
      if (closure_14()) {
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
  const arg1 = PrivateChannelReadStateStore;
  callback2(PrivateChannelReadStateStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_11, closure_8, closure_10, closure_9);
    }
  };
  const items = [obj, ];
  obj = {
    key: "getUnreadPrivateChannelIds",
    value() {
      return closure_12;
    }
  };
  items[1] = obj;
  return callback(PrivateChannelReadStateStore, items);
}(importDefault(dependencyMap[11]).Store);
tmp3.displayName = "PrivateChannelReadStateStore";
tmp3 = new tmp3(importDefault(dependencyMap[12]), {
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  MESSAGE_CREATE: handleGenericUpdate,
  MESSAGE_ACK: handleGenericUpdate,
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    const channel = store.getChannel(channelId.channelId);
    let tmp2 = null == channel;
    if (!tmp2) {
      tmp2 = !isPrivate(channel.type);
    }
    let tmp4 = !tmp2;
    if (!tmp2) {
      tmp4 = rebuildUnreads();
    }
    return tmp4;
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    const tmp = !set.has(channel.channel.id);
    let tmp2 = !tmp;
    if (!tmp) {
      tmp2 = rebuildUnreads();
    }
    return tmp2;
  },
  WINDOW_FOCUS: function handleWindowFocus() {
    const channel = store.getChannel(channelId.getChannelId());
    let tmp2 = null == channel;
    if (!tmp2) {
      tmp2 = !isPrivate(channel.type);
    }
    let tmp4 = !tmp2;
    if (!tmp2) {
      tmp4 = rebuildUnreads();
    }
    return tmp4;
  },
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    channel = store.getChannel(channel.channel.id);
    let tmp2 = null == channel;
    if (!tmp2) {
      tmp2 = !isPrivate(channel.type);
    }
    let tmp4 = !tmp2;
    if (!tmp2) {
      tmp4 = rebuildUnreads();
    }
    return tmp4;
  },
  CHANNEL_UPDATES: function handleChannelUpdates(channels) {
    let iter3;
    const tmp = _createForOfIteratorHelperLoose(channels.channels);
    const iter = tmp();
    let iter2 = iter;
    let flag = false;
    let flag2 = false;
    if (!iter.done) {
      do {
        let tmp2 = closure_8;
        let channel = closure_8.getChannel(iter2.value.id);
        let tmp4 = null != channel;
        if (tmp4) {
          let tmp5 = closure_7;
          tmp4 = closure_7(channel.type);
        }
        if (tmp4) {
          flag = true;
        }
        iter3 = tmp();
        iter2 = iter3;
        flag2 = flag;
      } while (!iter3.done);
    }
    let tmp6 = flag2;
    if (flag2) {
      tmp6 = rebuildUnreads();
    }
    return tmp6;
  }
});
const result = arg1(dependencyMap[13]).fileFinishedImporting("stores/PrivateChannelReadStateStore.tsx");

export default tmp3;
