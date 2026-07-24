// Module ID: 12729
// Function ID: 99072
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1352, 1348, 4142, 1906, 5601, 1916, 566, 686, 2]

// Module 12729 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { isPrivate } from "_callSuper";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import set from "_possibleConstructorReturn";

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
function rebuildUnreads() {
  privateChannelIds = privateChannelIds.getPrivateChannelIds();
  const found = privateChannelIds.filter((arg0) => outer1_9.getMentionCount(arg0) > 0);
  if (found.length > 20) {
    found.length = 20;
  }
  let flag = !require(1916) /* areArraysShallowlyEqual */.areArraysShallowlyEqual(found, found);
  if (flag) {
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
let closure_12 = [];
let set = new Set();
let tmp3 = ((Store) => {
  class PrivateChannelReadStateStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, PrivateChannelReadStateStore);
      obj = outer1_5(PrivateChannelReadStateStore);
      tmp2 = outer1_4;
      if (outer1_14()) {
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
  callback2(PrivateChannelReadStateStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_11, outer1_8, outer1_10, outer1_9);
    }
  };
  const items = [obj, ];
  obj = {
    key: "getUnreadPrivateChannelIds",
    value() {
      return outer1_12;
    }
  };
  items[1] = obj;
  return callback(PrivateChannelReadStateStore, items);
})(require("initialize").Store);
tmp3.displayName = "PrivateChannelReadStateStore";
tmp3 = new tmp3(require("dispatcher"), {
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
        let tmp2 = store;
        let channel = store.getChannel(iter2.value.id);
        let tmp4 = null != channel;
        if (tmp4) {
          let tmp5 = isPrivate;
          tmp4 = isPrivate(channel.type);
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
let result = set.fileFinishedImporting("stores/PrivateChannelReadStateStore.tsx");

export default tmp3;
