// Module ID: 5678
// Function ID: 48832
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5678 (_isNativeReflectConstruct)
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
function updateState(type) {
  let messageCount;
  if (set.has(type.type)) {
    if (!(type.id in closure_17)) {
      const obj = {};
      ({ guild_id: obj.guildId, parent_id: obj.parentId, messageCount } = type);
      let num = 0;
      if (null != messageCount) {
        num = messageCount;
      }
      obj.count = num;
      obj.mostRecentRawMessage = null;
      obj.mostRecentMessage = null;
      closure_17[type.id] = obj;
      const tmp3 = closure_17;
    }
    updateWithState(closure_17[type.id], arg1);
    const tmp = updateWithState;
  }
}
function updateWithState(parentId, arg1) {
  let num = 0;
  if (null != closure_18[parentId.parentId]) {
    num = tmp;
  }
  closure_18[parentId.parentId] = num + 1;
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
  const arg1 = type;
  if (type.type !== MessageTypes.THREAD_STARTER_MESSAGE) {
    const channel = store.getChannel(type.channel_id);
    if (null != channel) {
      updateState(channel, (arg0) => {
        arg0.mostRecentRawMessage = arg0;
        arg0.mostRecentMessage = null;
      });
    }
  }
}
function updateFromThread(arg0) {
  const arg1 = arg0;
  updateState(arg0, (mostRecentRawMessage) => {
    if (null != mostRecentRawMessage.messageCount) {
      mostRecentRawMessage.count = mostRecentRawMessage.messageCount;
    }
    let mostRecentMessage = mostRecentRawMessage.mostRecentRawMessage;
    if (null == mostRecentMessage) {
      mostRecentMessage = mostRecentRawMessage.mostRecentMessage;
    }
    let tmp2 = null != mostRecentRawMessage.lastMessageId;
    if (tmp2) {
      let id;
      if (null != mostRecentMessage) {
        id = mostRecentMessage.id;
      }
      tmp2 = id !== mostRecentRawMessage.lastMessageId;
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
  const item = data.forEach((arg0) => {
    let messages;
    let threads;
    ({ messages, threads } = arg0);
    const item = messages.forEach((arr) => {
      const item = arr.forEach((thread) => {
        callback(thread.thread);
      });
    });
    const item1 = threads.forEach(closure_27);
  });
}
function handleRelationshipUpdate() {
  for (const key10005 in closure_17) {
    let tmp5 = key10005;
    let tmp6 = closure_17;
    let tmp7 = closure_17[key10005];
    if (null == tmp7) {
      continue;
    } else {
      if (null == tmp7.mostRecentMessage) {
        continue;
      } else {
        let tmp = closure_13;
        let message = closure_13.getMessage(key10005, tmp7.mostRecentMessage.id);
        let tmp3 = message;
        if (null == message) {
          continue;
        } else {
          tmp7.mostRecentMessage = message;
          let tmp4 = message;
          // continue
        }
        continue;
      }
      continue;
    }
    continue;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ ALL_CHANNEL_TYPES: closure_8, THREAD_CHANNEL_TYPES: closure_9 } = arg1(dependencyMap[5]));
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
let closure_12 = importDefault(dependencyMap[8]);
let closure_13 = importDefault(dependencyMap[9]);
const MAX_THREAD_MESSAGE_COUNT = arg1(dependencyMap[10]).MAX_THREAD_MESSAGE_COUNT;
const MessageTypes = arg1(dependencyMap[11]).MessageTypes;
const set = new Set();
let closure_17 = {};
let closure_18 = {};
let tmp4 = (Store) => {
  class ThreadMessageStore {
    constructor() {
      self = this;
      tmp = closure_3(this, ThreadMessageStore);
      obj = closure_6(ThreadMessageStore);
      tmp2 = closure_5;
      if (closure_19()) {
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
  const arg1 = ThreadMessageStore;
  callback2(ThreadMessageStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_12, closure_13);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getCount",
    value(arg0) {
      let count;
      if (null != closure_17[arg0]) {
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
      if (null == closure_17[arg0]) {
        return null;
      } else {
        if (tmp2) {
          let message = message.getMessage(arg0, tmp.mostRecentRawMessage.id);
          if (null == message) {
            message = ThreadMessageStore(closure_2[14]).createMessageRecord(tmp.mostRecentRawMessage);
            const obj = ThreadMessageStore(closure_2[14]);
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
      return closure_18[arg0];
    }
  };
  items[4] = {
    key: "getInitialOverlayState",
    value() {
      return closure_17;
    }
  };
  return callback(ThreadMessageStore, items);
}(importDefault(dependencyMap[15]).Store);
tmp4.displayName = "ThreadMessageStore";
tmp4 = new tmp4(importDefault(dependencyMap[16]), {
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
    let closure_17 = obj;
    for (const key10010 in obj) {
      let tmp16 = key10010;
      let mostRecentMessage = threadMessages[key10010].mostRecentMessage;
      if (null == mostRecentMessage) {
        continue;
      } else {
        let tmp2 = closure_10;
        obj = {};
        let tmp3 = obj;
        let tmp4 = mostRecentMessage;
        let merged1 = Object.assign(mostRecentMessage);
        let tmp6 = closure_11;
        let prototype = closure_11.prototype;
        let tmp7 = new.target;
        let tmp8 = new.target;
        let tmp9 = new closure_11(mostRecentMessage.author);
        let tmp10 = tmp9;
        obj["author"] = tmp9;
        let prototype2 = closure_10.prototype;
        let tmp11 = new.target;
        let tmp12 = new.target;
        let tmp13 = obj;
        let tmp14 = new closure_10(obj);
        let tmp15 = tmp14;
        threadMessages[key10010].mostRecentMessage = tmp14;
        // continue
      }
      continue;
    }
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    updateFromGuild(guild.guild);
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    function deleteForGuild(id) {
      closure_17 = callback(closure_2[12]).omitBy(closure_17, (guildId) => {
        if (guildId.guildId === guildId) {
          const parentId = guildId.parentId;
          delete r2[r1];
        }
        return guildId.guildId === guildId;
      });
    }(guild.guild.id);
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
        const channel = channel.getChannel(channel_id.channel_id);
        let tmp2 = null != channel;
        if (tmp2) {
          tmp2 = channel_id.type !== constants.THREAD_STARTER_MESSAGE;
        }
        if (tmp2) {
          callback(channel, (arg0) => {
            arg0.mostRecentRawMessage = arg0;
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
    delete r1[r0];
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    function deleteForChannel(id) {
      closure_17 = callback(closure_2[12]).omitBy(closure_17, (parentId) => parentId.parentId === parentId);
      delete r1[r2];
    }(channel.channel.id);
  },
  MESSAGE_CREATE: function handleMessageCreate(message) {
    message = message.message;
    const arg1 = message;
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
                tmp8 = message.id !== importDefault(dependencyMap[13]).castChannelIdAsMessageId(channel.id);
                const obj = importDefault(dependencyMap[13]);
              }
              tmp7 = tmp8;
            }
            if (tmp7) {
              updateState(channel, (count) => {
                count.count = Math.min(count.count + 1, closure_14);
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
    const arg1 = message;
    let mostRecentRawMessage;
    if (null != closure_17[message.channel_id]) {
      mostRecentRawMessage = tmp.mostRecentRawMessage;
    }
    if (null == mostRecentRawMessage) {
      let mostRecentMessage;
      if (null != tmp) {
        mostRecentMessage = tmp.mostRecentMessage;
      }
      mostRecentRawMessage = mostRecentMessage;
    }
    if (null != closure_17[message.channel_id]) {
      if (null != mostRecentRawMessage) {
        if (mostRecentRawMessage.id === message.id) {
          updateWithState(tmp, (mostRecentMessage) => {
            if (null != mostRecentMessage.mostRecentMessage) {
              mostRecentMessage.mostRecentMessage = message(closure_2[14]).updateMessageRecord(mostRecentMessage.mostRecentMessage, message);
              const obj = message(closure_2[14]);
            }
            if (null != mostRecentMessage.mostRecentRawMessage) {
              mostRecentMessage.mostRecentRawMessage = message(closure_2[14]).updateServerMessage(mostRecentMessage.mostRecentRawMessage, message);
              const obj2 = message(closure_2[14]);
            }
          });
        }
      }
    }
    return false;
  },
  MESSAGE_DELETE: function handleMessageDelete(id) {
    id = id.id;
    const arg1 = id;
    const channelId = id.channelId;
    let importDefault;
    let closure_2;
    if (null == closure_17[channelId]) {
      return false;
    } else {
      importDefault = importDefault(closure_2[13]).castChannelIdAsMessageId(channelId) !== id;
      closure_2 = !set.has(id);
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
          set.add(id);
        }
        count = mostRecentRawMessage.count;
      });
    }
  },
  MESSAGE_DELETE_BULK: function handleMessageDeleteBulk(ids) {
    ids = ids.ids;
    const arg1 = ids;
    const channelId = ids.channelId;
    const importDefault = channelId;
    let dependencyMap;
    if (null == closure_17[channelId]) {
      return false;
    } else {
      const length = ids.filter((arg0) => {
        let tmp = channelId(length[13]).castChannelIdAsMessageId(channelId) !== arg0;
        if (tmp) {
          tmp = !set.has(arg0);
        }
        return tmp;
      }).length;
      dependencyMap = length;
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
          const item = ids.forEach((arg0) => set.add(arg0));
        });
      }
    }
  },
  LOAD_MESSAGES_SUCCESS: function handleLoadMessagesSuccess(messages) {
    let iter3;
    const arg1 = messages;
    const tmp = _createForOfIteratorHelperLoose(messages.messages);
    const iter = tmp();
    let iter2 = iter;
    let flag = false;
    let flag2 = false;
    if (!iter.done) {
      do {
        let tmp2 = closure_27;
        let tmp3 = closure_27(iter2.value.thread) || flag;
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
                if (0 === count.messages.length) {
                  count.mostRecentRawMessage = null;
                  count.mostRecentMessage = null;
                  count.count = 0;
                } else {
                  const first = count.messages[0];
                  let tmp4 = null;
                  if (null != first) {
                    tmp4 = first;
                  }
                  count.count = count.messages.length >= closure_14 ? closure_14 : count.count;
                  let type;
                  if (null != tmp4) {
                    type = tmp4.type;
                  }
                  if (type !== constants.THREAD_STARTER_MESSAGE) {
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
const obj = {
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
    let closure_17 = obj;
    for (const key10010 in obj) {
      let tmp16 = key10010;
      let mostRecentMessage = threadMessages[key10010].mostRecentMessage;
      if (null == mostRecentMessage) {
        continue;
      } else {
        let tmp2 = closure_10;
        obj = {};
        let tmp3 = obj;
        let tmp4 = mostRecentMessage;
        let merged1 = Object.assign(mostRecentMessage);
        let tmp6 = closure_11;
        let prototype = closure_11.prototype;
        let tmp7 = new.target;
        let tmp8 = new.target;
        let tmp9 = new closure_11(mostRecentMessage.author);
        let tmp10 = tmp9;
        obj["author"] = tmp9;
        let prototype2 = closure_10.prototype;
        let tmp11 = new.target;
        let tmp12 = new.target;
        let tmp13 = obj;
        let tmp14 = new closure_10(obj);
        let tmp15 = tmp14;
        threadMessages[key10010].mostRecentMessage = tmp14;
        // continue
      }
      continue;
    }
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    updateFromGuild(guild.guild);
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    function deleteForGuild(id) {
      closure_17 = callback(closure_2[12]).omitBy(closure_17, (guildId) => {
        if (guildId.guildId === guildId) {
          const parentId = guildId.parentId;
          delete r2[r1];
        }
        return guildId.guildId === guildId;
      });
    }(guild.guild.id);
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
        const channel = channel.getChannel(channel_id.channel_id);
        let tmp2 = null != channel;
        if (tmp2) {
          tmp2 = channel_id.type !== constants.THREAD_STARTER_MESSAGE;
        }
        if (tmp2) {
          callback(channel, (arg0) => {
            arg0.mostRecentRawMessage = arg0;
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
    delete r1[r0];
  },
  CHANNEL_DELETE: function handleChannelDelete(channel) {
    function deleteForChannel(id) {
      closure_17 = callback(closure_2[12]).omitBy(closure_17, (parentId) => parentId.parentId === parentId);
      delete r1[r2];
    }(channel.channel.id);
  },
  MESSAGE_CREATE: function handleMessageCreate(message) {
    message = message.message;
    const arg1 = message;
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
                tmp8 = message.id !== importDefault(dependencyMap[13]).castChannelIdAsMessageId(channel.id);
                const obj = importDefault(dependencyMap[13]);
              }
              tmp7 = tmp8;
            }
            if (tmp7) {
              updateState(channel, (count) => {
                count.count = Math.min(count.count + 1, closure_14);
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
    const arg1 = message;
    let mostRecentRawMessage;
    if (null != closure_17[message.channel_id]) {
      mostRecentRawMessage = tmp.mostRecentRawMessage;
    }
    if (null == mostRecentRawMessage) {
      let mostRecentMessage;
      if (null != tmp) {
        mostRecentMessage = tmp.mostRecentMessage;
      }
      mostRecentRawMessage = mostRecentMessage;
    }
    if (null != closure_17[message.channel_id]) {
      if (null != mostRecentRawMessage) {
        if (mostRecentRawMessage.id === message.id) {
          updateWithState(tmp, (mostRecentMessage) => {
            if (null != mostRecentMessage.mostRecentMessage) {
              mostRecentMessage.mostRecentMessage = message(closure_2[14]).updateMessageRecord(mostRecentMessage.mostRecentMessage, message);
              const obj = message(closure_2[14]);
            }
            if (null != mostRecentMessage.mostRecentRawMessage) {
              mostRecentMessage.mostRecentRawMessage = message(closure_2[14]).updateServerMessage(mostRecentMessage.mostRecentRawMessage, message);
              const obj2 = message(closure_2[14]);
            }
          });
        }
      }
    }
    return false;
  },
  MESSAGE_DELETE: function handleMessageDelete(id) {
    id = id.id;
    const arg1 = id;
    const channelId = id.channelId;
    let importDefault;
    let closure_2;
    if (null == closure_17[channelId]) {
      return false;
    } else {
      importDefault = importDefault(closure_2[13]).castChannelIdAsMessageId(channelId) !== id;
      closure_2 = !set.has(id);
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
          set.add(id);
        }
        count = mostRecentRawMessage.count;
      });
    }
  },
  MESSAGE_DELETE_BULK: function handleMessageDeleteBulk(ids) {
    ids = ids.ids;
    const arg1 = ids;
    const channelId = ids.channelId;
    const importDefault = channelId;
    let dependencyMap;
    if (null == closure_17[channelId]) {
      return false;
    } else {
      const length = ids.filter((arg0) => {
        let tmp = channelId(length[13]).castChannelIdAsMessageId(channelId) !== arg0;
        if (tmp) {
          tmp = !set.has(arg0);
        }
        return tmp;
      }).length;
      dependencyMap = length;
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
          const item = ids.forEach((arg0) => set.add(arg0));
        });
      }
    }
  },
  LOAD_MESSAGES_SUCCESS: function handleLoadMessagesSuccess(messages) {
    let iter3;
    const arg1 = messages;
    const tmp = _createForOfIteratorHelperLoose(messages.messages);
    const iter = tmp();
    let iter2 = iter;
    let flag = false;
    let flag2 = false;
    if (!iter.done) {
      do {
        let tmp2 = closure_27;
        let tmp3 = closure_27(iter2.value.thread) || flag;
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
                if (0 === count.messages.length) {
                  count.mostRecentRawMessage = null;
                  count.mostRecentMessage = null;
                  count.count = 0;
                } else {
                  const first = count.messages[0];
                  let tmp4 = null;
                  if (null != first) {
                    tmp4 = first;
                  }
                  count.count = count.messages.length >= closure_14 ? closure_14 : count.count;
                  let type;
                  if (null != tmp4) {
                    type = tmp4.type;
                  }
                  if (type !== constants.THREAD_STARTER_MESSAGE) {
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
};
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/threads/ThreadMessageStore.tsx");

export default tmp4;
