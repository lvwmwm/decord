// Module ID: 12694
// Function ID: 98630
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1348, 1917, 1838, 3767, 1849, 653, 4351, 1360, 566, 686, 2]

// Module 12694 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_createForOfIteratorHelperLoose";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import { MessageFlags } from "ME";

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
function findMessage(channelId, messageId) {
  const channel = store.getChannel(channelId);
  let guildId;
  if (null != channel) {
    guildId = channel.getGuildId();
  }
  if (null == guildId) {
    return null;
  } else if (null == dependencyMap[guildId]) {
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
  if (null != obj[guildId]) {
    obj = {};
    const merged = Object.assign(obj);
    obj = {};
    const merged1 = Object.assign(tmp);
    const merged2 = Object.assign(arg1(tmp));
    obj[guildId] = obj;
  }
}
function prependRecord(guildId, messageRecord) {
  let closure_0 = messageRecord;
  updateGuildState(guildId, (ids) => {
    let obj = {};
    const items = [messageRecord.id, ...ids.ids];
    obj.ids = items;
    obj = {};
    const merged = Object.assign(ids.messages);
    obj[messageRecord.id] = messageRecord;
    obj.messages = obj;
    return obj;
  });
}
function updateMessage(guildId) {
  let closure_0 = arg1;
  updateGuildState(guildId, (messages) => {
    let obj = {};
    obj = {};
    const merged = Object.assign(messages.messages);
    obj[id.id] = id;
    obj.messages = obj;
    return obj;
  });
}
function handleChannelDelete(channel) {
  let iter;
  channel = channel.channel;
  let items;
  let obj;
  const guild_id = channel.guild_id;
  if (null == guild_id) {
    return false;
  } else if (null == dependencyMap[guild_id]) {
    return false;
  } else {
    items = [];
    obj = {};
    const merged = Object.assign(tmp9.messages);
    const tmp13 = _createForOfIteratorHelperLoose(tmp9.ids);
    let iter2 = tmp13();
    if (!iter2.done) {
      do {
        let value = iter2.value;
        let tmp3 = tmp9.messages[value];
        let channel_id;
        if (null != tmp3) {
          channel_id = tmp3.channel_id;
        }
        if (channel_id === channel.id) {
          delete tmp2[tmp];
        } else {
          let arr = items.push(value);
        }
        iter = tmp13();
        iter2 = iter;
      } while (!iter.done);
    }
    if (items.length === tmp9.ids.length) {
      return false;
    } else {
      updateGuildState(guild_id, () => {
        obj = { ids: items, messages: obj };
        return obj;
      });
    }
  }
}
function handleRelationshipUpdate() {
  let obj = {};
  const keys = Object.keys(obj);
  let num = 0;
  let flag = false;
  let flag2 = false;
  if (0 < keys.length) {
    do {
      let tmp3 = keys[num];
      let tmp4 = obj;
      let tmp5 = obj[tmp3];
      let tmp6 = _createForOfIteratorHelperLoose;
      let tmp7 = _createForOfIteratorHelperLoose(tmp5.ids);
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
          iter3 = tmp7();
          tmp10 = tmp12;
          iter2 = iter3;
          tmp11 = tmp12;
          let tmp17 = value;
          let tmp18 = obj1;
          tmp = tmp8;
          tmp2 = tmp9;
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
  if (!flag2) {
    return false;
  }
}
let closure_13 = {};
let tmp2 = ((Store) => {
  class GuildOfficialMessagesStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, GuildOfficialMessagesStore);
      obj = outer1_5(GuildOfficialMessagesStore);
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
  callback2(GuildOfficialMessagesStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_7, outer1_8, outer1_9, outer1_10, outer1_11);
    }
  };
  let items = [obj, , , , , , ];
  obj = {
    key: "getState",
    value(arg0) {
      return outer1_13[arg0];
    }
  };
  items[1] = obj;
  obj = {
    key: "getMessage",
    value(arg0, arg1) {
      let tmp2;
      if (null != outer1_13[arg0]) {
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
      if (null == outer1_13[arg0]) {
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
      if (null != outer1_13[arg0]) {
        loading = tmp.loading;
      }
      return null != loading && loading;
    }
  };
  items[5] = {
    key: "isLoaded",
    value(arg0) {
      let loaded;
      if (null != outer1_13[arg0]) {
        loaded = tmp.loaded;
      }
      return null != loaded && loaded;
    }
  };
  items[6] = {
    key: "hasMore",
    value(arg0) {
      let hasMore;
      if (null != outer1_13[arg0]) {
        hasMore = tmp.hasMore;
      }
      return null != hasMore && hasMore;
    }
  };
  return callback(GuildOfficialMessagesStore, items);
})(require("initialize").Store);
tmp2.displayName = "GuildOfficialMessagesStore";
tmp2 = new tmp2(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_13 = {};
  },
  LOAD_OFFICIAL_MESSAGES: function handleLoadOfficialMessages(guildId) {
    guildId = guildId.guildId;
    let loading;
    if (null != obj[guildId]) {
      loading = tmp.loading;
    }
    if (true === loading) {
      return false;
    } else if (null != guildId.before) {
      if (null == tmp) {
        return false;
      } else {
        obj = {};
        const merged = Object.assign(obj);
        obj = {};
        const merged1 = Object.assign(tmp);
        obj["loading"] = true;
        obj[guildId] = obj;
      }
    } else {
      obj = {};
      const merged2 = Object.assign(obj);
      const obj1 = { ids: [], messages: {}, hasMore: false, loading: true, loaded: false, error: false };
      obj[guildId] = obj1;
    }
  },
  LOAD_OFFICIAL_MESSAGES_SUCCESS: function handleLoadOfficialMessagesSuccess(arg0) {
    let _isNativeReflectConstruct;
    let dependencyMap;
    let guildId;
    let require;
    ({ guildId, messages: require, hasMore: dependencyMap, before: _isNativeReflectConstruct } = arg0);
    if (null == dependencyMap[guildId]) {
      return false;
    } else {
      updateGuildState(guildId, (ids) => {
        let iter2;
        if (null != _isNativeReflectConstruct) {
          const items = [];
          HermesBuiltin.arraySpread(ids.ids, 0);
          let items1 = items;
        } else {
          items1 = [];
        }
        if (null != _isNativeReflectConstruct) {
          let obj = {};
          const merged = Object.assign(ids.messages);
        } else {
          obj = {};
        }
        const tmp5 = outer1_15(closure_0);
        let iter = tmp5();
        if (!iter.done) {
          do {
            let tmp6 = outer1_0;
            let tmp7 = outer1_1;
            let obj3 = outer1_0(outer1_1[11]);
            let messageRecord = obj3.createMessageRecord(iter.value);
            if (null == obj[messageRecord.id]) {
              let arr = items1.push(messageRecord.id);
            }
            obj[messageRecord.id] = messageRecord;
            iter2 = tmp5();
            iter = iter2;
          } while (!iter2.done);
        }
        obj = { ids: items1, messages: null, hasMore: null, loading: false, loaded: true, error: false };
        obj.messages = obj;
        obj.hasMore = closure_1;
        return obj;
      });
    }
  },
  LOAD_OFFICIAL_MESSAGES_FAILURE: function handleLoadOfficialMessagesFailure(guildId) {
    guildId = guildId.guildId;
    if (null == dependencyMap[guildId]) {
      return false;
    } else {
      updateGuildState(guildId, null != tmp ? (() => ({ loading: false })) : (() => ({ loading: false, error: true })));
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    if (null == obj[guild.id]) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj);
      const id = guild.id;
      delete tmp[tmp2];
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
                prependRecord(guildId, require(4351) /* createMinimalMessageRecord */.createMessageRecord(message));
                const obj = require(4351) /* createMinimalMessageRecord */;
              }
              tmp5 = tmp6;
            }
            return tmp5;
          }
          obj2 = require(1360) /* hasFlag */;
        }
        return false;
      }
    }
    return false;
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    message = message.message;
    let id;
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
      } else if (null == dependencyMap[guildId]) {
        return false;
      } else if (null == message.author) {
        if (null != tmp22) {
          updateMessage(guildId, id(4351).updateMessageRecord(tmp22, message));
          const obj3 = id(4351);
        }
        return null != tmp22;
      } else {
        const flags = message.flags;
        let num = 0;
        if (null != flags) {
          num = flags;
        }
        const hasFlagResult = id(1360).hasFlag(num, MessageFlags.IS_GUILD_OFFICIAL);
        if (hasFlagResult) {
          if (null == tmp22) {
            prependRecord(guildId, id(4351).createMessageRecord(message));
            const obj2 = id(4351);
          }
        }
        if (!hasFlagResult) {
          if (null != tmp22) {
            id = message.id;
            updateGuildState(guildId, (messages) => {
              let obj = {};
              const merged = Object.assign(messages.messages);
              delete tmp2[tmp];
              obj = { ids: ids.filter((arg0) => arg0 !== outer1_0), messages: obj };
              ids = messages.ids;
              return obj;
            });
          }
        }
        if (hasFlagResult) {
          if (null != tmp22) {
            updateMessage(guildId, id(4351).updateMessageRecord(tmp22, message));
            let obj = id(4351);
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
    const guildId = id.guildId;
    let tmp = null != guildId;
    if (tmp) {
      let tmp4;
      if (null != dependencyMap[guildId]) {
        tmp4 = tmp3.messages[id];
      }
      if (null != tmp4) {
        updateGuildState(guildId, (messages) => {
          let obj = {};
          const merged = Object.assign(messages.messages);
          delete tmp2[tmp];
          obj = { ids: ids.filter((arg0) => arg0 !== outer1_0), messages: obj };
          ids = messages.ids;
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
    let set;
    let found;
    let obj;
    if (null == guildId) {
      return false;
    } else if (null == dependencyMap[guildId]) {
      return false;
    } else {
      const _Set = Set;
      set = new Set(ids);
      ids = tmp10.ids;
      found = ids.filter((arg0) => !set.has(arg0));
      if (found.length === tmp10.ids.length) {
        return false;
      } else {
        obj = {};
        const merged = Object.assign(tmp10.messages);
        const tmp6 = _createForOfIteratorHelperLoose(tmp10.ids);
        let iter = tmp6();
        if (!iter.done) {
          do {
            if (set.has(iter.value)) {
              delete tmp2[tmp];
            }
            iter2 = tmp6();
            iter = iter2;
          } while (!iter2.done);
        }
        updateGuildState(guildId, () => {
          obj = { ids: found, messages: obj };
          return obj;
        });
      }
    }
  },
  RELATIONSHIP_ADD: handleRelationshipUpdate,
  RELATIONSHIP_REMOVE: handleRelationshipUpdate,
  RELATIONSHIP_UPDATE: handleRelationshipUpdate
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/messages/GuildOfficialMessagesStore.tsx");

export default tmp2;
