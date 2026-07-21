// Module ID: 5652
// Function ID: 48357
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5652 (_isNativeReflectConstruct)
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
        closure_10[iter2.value.id] = { <string:4279785472>: 131122.52832032426, <string:4279959321>: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000239785558174 };
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
        let tmp5 = closure_14;
        let tmp6 = closure_14(value.channel_id, value);
        let iter4 = tmp4();
        iter3 = iter4;
        done2 = iter4.done;
      } while (!done2);
    }
  }
}
function storeFirstMessage(channel_id, message) {
  let messageRecord = null;
  if (null != message) {
    let obj = message(dependencyMap[8]);
    messageRecord = obj.createMessageRecord(message);
  }
  obj = { loaded: true, firstMessage: messageRecord };
  closure_10[channel_id] = obj;
}
function handleReaction(colors) {
  let channelId;
  let emoji;
  let reactionType;
  ({ channelId, emoji, reactionType } = colors);
  if (null != closure_10[channelId]) {
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
        closure_10[channelId] = obj;
        if ("MESSAGE_REACTION_ADD" === tmp) {
          const firstMessage2 = tmp5.firstMessage;
          let addReactionResult = firstMessage2.addReaction(emoji, tmp6, colors.colors, reactionType);
        } else {
          const firstMessage = tmp5.firstMessage;
          addReactionResult = firstMessage.removeReaction(emoji, tmp6, reactionType);
        }
        closure_10[channelId].firstMessage = addReactionResult;
      }
    }
  }
  return false;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = {};
let tmp2 = (Store) => {
  class ForumPostMessagesStore {
    constructor() {
      self = this;
      tmp = closure_3(this, ForumPostMessagesStore);
      obj = closure_6(ForumPostMessagesStore);
      tmp2 = closure_5;
      if (closure_11()) {
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
  const arg1 = ForumPostMessagesStore;
  callback2(ForumPostMessagesStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_8, closure_9);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "isLoading",
    value(arg0) {
      let loaded;
      if (null != closure_10[arg0]) {
        loaded = tmp.loaded;
      }
      return true !== loaded;
    }
  };
  items[1] = obj;
  obj = {
    key: "getMessage",
    value(arg0) {
      if (!(arg0 in closure_10)) {
        closure_10[arg0] = { <string:4279785472>: null, <string:4279959321>: null };
      }
      return closure_10[arg0];
    }
  };
  items[2] = obj;
  return callback(ForumPostMessagesStore, items);
}(importDefault(dependencyMap[9]).Store);
tmp2.displayName = "ForumPostMessagesStore";
tmp2 = new tmp2(importDefault(dependencyMap[10]), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_10 = {};
  },
  MESSAGE_CREATE: function handleMessageCreate(isPushNotification) {
    let tmp = !isPushNotification.isPushNotification;
    if (tmp) {
      const tmp4 = isPushNotification.message.id === importDefault(dependencyMap[7]).castChannelIdAsMessageId(isPushNotification.message.channel_id);
      if (tmp4) {
        storeFirstMessage(isPushNotification.message.channel_id, isPushNotification.message);
      }
      tmp = tmp4;
      const obj = importDefault(dependencyMap[7]);
    }
    return tmp;
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    if (message.message.id !== message.message.channel_id) {
      return false;
    } else {
      const obj4 = importDefault(dependencyMap[7]);
      let tmp10 = null != tmp14;
      if (tmp10) {
        if (null != tmp14.firstMessage) {
          let obj = importDefault(dependencyMap[7]);
          obj = {};
          const result = obj.castMessageIdAsChannelId(message.message.id);
          const merged = Object.assign(tmp14);
          obj["firstMessage"] = arg1(dependencyMap[8]).updateMessageRecord(tmp14.firstMessage, message.message);
          closure_10[result] = obj;
          const obj3 = arg1(dependencyMap[8]);
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
      closure_10[id.channelId] = { <string:4279785472>: 131122.52832032426, <string:4279959321>: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000239785558174 };
    }
    const obj = importDefault(dependencyMap[7]);
  },
  THREAD_CREATE: function handleThreadCreate(channel) {
    let tmp = null == closure_10[channel.channel.id];
    if (tmp) {
      const tmp3 = !subscribedToThreads.isSubscribedToThreads(channel.channel.guild_id);
      if (!tmp3) {
        closure_10[channel.channel.id] = { <string:4279785472>: 131122.52832032426, <string:4279959321>: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000239785558174 };
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
        closure_10[channelId] = obj;
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
        closure_10[channelId] = obj;
      }
      tmp2 = tmp3;
    }
    return tmp2;
  },
  MESSAGE_REACTION_ADD_MANY: function handleReactionBatch(channelId) {
    channelId = channelId.channelId;
    if (null != closure_10[channelId]) {
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
          closure_10[channelId] = obj;
        }
      }
    }
    return false;
  },
  LOAD_FORUM_POSTS: function handlePostChannelLoadData(threads) {
    threads = threads.threads;
    for (const key10005 in threads) {
      let tmp = key10005;
      let tmp2 = closure_14;
      let tmp3 = closure_14(key10005, threads[key10005].first_message);
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
      let obj = importDefault(dependencyMap[7]);
      tmp2 = tmp.id === obj.castChannelIdAsMessageId(channelId);
    }
    if (tmp2) {
      obj = { loaded: true, firstMessage: arg1(dependencyMap[8]).createMessageRecord(tmp) };
      closure_10[channelId] = obj;
      const obj3 = arg1(dependencyMap[8]);
    }
  }
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/forums/ForumPostMessagesStore.tsx");

export default tmp2;
