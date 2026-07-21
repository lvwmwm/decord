// Module ID: 12522
// Function ID: 96103
// Name: _isNativeReflectConstruct
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0]

// Module 12522 (_isNativeReflectConstruct)
import __exportStarResult1 from "__exportStarResult1";
import closure_3 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";
import closure_5 from "__exportStarResult1";
import closure_6 from "__exportStarResult1";
import closure_7 from "__exportStarResult1";
import closure_8 from "__exportStarResult1";
import closure_9 from "__exportStarResult1";
import closure_10 from "__exportStarResult1";

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
function findMessage(channelId, messageId) {
  const channel = store.getChannel(channelId);
  let guildId;
  if (null != channel) {
    guildId = channel.getGuildId();
  }
  if (null == guildId) {
    return null;
  } else if (null == closure_13[guildId]) {
    return null;
  } else {
    let tmp6 = null;
    if (null != tmp3.messages[messageId]) {
      const obj = { guildId, message: tmp5 };
      tmp6 = obj;
    }
    return tmp6;
  }
}
function updateGuildState(guildId, arg1) {
  if (null != closure_13[guildId]) {
    let obj = {};
    const merged = Object.assign(closure_13);
    obj = {};
    const merged1 = Object.assign(tmp);
    const merged2 = Object.assign(arg1(tmp));
    obj[guildId] = obj;
    closure_13 = obj;
  }
}
function prependRecord(guildId, messageRecord) {
  updateGuildState(guildId, (ids) => {
    let obj = {};
    const items = [arg1.id, ...ids.ids];
    obj.ids = items;
    obj = {};
    const merged = Object.assign(ids.messages);
    obj[arg1.id] = arg1;
    obj.messages = obj;
    return obj;
  });
}
function updateMessage(guildId) {
  updateGuildState(guildId, (messages) => {
    let obj = {};
    obj = {};
    const merged = Object.assign(messages.messages);
    obj[arg1.id] = arg1;
    obj.messages = obj;
    return obj;
  });
}
function handleChannelDelete(channel) {
  let iter;
  channel = channel.channel;
  let arg1;
  let dependencyMap;
  const guild_id = channel.guild_id;
  if (null == guild_id) {
    return false;
  } else if (null == closure_13[guild_id]) {
    return false;
  } else {
    const items = [];
    arg1 = items;
    const obj = {};
    const merged = Object.assign(tmp7.messages);
    dependencyMap = obj;
    const tmp11 = _createForOfIteratorHelperLoose(tmp7.ids);
    let iter2 = tmp11();
    if (!iter2.done) {
      do {
        let value = iter2.value;
        let tmp = tmp7.messages[value];
        let channel_id;
        if (null != tmp) {
          channel_id = tmp.channel_id;
        }
        if (channel_id === channel.id) {
          delete r9[r6];
        } else {
          let arr = items.push(value);
        }
        iter = tmp11();
        iter2 = iter;
      } while (!iter.done);
    }
    if (items.length === tmp7.ids.length) {
      return false;
    } else {
      updateGuildState(guild_id, () => {
        const obj = { ids: items, messages: obj };
        return obj;
      });
    }
  }
}
function handleRelationshipUpdate() {
  let obj = {};
  const keys = Object.keys(closure_13);
  let num = 0;
  let flag = false;
  let flag2 = false;
  if (0 < keys.length) {
    do {
      let tmp3 = keys[num];
      let tmp4 = closure_13;
      let tmp5 = closure_13[tmp3];
      let tmp6 = closure_15;
      let tmp7 = closure_15(tmp5.ids);
      let iter = tmp7();
      let tmp8 = tmp;
      let tmp9 = tmp2;
      let iter2 = iter;
      let tmp10 = null;
      let tmp11 = null;
      if (!iter.done) {
        do {
          let value = iter2.value;
          let obj1 = tmp5.messages[value];
          let tmp12 = tmp10;
          if (null != obj1) {
            let tmp22 = closure_10;
            let isBlockedForMessageResult = closure_10.isBlockedForMessage(obj1);
            let tmp24 = closure_10;
            let isIgnoredForMessageResult = closure_10.isIgnoredForMessage(obj1);
            let tmp13 = obj1.blocked === isBlockedForMessageResult && obj1.ignored === isIgnoredForMessageResult;
            tmp12 = tmp10;
            tmp8 = isBlockedForMessageResult;
            tmp9 = isIgnoredForMessageResult;
            if (!tmp13) {
              let tmp14 = tmp10;
              if (null == tmp10) {
                obj = {};
                let tmp15 = obj;
                let merged = Object.assign(tmp5.messages);
                tmp14 = obj;
              }
              obj = { blocked: isBlockedForMessageResult, ignored: isIgnoredForMessageResult };
              tmp14[value] = obj1.merge(obj);
              tmp12 = tmp14;
              tmp8 = isBlockedForMessageResult;
              tmp9 = isIgnoredForMessageResult;
            }
          }
          let iter3 = tmp7();
          tmp10 = tmp12;
          iter2 = iter3;
          tmp11 = tmp12;
          let tmp17 = value;
          let tmp18 = obj1;
          let tmp = tmp8;
          let tmp2 = tmp9;
        } while (!iter3.done);
      }
      if (null == tmp11) {
        obj[tmp3] = tmp5;
        let flag3 = flag;
      } else {
        obj1 = {};
        let tmp19 = obj1;
        let tmp20 = tmp5;
        let merged1 = Object.assign(tmp5);
        obj1["messages"] = tmp11;
        obj[tmp3] = obj1;
        flag3 = true;
      }
      num = num + 1;
      flag = flag3;
      flag2 = flag3;
    } while (num < keys.length);
  }
  if (flag2) {
    closure_13 = obj;
  } else {
    return false;
  }
}
let closure_11 = importDefault(dependencyMap[9]);
const MessageFlags = arg1(dependencyMap[10]).MessageFlags;
let closure_13 = {};
let tmp2 = (Store) => {
  class GuildOfficialMessagesStore {
    constructor() {
      self = this;
      tmp = __exportStarResult1(this, GuildOfficialMessagesStore);
      obj = closure_5(GuildOfficialMessagesStore);
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
  const arg1 = GuildOfficialMessagesStore;
  callback2(GuildOfficialMessagesStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_7, closure_8, closure_9, closure_10, closure_11);
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "getState",
    value(arg0) {
      return closure_13[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "getMessage",
    value(arg0, arg1) {
      let tmp2;
      if (null != closure_13[arg0]) {
        tmp2 = tmp.messages[arg1];
      }
      return tmp2;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getMessages",
    value(arg0) {
      const GuildOfficialMessagesStore = tmp;
      if (null == closure_13[arg0]) {
        let items = [];
      } else {
        const ids = tmp.ids;
        const mapped = ids.map((arg0) => tmp.messages[arg0]);
        items = mapped.filter((arg0) => null != arg0);
      }
      return items;
    }
  };
  items[4] = {
    key: "isLoading",
    value(arg0) {
      let loading;
      if (null != closure_13[arg0]) {
        loading = tmp.loading;
      }
      return null != loading && loading;
    }
  };
  items[5] = {
    key: "isLoaded",
    value(arg0) {
      let loaded;
      if (null != closure_13[arg0]) {
        loaded = tmp.loaded;
      }
      return null != loaded && loaded;
    }
  };
  items[6] = {
    key: "hasMore",
    value(arg0) {
      let hasMore;
      if (null != closure_13[arg0]) {
        hasMore = tmp.hasMore;
      }
      return null != hasMore && hasMore;
    }
  };
  return callback(GuildOfficialMessagesStore, items);
}(importDefault(dependencyMap[13]).Store);
tmp2.displayName = "GuildOfficialMessagesStore";
tmp2 = new tmp2(importDefault(dependencyMap[14]), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_13 = {};
  },
  LOAD_OFFICIAL_MESSAGES: function handleLoadOfficialMessages(guildId) {
    guildId = guildId.guildId;
    let loading;
    if (null != closure_13[guildId]) {
      loading = tmp.loading;
    }
    if (true === loading) {
      return false;
    } else if (null != guildId.before) {
      if (null == tmp) {
        return false;
      } else {
        let obj = {};
        const merged = Object.assign(closure_13);
        obj = {};
        const merged1 = Object.assign(tmp);
        obj["loading"] = true;
        obj[guildId] = obj;
        closure_13 = obj;
      }
    } else {
      obj = {};
      const merged2 = Object.assign(closure_13);
      const obj1 = { ids: [], messages: {} };
      obj[guildId] = obj1;
      closure_13 = obj;
    }
  },
  LOAD_OFFICIAL_MESSAGES_SUCCESS: function handleLoadOfficialMessagesSuccess(arg0) {
    let guildId;
    ({ guildId, messages: closure_0, hasMore: closure_1, before: __exportStarResult1 } = arg0);
    if (null == closure_13[guildId]) {
      return false;
    } else {
      updateGuildState(guildId, (ids) => {
        let iter2;
        if (null != __exportStarResult1) {
          const items = [];
          HermesBuiltin.arraySpread(ids.ids, 0);
          let items1 = items;
        } else {
          items1 = [];
        }
        if (null != __exportStarResult1) {
          let obj = {};
          const merged = Object.assign(ids.messages);
        } else {
          obj = {};
        }
        const tmp5 = callback(closure_0);
        let iter = tmp5();
        if (!iter.done) {
          do {
            let tmp6 = closure_0;
            let tmp7 = closure_1;
            let obj3 = closure_0(closure_1[11]);
            let messageRecord = obj3.createMessageRecord(iter.value);
            if (null == obj[messageRecord.id]) {
              let arr = items1.push(messageRecord.id);
            }
            obj[messageRecord.id] = messageRecord;
            iter2 = tmp5();
            iter = iter2;
          } while (!iter2.done);
        }
        obj = { ids: items1 };
        obj.messages = obj;
        obj.hasMore = closure_1;
        return obj;
      });
    }
  },
  LOAD_OFFICIAL_MESSAGES_FAILURE: function handleLoadOfficialMessagesFailure(guildId) {
    guildId = guildId.guildId;
    if (null == closure_13[guildId]) {
      return false;
    } else {
      updateGuildState(guildId, null != tmp ? () => ({ loading: false }) : () => ({ "Null": null, "Null": null }));
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    if (null == closure_13[guild.id]) {
      return false;
    } else {
      const obj = {};
      const merged = Object.assign(closure_13);
      const id = guild.id;
      delete r0[r2];
      closure_13 = obj;
    }
  },
  CHANNEL_DELETE: handleChannelDelete,
  THREAD_DELETE: handleChannelDelete,
  MESSAGE_CREATE: function handleMessageCreate(optimistic) {
    let guildId;
    let message;
    ({ message, guildId } = optimistic);
    if (!optimistic.optimistic) {
      if (!optimistic.isPushNotification) {
        if (null != guildId) {
          const flags = message.flags;
          let num = 0;
          if (null != flags) {
            num = flags;
          }
          if (obj2.hasFlag(num, MessageFlags.IS_GUILD_OFFICIAL)) {
            let tmp5 = null != tmp4;
            if (tmp5) {
              if (null == tmp4.messages[message.id]) {
                prependRecord(guildId, arg1(dependencyMap[11]).createMessageRecord(message));
                const obj = arg1(dependencyMap[11]);
              }
              tmp5 = tmp6;
            }
            return tmp5;
          }
          const obj2 = arg1(dependencyMap[12]);
        }
        return false;
      }
    }
    return false;
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    message = message.message;
    let arg1;
    if (null == message.id) {
      return false;
    } else {
      const channel = store.getChannel(message.channel_id);
      let guildId;
      if (null != channel) {
        guildId = channel.getGuildId();
      }
      if (null == guildId) {
        return false;
      } else if (null == closure_13[guildId]) {
        return false;
      } else if (null == message.author) {
        if (null != tmp22) {
          updateMessage(guildId, arg1(dependencyMap[11]).updateMessageRecord(tmp22, message));
          const obj3 = arg1(dependencyMap[11]);
        }
        return null != tmp22;
      } else {
        const flags = message.flags;
        let num = 0;
        if (null != flags) {
          num = flags;
        }
        const hasFlagResult = arg1(dependencyMap[12]).hasFlag(num, MessageFlags.IS_GUILD_OFFICIAL);
        if (hasFlagResult) {
          if (null == tmp22) {
            prependRecord(guildId, arg1(dependencyMap[11]).createMessageRecord(message));
            const obj2 = arg1(dependencyMap[11]);
          }
        }
        if (!hasFlagResult) {
          if (null != tmp22) {
            arg1 = message.id;
            updateGuildState(guildId, (messages) => {
              let obj = {};
              const merged = Object.assign(messages.messages);
              delete r1[r0];
              obj = { ids: ids.filter((arg0) => arg0 !== closure_0), messages: obj };
              const ids = messages.ids;
              return obj;
            });
          }
        }
        if (hasFlagResult) {
          if (null != tmp22) {
            updateMessage(guildId, arg1(dependencyMap[11]).updateMessageRecord(tmp22, message));
            const obj = arg1(dependencyMap[11]);
          }
        }
        return false;
      }
    }
  },
  MESSAGE_REACTION_ADD: function handleMessageReactionAdd(arg0) {
    let channelId;
    let colors;
    let emoji;
    let messageId;
    let optimistic;
    let reactionType;
    let userId;
    ({ emoji, reactionType, colors } = arg0);
    ({ channelId, messageId, userId, optimistic } = arg0);
    const currentUser = authStore.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    if (optimistic) {
      if (!tmp3) {
        return false;
      }
    }
    const tmp4 = findMessage(channelId, messageId);
    if (null == tmp4) {
      return false;
    } else {
      const message = tmp4.message;
      updateMessage(tmp4.guildId, message.addReaction(emoji, tmp3, colors, reactionType));
    }
  },
  MESSAGE_REACTION_REMOVE: function handleMessageReactionRemove(arg0) {
    let channelId;
    let emoji;
    let messageId;
    let optimistic;
    let reactionType;
    let userId;
    ({ channelId, messageId, userId, emoji, optimistic, reactionType } = arg0);
    const currentUser = authStore.getCurrentUser();
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    if (optimistic) {
      if (!tmp3) {
        return false;
      }
    }
    const tmp4 = findMessage(channelId, messageId);
    if (null == tmp4) {
      return false;
    } else {
      const message = tmp4.message;
      updateMessage(tmp4.guildId, message.removeReaction(emoji, tmp3, reactionType));
    }
  },
  MESSAGE_REACTION_REMOVE_ALL: function handleMessageReactionRemoveAll(channelId) {
    const tmp = findMessage(channelId.channelId, channelId.messageId);
    if (null == tmp) {
      return false;
    } else {
      const message = tmp.message;
      updateMessage(tmp.guildId, message.set("reactions", []));
    }
  },
  MESSAGE_REACTION_REMOVE_EMOJI: function handleMessageReactionRemoveEmoji(channelId) {
    const tmp = findMessage(channelId.channelId, channelId.messageId);
    if (null == tmp) {
      return false;
    } else {
      const message = tmp.message;
      updateMessage(tmp.guildId, message.removeReactionsForEmoji(channelId.emoji));
    }
  },
  MESSAGE_DELETE: function handleMessageDelete(id) {
    id = id.id;
    const arg1 = id;
    const guildId = id.guildId;
    let tmp = null != guildId;
    if (tmp) {
      let tmp4;
      if (null != closure_13[guildId]) {
        tmp4 = tmp3.messages[id];
      }
      if (null != tmp4) {
        updateGuildState(guildId, (messages) => {
          let obj = {};
          const merged = Object.assign(messages.messages);
          delete r1[r0];
          obj = { ids: ids.filter((arg0) => arg0 !== closure_0), messages: obj };
          const ids = messages.ids;
          return obj;
        });
      }
      tmp = tmp5;
    }
    return tmp;
  },
  MESSAGE_DELETE_BULK: function handleMessageDeleteBulk(arg0) {
    let guildId;
    let ids;
    let iter2;
    ({ ids, guildId } = arg0);
    let arg1;
    let dependencyMap;
    let __exportStarResult1;
    if (null == guildId) {
      return false;
    } else if (null == closure_13[guildId]) {
      return false;
    } else {
      const _Set = Set;
      const set = new Set(ids);
      arg1 = set;
      ids = tmp8.ids;
      const found = ids.filter((arg0) => !set.has(arg0));
      dependencyMap = found;
      if (found.length === tmp8.ids.length) {
        return false;
      } else {
        const obj = {};
        const merged = Object.assign(tmp8.messages);
        __exportStarResult1 = obj;
        const tmp4 = _createForOfIteratorHelperLoose(tmp8.ids);
        let iter = tmp4();
        if (!iter.done) {
          do {
            if (set.has(iter.value)) {
              delete r7[r4];
            }
            iter2 = tmp4();
            iter = iter2;
          } while (!iter2.done);
        }
        updateGuildState(guildId, () => {
          const obj = { ids: found, messages: obj };
          return obj;
        });
      }
    }
  },
  RELATIONSHIP_ADD: handleRelationshipUpdate,
  RELATIONSHIP_REMOVE: handleRelationshipUpdate,
  RELATIONSHIP_UPDATE: handleRelationshipUpdate
});
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/messages/GuildOfficialMessagesStore.tsx");

export default tmp2;
