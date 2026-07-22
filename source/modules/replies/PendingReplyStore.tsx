// Module ID: 6917
// Function ID: 55120
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 6917 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let importDefault = Symbol_iterator;
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
      importDefault = tmp;
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
  } else if (null == closure_11[channelId]) {
    return false;
  } else {
    const message = message.getMessage(channelId, tmp8.messageId);
    const channel = channel.getChannel(tmp8.channelId);
    if (null != message) {
      if (null != channel) {
        const obj = { channel, message };
        ({ shouldMention: obj.shouldMention, showMentionToggle: obj.showMentionToggle } = tmp8);
        closure_10[channelId] = obj;
        delete r0[r1];
      }
    }
    return false;
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
let closure_10 = {};
let closure_11 = {};
let closure_12 = {};
let tmp2 = (PersistedStore) => {
  class PendingReplyStore {
    constructor() {
      self = this;
      tmp = closure_3(this, PendingReplyStore);
      obj = closure_6(PendingReplyStore);
      tmp2 = closure_5;
      if (closure_15()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = PendingReplyStore;
  callback2(PendingReplyStore, PersistedStore);
  let obj = {
    key: "getState",
    value() {
      let done;
      let obj = {};
      const tmp = callback3(PendingReplyStore(closure_1[8]).entries(closure_10));
      let iter = tmp();
      if (!iter.done) {
        do {
          let tmp2 = closure_2;
          let tmp3 = closure_2(iter.value, 2);
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
      const merged = Object.assign(closure_11);
      const merged1 = Object.assign(obj);
      return obj;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "initialize",
    value(arg0) {
      let obj = arg0;
      this.waitFor(closure_9, closure_8);
      if (null == arg0) {
        obj = {};
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "getPendingReply",
    value(arg0) {
      return closure_10[arg0];
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getPendingReplyActionSource",
    value(arg0) {
      return closure_12[arg0];
    }
  };
  return callback(PendingReplyStore, items);
}(importDefault(dependencyMap[9]).PersistedStore);
tmp2.displayName = "PendingReplyStore";
tmp2.persistKey = "PendingReplyStore";
const items = [
  (arg0) => {
    let obj = arg0;
    if (null == arg0) {
      obj = {};
    }
    return obj;
  }
];
tmp2.migrations = items;
tmp2 = new tmp2(importDefault(dependencyMap[10]), {
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
    if (channelId in closure_10) {
      let obj = {};
      const merged = Object.assign(closure_10[channelId]);
      obj["shouldMention"] = shouldMention;
      closure_10[channelId] = obj;
    }
    if (channelId in closure_11) {
      obj = {};
      const merged1 = Object.assign(closure_11[channelId]);
      obj["shouldMention"] = shouldMention;
      closure_11[channelId] = obj;
    }
  },
  DELETE_PENDING_REPLY: function handleDeletePendingReply(arg0) {
    delete r2[r1];
    delete r0[r1];
  },
  CONNECTION_OPEN: function handleConnectionOpen() {
    const keys = importDefault(dependencyMap[8]).keys(closure_11);
    const item = keys.forEach((channelId) => {
      if (null == channel.getChannel(channelId)) {
        delete r0[r1];
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
    if (null != closure_10[channelId]) {
      const message = tmp.message;
      if (null != message) {
        id = message.id;
      }
    }
    if (id === id) {
      delete r3[r2];
      delete r1[r2];
    } else {
      let messageId;
      if (null != closure_11[channelId]) {
        messageId = tmp4.messageId;
      }
      if (messageId !== id) {
        return false;
      } else {
        delete r3[r2];
        delete r3[r2];
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
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/replies/PendingReplyStore.tsx");

export default tmp2;
