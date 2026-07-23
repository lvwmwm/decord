// Module ID: 6830
// Function ID: 53842
// Name: _isNativeReflectConstruct
// Dependencies: [15, 17, 18, 57, 6, 7, 6831, 1348, 4349, 653, 1362, 4351, 6835, 566, 686, 2]

// Module 6830 (_isNativeReflectConstruct)
import closure_3 from "set";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import ME from "ME";
import set from "_inherits";

let closure_12;
let closure_13;
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
function processMessage(message) {
  let channel_id;
  let id;
  let flag = false;
  if (tmp4.updateExistingMessageIfCached(message)) {
    flag = true;
  }
  let flag2 = flag;
  if (set.has(message.type)) {
    const message_reference = message.message_reference;
    if (null == message_reference) {
      return flag;
    } else {
      const message_id = message_reference.message_id;
      if (null == message_id) {
        return flag;
      } else if ("referenced_message" in message) {
        const referenced_message = message.referenced_message;
        if (null != referenced_message) {
          let obj = {};
          obj.state = obj.LOADED;
          ({ channel_id, id } = referenced_message);
          obj.message = require(4351) /* createMinimalMessageRecord */.createMessageRecord(referenced_message);
          const result = tmp4.set(channel_id, id, obj);
          flag2 = true;
          if (message.type === constants.THREAD_STARTER_MESSAGE) {
            processMessage(referenced_message);
            flag2 = true;
          }
          const obj4 = require(4351) /* createMinimalMessageRecord */;
        } else {
          obj = {};
          obj.state = obj.DELETED;
          const result1 = tmp4.set(message.channel_id, message_id, obj);
          flag2 = true;
        }
      } else {
        message = store.getMessage(message_reference.channel_id, message_id);
        if (null == message) {
          message = message.getMessage(message_reference.channel_id, message_id);
        }
        if (null != message) {
          obj = {};
          obj.state = obj.LOADED;
          obj.message = message;
          const result2 = tmp4.set(message_reference.channel_id, message_id, obj);
          flag2 = true;
        } else {
          const result3 = tmp4.set(message_reference.channel_id, message_id, closure_15);
          flag2 = true;
        }
      }
    }
  }
  return flag2;
}
function anyChanged(messages, arg1) {
  let iter3;
  const tmp = _createForOfIteratorHelperLoose(messages);
  const iter = tmp();
  let iter2 = iter;
  let flag = false;
  let flag2 = false;
  if (!iter.done) {
    do {
      let tmp2 = false !== arg1(iter2.value) || flag;
      iter3 = tmp();
      flag = tmp2;
      iter2 = iter3;
      flag2 = tmp2;
    } while (!iter3.done);
  }
  return flag2;
}
function handleLoadMessages(messages) {
  return anyChanged(messages.messages, (arg0) => outer1_22(arg0));
}
function handleSearchMessagesSuccess(data) {
  return anyChanged(data.data, (messages) => outer1_23(messages.messages, (arg0) => outer2_23(arg0, (arg0) => outer3_22(arg0))));
}
function handleChannelDelete(channel) {
  return tmp4.deleteChannelCache(channel.channel.id);
}
function unsetDeletedMessage(channelId, id) {
  if (tmp4.has(channelId, id)) {
    const obj = {};
    obj.state = obj.DELETED;
    const result = tmp4.set(channelId, id, obj);
  } else {
    return false;
  }
}
function resetState() {
  tmp4.clear();
}
function handleLoadThreadsSuccess(firstMessages) {
  firstMessages = firstMessages.firstMessages;
  let tmp = null != firstMessages;
  if (tmp) {
    tmp = anyChanged(firstMessages, (arg0) => outer1_22(arg0));
  }
  return tmp;
}
({ MessageTypes: closure_12, MessageTypesWithLazyLoadedReferences: closure_13 } = ME);
let obj = { LOADED: 0, [0]: "LOADED", NOT_LOADED: 1, [1]: "NOT_LOADED", DELETED: 2, [2]: "DELETED" };
obj = { state: obj.NOT_LOADED };
let closure_15 = Object.freeze(obj);
let set = new Set();
let closure_17 = (() => {
  class ChannelReferencedMessageCache {
    constructor() {
      self = this;
      tmp = outer1_7(this, self);
      tmp2 = outer1_1(outer1_2[10]);
      obj = {
        max: 100,
        dispose(arg0, arg1) {
              return self.handleCacheDisposed(arg0, arg1);
            }
      };
      tmp2 = new tmp2(obj);
      this._cachedMessages = tmp2;
      set = new Set();
      this._cachedMessageIds = set;
      return;
    }
  }
  let obj = {
    key: "handleCacheDisposed",
    value(arg0) {
      const self = this;
      const _cachedMessageIds = this._cachedMessageIds;
      if (_cachedMessageIds.has(arg0)) {
        const _Set = Set;
        const set = new Set(self._cachedMessageIds);
        self._cachedMessageIds = set;
        const _cachedMessageIds2 = self._cachedMessageIds;
        _cachedMessageIds2.delete(arg0);
      }
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "set",
    value(arg0, arg1) {
      const self = this;
      const _cachedMessages = this._cachedMessages;
      const result = _cachedMessages.set(arg0, arg1);
      const _cachedMessageIds = this._cachedMessageIds;
      if (!_cachedMessageIds.has(arg0)) {
        const _Set = Set;
        const set = new Set(self._cachedMessageIds);
        self._cachedMessageIds = set;
        const _cachedMessageIds2 = self._cachedMessageIds;
        _cachedMessageIds2.add(arg0);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "has",
    value(arg0) {
      const _cachedMessageIds = this._cachedMessageIds;
      return _cachedMessageIds.has(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "get",
    value(arg0) {
      const _cachedMessages = this._cachedMessages;
      return _cachedMessages.get(arg0);
    }
  };
  items[4] = {
    key: "getCachedMessageIds",
    value() {
      return this._cachedMessageIds;
    }
  };
  return callback2(ChannelReferencedMessageCache, items);
})();
let tmp4 = (() => {
  class ReferencedMessageCache {
    constructor() {
      tmp = outer1_7(this, ReferencedMessageCache);
      map = new Map();
      this._channelCaches = map;
      return;
    }
  }
  let obj = {
    key: "has",
    value(arg0, arg1) {
      const _channelCaches = this._channelCaches;
      const value = _channelCaches.get(arg0);
      let hasItem;
      if (null != value) {
        hasItem = value.has(arg1);
      }
      return null != hasItem && hasItem;
    }
  };
  let items = [obj, , , , , , , ];
  obj = {
    key: "get",
    value(arg0, arg1) {
      const _channelCaches = this._channelCaches;
      let value = _channelCaches.get(arg0);
      value = undefined;
      if (null != value) {
        value = value.get(arg1);
      }
      return value;
    }
  };
  items[1] = obj;
  obj = {
    key: "set",
    value(arg0, arg1, arg2) {
      const _channelCaches = this._channelCaches;
      let value = _channelCaches.get(arg0);
      if (null == value) {
        const prototype = outer1_17.prototype;
        const tmp4 = new outer1_17();
        const _channelCaches2 = this._channelCaches;
        const result = _channelCaches2.set(arg0, tmp4);
        value = tmp4;
      }
      const result1 = value.set(arg1, arg2);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "updateExistingMessageIfCached",
    value(channel_id) {
      const _channelCaches = this._channelCaches;
      const value = _channelCaches.get(channel_id.channel_id);
      let tmp = null != value;
      if (tmp) {
        const tmp2 = !value.has(channel_id.id);
        let flag = !tmp2;
        if (!tmp2) {
          const obj = { state: outer1_14.LOADED, message: ReferencedMessageCache(outer1_2[11]).createMessageRecord(channel_id) };
          const result = value.set(channel_id.id, obj);
          flag = true;
          const obj3 = ReferencedMessageCache(outer1_2[11]);
        }
        tmp = flag;
      }
      return tmp;
    }
  };
  items[4] = {
    key: "deleteChannelCache",
    value(arg0) {
      const _channelCaches = this._channelCaches;
      return _channelCaches.delete(arg0);
    }
  };
  items[5] = {
    key: "retainWhere",
    value(arg0) {
      let iter2;
      let length;
      const self = this;
      const items = [];
      const tmp = outer1_20(this._channelCaches);
      let iter = tmp();
      if (!iter.done) {
        do {
          let tmp2 = outer1_6;
          let first = outer1_6(iter.value, 1)[0];
          if (!arg0(first)) {
            let arr = items.push(first);
          }
          iter2 = tmp();
          iter = iter2;
        } while (!iter2.done);
      }
      let num = 0;
      if (0 < items.length) {
        do {
          let deleteChannelCacheResult = self.deleteChannelCache(items[num]);
          num = num + 1;
          length = items.length;
        } while (num < length);
      }
      return items.length;
    }
  };
  items[6] = {
    key: "getCachedMessageIdsForChannel",
    value(arg0) {
      const _channelCaches = this._channelCaches;
      const value = _channelCaches.get(arg0);
      let cachedMessageIds = null;
      if (null != value) {
        cachedMessageIds = value.getCachedMessageIds();
      }
      return cachedMessageIds;
    }
  };
  items[7] = {
    key: "clear",
    value() {
      const _channelCaches = this._channelCaches;
      _channelCaches.clear();
    }
  };
  return callback2(ReferencedMessageCache, items);
})();
tmp4 = new tmp4();
let closure_18 = tmp4;
let tmp6 = ((Store) => {
  class ReferencedMessageStore {
    constructor() {
      self = this;
      tmp = outer1_7(this, ReferencedMessageStore);
      obj = outer1_4(ReferencedMessageStore);
      tmp2 = outer1_3;
      if (outer1_19()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_4;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_4(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback(ReferencedMessageStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_11, outer1_10, outer1_9);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getMessageByReference",
    value(channel_id) {
      let value;
      if (null != channel_id) {
        value = outer1_18.get(channel_id.channel_id, channel_id.message_id);
      }
      if (null == value) {
        value = outer1_15;
      }
      return value;
    }
  };
  items[1] = obj;
  obj = {
    key: "getMessage",
    value(arg0, arg1) {
      let value = outer1_18.get(arg0, arg1);
      if (null == value) {
        value = outer1_15;
      }
      return value;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getReplyIdsForChannel",
    value(arg0) {
      let cachedMessageIdsForChannel;
      if (null != arg0) {
        cachedMessageIdsForChannel = outer1_18.getCachedMessageIdsForChannel(arg0);
      }
      if (null == cachedMessageIdsForChannel) {
        cachedMessageIdsForChannel = outer1_16;
      }
      return cachedMessageIdsForChannel;
    }
  };
  return callback2(ReferencedMessageStore, items);
})(require("initialize").Store);
tmp6.displayName = "ReferencedMessageStore";
obj = {
  CACHE_LOADED: function handleCacheLoaded(messages) {
    return anyChanged(Object.values(messages.messages), (arg0) => outer1_23(Object.values(arg0), (arg0) => outer2_22(arg0)));
  },
  LOCAL_MESSAGES_LOADED: handleLoadMessages,
  LOAD_MESSAGES_SUCCESS: handleLoadMessages,
  LOAD_MESSAGES_AROUND_SUCCESS: handleLoadMessages,
  SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  CONVERSATION_FETCH_SUCCESS: function handleConversationFetchSuccess(messages) {
    messages = messages.messages;
    return anyChanged(messages.concat(messages.messageReferences), (arg0) => outer1_22(arg0));
  },
  CONVERSATIONS_FETCH_SUCCESS: function handleConversationsFetchSuccess(rawConversations) {
    return anyChanged(rawConversations.rawConversations, (messages) => {
      messages = messages.messages;
      if (null == messages) {
        messages = [];
      }
      return outer1_23(messages, (arg0) => outer2_22(arg0));
    });
  },
  LOAD_THREADS_SUCCESS: handleLoadThreadsSuccess,
  LOAD_ARCHIVED_THREADS_SUCCESS: handleLoadThreadsSuccess,
  MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function handleMessageExplicitContentScanTimeout(arg0) {
    let channelId;
    let messageId;
    ({ messageId, channelId } = arg0);
    if (tmp4.has(channelId, messageId)) {
      const value = tmp4.get(channelId, messageId);
      if (null != value) {
        if (value.state === obj.LOADED) {
          obj = {};
          obj.state = obj.LOADED;
          obj.message = require(6835) /* timeoutAttachmentsAndEmbedsForMessage */.handleExplicitMediaScanTimeoutForMessage(value.message);
          const result = tmp4.set(channelId, messageId, obj);
        }
      }
      return false;
    } else {
      return false;
    }
  },
  LOAD_FORUM_POSTS: function handleLoadForumPosts(threads) {
    return anyChanged(Object.values(threads.threads), (first_message) => {
      first_message = first_message.first_message;
      let tmp = null != first_message;
      if (tmp) {
        tmp = outer1_22(first_message);
      }
      return tmp;
    });
  },
  MESSAGE_CREATE: function handleMessageCreate(message) {
    message = message.message;
    const tmp = !store.getMessages(message.channel_id).ready;
    let tmp2 = !tmp;
    if (!tmp) {
      tmp2 = processMessage(message);
    }
    return tmp2;
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    let channel_id;
    let id;
    message = message.message;
    ({ id, channel_id } = message);
    if (tmp4.has(channel_id, id)) {
      const value = tmp4.get(channel_id, id);
      if (null != value) {
        if (value.state === obj.LOADED) {
          obj = {};
          obj.state = obj.LOADED;
          obj.message = require(4351) /* createMinimalMessageRecord */.updateMessageRecord(value.message, message);
          const result = tmp4.set(channel_id, id, obj);
        }
      }
      return false;
    } else {
      return false;
    }
  },
  MESSAGE_DELETE: function handleMessageDelete(channelId) {
    return unsetDeletedMessage(channelId.channelId, channelId.id);
  },
  MESSAGE_DELETE_BULK: function handleMessageDeleteBulk(channelId) {
    channelId = channelId.channelId;
    return anyChanged(channelId.ids, (arg0) => outer1_24(channelId, arg0));
  },
  CREATE_PENDING_REPLY: function handleCreatePendingReply(message) {
    message = message.message;
    obj = { state: obj.LOADED, message };
    const result = tmp4.set(message.channel_id, message.id, obj);
  },
  CHANNEL_DELETE: handleChannelDelete,
  THREAD_DELETE: handleChannelDelete,
  GUILD_DELETE: function handleGenericCleanup() {
    if (0 === tmp4.retainWhere((channelId) => null != outer1_10.getChannel(channelId))) {
      return false;
    }
  },
  CONNECTION_OPEN: resetState,
  LOGOUT: resetState
};
tmp6 = new tmp6(require("dispatcher"), obj);
let result = set.fileFinishedImporting("modules/replies/ReferencedMessageStore.tsx");

export default tmp6;
export const ReferencedMessageState = obj;
