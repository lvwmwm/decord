// Module ID: 5602
// Function ID: 47628
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5602 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let closure_0 = Symbol_iterator;
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
      closure_0 = tmp;
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
function isSpam(isSpam) {
  return isSpam.isSpam;
}
function processChannel(id) {
  let tmp = isSpam(id);
  if (tmp) {
    tmp = !set.has(id.id);
  }
  let flag = false;
  if (tmp) {
    set.add(id.id);
    flag = true;
  }
  let hasItem = !isSpam(id);
  if (hasItem) {
    hasItem = set.has(id.id);
  }
  if (hasItem) {
    set.delete(id.id);
    flag = true;
  }
  let hasItem1 = !isSpam(id);
  if (hasItem1) {
    hasItem1 = set1.has(id.id);
  }
  if (hasItem1) {
    set1.delete(id.id);
    flag = true;
  }
  return flag;
}
function handleConnectionOpen() {
  set.clear();
  set1.clear();
  const values = Object.values(mutablePrivateChannels.getMutablePrivateChannels());
  const item = values.forEach((arg0) => {
    callback(arg0);
  });
  let closure_8 = true;
}
function handleSpamAcceptOptimistic(channelId) {
  set1.add(channelId.channelId);
}
function handleChannelCreate(channel) {
  return processChannel(channel.channel);
}
function handleChannelUpdates(channels) {
  let done;
  const tmp = _createForOfIteratorHelperLoose(channels.channels);
  let iter = tmp();
  if (!iter.done) {
    do {
      let tmp2 = closure_13;
      let tmp3 = closure_13(iter.value);
      let iter2 = tmp();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
}
function handleChannelDelete(channel) {
  channel = channel.channel;
  let flag = false;
  if (set.has(channel.id)) {
    set.delete(channel.id);
    flag = true;
  }
  return flag;
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5]);
const set = new Set();
const set1 = new Set();
let closure_8 = false;
let tmp5 = (importDefaultResult) => {
  class SpamMessageRequestStore {
    constructor() {
      self = this;
      tmp = SpamMessageRequestStore(this, SpamMessageRequestStore);
      obj = {
        CONNECTION_OPEN: closure_14,
        CONNECTION_OPEN_SUPPLEMENTAL: closure_14,
        CACHE_LOADED_LAZY() {
              return tmp2Result.loadCache();
            },
        CHANNEL_CREATE: closure_16,
        CHANNEL_UPDATES: closure_17,
        CHANNEL_DELETE: closure_18,
        MESSAGE_REQUEST_ACCEPT_OPTIMISTIC: closure_15
      };
      items = [];
      items[0] = obj;
      obj2 = closure_3(SpamMessageRequestStore);
      tmp2 = closure_2;
      if (closure_9()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_3;
        constructResult = Reflect.construct(obj2, items, closure_3(self).constructor);
      } else {
        constructResult = obj2.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      SpamMessageRequestStore = tmp2Result;
      return tmp2Result;
    }
  }
  let closure_0 = SpamMessageRequestStore;
  callback2(SpamMessageRequestStore, importDefaultResult);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_5);
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "loadCache",
    value() {
      const snapshot = this.readSnapshot(SpamMessageRequestStore.LATEST_SNAPSHOT_VERSION);
      if (null != snapshot) {
        const _Set = Set;
        const set = new Set(snapshot);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "takeSnapshot",
    value() {
      return { version: SpamMessageRequestStore.LATEST_SNAPSHOT_VERSION, data: Array.from(closure_6) };
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getSpamChannelIds",
    value() {
      return closure_6;
    }
  };
  items[4] = {
    key: "getSpamChannelsCount",
    value() {
      return set.size;
    }
  };
  items[5] = {
    key: "isSpam",
    value(arg0) {
      return set.has(arg0);
    }
  };
  items[6] = {
    key: "isAcceptedOptimistic",
    value(arg0) {
      return set2.has(arg0);
    }
  };
  items[7] = {
    key: "isReady",
    value() {
      return closure_8;
    }
  };
  return callback(SpamMessageRequestStore, items);
}(importDefault(dependencyMap[6]));
tmp5.displayName = "SpamMessageRequestStore";
tmp5.LATEST_SNAPSHOT_VERSION = 1;
tmp5 = new tmp5();
const importDefaultResult = importDefault(dependencyMap[6]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/message_request/SpamMessageRequestStore.tsx");

export default tmp5;
