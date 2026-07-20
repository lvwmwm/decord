// Module ID: 4317
// Function ID: 37806
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4317 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function updateUserGuildSettingsInternal(id, channel_overrides) {
  channel_overrides = undefined;
  if (null != closure_21[id]) {
    channel_overrides = tmp.channel_overrides;
  }
  if (null == channel_overrides) {
    channel_overrides = {};
  }
  let obj = {};
  const merged = Object.assign(getGuildDefaults(id));
  const merged1 = Object.assign(tmp);
  const merged2 = Object.assign(channel_overrides);
  obj["channel_overrides"] = convertChannelOverridesToMap(channel_overrides.channel_overrides);
  importDefaultResult.clearTimer(id);
  const tmp2 = convertChannelOverridesToMap(channel_overrides.channel_overrides);
  const item = importDefault(dependencyMap[16]).forEach(channel_overrides, (channel_id) => {
    closure_27.clearTimer(channel_id.channel_id);
  });
  setMuteTimers(id, obj);
  closure_21[id] = obj;
  closure_29[id] = mutedChannelsForGuild(closure_21[id]);
  const arr = importDefault(dependencyMap[16]);
  const found = importDefault(dependencyMap[16]).filter(obj.channel_overrides, (flags) => {
    flags = flags.flags;
    let num = 0;
    if (null != flags) {
      num = flags;
    }
    return callback(closure_3[17]).hasFlag(num, constants.OPT_IN_ENABLED);
  });
  const arr2 = importDefault(dependencyMap[16]);
  closure_30[id] = new Set(found.map((channel_id) => channel_id.channel_id));
  if (null != id) {
    const _Set = Set;
    const set1 = new Set(closure_30[id]);
    obj = closure_33[id];
    if (null == obj) {
      obj = {};
    }
    for (const key10063 in obj) {
      let tmp20 = key10063;
      let tmp21 = closure_2;
      let tmp22 = closure_3;
      let obj5 = closure_2(closure_3[17]);
      let tmp23 = closure_19;
      if (obj5.hasFlag(obj[key10063].flags, closure_19.OPT_IN_ENABLED)) {
        let addResult = set1.add(key10063);
        // continue
      } else {
        let deleteResult = set1.delete(key10063);
        // continue
      }
      continue;
    }
    const _Object = Object;
    if (Object.keys(obj).length > 0) {
      closure_34[id] = set1;
    } else {
      delete r3[r2];
    }
  }
  delete r1[r2];
}
function setMuteTimers(channel_id, muted) {
  muted = channel_id;
  if (true === muted.muted) {
    if (importDefaultResult.setTimer(channel_id, muted.mute_config, () => {
      callback2(arg0, { muted: false });
      let obj = callback(closure_3[18]);
      obj = { type: "GUILD_MUTE_EXPIRED", guildId: arg0 };
      obj.dispatch(obj);
    })) {
      muted.muted = false;
    }
  }
  const item = importDefault(dependencyMap[16]).forEach(muted.channel_overrides, (muted) => {
    if (true === muted.muted) {
      if (timer.setTimer(muted.channel_id, muted.mute_config, () => {
        callback2(arg0, arg0.channel_id, { muted: false });
        let obj = callback(closure_3[18]);
        obj = { type: "CHANNEL_MUTE_EXPIRED", guildId: arg0, channelId: arg0.channel_id };
        obj.dispatch(obj);
      })) {
        muted.muted = false;
      }
    }
  });
}
function updateUserGuildSettings(arg0, arg1) {
  const obj = {};
  let channel_overrides;
  if (null != closure_21[arg0]) {
    channel_overrides = tmp.channel_overrides;
  }
  if (null == channel_overrides) {
    channel_overrides = {};
  }
  obj.channel_overrides = channel_overrides;
  const merged = Object.assign(arg1);
  updateUserGuildSettingsInternal(arg0, obj);
}
function updateUserGuildChannelSettings(guildId, channelId, settings) {
  updateMultipleChannels(guildId, { [channelId]: computeNewChannelSettings(guildId, channelId, settings) });
}
function updateUserGuildChannelSettingsBulk(guildId, channel_overrides) {
  channel_overrides = guildId;
  const importDefault = channel_overrides;
  let obj = {};
  const importAll = obj;
  obj = null;
  if (null != guildId) {
    obj = closure_33[guildId];
  }
  if (null == obj) {
    obj = {};
  }
  const dependencyMap = obj;
  const keys = importDefault(dependencyMap[19]).keys(channel_overrides);
  const item = keys.forEach((arg0) => {
    const tmp = callback(arg0, arg0, arg1[arg0]);
    obj[arg0] = tmp;
    const obj = {};
    const flags = tmp.flags;
    let num = 0;
    if (null != flags) {
      num = flags;
    }
    obj.flags = num;
    obj[arg0] = obj;
  });
  if (null != guildId) {
    obj = {};
    const merged = Object.assign(closure_33[guildId]);
    const merged1 = Object.assign(obj);
    closure_33[guildId] = obj;
  }
  updateMultipleChannels(guildId, obj);
}
function updateMultipleChannels(guildId, arg1) {
  let channel_overrides;
  if (null != closure_21[guildId]) {
    channel_overrides = tmp.channel_overrides;
  }
  if (null == channel_overrides) {
    channel_overrides = {};
  }
  let obj = {};
  let tmp3 = arg1;
  if (null != closure_21[guildId]) {
    obj = {};
    const merged = Object.assign(channel_overrides);
    const merged1 = Object.assign(arg1);
    tmp3 = obj;
  }
  obj.channel_overrides = tmp3;
  updateUserGuildSettingsInternal(guildId, obj);
}
function computeNewChannelSettings(guildId, channel_id, settings) {
  let channel_overrides;
  if (null != closure_21[guildId]) {
    channel_overrides = tmp.channel_overrides;
  }
  if (null == channel_overrides) {
    channel_overrides = {};
  }
  const merged = Object.assign(channel_overrides[channel_id]);
  const merged1 = Object.assign(settings);
  return { channel_id, muted: false };
}
function getGuildDefaults(guildId) {
  const guild = guild.getGuild(guildId);
  if (null != guild) {
    let ALL_MESSAGES = guild.defaultMessageNotifications;
  } else {
    ALL_MESSAGES = UserNotificationSettings.ALL_MESSAGES;
  }
  return obj[ALL_MESSAGES];
}
function convertChannelOverridesToMap(channel_overrides) {
  let obj = channel_overrides;
  if (channel_overrides === undefined) {
    obj = {};
  }
  let keyByResult = obj;
  if (obj instanceof Array) {
    keyByResult = importDefault(dependencyMap[16]).keyBy(obj, "channel_id");
    const obj2 = importDefault(dependencyMap[16]);
  }
  return keyByResult;
}
function getGuildSettings(guildId) {
  let tmp = closure_21[guildId];
  if (null == tmp) {
    tmp = getGuildDefaults(guildId);
  }
  return tmp;
}
function processAccountNotificationSettings(notificationSettings) {
  let closure_23 = importAll(dependencyMap[17]).hasFlag(notificationSettings.flags, AccountNotificationFlags.USE_NEW_NOTIFICATIONS);
  const obj = importAll(dependencyMap[17]);
  let closure_24 = importAll(dependencyMap[17]).hasFlag(notificationSettings.flags, AccountNotificationFlags.MENTION_ON_ALL_MESSAGES);
  let closure_25 = notificationSettings;
}
function mutedChannelsForGuild(channel_overrides) {
  let valueResult = null;
  if (null != channel_overrides.channel_overrides) {
    const found = importDefault(dependencyMap[16])(channel_overrides.channel_overrides).filter((mute_config) => callback(closure_3[15]).computeIsMuted(mute_config));
    const arr = importDefault(dependencyMap[16])(channel_overrides.channel_overrides);
    valueResult = found.map((channel_id) => channel_id.channel_id).value();
    const iter = found.map((channel_id) => channel_id.channel_id);
  }
  return new Set(valueResult);
}
function handleGuildUpdate() {
  return true;
}
function shouldUseNewUnreadBehavior() {
  return closure_23;
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
({ THREAD_CHANNEL_TYPES: closure_11, isPrivate: closure_12 } = arg1(dependencyMap[7]));
let closure_13 = importDefault(dependencyMap[8]);
let closure_14 = importDefault(dependencyMap[9]);
let closure_15 = importDefault(dependencyMap[10]);
const tmp3 = arg1(dependencyMap[11]);
const UserNotificationSettings = tmp3.UserNotificationSettings;
const AccountNotificationFlags = arg1(dependencyMap[12]).AccountNotificationFlags;
const UnreadSetting = arg1(dependencyMap[13]).UnreadSetting;
const tmp2 = arg1(dependencyMap[7]);
({ ChannelNotificationSettingsFlags: closure_19, GuildNotificationSettingsFlags: closure_20 } = arg1(dependencyMap[14]));
let closure_21 = {};
let closure_22 = {};
let closure_23 = false;
let closure_24 = false;
let closure_25 = { flags: 0 };
let importDefaultResult = importDefault(dependencyMap[15]);
importDefaultResult = new importDefaultResult();
let importDefaultResult1 = importDefault(dependencyMap[15]);
importDefaultResult1 = new importDefaultResult1();
let obj = { message_notifications: UserNotificationSettings.ALL_MESSAGES, channel_overrides: {}, notify_highlights: tmp3.HighlightSettings.NULL };
obj = {};
obj = {};
const merged = Object.assign(obj);
obj["message_notifications"] = UserNotificationSettings.ALL_MESSAGES;
obj[UserNotificationSettings.ALL_MESSAGES] = obj;
const obj1 = {};
const merged1 = Object.assign(obj);
obj1["message_notifications"] = UserNotificationSettings.ONLY_MENTIONS;
obj[UserNotificationSettings.ONLY_MENTIONS] = obj1;
let closure_29 = {};
let closure_30 = {};
const set = new Set();
const set1 = new Set();
let closure_33 = {};
let closure_34 = {};
let tmp13 = (PersistedStore) => {
  class UserGuildSettingsStoreClass {
    constructor() {
      self = this;
      tmp = closure_4(this, UserGuildSettingsStoreClass);
      obj = closure_7(UserGuildSettingsStoreClass);
      tmp2 = closure_6;
      if (closure_35()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = UserGuildSettingsStoreClass;
  callback2(UserGuildSettingsStoreClass, PersistedStore);
  let obj = {
    key: "initialize",
    value(useNewNotifications) {
      this.waitFor(closure_13, closure_14, closure_9, closure_10, closure_15);
      if (null != useNewNotifications) {
        useNewNotifications = useNewNotifications.useNewNotifications;
        let closure_23 = null != useNewNotifications && useNewNotifications;
        if ("userGuildSettings" in useNewNotifications) {
          const userGuildSettings = useNewNotifications.userGuildSettings;
          let prop = useNewNotifications.optedInChannelsByGuild;
          if (null == prop) {
            prop = {};
          }
          let closure_30 = callback(closure_3[16]).mapValues(prop, (items) => new Set(items));
          const obj = callback(closure_3[16]);
          const item = callback(closure_3[16]).forEach(userGuildSettings, (arg0, arg1) => {
            closure_29[arg1] = callback(arg0);
          });
          const arr = callback(closure_3[16]);
        }
      }
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getState",
    value() {
      return { useNewNotifications: closure_23 };
    }
  };
  items[1] = obj;
  obj = {
    key: "mentionOnAllMessages",
    get() {
      return closure_24;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isSuppressEveryoneEnabled",
    value(arg0) {
      return callback7(arg0).suppress_everyone;
    }
  };
  items[4] = {
    key: "isSuppressRolesEnabled",
    value(arg0) {
      return callback7(arg0).suppress_roles;
    }
  };
  items[5] = {
    key: "isMuteScheduledEventsEnabled",
    value(arg0) {
      return callback7(arg0).mute_scheduled_events;
    }
  };
  items[6] = {
    key: "isMobilePushEnabled",
    value(arg0) {
      return callback7(arg0).mobile_push;
    }
  };
  items[7] = {
    key: "isMuted",
    value(arg0) {
      const tmp = callback7(arg0);
      return UserGuildSettingsStoreClass(closure_3[15]).computeIsMuted(tmp);
    }
  };
  items[8] = {
    key: "isTemporarilyMuted",
    value(arg0) {
      const tmp = callback7(arg0);
      return UserGuildSettingsStoreClass(closure_3[15]).isTemporarilyMuted(tmp);
    }
  };
  items[9] = {
    key: "getMuteConfig",
    value(arg0) {
      return callback7(arg0).mute_config;
    }
  };
  items[10] = {
    key: "getMessageNotifications",
    value(arg0) {
      return callback7(arg0).message_notifications;
    }
  };
  items[11] = {
    key: "getChannelOverrides",
    value(arg0) {
      let channel_overrides = callback7(arg0).channel_overrides;
      if (null == channel_overrides) {
        channel_overrides = {};
      }
      return channel_overrides;
    }
  };
  items[12] = {
    key: "getNotifyHighlights",
    value(arg0) {
      return callback7(arg0).notify_highlights;
    }
  };
  items[13] = {
    key: "getGuildFlags",
    value(arg0) {
      return callback7(arg0).flags;
    }
  };
  items[14] = {
    key: "getChannelMessageNotifications",
    value(arg0, arg1) {
      const tmp = this.getChannelOverrides(arg0)[arg1];
      if (null != tmp) {
        if (null != tmp.message_notifications) {
          let NULL = tmp.message_notifications;
        }
        return NULL;
      }
      NULL = constants.NULL;
    }
  };
  items[15] = {
    key: "getChannelMuteConfig",
    value(arg0, arg1) {
      const tmp = this.getChannelOverrides(arg0)[arg1];
      let mute_config = null;
      if (null != tmp) {
        mute_config = tmp.mute_config;
      }
      return mute_config;
    }
  };
  items[16] = {
    key: "getMutedChannels",
    value(arg0) {
      let tmp = closure_29[arg0];
      if (null == tmp) {
        tmp = closure_31;
      }
      return tmp;
    }
  };
  items[17] = {
    key: "isChannelMuted",
    value(arg0, channelId) {
      let tmp = arg0;
      const self = this;
      const channel = store.getChannel(channelId);
      let guildId;
      if (null != channel) {
        guildId = channel.getGuildId();
      }
      if (null != guildId) {
        tmp = guildId;
      }
      const mutedChannels = self.getMutedChannels(tmp);
      return mutedChannels.has(channelId);
    }
  };
  items[18] = {
    key: "isCategoryMuted",
    value(arg0, channelId) {
      const self = this;
      const channel = store.getChannel(channelId);
      if (null == channel) {
        return false;
      } else {
        const parent_id = channel.parent_id;
        let hasItem = null != parent_id;
        if (hasItem) {
          const mutedChannels = self.getMutedChannels(arg0);
          hasItem = mutedChannels.has(parent_id);
        }
        return hasItem;
      }
    }
  };
  items[19] = {
    key: "resolvedMessageNotifications",
    value(guild_id) {
      const self = this;
      const channelMessageNotifications = this.getChannelMessageNotifications(guild_id.guild_id, guild_id.id);
      if (channelMessageNotifications !== constants.NULL) {
        return channelMessageNotifications;
      } else {
        if (null != guild_id.parent_id) {
          const channelMessageNotifications1 = self.getChannelMessageNotifications(guild_id.guild_id, guild_id.parent_id);
          if (channelMessageNotifications1 !== constants.NULL) {
            return channelMessageNotifications1;
          }
        }
        return self.getMessageNotifications(guild_id.guild_id);
      }
    }
  };
  items[20] = {
    key: "resolveUnreadSetting",
    value(type) {
      const self = this;
      if (set.has(type.type)) {
        return constants2.ALL_MESSAGES;
      } else if (callback5(type.type)) {
        return constants2.ALL_MESSAGES;
      } else if (callback8()) {
        const channelUnreadSetting = self.getChannelUnreadSetting(type.guild_id, type.id);
        if (channelUnreadSetting !== constants2.UNSET) {
          return channelUnreadSetting;
        } else {
          if (null != type.parent_id) {
            const channelUnreadSetting1 = self.getChannelUnreadSetting(type.guild_id, type.parent_id);
            if (channelUnreadSetting1 !== constants2.UNSET) {
              return channelUnreadSetting1;
            }
          }
          const guildUnreadSetting = self.getGuildUnreadSetting(type.guild_id);
          if (guildUnreadSetting !== constants2.UNSET) {
            return guildUnreadSetting;
          } else if (self.resolvedMessageNotifications(type) === constants.ALL_MESSAGES) {
            let ONLY_MENTIONS = constants2.ALL_MESSAGES;
          } else {
            ONLY_MENTIONS = constants2.ONLY_MENTIONS;
          }
        }
      } else {
        return constants2.ALL_MESSAGES;
      }
    }
  };
  items[21] = {
    key: "isGuildOrCategoryOrChannelMuted",
    value(id) {
      const self = this;
      return this.isMuted(id) || self.isCategoryMuted(id, arg1) || self.isChannelMuted(id, arg1);
    }
  };
  items[22] = {
    key: "allowNoMessages",
    value(guild_id) {
      const self = this;
      let result = this.isGuildOrCategoryOrChannelMuted(guild_id.guild_id, guild_id.id);
      if (!result) {
        result = self.resolvedMessageNotifications(guild_id) === constants.NO_MESSAGES;
      }
      if (!result) {
        result = self.isOptInEnabled(guild_id.guild_id) && !self.isChannelRecordOrParentOptedIn(guild_id);
        const tmp3 = self.isOptInEnabled(guild_id.guild_id) && !self.isChannelRecordOrParentOptedIn(guild_id);
      }
      return result;
    }
  };
  items[23] = {
    key: "allowAllMessages",
    value(guild_id) {
      const self = this;
      let tmp = !this.isGuildOrCategoryOrChannelMuted(guild_id.guild_id, guild_id.id);
      if (tmp) {
        tmp = self.resolvedMessageNotifications(guild_id) === constants.ALL_MESSAGES;
      }
      if (tmp) {
        tmp = !self.isOptInEnabled(guild_id.guild_id) || self.isChannelRecordOrParentOptedIn(guild_id);
        const tmp3 = !self.isOptInEnabled(guild_id.guild_id) || self.isChannelRecordOrParentOptedIn(guild_id);
      }
      return tmp;
    }
  };
  items[24] = {
    key: "isGuildCollapsed",
    value(arg0) {
      let hide_muted_channels;
      if (null != closure_21[arg0]) {
        hide_muted_channels = tmp.hide_muted_channels;
      }
      return true === hide_muted_channels;
    }
  };
  items[25] = {
    key: "getAllSettings",
    value() {
      return { userGuildSettings: closure_21, mutedChannels: closure_29, optedInChannelsByGuild: closure_30 };
    }
  };
  items[26] = {
    key: "getChannelIdFlags",
    value(arg0, arg1) {
      const tmp = this.getChannelOverrides(arg0)[arg1];
      let flags;
      if (null != tmp) {
        flags = tmp.flags;
      }
      let num = 0;
      if (null != flags) {
        num = flags;
      }
      return num;
    }
  };
  items[27] = {
    key: "getChannelFlags",
    value(guild_id) {
      return this.getChannelIdFlags(guild_id.guild_id, guild_id.id);
    }
  };
  items[28] = {
    key: "getNewForumThreadsCreated",
    value(arg0) {
      const self = this;
      const tmp = this.getChannelOverrides(arg0.guild_id)[arg0.id];
      if (null != tmp) {
        if (null != tmp.flags) {
          if (obj.hasFlag(tmp.flags, constants3.NEW_FORUM_THREADS_ON)) {
            return true;
          } else {
            if (obj2.hasFlag(tmp.flags, constants3.NEW_FORUM_THREADS_OFF)) {
              return false;
            }
            const obj2 = callback2(closure_3[17]);
          }
          const obj = callback2(closure_3[17]);
        }
      }
      return self.resolvedMessageNotifications(arg0) === constants.ALL_MESSAGES;
    }
  };
  items[29] = {
    key: "isOptInEnabled",
    value(arg0) {
      const self = this;
      if (null == arg0) {
        return tmp;
      } else if (closure_9.isFullServerPreview(arg0)) {
        let isOptInEnabledResult = closure_9.isOptInEnabled(arg0);
      } else {
        isOptInEnabledResult = callback2(closure_3[17]).hasFlag(self.getGuildFlags(arg0), constants4.OPT_IN_CHANNELS_ON);
        const obj = callback2(closure_3[17]);
      }
    }
  };
  items[30] = {
    key: "isChannelRecordOrParentOptedIn",
    value(guild_id) {
      const self = this;
      let tmp = null != guild_id && null != guild_id.guild_id;
      if (tmp) {
        let isChannelOptedInResult = self.isChannelOptedIn(guild_id.guild_id, guild_id.id, arg1);
        if (!isChannelOptedInResult) {
          isChannelOptedInResult = null != guild_id.parent_id && self.isChannelOptedIn(guild_id.guild_id, guild_id.parent_id, arg1);
          const tmp3 = null != guild_id.parent_id && self.isChannelOptedIn(guild_id.guild_id, guild_id.parent_id, arg1);
        }
        tmp = isChannelOptedInResult;
      }
      return tmp;
    }
  };
  items[31] = {
    key: "isChannelOrParentOptedIn",
    value(arg0, channelId) {
      return this.isChannelRecordOrParentOptedIn(store.getChannel(channelId), arg2);
    }
  };
  items[32] = {
    key: "isChannelOptedIn",
    value(arg0, arg1) {
      let flag = arg2;
      const self = this;
      if (arg2 === undefined) {
        flag = false;
      }
      if (null == arg0) {
        return false;
      } else if (closure_9.isFullServerPreview(arg0)) {
        return closure_9.isChannelOptedIn(arg0, arg1);
      } else {
        if (flag) {
          if (null != closure_34[arg0]) {
            return closure_34[arg0].has(arg1);
          }
        }
        const tmp2 = self.getChannelOverrides(arg0)[arg1];
        let flags;
        if (null != tmp2) {
          flags = tmp2.flags;
        }
        let num = 0;
        if (null != flags) {
          num = flags;
        }
        return callback2(closure_3[17]).hasFlag(num, constants3.OPT_IN_ENABLED);
      }
    }
  };
  items[33] = {
    key: "getOptedInChannels",
    value(arg0) {
      if (closure_9.isFullServerPreview(arg0)) {
        let viewingChannels = closure_9.getViewingChannels(arg0);
        if (null == viewingChannels) {
          viewingChannels = closure_32;
        }
        let tmp2 = viewingChannels;
      } else {
        tmp2 = closure_30[arg0];
        if (null == tmp2) {
          tmp2 = closure_32;
        }
      }
      return tmp2;
    }
  };
  items[34] = {
    key: "getOptedInChannelsWithPendingUpdates",
    value(arg0) {
      return closure_34[arg0];
    }
  };
  items[35] = {
    key: "getPendingChannelUpdates",
    value(arg0) {
      return closure_33[arg0];
    }
  };
  items[36] = {
    key: "getGuildFavorites",
    value(arg0) {
      const self = this;
      const UserGuildSettingsStoreClass = arg0;
      if (closure_9.isFullServerPreview(arg0)) {
        return null;
      } else {
        if (null == closure_22[arg0]) {
          const found = callback(closure_3[16]).filter(self.getChannelOverrides(arg0), (flags) => {
            flags = flags.flags;
            let num = 0;
            if (null != flags) {
              num = flags;
            }
            let hasFlagResult = callback(closure_3[17]).hasFlag(num, constants.FAVORITED);
            if (hasFlagResult) {
              const channel = channel.getChannel(flags.channel_id);
              let guild_id;
              if (null != channel) {
                guild_id = channel.guild_id;
              }
              hasFlagResult = guild_id === flags;
            }
            return hasFlagResult;
          });
          closure_22[arg0] = found.map((channel_id) => channel_id.channel_id);
          const arr = callback(closure_3[16]);
        }
        return closure_22[arg0];
      }
    }
  };
  items[37] = {
    key: "isFavorite",
    value(arg0, arg1) {
      const self = this;
      let tmp = !closure_9.isFullServerPreview(arg0);
      if (tmp) {
        const guildFavorites = self.getGuildFavorites(arg0);
        let hasItem;
        if (null != guildFavorites) {
          hasItem = guildFavorites.includes(arg1);
        }
        tmp = true === hasItem;
      }
      return tmp;
    }
  };
  items[38] = {
    key: "isMessagesFavorite",
    value(arg0) {
      const tmp = this.getChannelOverrides(null)[arg0];
      let flags;
      if (null != tmp) {
        flags = tmp.flags;
      }
      let num = 0;
      if (null != flags) {
        num = flags;
      }
      return callback2(closure_3[17]).hasFlag(num, constants3.FAVORITED);
    }
  };
  items[39] = {
    key: "accountNotificationSettings",
    get() {
      return closure_25;
    }
  };
  items[40] = {
    key: "useNewNotifications",
    get() {
      return closure_23;
    }
  };
  items[41] = {
    key: "getGuildUnreadSetting",
    value(arg0) {
      const self = this;
      if (callback8()) {
        const guildFlags = self.getGuildFlags(arg0);
        if (obj.hasFlag(guildFlags, constants4.UNREADS_ALL_MESSAGES)) {
          let ALL_MESSAGES = constants2.ALL_MESSAGES;
        } else {
          ALL_MESSAGES = callback2(closure_3[17]).hasFlag(guildFlags, constants4.UNREADS_ONLY_MENTIONS) ? tmp10.ONLY_MENTIONS : tmp10.UNSET;
          const obj2 = callback2(closure_3[17]);
        }
        return ALL_MESSAGES;
      } else {
        return constants2.ALL_MESSAGES;
      }
    }
  };
  items[42] = {
    key: "resolveGuildUnreadSetting",
    value(id) {
      const guildFlags = this.getGuildFlags(id.id);
      if (callback8()) {
        if (obj.hasFlag(guildFlags, constants4.UNREADS_ALL_MESSAGES)) {
          let ONLY_MENTIONS = constants2.ALL_MESSAGES;
        } else {
          if (obj2.hasFlag(guildFlags, constants4.UNREADS_ONLY_MENTIONS)) {
            ONLY_MENTIONS = constants2.ONLY_MENTIONS;
          } else if (id.defaultMessageNotifications === constants.ALL_MESSAGES) {
            ONLY_MENTIONS = constants2.ALL_MESSAGES;
          } else {
            ONLY_MENTIONS = constants2.ONLY_MENTIONS;
          }
          const obj2 = callback2(closure_3[17]);
        }
        const obj = callback2(closure_3[17]);
      } else {
        return constants2.ALL_MESSAGES;
      }
    }
  };
  items[43] = {
    key: "getChannelRecordUnreadSetting",
    value(guild_id) {
      return this.getChannelUnreadSetting(guild_id.guild_id, guild_id.id);
    }
  };
  items[44] = {
    key: "getChannelUnreadSetting",
    value(arg0, arg1) {
      const channelIdFlags = this.getChannelIdFlags(arg0, arg1);
      if (obj.hasFlag(channelIdFlags, constants3.UNREADS_ALL_MESSAGES)) {
        let ALL_MESSAGES = constants2.ALL_MESSAGES;
      } else {
        ALL_MESSAGES = callback2(closure_3[17]).hasFlag(channelIdFlags, constants3.UNREADS_ONLY_MENTIONS) ? tmp5.ONLY_MENTIONS : tmp5.UNSET;
        const obj2 = callback2(closure_3[17]);
      }
      return ALL_MESSAGES;
    }
  };
  return callback(UserGuildSettingsStoreClass, items);
}(importDefault(dependencyMap[20]).PersistedStore);
tmp13.displayName = "UserGuildSettingsStore";
tmp13.persistKey = "collapsedGuilds";
tmp13 = new tmp13(importDefault(dependencyMap[18]), {
  USER_GUILD_SETTINGS_FULL_UPDATE: function handleUserGuildSettingsFullUpdate(userGuildSettings) {
    userGuildSettings = userGuildSettings.userGuildSettings;
    const item = userGuildSettings.forEach((guild_id) => {
      const merged = Object.assign(guild_id);
      callback(guild_id.guild_id, { channel_overrides: {} });
    });
  },
  USER_GUILD_SETTINGS_GUILD_UPDATE: function handleUserGuildSettingsGuildUpdate(guildId) {
    updateUserGuildSettings(guildId.guildId, guildId.settings);
  },
  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: function handleUserGuildSettingsGuildAndChannelsUpdate(arg0) {
    let guildId;
    let settings;
    ({ guildId, settings } = arg0);
    updateUserGuildSettings(guildId, settings);
    updateUserGuildChannelSettingsBulk(guildId, settings.channel_overrides);
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE: function handleUserGuildSettingsChannelUpdate(arg0) {
    let channelId;
    let guildId;
    let settings;
    ({ guildId, channelId, settings } = arg0);
    if (tmp) {
      let obj = {};
      const merged = Object.assign(closure_33[guildId]);
      obj = { flags: settings.flags };
      obj[channelId] = obj;
      closure_33[guildId] = obj;
    }
    updateUserGuildChannelSettings(guildId, channelId, settings);
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: function handleUserGuildSettingsChannelUpdateBulk(guildId) {
    guildId = guildId.guildId;
    let flag = null != guildId;
    if (flag) {
      flag = !fullServerPreview.isFullServerPreview(guildId);
    }
    if (flag) {
      updateUserGuildChannelSettingsBulk(guildId, guildId.overrides);
      flag = true;
    }
    return flag;
  },
  CONNECTION_OPEN: function handleConnectionOpen(notificationSettings) {
    processAccountNotificationSettings(notificationSettings.notificationSettings);
    importDefaultResult.reset();
    importDefaultResult1.reset();
    if (!notificationSettings.userGuildSettings.partial) {
      let closure_21 = {};
      let closure_29 = {};
      let closure_30 = {};
    }
    const set = new Set();
    const arg1 = set;
    const entries = notificationSettings.userGuildSettings.entries;
    const item = entries.forEach((guild_id) => {
      if (!("channel_overrides" in guild_id)) {
        guild_id.channel_overrides = {};
      }
      callback(guild_id.guild_id, guild_id);
      if (null != guild_id.guild_id) {
        set.add(guild_id.guild_id);
      }
    });
    for (const key10030 in closure_21) {
      let tmp8 = key10030;
      if (set.has(key10030)) {
        continue;
      } else {
        let tmp5 = closure_37;
        let tmp6 = closure_21;
        let tmp7 = closure_37(key10030, closure_21[key10030]);
        // continue
      }
      continue;
    }
  },
  CACHE_LOADED: function handleCacheLoaded(userGuildSettings) {
    let tmp = null != userGuildSettings.userGuildSettings;
    if (tmp) {
      tmp = 0 !== userGuildSettings.userGuildSettings.length;
    }
    if (tmp) {
      let closure_21 = {};
      let closure_29 = {};
      let closure_30 = {};
      userGuildSettings = userGuildSettings.userGuildSettings;
      const item = userGuildSettings.forEach((guild_id) => {
        guild_id = guild_id.guild_id;
        closure_21[guild_id] = guild_id;
        const set = new Set();
        const set1 = new Set();
        for (const key10022 in arg0.channel_overrides) {
          let tmp6 = key10022;
          let tmp7 = arg0.channel_overrides[key10022];
          let tmp8 = closure_0;
          let tmp9 = closure_3;
          let obj4 = closure_0(closure_3[15]);
          if (obj4.computeIsMuted(tmp7)) {
            let addResult = set.add(key10022);
          }
          let tmp2 = closure_2;
          let tmp3 = closure_3;
          let obj3 = closure_2(closure_3[17]);
          let flags = tmp7.flags;
          let num = 0;
          if (null != flags) {
            num = flags;
          }
          let tmp4 = closure_19;
          if (!obj3.hasFlag(num, closure_19.OPT_IN_ENABLED)) {
            continue;
          } else {
            let addResult1 = set1.add(key10022);
            // continue
          }
          continue;
        }
        closure_29[guild_id] = set;
        closure_30[guild_id] = set1;
      });
    }
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(allUserGuildSettings) {
    allUserGuildSettings = allUserGuildSettings.allUserGuildSettings;
    const mutedChannels = allUserGuildSettings.mutedChannels;
    const arg1 = mutedChannels;
    const optedInChannelsByGuild = allUserGuildSettings.optedInChannelsByGuild;
    const importDefault = optedInChannelsByGuild;
    const merged = Object.assign(allUserGuildSettings.userGuildSettings);
    let closure_21 = {};
    let closure_29 = {};
    let closure_30 = {};
    const keys = importDefault(dependencyMap[19]).keys(mutedChannels);
    const item = keys.forEach((arg0) => {
      closure_29[arg0] = new Set(mutedChannels[arg0]);
    });
    const obj = {};
    const obj2 = importDefault(dependencyMap[19]);
    const keys1 = importDefault(dependencyMap[19]).keys(optedInChannelsByGuild);
    const item1 = keys1.forEach((arg0) => {
      closure_30[arg0] = new Set(optedInChannelsByGuild[arg0]);
    });
  },
  GUILD_CREATE: handleGuildUpdate,
  GUILD_UPDATE: handleGuildUpdate,
  GUILD_TOGGLE_COLLAPSE_MUTED: function handleToggleCollapseMuted(guildId) {
    guildId = guildId.guildId;
    if (null == closure_21[guildId]) {
      let tmp2 = getGuildDefaults(guildId);
    } else {
      tmp2 = closure_21[guildId];
    }
    const obj = {};
    const merged = Object.assign(tmp2);
    obj["guild_id"] = guildId;
    obj["hide_muted_channels"] = true !== tmp2.hide_muted_channels;
    closure_21[guildId] = obj;
  },
  IMPERSONATE_UPDATE: handleGuildUpdate,
  IMPERSONATE_STOP: handleGuildUpdate,
  USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES: function handleRemovePendingUpdates(arg0) {
    let guildId;
    let updates;
    ({ guildId, updates } = arg0);
    if (null == guildId) {
      return false;
    } else if (null == closure_33[guildId]) {
      return false;
    } else {
      for (const key10010 in updates) {
        let tmp4 = key10010;
        let tmp5 = closure_1;
        let tmp6 = closure_3;
        let obj = closure_1(closure_3[16]);
        if (!obj.isEqual(updates[key10010], tmp2[key10010])) {
          continue;
        } else {
          delete r7[r10];
          // continue
        }
        continue;
      }
    }
  },
  CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: function handleClearPendingUpdates(guildId) {
    if (null == guildId.guildId) {
      return false;
    } else {
      delete r2[r1];
      delete r0[r1];
    }
  },
  NOTIFICATION_SETTINGS_UPDATE: function handleNotificationSettingsUpdate(settings) {
    processAccountNotificationSettings(settings.settings);
  },
  GUILD_MUTE_EXPIRED() {
    return true;
  },
  CHANNEL_MUTE_EXPIRED() {
    return true;
  }
});
const obj2 = {
  USER_GUILD_SETTINGS_FULL_UPDATE: function handleUserGuildSettingsFullUpdate(userGuildSettings) {
    userGuildSettings = userGuildSettings.userGuildSettings;
    const item = userGuildSettings.forEach((guild_id) => {
      const merged = Object.assign(guild_id);
      callback(guild_id.guild_id, { channel_overrides: {} });
    });
  },
  USER_GUILD_SETTINGS_GUILD_UPDATE: function handleUserGuildSettingsGuildUpdate(guildId) {
    updateUserGuildSettings(guildId.guildId, guildId.settings);
  },
  USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: function handleUserGuildSettingsGuildAndChannelsUpdate(arg0) {
    let guildId;
    let settings;
    ({ guildId, settings } = arg0);
    updateUserGuildSettings(guildId, settings);
    updateUserGuildChannelSettingsBulk(guildId, settings.channel_overrides);
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE: function handleUserGuildSettingsChannelUpdate(arg0) {
    let channelId;
    let guildId;
    let settings;
    ({ guildId, channelId, settings } = arg0);
    if (tmp) {
      let obj = {};
      const merged = Object.assign(closure_33[guildId]);
      obj = { flags: settings.flags };
      obj[channelId] = obj;
      closure_33[guildId] = obj;
    }
    updateUserGuildChannelSettings(guildId, channelId, settings);
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: function handleUserGuildSettingsChannelUpdateBulk(guildId) {
    guildId = guildId.guildId;
    let flag = null != guildId;
    if (flag) {
      flag = !fullServerPreview.isFullServerPreview(guildId);
    }
    if (flag) {
      updateUserGuildChannelSettingsBulk(guildId, guildId.overrides);
      flag = true;
    }
    return flag;
  },
  CONNECTION_OPEN: function handleConnectionOpen(notificationSettings) {
    processAccountNotificationSettings(notificationSettings.notificationSettings);
    importDefaultResult.reset();
    importDefaultResult1.reset();
    if (!notificationSettings.userGuildSettings.partial) {
      let closure_21 = {};
      let closure_29 = {};
      let closure_30 = {};
    }
    const set = new Set();
    const arg1 = set;
    const entries = notificationSettings.userGuildSettings.entries;
    const item = entries.forEach((guild_id) => {
      if (!("channel_overrides" in guild_id)) {
        guild_id.channel_overrides = {};
      }
      callback(guild_id.guild_id, guild_id);
      if (null != guild_id.guild_id) {
        set.add(guild_id.guild_id);
      }
    });
    for (const key10030 in closure_21) {
      let tmp8 = key10030;
      if (set.has(key10030)) {
        continue;
      } else {
        let tmp5 = closure_37;
        let tmp6 = closure_21;
        let tmp7 = closure_37(key10030, closure_21[key10030]);
        // continue
      }
      continue;
    }
  },
  CACHE_LOADED: function handleCacheLoaded(userGuildSettings) {
    let tmp = null != userGuildSettings.userGuildSettings;
    if (tmp) {
      tmp = 0 !== userGuildSettings.userGuildSettings.length;
    }
    if (tmp) {
      let closure_21 = {};
      let closure_29 = {};
      let closure_30 = {};
      userGuildSettings = userGuildSettings.userGuildSettings;
      const item = userGuildSettings.forEach((guild_id) => {
        guild_id = guild_id.guild_id;
        closure_21[guild_id] = guild_id;
        const set = new Set();
        const set1 = new Set();
        for (const key10022 in arg0.channel_overrides) {
          let tmp6 = key10022;
          let tmp7 = arg0.channel_overrides[key10022];
          let tmp8 = closure_0;
          let tmp9 = closure_3;
          let obj4 = closure_0(closure_3[15]);
          if (obj4.computeIsMuted(tmp7)) {
            let addResult = set.add(key10022);
          }
          let tmp2 = closure_2;
          let tmp3 = closure_3;
          let obj3 = closure_2(closure_3[17]);
          let flags = tmp7.flags;
          let num = 0;
          if (null != flags) {
            num = flags;
          }
          let tmp4 = closure_19;
          if (!obj3.hasFlag(num, closure_19.OPT_IN_ENABLED)) {
            continue;
          } else {
            let addResult1 = set1.add(key10022);
            // continue
          }
          continue;
        }
        closure_29[guild_id] = set;
        closure_30[guild_id] = set1;
      });
    }
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(allUserGuildSettings) {
    allUserGuildSettings = allUserGuildSettings.allUserGuildSettings;
    const mutedChannels = allUserGuildSettings.mutedChannels;
    const arg1 = mutedChannels;
    const optedInChannelsByGuild = allUserGuildSettings.optedInChannelsByGuild;
    const importDefault = optedInChannelsByGuild;
    const merged = Object.assign(allUserGuildSettings.userGuildSettings);
    let closure_21 = {};
    let closure_29 = {};
    let closure_30 = {};
    const keys = importDefault(dependencyMap[19]).keys(mutedChannels);
    const item = keys.forEach((arg0) => {
      closure_29[arg0] = new Set(mutedChannels[arg0]);
    });
    const obj = {};
    const obj2 = importDefault(dependencyMap[19]);
    const keys1 = importDefault(dependencyMap[19]).keys(optedInChannelsByGuild);
    const item1 = keys1.forEach((arg0) => {
      closure_30[arg0] = new Set(optedInChannelsByGuild[arg0]);
    });
  },
  GUILD_CREATE: handleGuildUpdate,
  GUILD_UPDATE: handleGuildUpdate,
  GUILD_TOGGLE_COLLAPSE_MUTED: function handleToggleCollapseMuted(guildId) {
    guildId = guildId.guildId;
    if (null == closure_21[guildId]) {
      let tmp2 = getGuildDefaults(guildId);
    } else {
      tmp2 = closure_21[guildId];
    }
    const obj = {};
    const merged = Object.assign(tmp2);
    obj["guild_id"] = guildId;
    obj["hide_muted_channels"] = true !== tmp2.hide_muted_channels;
    closure_21[guildId] = obj;
  },
  IMPERSONATE_UPDATE: handleGuildUpdate,
  IMPERSONATE_STOP: handleGuildUpdate,
  USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES: function handleRemovePendingUpdates(arg0) {
    let guildId;
    let updates;
    ({ guildId, updates } = arg0);
    if (null == guildId) {
      return false;
    } else if (null == closure_33[guildId]) {
      return false;
    } else {
      for (const key10010 in updates) {
        let tmp4 = key10010;
        let tmp5 = closure_1;
        let tmp6 = closure_3;
        let obj = closure_1(closure_3[16]);
        if (!obj.isEqual(updates[key10010], tmp2[key10010])) {
          continue;
        } else {
          delete r7[r10];
          // continue
        }
        continue;
      }
    }
  },
  CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: function handleClearPendingUpdates(guildId) {
    if (null == guildId.guildId) {
      return false;
    } else {
      delete r2[r1];
      delete r0[r1];
    }
  },
  NOTIFICATION_SETTINGS_UPDATE: function handleNotificationSettingsUpdate(settings) {
    processAccountNotificationSettings(settings.settings);
  },
  GUILD_MUTE_EXPIRED() {
    return true;
  },
  CHANNEL_MUTE_EXPIRED() {
    return true;
  }
};
const tmp4 = arg1(dependencyMap[14]);
const result = arg1(dependencyMap[21]).fileFinishedImporting("stores/UserGuildSettingsStore.tsx");

export default tmp13;
export { getGuildDefaults };
export { convertChannelOverridesToMap };
