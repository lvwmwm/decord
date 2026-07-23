// Module ID: 6880
// Function ID: 54482
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 3768, 1194, 1348, 4349, 4142, 3767, 3947, 4325, 1849, 653, 587, 4351, 4345, 4365, 22, 4206, 5651, 6881, 566, 686, 2]

// Module 6880 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import Storage from "Storage";
import shouldAgeVerifyForAgeGate from "shouldAgeVerifyForAgeGate";
import isMentioned from "isMentioned";
import _callSuper from "_callSuper";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import ME from "ME";
import { Storage } from "Storage";

let closure_18;
let closure_19;
let closure_20;
let closure_21;
const require = arg1;
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
      if (null == outer1_24[getChannelId.getChannelId(getChannelId)]) {
        outer1_24[getChannelId.getChannelId()] = 0;
      }
      const channelId = getChannelId.getChannelId();
      outer1_24[channelId] = outer1_24[channelId] + 1;
    });
  }
  if (null != deletedMessages) {
    const item1 = deletedMessages.forEach((getChannelId) => {
      if (null != outer1_24[getChannelId.getChannelId(getChannelId)]) {
        const _Math = Math;
        const channelId = getChannelId.getChannelId();
        outer1_24[channelId] = Math.max(0, outer1_24[getChannelId.getChannelId(getChannelId)] - 1);
      }
    });
  }
}
function findOrCreateMessageRecord(channel_id) {
  if (channel_id instanceof _callSuper) {
    return channel_id;
  } else {
    message = message.getMessage(channel_id.channel_id, channel_id.id);
    if (null == message) {
      message = require(4351) /* createMinimalMessageRecord */.createMessageRecord(channel_id);
      const obj = require(4351) /* createMinimalMessageRecord */;
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
        let obj = require(4345) /* shouldAgeVerifyForAgeGate */;
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
              tmp15 = importDefault(4365)(obj);
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
  if (importDefault(5651)(message)) {
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
      id = id.getId();
      if (!blockedOrIgnoredForMessage.isBlockedOrIgnoredForMessage(message)) {
        if (!importDefault(6881)(message, id)) {
          const tmp12 = findOrCreateMessageRecord(message);
          let obj = { message: tmp12, userId: id, suppressEveryone: !closure_28.everyoneFilter, suppressRoles: !closure_28.roleFilter };
          let tmp19 = null;
          if (importDefault(4365)(obj)) {
            let tmp24Result = c31;
            if (c31) {
              tmp24Result = closure_12.ackMessageId(channel.id) !== tmp12.id;
            }
            if (tmp24Result) {
              obj = { message: tmp12, userId: id, suppressEveryone: closure_15.isSuppressEveryoneEnabled(channel.getGuildId()), suppressRoles: closure_15.isSuppressRolesEnabled(channel.getGuildId()) };
              tmp24Result = importDefault(4365)(obj);
              const tmp24 = importDefault(4365);
            }
            tmp19 = tmp12;
            if (tmp24Result) {
              c31 = false;
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
  let closure_0 = arg0;
  if (null == dependencyMap[arg0]) {
    return false;
  } else {
    delete tmp[tmp2];
    const obj = { deletedMessages: importDefault(22).filter(closure_23, (id) => id.id === closure_0) };
    updateChannelMentionCount(obj);
    const arr = importDefault(22);
    closure_23 = importDefault(22).filter(closure_23, (id) => id.id !== closure_0);
  }
}
function handleMessageDelete(id) {
  return deleteMessage(id.id);
}
function handleSetRecentMentionsFilters(arg0) {
  function changesTo(everyoneFilter, THIS_SERVER) {
    let tmp = obj[everyoneFilter] !== dependencyMap[everyoneFilter];
    if (tmp) {
      tmp = dependencyMap[everyoneFilter] === THIS_SERVER;
    }
    return tmp;
  }
  const obj = {};
  const merged = Object.assign(closure_28);
  const obj2 = items(22);
  closure_28 = obj2.defaults(items(22).pick(arg0, ["guildFilter", "roleFilter", "everyoneFilter"]), closure_28);
  const Storage = obj(587).Storage;
  const result = Storage.set(recentMentionFilterSettings, closure_28);
  let changesToResult = changesTo("guildFilter", RecentMentionsFilters.THIS_SERVER);
  if (!changesToResult) {
    changesToResult = changesTo("everyoneFilter", false);
  }
  if (!changesToResult) {
    changesToResult = changesTo("roleFilter", false);
  }
  let closure_25 = {};
  items = [];
  if (changesToResult) {
    let item = items.forEach((arg0) => {
      const tmp = outer1_36(arg0);
      if (null != tmp) {
        items.push(tmp);
        closure_25[tmp.id] = true;
      }
    });
  }
  (function resetChannelMentionCount(items) {
    const outer1_24 = {};
    const item = items.forEach((getChannelId) => {
      if (null == outer2_24[getChannelId.getChannelId(getChannelId)]) {
        outer2_24[getChannelId.getChannelId()] = 0;
      }
      const channelId = getChannelId.getChannelId();
      outer2_24[channelId] = outer2_24[channelId] + 1;
    });
  })(items);
  if (0 === items.length) {
    let c29 = false;
  }
}
function handleConnectionOpen() {
  let closure_23 = [];
  let closure_25 = {};
  let c29 = false;
  let c31 = false;
  let closure_24 = {};
}
function handleRelationshipUpdate() {
  const obj = { deletedMessages: importDefault(22).filter(closure_23, (arg0) => outer1_13.isBlockedOrIgnoredForMessage(arg0)) };
  updateChannelMentionCount(obj);
  closure_23 = closure_23.filter((arg0) => !outer1_13.isBlockedOrIgnoredForMessage(arg0));
}
function handleDeleteChannel(channel) {
  channel = channel.channel;
  const items = [];
  closure_23 = items(22).filter(closure_23, (channel_id) => {
    let flag = channel_id.channel_id !== channel.id;
    if (!flag) {
      const id = channel_id.id;
      delete tmp2[tmp];
      items.push(channel_id);
      flag = false;
    }
    return flag;
  });
  updateChannelMentionCount({ deletedMessages: items });
}
const RecentMentionsFilters = ME.RecentMentionsFilters;
({ ChannelTypes: closure_18, MessageTypesSets: closure_19, UserNotificationSettings: closure_20, ChannelTypesSets: closure_21 } = ME);
const recentMentionFilterSettings = "recentMentionFilterSettings";
let closure_23 = [];
let closure_24 = {};
let closure_25 = {};
let c26 = false;
let c27 = true;
let obj = { guildFilter: RecentMentionsFilters.ALL_SERVERS, everyoneFilter: true, roleFilter: true };
let closure_28 = Storage.get("recentMentionFilterSettings", obj);
let c29 = false;
let c30 = 0;
let c31 = false;
let tmp3 = ((Store) => {
  class RecentMentionsStore {
    constructor() {
      self = this;
      tmp = outer1_3(this, RecentMentionsStore);
      obj = outer1_6(RecentMentionsStore);
      tmp2 = outer1_5;
      if (outer1_32()) {
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
  callback2(RecentMentionsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_9, outer1_10, outer1_11, outer1_12, outer1_13, outer1_14, outer1_15, outer1_16);
    }
  };
  const items = [obj, , , , , , , , , , , , , ];
  obj = {
    key: "hasLoadedEver",
    get() {
      return outer1_29;
    }
  };
  items[1] = obj;
  obj = {
    key: "lastLoaded",
    get() {
      return outer1_30;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getMentions",
    value() {
      if (outer1_29) {
        let tmp2 = outer1_23;
      } else {
        tmp2 = null;
      }
      return tmp2;
    }
  };
  items[4] = {
    key: "getSettingsFilteredMentions",
    value() {
      if (outer1_29) {
        let found = outer1_23.filter(outer1_35);
      } else {
        found = null;
      }
      return found;
    }
  };
  items[5] = {
    key: "hasMention",
    value(arg0) {
      return outer1_25[arg0];
    }
  };
  items[6] = {
    key: "loading",
    get() {
      return outer1_26;
    }
  };
  items[7] = {
    key: "hasMore",
    get() {
      return outer1_27;
    }
  };
  items[8] = {
    key: "guildFilter",
    get() {
      return outer1_28.guildFilter;
    }
  };
  items[9] = {
    key: "everyoneFilter",
    get() {
      return outer1_28.everyoneFilter;
    }
  };
  items[10] = {
    key: "roleFilter",
    get() {
      return outer1_28.roleFilter;
    }
  };
  items[11] = {
    key: "mentionsAreStale",
    get() {
      return outer1_31;
    }
  };
  items[12] = {
    key: "mentionCountByChannel",
    get() {
      return outer1_24;
    }
  };
  items[13] = {
    key: "getMentionCountForChannel",
    value(arg0) {
      let num = 0;
      if (null != outer1_24[arg0]) {
        num = tmp;
      }
      return num;
    }
  };
  return callback(RecentMentionsStore, items);
})(require("initialize").Store);
tmp3.displayName = "RecentMentionsStore";
obj = {
  LOAD_RECENT_MENTIONS: function handleLoadMentions(guildId) {
    let c26 = true;
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
    let mapped = importDefault(22).map(messages, findOrCreateMessageRecord);
    updateChannelMentionCount({ addedMessages: mapped });
    if (isAfter) {
      mapped = mapped.concat(mapped);
    } else {
      let closure_25 = {};
    }
    const arr = importDefault(22);
    const item = importDefault(22).forEach(mapped, (id) => {
      closure_25[id.id] = true;
    });
    let c26 = false;
    const arr2 = importDefault(22);
    let closure_30 = require(4206) /* sleep */.now();
    let c29 = true;
  },
  LOAD_RECENT_MENTIONS_FAILURE: function handleLoadMentionsFailure() {
    let c26 = false;
  },
  SET_RECENT_MENTIONS_FILTER: handleSetRecentMentionsFilters,
  CLEAR_MENTIONS: function handleClearMentions() {
    handleConnectionOpen();
  },
  TRUNCATE_MENTIONS: function handleTruncateMentions(size) {
    let length;
    size = size.size;
    updateChannelMentionCount({ deletedMessages: substr.slice(size) });
    let sum = size;
    if (size < substr.length) {
      do {
        let tmp5 = closure_25;
        let tmp6 = substr;
        let id = substr[sum].id;
        delete tmp2[tmp];
        sum = sum + 1;
        let tmp7 = substr;
        length = substr.length;
      } while (sum < length);
    }
    substr = substr.slice(0, size);
    if (substr.length > substr.length) {
      let c27 = true;
    }
  },
  CHANNEL_SELECT: function handleChannelSelect() {
    if (closure_28.guildFilter !== RecentMentionsFilters.THIS_SERVER) {
      return false;
    } else {
      let c29 = false;
    }
  },
  CONNECTION_OPEN: handleConnectionOpen,
  GUILD_DELETE: function handleGuildDelete(guild) {
    guild = guild.guild;
    const items = [];
    closure_23 = items(22).filter(closure_23, (channel_id) => {
      const channel = outer1_10.getChannel(channel_id.channel_id);
      let flag = null != channel;
      if (flag) {
        flag = channel.getGuildId() !== guild.id;
      }
      if (!flag) {
        const id = channel_id.id;
        delete tmp2[tmp];
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
          substr = substr.slice();
          substr.unshift(tmp3);
          closure_25[tmp3.id] = true;
          obj = {};
          const items = [tmp3];
          obj.addedMessages = items;
          updateChannelMentionCount(obj);
        }
      }
      obj2 = require(4365) /* isMentioned */;
    }
    return false;
  },
  MESSAGE_UPDATE: function handleMessageUpdate(message) {
    const id = message.message.id;
    if (null != id) {
      if (null != dependencyMap[id]) {
        const findIndexResult = importDefault(22).findIndex(substr, (id) => id.id === id);
        substr = substr.slice();
        if (null != substr[findIndexResult]) {
          substr[findIndexResult] = id(4351).updateMessageRecord(tmp7, message.message);
          const obj2 = id(4351);
        }
      }
    }
    return false;
  },
  MESSAGE_DELETE: handleMessageDelete,
  RECENT_MENTION_DELETE: handleMessageDelete,
  MESSAGE_DELETE_BULK: function handleMessageDeleteBulk(ids) {
    const item = importDefault(22).forEach(ids.ids, deleteMessage);
  },
  CHANNEL_DELETE: handleDeleteChannel,
  THREAD_DELETE: handleDeleteChannel,
  RELATIONSHIP_ADD: handleRelationshipUpdate,
  RELATIONSHIP_REMOVE: handleRelationshipUpdate,
  RELATIONSHIP_UPDATE: handleRelationshipUpdate,
  SET_RECENT_MENTIONS_STALE: function handleSetRecentMentionsStale() {
    let c31 = true;
  }
};
tmp3 = new tmp3(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/inbox/RecentMentionsStore.tsx");

export default tmp3;
export { hasMentionNotificationEnabled };
export { parseMessage };
