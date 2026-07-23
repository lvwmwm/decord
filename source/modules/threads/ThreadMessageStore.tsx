// Module ID: 5683
// Function ID: 48859
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1352, 3768, 1857, 1348, 4349, 1211, 653, 22, 21, 4351, 566, 686, 2]

// Module 5683 (_isNativeReflectConstruct)
import closure_3 from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import initialize from "initialize";
import closure_6 from "set";
import _inherits from "_inherits";
import _callSuper from "_callSuper";
import closure_10 from "_callSuper";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import { MAX_THREAD_MESSAGE_COUNT } from "AbortCodes";
import { MessageTypes } from "ME";
import set from "_possibleConstructorReturn";

let closure_8;
let closure_9;
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
function updateState(type) {
  let messageCount;
  if (set.has(type.type)) {
    if (!(type.id in dependencyMap2)) {
      const obj = {};
      ({ guild_id: obj.guildId, parent_id: obj.parentId, messageCount } = type);
      let num = 0;
      if (null != messageCount) {
        num = messageCount;
      }
      obj.count = num;
      obj.mostRecentRawMessage = null;
      obj.mostRecentMessage = null;
      dependencyMap2[type.id] = obj;
      const tmp3 = dependencyMap2;
    }
    updateWithState(dependencyMap2[type.id], arg1);
    const tmp = updateWithState;
  }
}
function updateWithState(parentId, arg1) {
  let num = 0;
  if (null != table[parentId.parentId]) {
    num = tmp;
  }
  table[parentId.parentId] = num + 1;
  arg1(parentId);
}
function updateFromGuild(threads) {
  threads = threads.threads;
  if (null != threads) {
    const item = threads.forEach(updateFromThread);
  }
  const threadMessages = threads.threadMessages;
  if (null != threadMessages) {
    const item1 = threadMessages.forEach(updateFromThreadMessages);
  }
}
function updateFromThreadMessages(type) {
  let closure_0 = type;
  if (type.type !== MessageTypes.THREAD_STARTER_MESSAGE) {
    const channel = store.getChannel(type.channel_id);
    if (null != channel) {
      updateState(channel, (arg0) => {
        arg0.mostRecentRawMessage = closure_0;
        arg0.mostRecentMessage = null;
      });
    }
  }
}
function updateFromThread(arg0) {
  let closure_0 = arg0;
  updateState(arg0, (mostRecentRawMessage) => {
    if (null != closure_0.messageCount) {
      mostRecentRawMessage.count = closure_0.messageCount;
    }
    let mostRecentMessage = mostRecentRawMessage.mostRecentRawMessage;
    if (null == mostRecentMessage) {
      mostRecentMessage = mostRecentRawMessage.mostRecentMessage;
    }
    let tmp2 = null != closure_0.lastMessageId;
    if (tmp2) {
      let id;
      if (null != mostRecentMessage) {
        id = mostRecentMessage.id;
      }
      tmp2 = id !== closure_0.lastMessageId;
    }
    if (tmp2) {
      mostRecentRawMessage.mostRecentRawMessage = null;
      mostRecentRawMessage.mostRecentMessage = null;
    }
  });
}
function updateFromServerThread(id) {
  if (null != id) {
    if (!(id.id in closure_17)) {
      const channel = store.getChannel(id.id);
      if (null != channel) {
        updateFromThread(channel);
        return true;
      }
    }
  }
  return false;
}
function handleThreadCreateOrUpdate(channel) {
  updateFromThread(channel.channel);
}
function handleLoadArchivedThreadsSuccess(threads) {
  threads = threads.threads;
  const item = threads.forEach(updateFromServerThread);
}
function handleSearchMessagesSuccess(data) {
  data = data.data;
  let item = data.forEach((arg0) => {
    let messages;
    let threads;
    ({ messages, threads } = arg0);
    let item = messages.forEach((arr) => {
      const item = arr.forEach((thread) => {
        outer3_27(thread.thread);
      });
    });
    const item1 = threads.forEach(outer1_27);
  });
}
function handleRelationshipUpdate() {
  for (const key10005 in closure_17) {
    let tmp5 = key10005;
    let tmp6 = dependencyMap2;
    let tmp7 = dependencyMap2[key10005];
    if (null == tmp7) {
      continue;
    } else {
      if (null == tmp7.mostRecentMessage) {
        continue;
      } else {
        let tmp = message;
        let message = message.getMessage(key10005, tmp7.mostRecentMessage.id);
        let tmp3 = message;
        if (null == message) {
          continue;
        } else {
          tmp7.mostRecentMessage = message;
          let tmp4 = message;
          continue;
        }
        continue;
      }
      continue;
    }
    continue;
  }
}
({ ALL_CHANNEL_TYPES: closure_8, THREAD_CHANNEL_TYPES: closure_9 } = _callSuper);
let set = new Set();
let closure_17 = {};
let closure_18 = {};
let tmp4 = ((Store) => {
  class ThreadMessageStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, ThreadMessageStore);
      obj = outer1_6(ThreadMessageStore);
      tmp2 = outer1_5;
      if (outer1_19()) {
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
  callback2(ThreadMessageStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_12, outer1_13);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getCount",
    value(arg0) {
      let count;
      if (null != outer1_17[arg0]) {
        count = tmp.count;
      }
      let tmp3 = null;
      if (null != count) {
        tmp3 = count;
      }
      return tmp3;
    }
  };
  items[1] = obj;
  obj = {
    key: "getMostRecentMessage",
    value(arg0) {
      if (null == outer1_17[arg0]) {
        return null;
      } else {
        if (tmp2) {
          let message = outer1_13.getMessage(arg0, tmp.mostRecentRawMessage.id);
          if (null == message) {
            message = ThreadMessageStore(outer1_2[14]).createMessageRecord(tmp.mostRecentRawMessage);
            const obj = ThreadMessageStore(outer1_2[14]);
          }
          tmp.mostRecentMessage = message;
          tmp.mostRecentRawMessage = null;
        }
        const mostRecentMessage = tmp.mostRecentMessage;
        let tmp7 = null;
        if (null != mostRecentMessage) {
          tmp7 = mostRecentMessage;
        }
        return tmp7;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getChannelThreadsVersion",
    value(arg0) {
      return outer1_18[arg0];
    }
  };
  items[4] = {
    key: "getInitialOverlayState",
    value() {
      return outer1_17;
    }
  };
  return callback(ThreadMessageStore, items);
})(require("initialize").Store);
tmp4.displayName = "ThreadMessageStore";
tmp4 = new tmp4(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen(guilds) {
    let closure_18 = {};
    set.clear();
    guilds = guilds.guilds;
    const item = guilds.forEach(updateFromGuild);
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(threadMessages) {
    threadMessages = threadMessages.threadMessages;
    let obj = {};
    const merged = Object.assign(threadMessages);
    for (const key10010 in obj) {
      let tmp16 = key10010;
      let mostRecentMessage = threadMessages[key10010].mostRecentMessage;
      if (null == mostRecentMessage) {
        continue;
      } else {
        let tmp2 = ctor;
        obj = {};
        let tmp3 = obj;
        let tmp4 = mostRecentMessage;
        let merged1 = Object.assign(mostRecentMessage);
        let tmp6 = ctor2;
        let prototype = ctor2.prototype;
        let tmp7 = new.target;
        let tmp8 = new.target;
        let tmp9 = new ctor2(mostRecentMessage.author);
        let tmp10 = tmp9;
        obj["author"] = tmp9;
        let prototype2 = ctor.prototype;
        let tmp11 = new.target;
        let tmp12 = new.target;
        let tmp13 = obj;
        let tmp14 = new ctor(obj);
        let tmp15 = tmp14;
        threadMessages[key10010].mostRecentMessage = tmp14;
        continue;
      }
      continue;
    }
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    updateFromGuild(guild.guild);
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    (function deleteForGuild(id) {
      let closure_0 = id;
      outer1_17 = outer1_1(outer1_2[12]).omitBy(outer1_17, (guildId) => {
        if (guildId.guildId === closure_0) {
          const parentId = guildId.parentId;
          delete tmp2[tmp];
        }
        return guildId.guildId === closure_0;
      });
    })(guild.guild.id);
  },
  THREAD_CREATE: handleThreadCreateOrUpdate,
  THREAD_UPDATE: handleThreadCreateOrUpdate,
  THREAD_LIST_SYNC: function handleThreadListSync(arg0) {
    let mostRecentMessages;
    let threads;
    ({ threads, mostRecentMessages } = arg0);
    const item = threads.forEach(updateFromThread);
    if (null != mostRecentMessages) {
      const item1 = mostRecentMessages.forEach((channel_id) => {
        let closure_0 = channel_id;
        const channel = outer1_12.getChannel(channel_id.channel_id);
        let tmp2 = null != channel;
        if (tmp2) {
          tmp2 = channel_id.type !== outer1_15.THREAD_STARTER_MESSAGE;
        }
        if (tmp2) {
          outer1_22(channel, (arg0) => {
            arg0.mostRecentRawMessage = closure_0;
            arg0.mostRecentMessage = null;
          });
        }
      });
    }
  },
  LOAD_THREADS_SUCCESS: handleLoadArchivedThreadsSuccess,
  LOAD_ARCHIVED_THREADS_SUCCESS: handleLoadArchivedThreadsSuccess,
  RELATIONSHIP_ADD: handleRelationshipUpdate,
  RELATIONSHIP_UPDATE: handleRelationshipUpdate,
  RELATIONSHIP_REMOVE: handleRelationshipUpdate,
  SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  THREAD_DELETE: function handleThreadDelete(arg0) {
    delete tmp2[tmp];
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    (function deleteForChannel(id) {
      let closure_0 = id;
      outer1_17 = outer1_1(outer1_2[12]).omitBy(outer1_17, (parentId) => parentId.parentId === closure_0);
      delete tmp[tmp2];
    })(channel.channel.id);
  },
  MESSAGE_CREATE: function handleMessageCreate(message) {
    message = message.message;
    if (!message.optimistic) {
      if (!message.isPushNotification) {
        if (null == tmp) {
          const channel = store.getChannel(message.channel_id);
          let tmp4 = null == channel;
          if (!tmp4) {
            tmp4 = !set2.has(channel.type);
          }
          let tmp5 = !tmp4;
          if (!tmp4) {
            let tmp7 = message.type !== MessageTypes.THREAD_STARTER_MESSAGE;
            if (tmp7) {
              let tmp8 = !channel.isForumPost();
              if (!tmp8) {
                tmp8 = message.id !== importDefault(21).castChannelIdAsMessageId(channel.id);
                const obj = importDefault(21);
              }
              tmp7 = tmp8;
            }
            if (tmp7) {
              updateState(channel, (count) => {
                count.count = Math.min(count.count + 1, outer1_14);
                count.mostRecentRawMessage = message;
                count.mostRecentMessage = null;
              });
            }
            tmp5 = tmp7;
            const tmp11 = tmp7;
          }
          return tmp5;
        }
      }
    }
    return false;
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    message = message.message;
    let mostRecentRawMessage;
    if (null != dependencyMap2[message.channel_id]) {
      mostRecentRawMessage = tmp.mostRecentRawMessage;
    }
    if (null == mostRecentRawMessage) {
      let mostRecentMessage;
      if (null != tmp) {
        mostRecentMessage = tmp.mostRecentMessage;
      }
      mostRecentRawMessage = mostRecentMessage;
    }
    if (null != dependencyMap2[message.channel_id]) {
      if (null != mostRecentRawMessage) {
        if (mostRecentRawMessage.id === message.id) {
          updateWithState(tmp, (mostRecentMessage) => {
            if (null != mostRecentMessage.mostRecentMessage) {
              mostRecentMessage.mostRecentMessage = message(outer1_2[14]).updateMessageRecord(mostRecentMessage.mostRecentMessage, message);
              const obj = message(outer1_2[14]);
            }
            if (null != mostRecentMessage.mostRecentRawMessage) {
              mostRecentMessage.mostRecentRawMessage = message(outer1_2[14]).updateServerMessage(mostRecentMessage.mostRecentRawMessage, message);
              const obj2 = message(outer1_2[14]);
            }
          });
        }
      }
    }
    return false;
  },
  MESSAGE_DELETE: function handleMessageDelete(id) {
    id = id.id;
    const channelId = id.channelId;
    let importDefault;
    let dependencyMap;
    if (null == dependencyMap2[channelId]) {
      return false;
    } else {
      importDefault = importDefault(21).castChannelIdAsMessageId(channelId) !== id;
      dependencyMap = !set.has(id);
      updateWithState(tmp, (mostRecentRawMessage) => {
        let mostRecentMessage = mostRecentRawMessage.mostRecentRawMessage;
        if (null == mostRecentMessage) {
          mostRecentMessage = mostRecentRawMessage.mostRecentMessage;
        }
        let tmp = null != mostRecentMessage;
        if (tmp) {
          tmp = mostRecentMessage.id === id;
        }
        if (tmp) {
          mostRecentRawMessage.mostRecentMessage = null;
          mostRecentRawMessage.mostRecentRawMessage = null;
        }
        if (closure_1) {
          if (closure_2) {
            const _Math = Math;
            let count = Math.max(mostRecentRawMessage.count - 1, 0);
          }
          mostRecentRawMessage.count = count;
          outer1_16.add(id);
        }
        count = mostRecentRawMessage.count;
      });
    }
  },
  MESSAGE_DELETE_BULK: function handleMessageDeleteBulk(ids) {
    ids = ids.ids;
    const channelId = ids.channelId;
    let length;
    if (null == dependencyMap2[channelId]) {
      return false;
    } else {
      length = ids.filter((arg0) => {
        let tmp = channelId(length[13]).castChannelIdAsMessageId(channelId) !== arg0;
        if (tmp) {
          tmp = !outer1_16.has(arg0);
        }
        return tmp;
      }).length;
      if (length > 0) {
        updateWithState(tmp, (mostRecentRawMessage) => {
          let mostRecentMessage = mostRecentRawMessage.mostRecentRawMessage;
          if (null == mostRecentMessage) {
            mostRecentMessage = mostRecentRawMessage.mostRecentMessage;
          }
          let hasItem = null != mostRecentMessage;
          if (hasItem) {
            hasItem = ids.includes(mostRecentMessage.id);
          }
          if (hasItem) {
            mostRecentRawMessage.mostRecentMessage = null;
            mostRecentRawMessage.mostRecentRawMessage = null;
          }
          mostRecentRawMessage.count = mostRecentRawMessage.count - length;
          const item = ids.forEach((arg0) => outer2_16.add(arg0));
        });
      }
    }
  },
  LOAD_MESSAGES_SUCCESS: function handleLoadMessagesSuccess(messages) {
    let iter3;
    let closure_0 = messages;
    const tmp = _createForOfIteratorHelperLoose(messages.messages);
    const iter = tmp();
    let iter2 = iter;
    let flag = false;
    let flag2 = false;
    if (!iter.done) {
      do {
        let tmp2 = updateFromServerThread;
        let tmp3 = updateFromServerThread(iter2.value.thread) || flag;
        iter3 = tmp();
        flag = tmp3;
        iter2 = iter3;
        flag2 = tmp3;
      } while (!iter3.done);
    }
    if (!messages.isAfter) {
      if (!messages.isBefore) {
        if (!messages.hasMoreAfter) {
          const channel = store.getChannel(messages.channelId);
          if (null != channel) {
            if (set2.has(channel.type)) {
              updateState(channel, (count) => {
                if (0 === messages.messages.length) {
                  count.mostRecentRawMessage = null;
                  count.mostRecentMessage = null;
                  count.count = 0;
                } else {
                  const first = messages.messages[0];
                  let tmp4 = null;
                  if (null != first) {
                    tmp4 = first;
                  }
                  count.count = messages.messages.length >= outer1_14 ? outer1_14 : count.count;
                  let type;
                  if (null != tmp4) {
                    type = tmp4.type;
                  }
                  if (type !== outer1_15.THREAD_STARTER_MESSAGE) {
                    count.mostRecentRawMessage = tmp4;
                    count.mostRecentMessage = null;
                  }
                }
              });
            }
          }
          return flag2;
        }
      }
    }
    return flag2;
  }
});
let result = set.fileFinishedImporting("modules/threads/ThreadMessageStore.tsx");

export default tmp4;
