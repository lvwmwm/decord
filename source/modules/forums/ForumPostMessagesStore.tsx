// Module ID: 5656
// Function ID: 48392
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 5657, 1849, 21, 4351, 566, 686, 2]

// Module 5656 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import DISCORD_EPOCH from "DISCORD_EPOCH";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";

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
function handleLoadThreadsSuccess(firstMessages) {
  let done;
  let done2;
  firstMessages = firstMessages.firstMessages;
  if (null == firstMessages) {
    return false;
  } else {
    const tmp8 = _createForOfIteratorHelperLoose(tmp);
    let iter2 = tmp8();
    if (!iter2.done) {
      do {
        let tmp2 = closure_10;
        closure_10[iter2.value.id] = { loaded: true, firstMessage: null };
        let iter = tmp8();
        iter2 = iter;
        done = iter.done;
      } while (!done);
    }
    const tmp4 = _createForOfIteratorHelperLoose(firstMessages);
    let iter3 = tmp4();
    if (!iter3.done) {
      do {
        let value = iter3.value;
        let tmp5 = storeFirstMessage;
        let tmp6 = storeFirstMessage(value.channel_id, value);
        let iter4 = tmp4();
        iter3 = iter4;
        done2 = iter4.done;
      } while (!done2);
    }
  }
}
function storeFirstMessage(channel_id, first_message) {
  let messageRecord = null;
  if (null != first_message) {
    let obj = require(4351) /* createMinimalMessageRecord */;
    messageRecord = obj.createMessageRecord(first_message);
  }
  obj = { loaded: true, firstMessage: messageRecord };
  closure_10[channel_id] = obj;
}
function handleReaction(colors) {
  let channelId;
  let emoji;
  let reactionType;
  ({ channelId, emoji, reactionType } = colors);
  if (null != dependencyMap[channelId]) {
    if (null != tmp5.firstMessage) {
      if (tmp2 !== tmp5.firstMessage.id) {
        return false;
      } else {
        const currentUser = authStore.getCurrentUser();
        if (tmp4) {
          if (!tmp6) {
            return false;
          }
        }
        const obj = {};
        const merged = Object.assign(tmp5);
        dependencyMap[channelId] = obj;
        if ("MESSAGE_REACTION_ADD" === tmp) {
          const firstMessage2 = tmp5.firstMessage;
          let addReactionResult = firstMessage2.addReaction(emoji, tmp6, colors.colors, reactionType);
        } else {
          const firstMessage = tmp5.firstMessage;
          addReactionResult = firstMessage.removeReaction(emoji, tmp6, reactionType);
        }
        dependencyMap[channelId].firstMessage = addReactionResult;
      }
    }
  }
  return false;
}
let closure_10 = {};
let tmp2 = ((Store) => {
  class ForumPostMessagesStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, ForumPostMessagesStore);
      obj = outer1_6(ForumPostMessagesStore);
      tmp2 = outer1_5;
      if (outer1_11()) {
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
  callback2(ForumPostMessagesStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_8, outer1_9);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "isLoading",
    value(arg0) {
      let loaded;
      if (null != outer1_10[arg0]) {
        loaded = tmp.loaded;
      }
      return true !== loaded;
    }
  };
  items[1] = obj;
  obj = {
    key: "getMessage",
    value(arg0) {
      if (!(arg0 in outer1_10)) {
        outer1_10[arg0] = { loaded: false, firstMessage: null };
      }
      return outer1_10[arg0];
    }
  };
  items[2] = obj;
  return callback(ForumPostMessagesStore, items);
})(require("initialize").Store);
tmp2.displayName = "ForumPostMessagesStore";
tmp2 = new tmp2(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_10 = {};
  },
  MESSAGE_CREATE: function handleMessageCreate(isPushNotification) {
    let tmp = !isPushNotification.isPushNotification;
    if (tmp) {
      const tmp4 = isPushNotification.message.id === importDefault(21).castChannelIdAsMessageId(isPushNotification.message.channel_id);
      if (tmp4) {
        storeFirstMessage(isPushNotification.message.channel_id, isPushNotification.message);
      }
      tmp = tmp4;
      const obj = importDefault(21);
    }
    return tmp;
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    if (message.message.id !== message.message.channel_id) {
      return false;
    } else {
      const obj4 = importDefault(21);
      const tmp14 = dependencyMap[obj4.castMessageIdAsChannelId(obj4, message.message.id)];
      let tmp10 = null != tmp14;
      if (tmp10) {
        if (null != tmp14.firstMessage) {
          let obj = importDefault(21);
          obj = {};
          const result = obj.castMessageIdAsChannelId(message.message.id);
          const merged = Object.assign(tmp14);
          obj["firstMessage"] = require(4351) /* createMinimalMessageRecord */.updateMessageRecord(tmp14.firstMessage, message.message);
          dependencyMap[result] = obj;
          const obj3 = require(4351) /* createMinimalMessageRecord */;
        }
        tmp10 = tmp;
      }
      return tmp10;
    }
  },
  MESSAGE_DELETE: function handleMessageDelete(id) {
    if (id.id !== obj.castChannelIdAsMessageId(id.channelId)) {
      return false;
    } else {
      closure_10[id.channelId] = { loaded: true, firstMessage: null };
    }
    obj = importDefault(21);
  },
  THREAD_CREATE: function handleThreadCreate(channel) {
    let tmp = null == dependencyMap[channel.channel.id];
    if (tmp) {
      const tmp3 = !subscribedToThreads.isSubscribedToThreads(channel.channel.guild_id);
      if (!tmp3) {
        dependencyMap[channel.channel.id] = { loaded: true, firstMessage: null };
      }
      tmp = !tmp3;
      const tmp4 = !tmp3;
    }
    return tmp;
  },
  MESSAGE_REACTION_ADD: handleReaction,
  MESSAGE_REACTION_REMOVE: handleReaction,
  MESSAGE_REACTION_REMOVE_ALL: function handleRemoveAllReactions(channelId) {
    channelId = channelId.channelId;
    let tmp2 = null != tmp;
    if (tmp2) {
      tmp2 = null != tmp.firstMessage;
    }
    if (tmp2) {
      if (channelId.messageId === tmp.firstMessage.id) {
        const obj = {};
        const merged = Object.assign(tmp);
        const firstMessage = tmp.firstMessage;
        obj["firstMessage"] = firstMessage.set("reactions", []);
        dependencyMap[channelId] = obj;
      }
      tmp2 = tmp3;
    }
    return tmp2;
  },
  MESSAGE_REACTION_REMOVE_EMOJI: function handleRemoveEmojiReactions(channelId) {
    let emoji;
    let messageId;
    channelId = channelId.channelId;
    let tmp2 = null != tmp;
    ({ messageId, emoji } = channelId);
    if (tmp2) {
      tmp2 = null != tmp.firstMessage;
    }
    if (tmp2) {
      if (messageId === tmp.firstMessage.id) {
        const obj = {};
        const merged = Object.assign(tmp);
        const firstMessage = tmp.firstMessage;
        obj["firstMessage"] = firstMessage.removeReactionsForEmoji(emoji);
        dependencyMap[channelId] = obj;
      }
      tmp2 = tmp3;
    }
    return tmp2;
  },
  MESSAGE_REACTION_ADD_MANY: function handleReactionBatch(channelId) {
    channelId = channelId.channelId;
    if (null != dependencyMap[channelId]) {
      if (null != tmp3.firstMessage) {
        if (tmp !== tmp3.firstMessage.id) {
          return false;
        } else {
          const currentUser = authStore.getCurrentUser();
          const firstMessage = tmp3.firstMessage;
          let id;
          if (null != currentUser) {
            id = currentUser.id;
          }
          const obj = {};
          const merged = Object.assign(tmp3);
          obj["firstMessage"] = firstMessage.addReactionBatch(tmp2, id);
          dependencyMap[channelId] = obj;
        }
      }
    }
    return false;
  },
  LOAD_FORUM_POSTS: function handlePostChannelLoadData(threads) {
    threads = threads.threads;
    for (const key10005 in threads) {
      let tmp = key10005;
      let tmp2 = storeFirstMessage;
      let tmp3 = storeFirstMessage(key10005, threads[key10005].first_message);
      continue;
    }
  },
  LOAD_THREADS_SUCCESS: handleLoadThreadsSuccess,
  LOAD_ARCHIVED_THREADS_SUCCESS: handleLoadThreadsSuccess,
  LOAD_MESSAGES_SUCCESS: function handleLoadMessagesSuccess(arg0) {
    let channelId;
    let messages;
    ({ channelId, messages } = arg0);
    let tmp2 = null != tmp;
    if (tmp2) {
      let obj = importDefault(21);
      tmp2 = tmp.id === obj.castChannelIdAsMessageId(channelId);
    }
    if (tmp2) {
      obj = { loaded: true, firstMessage: require(4351) /* createMinimalMessageRecord */.createMessageRecord(tmp) };
      closure_10[channelId] = obj;
      const obj3 = require(4351) /* createMinimalMessageRecord */;
    }
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/forums/ForumPostMessagesStore.tsx");

export default tmp2;
