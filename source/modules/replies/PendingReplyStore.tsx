// Module ID: 6922
// Function ID: 55154
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 6, 7, 15, 17, 18, 1348, 4349, 21, 566, 686, 2]

// Module 6922 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";

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
function tryHydratePendingReply(channelId) {
  if (null == channelId) {
    return false;
  } else if (null == dependencyMap2[channelId]) {
    return false;
  } else {
    message = message.getMessage(channelId, tmp10.messageId);
    channel = channel.getChannel(tmp10.channelId);
    if (null != message) {
      if (null != channel) {
        const obj = { channel, message };
        ({ shouldMention: obj.shouldMention, showMentionToggle: obj.showMentionToggle } = tmp10);
        closure_10[channelId] = obj;
        delete tmp[tmp2];
      }
    }
    return false;
  }
}
let closure_10 = {};
let closure_11 = {};
let closure_12 = {};
let tmp2 = ((PersistedStore) => {
  class PendingReplyStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, PendingReplyStore);
      obj = outer1_6(PendingReplyStore);
      tmp2 = outer1_5;
      if (outer1_15()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(PendingReplyStore, PersistedStore);
  let obj = {
    key: "getState",
    value() {
      let done;
      let obj = {};
      const tmp = outer1_13(PendingReplyStore(outer1_1[8]).entries(outer1_10));
      let iter = tmp();
      if (!iter.done) {
        do {
          let tmp2 = outer1_2;
          let tmp3 = outer1_2(iter.value, 2);
          let first = tmp3[0];
          let tmp5 = tmp3[1];
          obj = { channelId: first, messageId: tmp5.message.id, shouldMention: tmp5.shouldMention, showMentionToggle: tmp5.showMentionToggle };
          obj[first] = obj;
          let iter2 = tmp();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
      obj = {};
      const merged = Object.assign(outer1_11);
      const merged1 = Object.assign(obj);
      return obj;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "initialize",
    value(arg0) {
      let obj = arg0;
      this.waitFor(outer1_9, outer1_8);
      if (null == arg0) {
        obj = {};
      }
      const outer1_11 = obj;
    }
  };
  items[1] = obj;
  obj = {
    key: "getPendingReply",
    value(arg0) {
      return outer1_10[arg0];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getPendingReplyActionSource",
    value(arg0) {
      return outer1_12[arg0];
    }
  };
  return callback(PendingReplyStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "PendingReplyStore";
tmp2.persistKey = "PendingReplyStore";
let items = [
  (arg0) => {
    let obj = arg0;
    if (null == arg0) {
      obj = {};
    }
    return obj;
  }
];
tmp2.migrations = items;
tmp2 = new tmp2(require("dispatcher"), {
  CREATE_PENDING_REPLY: function handleCreatePendingReply(message) {
    let channel;
    let shouldMention;
    ({ channel, shouldMention } = message);
    if (shouldMention === undefined) {
      shouldMention = true;
    }
    let flag = message.showMentionToggle;
    if (flag === undefined) {
      flag = true;
    }
    const obj = { channel, message: message.message, shouldMention, showMentionToggle: flag, mediaMention: message.mediaMention };
    closure_10[channel.id] = obj;
    closure_12[channel.id] = message.source;
  },
  CREATE_SHALLOW_PENDING_REPLY: function handleCreateShallowPendingReply(messageId) {
    let channel;
    let shouldMention;
    ({ channel, shouldMention } = messageId);
    if (shouldMention === undefined) {
      shouldMention = true;
    }
    let flag = messageId.showMentionToggle;
    if (flag === undefined) {
      flag = true;
    }
    const obj = { channelId: channel.id, messageId: messageId.messageId, shouldMention, showMentionToggle: flag };
    closure_11[channel.id] = obj;
  },
  SET_PENDING_REPLY_SHOULD_MENTION: function handleSetPendingReplyShouldMention(arg0) {
    let channelId;
    let shouldMention;
    ({ channelId, shouldMention } = arg0);
    if (channelId in dependencyMap) {
      let obj = {};
      const merged = Object.assign(dependencyMap[channelId]);
      obj["shouldMention"] = shouldMention;
      dependencyMap[channelId] = obj;
    }
    if (channelId in dependencyMap2) {
      obj = {};
      const merged1 = Object.assign(dependencyMap2[channelId]);
      obj["shouldMention"] = shouldMention;
      dependencyMap2[channelId] = obj;
    }
  },
  DELETE_PENDING_REPLY: function handleDeletePendingReply(arg0) {
    delete tmp3[tmp2];
    delete tmp[tmp2];
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    const keys = importDefault(21).keys(closure_11);
    const item = keys.forEach((channelId) => {
      if (null == outer1_8.getChannel(channelId)) {
        delete tmp[tmp2];
      }
    });
  },
  LOGOUT: function handleLogout() {
    let closure_10 = {};
    let closure_11 = {};
    let closure_12 = {};
  },
  MESSAGE_DELETE: function handleMessageDelete(arg0) {
    let channelId;
    let id;
    ({ id, channelId } = arg0);
    id = undefined;
    if (null != dependencyMap[channelId]) {
      const message = tmp4.message;
      if (null != message) {
        id = message.id;
      }
    }
    if (id === id) {
      delete tmp3[tmp2];
      delete tmp[tmp2];
    } else {
      let messageId;
      if (null != dependencyMap2[channelId]) {
        messageId = tmp7.messageId;
      }
      if (messageId !== id) {
        return false;
      } else {
        delete tmp3[tmp2];
        delete tmp3[tmp2];
      }
    }
  },
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    tryHydratePendingReply(channelId.channelId);
  },
  LOAD_MESSAGES_SUCCESS: function handleLoadMessagesSuccess(channelId) {
    tryHydratePendingReply(channelId.channelId);
  }
});
let result = require("_defineProperties").fileFinishedImporting("modules/replies/PendingReplyStore.tsx");

export default tmp2;
