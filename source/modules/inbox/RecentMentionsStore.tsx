// Module ID: 6874
// Function ID: 54425
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 6874 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function updateChannelMentionCount(arg0) {
  let addedMessages;
  let deletedMessages;
  ({ addedMessages, deletedMessages } = arg0);
  if (null != addedMessages) {
    const item = addedMessages.forEach((getChannelId) => {
      if (null == closure_24[getChannelId.getChannelId(getChannelId)]) {
        closure_24[getChannelId.getChannelId()] = 0;
      }
      const channelId = getChannelId.getChannelId();
      closure_24[channelId] = closure_24[channelId] + 1;
    });
  }
  if (null != deletedMessages) {
    const item1 = deletedMessages.forEach((getChannelId) => {
      if (null != closure_24[getChannelId.getChannelId(getChannelId)]) {
        const _Math = Math;
        const channelId = getChannelId.getChannelId();
        closure_24[channelId] = Math.max(0, closure_24[getChannelId.getChannelId(getChannelId)] - 1);
      }
    });
  }
}
function findOrCreateMessageRecord(channel_id) {
  if (channel_id instanceof closure_8) {
    return channel_id;
  } else {
    let message = message.getMessage(channel_id.channel_id, channel_id.id);
    if (null == message) {
      message = arg1(dependencyMap[16]).createMessageRecord(channel_id);
      const obj = arg1(dependencyMap[16]);
    }
    return message;
  }
}
function hasMentionNotificationEnabled(channel_id) {
  const basicChannel = store.getBasicChannel(channel_id.channel_id);
  if (null != basicChannel) {
    const GUILD_TEXTUAL = constants4.GUILD_TEXTUAL;
    if (GUILD_TEXTUAL.has(basicChannel.type)) {
      if (closure_15.isGuildOrCategoryOrChannelMuted(basicChannel.guild_id, basicChannel.id)) {
        return false;
      } else {
        let obj = arg1(dependencyMap[17]);
        if (obj.shouldShowAgeGateForChannelId(basicChannel.id)) {
          return false;
        } else {
          const result = closure_15.resolvedMessageNotifications(basicChannel);
          if (constants3.ALL_MESSAGES === result) {
            return true;
          } else if (constants3.ONLY_MENTIONS === result) {
            const result1 = closure_15.isSuppressEveryoneEnabled(basicChannel.guild_id);
            const result2 = closure_15.isSuppressRolesEnabled(basicChannel.guild_id);
            const currentUser = authStore.getCurrentUser();
            let tmp15 = null != currentUser;
            if (tmp15) {
              obj = { message: channel_id, userId: currentUser.id, suppressEveryone: result1, suppressRoles: result2 };
              tmp15 = importDefault(dependencyMap[18])(obj);
            }
            return tmp15;
          } else {
            const NO_MESSAGES = constants3.NO_MESSAGES;
            return false;
          }
        }
      }
    }
  }
  return false;
}
function parseMessage(message, channelId) {
  let channel_id = channelId;
  if (channelId === undefined) {
    channel_id = null;
  }
  if (importDefault(dependencyMap[21])(message)) {
    const SELF_MENTIONABLE_SYSTEM = constants2.SELF_MENTIONABLE_SYSTEM;
    if (!SELF_MENTIONABLE_SYSTEM.has(message.type)) {
      return null;
    }
  }
  if (null == channel_id) {
    channel_id = message.channel_id;
  }
  const channel = store.getChannel(channel_id);
  if (null != channel) {
    if (channel.type !== constants.DM) {
      if (closure_28.guildFilter === RecentMentionsFilters.THIS_SERVER) {
        const guildId = channel.getGuildId();
        if (guildId !== guildId.getGuildId()) {
          return null;
        }
      }
      const id = id.getId();
      if (!blockedOrIgnoredForMessage.isBlockedOrIgnoredForMessage(message)) {
        if (!importDefault(dependencyMap[22])(message, id)) {
          const tmp12 = findOrCreateMessageRecord(message);
          let obj = { message: tmp12, userId: id, suppressEveryone: !closure_28.everyoneFilter, suppressRoles: !closure_28.roleFilter };
          let tmp19 = null;
          if (importDefault(dependencyMap[18])(obj)) {
            let tmp24Result = closure_31;
            if (closure_31) {
              tmp24Result = closure_12.ackMessageId(channel.id) !== tmp12.id;
            }
            if (tmp24Result) {
              obj = { message: tmp12, userId: id, suppressEveryone: closure_15.isSuppressEveryoneEnabled(channel.getGuildId()), suppressRoles: closure_15.isSuppressRolesEnabled(channel.getGuildId()) };
              tmp24Result = importDefault(dependencyMap[18])(obj);
              const tmp24 = importDefault(dependencyMap[18]);
            }
            tmp19 = tmp12;
            if (tmp24Result) {
              closure_31 = false;
              tmp19 = tmp12;
            }
          }
          return tmp19;
        }
      }
      return null;
    }
  }
  return null;
}
function deleteMessage(arg0) {
  const arg1 = arg0;
  if (null == closure_25[arg0]) {
    return false;
  } else {
    delete r0[r3];
    const obj = { deletedMessages: importDefault(dependencyMap[19]).filter(closure_23, (id) => id.id === id) };
    updateChannelMentionCount(obj);
    const arr = importDefault(dependencyMap[19]);
    closure_23 = importDefault(dependencyMap[19]).filter(closure_23, (id) => id.id !== id);
  }
}
function handleMessageDelete(id) {
  return deleteMessage(id.id);
}
function handleSetRecentMentionsFilters(value) {
  function changesTo(everyoneFilter, THIS_SERVER) {
    let tmp = obj[everyoneFilter] !== closure_28[everyoneFilter];
    if (tmp) {
      tmp = closure_28[everyoneFilter] === THIS_SERVER;
    }
    return tmp;
  }
  const merged = Object.assign(closure_28);
  const arg1 = {};
  const obj = {};
  const obj2 = importDefault(dependencyMap[19]);
  closure_28 = obj2.defaults(importDefault(dependencyMap[19]).pick(value, [500, 8, 1000]), closure_28);
  const Storage = arg1(dependencyMap[15]).Storage;
  const result = Storage.set(closure_22, closure_28);
  let changesToResult = changesTo("guildFilter", RecentMentionsFilters.THIS_SERVER);
  if (!changesToResult) {
    changesToResult = changesTo("everyoneFilter", false);
  }
  if (!changesToResult) {
    changesToResult = changesTo("roleFilter", false);
  }
  let closure_25 = {};
  const items = [];
  const importDefault = items;
  if (changesToResult) {
    const item = arr.forEach((arg0) => {
      const tmp = callback(arg0);
      if (null != tmp) {
        items.push(tmp);
        closure_25[tmp.id] = true;
      }
    });
  }
  function resetChannelMentionCount(items) {
    let closure_24 = {};
    const item = items.forEach((getChannelId) => {
      if (null == closure_24[getChannelId.getChannelId(getChannelId)]) {
        closure_24[getChannelId.getChannelId()] = 0;
      }
      const channelId = getChannelId.getChannelId();
      closure_24[channelId] = closure_24[channelId] + 1;
    });
  }(items);
  if (0 === items.length) {
    let closure_29 = false;
  }
}
function handleConnectionOpen() {
  let closure_23 = [];
  let closure_25 = {};
  let closure_29 = false;
  let closure_31 = false;
  let closure_24 = {};
}
function handleRelationshipUpdate() {
  const obj = {};
  let arr = importDefault(dependencyMap[19]);
  obj.deletedMessages = arr.filter(arr, (arg0) => closure_13.isBlockedOrIgnoredForMessage(arg0));
  updateChannelMentionCount(obj);
  arr = arr.filter((arg0) => !closure_13.isBlockedOrIgnoredForMessage(arg0));
}
function handleDeleteChannel(channel) {
  const arg1 = channel.channel;
  const items = [];
  const importDefault = items;
  closure_23 = importDefault(dependencyMap[19]).filter(closure_23, (channel_id) => {
    let flag = channel_id.channel_id !== channel.id;
    if (!flag) {
      const id = channel_id.id;
      delete r4[r2];
      items.push(channel_id);
      flag = false;
    }
    return flag;
  });
  updateChannelMentionCount({ deletedMessages: items });
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
let closure_15 = importDefault(dependencyMap[12]);
let closure_16 = importDefault(dependencyMap[13]);
const tmp2 = arg1(dependencyMap[14]);
const RecentMentionsFilters = tmp2.RecentMentionsFilters;
({ ChannelTypes: closure_18, MessageTypesSets: closure_19, UserNotificationSettings: closure_20, ChannelTypesSets: closure_21 } = tmp2);
let closure_22 = "recentMentionFilterSettings";
let closure_23 = [];
let closure_24 = {};
let closure_25 = {};
let closure_26 = false;
let closure_27 = true;
const Storage = arg1(dependencyMap[15]).Storage;
let obj = { "Null": null, "Null": null, "Null": null, guildFilter: RecentMentionsFilters.ALL_SERVERS };
let closure_28 = Storage.get("recentMentionFilterSettings", obj);
let closure_29 = false;
let closure_30 = 0;
let closure_31 = false;
let tmp3 = (Store) => {
  class RecentMentionsStore {
    constructor() {
      self = this;
      tmp = closure_3(this, RecentMentionsStore);
      obj = closure_6(RecentMentionsStore);
      tmp2 = closure_5;
      if (closure_32()) {
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
  const arg1 = RecentMentionsStore;
  callback2(RecentMentionsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_9, closure_10, closure_11, closure_12, closure_13, closure_14, closure_15, closure_16);
    }
  };
  const items = [obj, , , , , , , , , , , , , ];
  obj = {
    key: "hasLoadedEver",
    get() {
      return closure_29;
    }
  };
  items[1] = obj;
  obj = {
    key: "lastLoaded",
    get() {
      return closure_30;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getMentions",
    value() {
      if (closure_29) {
        let tmp2 = closure_23;
      } else {
        tmp2 = null;
      }
      return tmp2;
    }
  };
  items[4] = {
    key: "getSettingsFilteredMentions",
    value() {
      if (closure_29) {
        let found = closure_23.filter(closure_35);
      } else {
        found = null;
      }
      return found;
    }
  };
  items[5] = {
    key: "hasMention",
    value(arg0) {
      return closure_25[arg0];
    }
  };
  items[6] = {
    key: "loading",
    get() {
      return closure_26;
    }
  };
  items[7] = {
    key: "hasMore",
    get() {
      return closure_27;
    }
  };
  items[8] = {
    key: "guildFilter",
    get() {
      return closure_28.guildFilter;
    }
  };
  items[9] = {
    key: "everyoneFilter",
    get() {
      return closure_28.everyoneFilter;
    }
  };
  items[10] = {
    key: "roleFilter",
    get() {
      return closure_28.roleFilter;
    }
  };
  items[11] = {
    key: "mentionsAreStale",
    get() {
      return closure_31;
    }
  };
  items[12] = {
    key: "mentionCountByChannel",
    get() {
      return closure_24;
    }
  };
  items[13] = {
    key: "getMentionCountForChannel",
    value(arg0) {
      let num = 0;
      if (null != closure_24[arg0]) {
        num = tmp;
      }
      return num;
    }
  };
  return callback(RecentMentionsStore, items);
}(importDefault(dependencyMap[23]).Store);
tmp3.displayName = "RecentMentionsStore";
obj = {
  LOAD_RECENT_MENTIONS: function handleLoadMentions(guildId) {
    let closure_26 = true;
    let tmp = null == guildId.guildId;
    if (tmp) {
      tmp = closure_28.guildFilter === RecentMentionsFilters.THIS_SERVER;
    }
    if (tmp) {
      const obj = { guildFilter: RecentMentionsFilters.ALL_SERVERS };
      handleSetRecentMentionsFilters(obj);
    }
  },
  LOAD_RECENT_MENTIONS_SUCCESS: function handleLoadMentionsSuccess(arg0) {
    let hasMoreAfter;
    let isAfter;
    let messages;
    ({ hasMoreAfter, messages, isAfter } = arg0);
    let arr = importDefault(dependencyMap[19]);
    const mapped = arr.map(messages, findOrCreateMessageRecord);
    updateChannelMentionCount({ addedMessages: mapped });
    if (isAfter) {
      arr = arr.concat(mapped);
    } else {
      arr = mapped;
      let closure_25 = {};
    }
    const item = importDefault(dependencyMap[19]).forEach(mapped, (id) => {
      closure_25[id.id] = true;
    });
    let closure_26 = false;
    let closure_27 = hasMoreAfter;
    const arr2 = importDefault(dependencyMap[19]);
    let closure_30 = arg1(dependencyMap[20]).now();
    let closure_29 = true;
  },
  LOAD_RECENT_MENTIONS_FAILURE: function handleLoadMentionsFailure() {
    let closure_26 = false;
  },
  SET_RECENT_MENTIONS_FILTER: handleSetRecentMentionsFilters,
  CLEAR_MENTIONS: function handleClearMentions() {
    handleConnectionOpen();
  },
  TRUNCATE_MENTIONS: function handleTruncateMentions(size) {
    let length;
    size = size.size;
    updateChannelMentionCount({ deletedMessages: arr.slice(size) });
    let sum = size;
    if (size < arr.length) {
      do {
        let tmp3 = closure_25;
        let tmp4 = closure_23;
        let id = closure_23[sum].id;
        delete r4[r1];
        sum = sum + 1;
        let tmp5 = closure_23;
        length = closure_23.length;
      } while (sum < length);
    }
    const substr = arr.slice(0, size);
    if (substr.length > substr.length) {
      let closure_27 = true;
    }
  },
  CHANNEL_SELECT: function handleChannelSelect() {
    if (closure_28.guildFilter !== RecentMentionsFilters.THIS_SERVER) {
      return false;
    } else {
      let closure_29 = false;
    }
  },
  CONNECTION_OPEN: handleConnectionOpen,
  GUILD_DELETE: function handleGuildDelete(guild) {
    const arg1 = guild.guild;
    const items = [];
    const importDefault = items;
    closure_23 = importDefault(dependencyMap[19]).filter(closure_23, (channel_id) => {
      const channel = channel.getChannel(channel_id.channel_id);
      let flag = null != channel;
      if (flag) {
        flag = channel.getGuildId() !== guild.id;
      }
      if (!flag) {
        const id = channel_id.id;
        delete r2[r1];
        items.push(channel_id);
        flag = false;
      }
      return flag;
    });
    updateChannelMentionCount({ deletedMessages: items });
  },
  MESSAGE_CREATE: function handleIncomingMessage(message) {
    message = message.message;
    const currentUser = authStore.getCurrentUser();
    if (null != currentUser) {
      let obj = { rawMessage: message, userId: currentUser.id, suppressRoles: false, suppressEveryone: false };
      if (obj2.isRawMessageMentioned(obj)) {
        const tmp3 = parseMessage(message, message.channelId);
        if (null == tmp3) {
          return false;
        } else {
          const substr = arr.slice();
          let arr = substr;
          arr = substr.unshift(tmp3);
          closure_25[tmp3.id] = true;
          obj = {};
          const items = [tmp3];
          obj.addedMessages = items;
          updateChannelMentionCount(obj);
        }
      }
      const obj2 = arg1(dependencyMap[18]);
    }
    return false;
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    const id = message.message.id;
    const arg1 = id;
    if (null != id) {
      if (null != closure_25[id]) {
        const findIndexResult = importDefault(dependencyMap[19]).findIndex(arr, (id) => id.id === id);
        const substr = arr.slice();
        if (null != substr[findIndexResult]) {
          arr[findIndexResult] = arg1(dependencyMap[16]).updateMessageRecord(tmp7, message.message);
          const obj2 = arg1(dependencyMap[16]);
        }
      }
    }
    return false;
  },
  MESSAGE_DELETE: handleMessageDelete,
  RECENT_MENTION_DELETE: handleMessageDelete,
  MESSAGE_DELETE_BULK: function handleMessageDeleteBulk(ids) {
    const item = importDefault(dependencyMap[19]).forEach(ids.ids, deleteMessage);
  },
  CHANNEL_DELETE: handleDeleteChannel,
  THREAD_DELETE: handleDeleteChannel,
  RELATIONSHIP_ADD: handleRelationshipUpdate,
  RELATIONSHIP_REMOVE: handleRelationshipUpdate,
  RELATIONSHIP_UPDATE: handleRelationshipUpdate,
  SET_RECENT_MENTIONS_STALE: function handleSetRecentMentionsStale() {
    let closure_31 = true;
  }
};
tmp3 = new tmp3(importDefault(dependencyMap[24]), obj);
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/inbox/RecentMentionsStore.tsx");

export default tmp3;
export { hasMentionNotificationEnabled };
export { parseMessage };
