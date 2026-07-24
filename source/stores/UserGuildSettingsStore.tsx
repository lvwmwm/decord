// Module ID: 4325
// Function ID: 37903
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1909, 3760, 1352, 1348, 1838, 1849, 653, 3770, 4326, 662, 3761, 22, 1360, 686, 21, 566, 2]

// Module 4325 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_callSuper";
import MuteTimers from "MuteTimers";
import hasFlag from "hasFlag";
import dispatcher from "dispatcher";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import _callSuper from "_callSuper";
import closure_13 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_15 from "_isNativeReflectConstruct";
import ME from "ME";
import { AccountNotificationFlags } from "AccountNotificationFlags";
import { UnreadSetting } from "ReadStateTypes";
import MAX_FAVORITES from "MAX_FAVORITES";
import importDefaultResult from "MuteTimers";
import importDefaultResult1 from "MuteTimers";
import set from "_possibleConstructorReturn";

let closure_11;
let closure_12;
let closure_19;
let closure_20;
const require = arg1;
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
  if (null != dependencyMap[id]) {
    channel_overrides = tmp4.channel_overrides;
  }
  if (null == channel_overrides) {
    channel_overrides = {};
  }
  let obj = {};
  const merged = Object.assign(getGuildDefaults(id));
  const merged1 = Object.assign(tmp4);
  const merged2 = Object.assign(channel_overrides);
  obj["channel_overrides"] = convertChannelOverridesToMap(channel_overrides.channel_overrides);
  importDefaultResult.clearTimer(id);
  const tmp5 = convertChannelOverridesToMap(channel_overrides.channel_overrides);
  const item = importDefault(22).forEach(channel_overrides, (channel_id) => {
    outer1_27.clearTimer(channel_id.channel_id);
  });
  setMuteTimers(id, obj);
  dependencyMap[id] = obj;
  closure_29[id] = mutedChannelsForGuild(dependencyMap[id]);
  const arr = importDefault(22);
  const found = importDefault(22).filter(obj.channel_overrides, (flags) => {
    flags = flags.flags;
    let num = 0;
    if (null != flags) {
      num = flags;
    }
    return outer1_2(outer1_3[17]).hasFlag(num, outer1_19.OPT_IN_ENABLED);
  });
  const arr2 = importDefault(22);
  table[id] = new Set(found.map((channel_id) => channel_id.channel_id));
  if (null != id) {
    const _Set = Set;
    const set1 = new Set(table[id]);
    obj = dependencyMap2[id];
    if (null == obj) {
      obj = {};
    }
    for (const key10063 in obj) {
      let tmp23 = key10063;
      let tmp24 = importAll;
      let tmp25 = dependencyMap;
      let obj5 = importAll(1360);
      let tmp26 = constants;
      if (obj5.hasFlag(obj[key10063].flags, constants.OPT_IN_ENABLED)) {
        let addResult = set1.add(key10063);
        continue;
      } else {
        let deleteResult = set1.delete(key10063);
        continue;
      }
      continue;
    }
    const _Object = Object;
    if (Object.keys(obj).length > 0) {
      closure_34[id] = set1;
    } else {
      delete tmp3[tmp2];
    }
  }
  delete tmp[tmp2];
}
function setMuteTimers(key10030, muted) {
  let closure_0 = key10030;
  if (true === muted.muted) {
    if (importDefaultResult.setTimer(key10030, muted.mute_config, () => {
      outer1_38(closure_0, { muted: false });
      let obj = outer1_1(outer1_3[18]);
      obj = { type: "GUILD_MUTE_EXPIRED", guildId: closure_0 };
      obj.dispatch(obj);
    })) {
      muted.muted = false;
    }
  }
  const item = importDefault(22).forEach(muted.channel_overrides, (muted) => {
    let closure_0 = muted;
    if (true === muted.muted) {
      if (outer1_27.setTimer(muted.channel_id, muted.mute_config, () => {
        outer2_39(muted, muted.channel_id, { muted: false });
        let obj = outer2_1(outer2_3[18]);
        obj = { type: "CHANNEL_MUTE_EXPIRED", guildId: muted, channelId: muted.channel_id };
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
  if (null != dependencyMap[arg0]) {
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
  let closure_0 = guildId;
  const importDefault = channel_overrides;
  let obj = {};
  obj = null;
  if (null != guildId) {
    obj = dependencyMap2[guildId];
  }
  if (null == obj) {
    obj = {};
  }
  const keys = importDefault(obj[19]).keys(channel_overrides);
  const item = keys.forEach((arg0) => {
    const tmp = outer1_42(closure_0, arg0, table[arg0]);
    obj[arg0] = tmp;
    obj = {};
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
    const merged = Object.assign(dependencyMap2[guildId]);
    const merged1 = Object.assign(obj);
    dependencyMap2[guildId] = obj;
  }
  updateMultipleChannels(guildId, obj);
}
function updateMultipleChannels(guildId, arg1) {
  let channel_overrides;
  if (null != dependencyMap[guildId]) {
    channel_overrides = tmp.channel_overrides;
  }
  if (null == channel_overrides) {
    channel_overrides = {};
  }
  let obj = {};
  let tmp3 = arg1;
  if (null != dependencyMap[guildId]) {
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
  if (null != dependencyMap[guildId]) {
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
  guild = guild.getGuild(guildId);
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
    keyByResult = importDefault(22).keyBy(obj, "channel_id");
    const obj2 = importDefault(22);
  }
  return keyByResult;
}
function getGuildSettings(guildId) {
  let tmp = dependencyMap[guildId];
  if (null == tmp) {
    tmp = getGuildDefaults(guildId);
  }
  return tmp;
}
function processAccountNotificationSettings(notificationSettings) {
  let closure_23 = importAll(1360).hasFlag(notificationSettings.flags, AccountNotificationFlags.USE_NEW_NOTIFICATIONS);
  const obj = importAll(1360);
  let closure_24 = importAll(1360).hasFlag(notificationSettings.flags, AccountNotificationFlags.MENTION_ON_ALL_MESSAGES);
  let closure_25 = notificationSettings;
}
function mutedChannelsForGuild(channel_overrides) {
  let valueResult = null;
  if (null != channel_overrides.channel_overrides) {
    const found = importDefault(22)(channel_overrides.channel_overrides).filter((mute_config) => outer1_0(outer1_3[15]).computeIsMuted(mute_config));
    const arr = importDefault(22)(channel_overrides.channel_overrides);
    valueResult = found.map((channel_id) => channel_id.channel_id).value();
    const iter = found.map((channel_id) => channel_id.channel_id);
  }
  return new Set(valueResult);
}
function handleGuildUpdate() {
  return true;
}
function shouldUseNewUnreadBehavior() {
  return c23;
}
({ THREAD_CHANNEL_TYPES: closure_11, isPrivate: closure_12 } = _callSuper);
const UserNotificationSettings = ME.UserNotificationSettings;
({ ChannelNotificationSettingsFlags: closure_19, GuildNotificationSettingsFlags: closure_20 } = MAX_FAVORITES);
let closure_21 = {};
let closure_22 = {};
let c23 = false;
let c24 = false;
let closure_25 = { flags: 0 };
importDefaultResult = new importDefaultResult();
importDefaultResult1 = new importDefaultResult1();
let obj = { suppress_everyone: false, suppress_roles: false, mute_scheduled_events: false, mobile_push: true, muted: false, message_notifications: UserNotificationSettings.ALL_MESSAGES, flags: 0, channel_overrides: {}, notify_highlights: ME.HighlightSettings.NULL, hide_muted_channels: false, version: -1, mute_config: null };
obj = {};
obj = {};
let merged = Object.assign(obj);
obj["message_notifications"] = UserNotificationSettings.ALL_MESSAGES;
obj[UserNotificationSettings.ALL_MESSAGES] = obj;
const obj1 = {};
let merged1 = Object.assign(obj);
obj1["message_notifications"] = UserNotificationSettings.ONLY_MENTIONS;
obj[UserNotificationSettings.ONLY_MENTIONS] = obj1;
let closure_29 = {};
let closure_30 = {};
let set = new Set();
let set1 = new Set();
let closure_33 = {};
let closure_34 = {};
let tmp13 = ((PersistedStore) => {
  class UserGuildSettingsStoreClass {
    constructor() {
      self = this;
      tmp = outer1_4(this, UserGuildSettingsStoreClass);
      obj = outer1_7(UserGuildSettingsStoreClass);
      tmp2 = outer1_6;
      if (outer1_35()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(UserGuildSettingsStoreClass, PersistedStore);
  let obj = {
    key: "initialize",
    value(useNewNotifications) {
      this.waitFor(outer1_13, outer1_14, outer1_9, outer1_10, outer1_15);
      if (null != useNewNotifications) {
        useNewNotifications = useNewNotifications.useNewNotifications;
        const outer1_23 = null != useNewNotifications && useNewNotifications;
        if ("userGuildSettings" in useNewNotifications) {
          const outer1_21 = useNewNotifications.userGuildSettings;
          let prop = useNewNotifications.optedInChannelsByGuild;
          if (null == prop) {
            prop = {};
          }
          const outer1_30 = outer1_1(outer1_3[16]).mapValues(prop, (items) => new Set(items));
          const obj = outer1_1(outer1_3[16]);
          const item = outer1_1(outer1_3[16]).forEach(outer1_21, (arg0, arg1) => {
            outer2_29[arg1] = outer2_47(arg0);
          });
          const arr = outer1_1(outer1_3[16]);
        }
      }
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getState",
    value() {
      return { useNewNotifications: outer1_23 };
    }
  };
  items[1] = obj;
  obj = {
    key: "mentionOnAllMessages",
    get() {
      return outer1_24;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isSuppressEveryoneEnabled",
    value(arg0) {
      return outer1_45(arg0).suppress_everyone;
    }
  };
  items[4] = {
    key: "isSuppressRolesEnabled",
    value(arg0) {
      return outer1_45(arg0).suppress_roles;
    }
  };
  items[5] = {
    key: "isMuteScheduledEventsEnabled",
    value(arg0) {
      return outer1_45(arg0).mute_scheduled_events;
    }
  };
  items[6] = {
    key: "isMobilePushEnabled",
    value(arg0) {
      return outer1_45(arg0).mobile_push;
    }
  };
  items[7] = {
    key: "isMuted",
    value(arg0) {
      const tmp = outer1_45(arg0);
      return UserGuildSettingsStoreClass(outer1_3[15]).computeIsMuted(tmp);
    }
  };
  items[8] = {
    key: "isTemporarilyMuted",
    value(arg0) {
      const tmp = outer1_45(arg0);
      return UserGuildSettingsStoreClass(outer1_3[15]).isTemporarilyMuted(tmp);
    }
  };
  items[9] = {
    key: "getMuteConfig",
    value(arg0) {
      return outer1_45(arg0).mute_config;
    }
  };
  items[10] = {
    key: "getMessageNotifications",
    value(arg0) {
      return outer1_45(arg0).message_notifications;
    }
  };
  items[11] = {
    key: "getChannelOverrides",
    value(arg0) {
      let channel_overrides = outer1_45(arg0).channel_overrides;
      if (null == channel_overrides) {
        channel_overrides = {};
      }
      return channel_overrides;
    }
  };
  items[12] = {
    key: "getNotifyHighlights",
    value(arg0) {
      return outer1_45(arg0).notify_highlights;
    }
  };
  items[13] = {
    key: "getGuildFlags",
    value(arg0) {
      return outer1_45(arg0).flags;
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
      NULL = outer1_16.NULL;
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
      let tmp = outer1_29[arg0];
      if (null == tmp) {
        tmp = outer1_31;
      }
      return tmp;
    }
  };
  items[17] = {
    key: "isChannelMuted",
    value(arg0, channelId) {
      let tmp = arg0;
      const self = this;
      const channel = outer1_13.getChannel(channelId);
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
      const channel = outer1_13.getChannel(channelId);
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
      if (channelMessageNotifications !== outer1_16.NULL) {
        return channelMessageNotifications;
      } else {
        if (null != guild_id.parent_id) {
          const channelMessageNotifications1 = self.getChannelMessageNotifications(guild_id.guild_id, guild_id.parent_id);
          if (channelMessageNotifications1 !== outer1_16.NULL) {
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
      if (outer1_11.has(type.type)) {
        return outer1_18.ALL_MESSAGES;
      } else if (outer1_12(type.type)) {
        return outer1_18.ALL_MESSAGES;
      } else if (outer1_48()) {
        const channelUnreadSetting = self.getChannelUnreadSetting(type.guild_id, type.id);
        if (channelUnreadSetting !== outer1_18.UNSET) {
          return channelUnreadSetting;
        } else {
          if (null != type.parent_id) {
            const channelUnreadSetting1 = self.getChannelUnreadSetting(type.guild_id, type.parent_id);
            if (channelUnreadSetting1 !== outer1_18.UNSET) {
              return channelUnreadSetting1;
            }
          }
          const guildUnreadSetting = self.getGuildUnreadSetting(type.guild_id);
          if (guildUnreadSetting !== outer1_18.UNSET) {
            return guildUnreadSetting;
          } else if (self.resolvedMessageNotifications(type) === outer1_16.ALL_MESSAGES) {
            let ONLY_MENTIONS = outer1_18.ALL_MESSAGES;
          } else {
            ONLY_MENTIONS = outer1_18.ONLY_MENTIONS;
          }
        }
      } else {
        return outer1_18.ALL_MESSAGES;
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
        result = self.resolvedMessageNotifications(guild_id) === outer1_16.NO_MESSAGES;
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
        tmp = self.resolvedMessageNotifications(guild_id) === outer1_16.ALL_MESSAGES;
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
      if (null != outer1_21[arg0]) {
        hide_muted_channels = tmp.hide_muted_channels;
      }
      return true === hide_muted_channels;
    }
  };
  items[25] = {
    key: "getAllSettings",
    value() {
      return { userGuildSettings: outer1_21, mutedChannels: outer1_29, optedInChannelsByGuild: outer1_30 };
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
          if (obj.hasFlag(tmp.flags, outer1_19.NEW_FORUM_THREADS_ON)) {
            return true;
          } else {
            if (obj2.hasFlag(tmp.flags, outer1_19.NEW_FORUM_THREADS_OFF)) {
              return false;
            }
            obj2 = outer1_2(outer1_3[17]);
          }
          obj = outer1_2(outer1_3[17]);
        }
      }
      return self.resolvedMessageNotifications(arg0) === outer1_16.ALL_MESSAGES;
    }
  };
  items[29] = {
    key: "isOptInEnabled",
    value(arg0) {
      const self = this;
      if (null == arg0) {
        return tmp;
      } else if (outer1_9.isFullServerPreview(arg0)) {
        let isOptInEnabledResult = outer1_9.isOptInEnabled(arg0);
      } else {
        isOptInEnabledResult = outer1_2(outer1_3[17]).hasFlag(self.getGuildFlags(arg0), outer1_20.OPT_IN_CHANNELS_ON);
        const obj = outer1_2(outer1_3[17]);
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
      return this.isChannelRecordOrParentOptedIn(outer1_13.getChannel(channelId), arg2);
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
      } else if (outer1_9.isFullServerPreview(arg0)) {
        return outer1_9.isChannelOptedIn(arg0, arg1);
      } else {
        if (flag) {
          if (null != outer1_34[arg0]) {
            return outer1_34[arg0].has(arg1);
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
        return outer1_2(outer1_3[17]).hasFlag(num, outer1_19.OPT_IN_ENABLED);
      }
    }
  };
  items[33] = {
    key: "getOptedInChannels",
    value(arg0) {
      if (outer1_9.isFullServerPreview(arg0)) {
        let viewingChannels = outer1_9.getViewingChannels(arg0);
        if (null == viewingChannels) {
          viewingChannels = outer1_32;
        }
        let tmp2 = viewingChannels;
      } else {
        tmp2 = outer1_30[arg0];
        if (null == tmp2) {
          tmp2 = outer1_32;
        }
      }
      return tmp2;
    }
  };
  items[34] = {
    key: "getOptedInChannelsWithPendingUpdates",
    value(arg0) {
      return outer1_34[arg0];
    }
  };
  items[35] = {
    key: "getPendingChannelUpdates",
    value(arg0) {
      return outer1_33[arg0];
    }
  };
  items[36] = {
    key: "getGuildFavorites",
    value(arg0) {
      const self = this;
      let closure_0 = arg0;
      if (outer1_9.isFullServerPreview(arg0)) {
        return null;
      } else {
        if (null == outer1_22[arg0]) {
          const found = outer1_1(outer1_3[16]).filter(self.getChannelOverrides(arg0), (flags) => {
            flags = flags.flags;
            let num = 0;
            if (null != flags) {
              num = flags;
            }
            let hasFlagResult = outer2_2(outer2_3[17]).hasFlag(num, outer2_19.FAVORITED);
            if (hasFlagResult) {
              const channel = outer2_13.getChannel(flags.channel_id);
              let guild_id;
              if (null != channel) {
                guild_id = channel.guild_id;
              }
              hasFlagResult = guild_id === closure_0;
            }
            return hasFlagResult;
          });
          outer1_22[arg0] = found.map((channel_id) => channel_id.channel_id);
          const arr = outer1_1(outer1_3[16]);
        }
        return outer1_22[arg0];
      }
    }
  };
  items[37] = {
    key: "isFavorite",
    value(arg0, arg1) {
      const self = this;
      let tmp = !outer1_9.isFullServerPreview(arg0);
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
      return outer1_2(outer1_3[17]).hasFlag(num, outer1_19.FAVORITED);
    }
  };
  items[39] = {
    key: "accountNotificationSettings",
    get() {
      return outer1_25;
    }
  };
  items[40] = {
    key: "useNewNotifications",
    get() {
      return outer1_23;
    }
  };
  items[41] = {
    key: "getGuildUnreadSetting",
    value(arg0) {
      const self = this;
      if (outer1_48()) {
        const guildFlags = self.getGuildFlags(arg0);
        if (obj.hasFlag(guildFlags, outer1_20.UNREADS_ALL_MESSAGES)) {
          let ALL_MESSAGES = outer1_18.ALL_MESSAGES;
        } else {
          ALL_MESSAGES = outer1_2(outer1_3[17]).hasFlag(guildFlags, outer1_20.UNREADS_ONLY_MENTIONS) ? tmp10.ONLY_MENTIONS : tmp10.UNSET;
          const obj2 = outer1_2(outer1_3[17]);
        }
        return ALL_MESSAGES;
      } else {
        return outer1_18.ALL_MESSAGES;
      }
    }
  };
  items[42] = {
    key: "resolveGuildUnreadSetting",
    value(id) {
      const guildFlags = this.getGuildFlags(id.id);
      if (outer1_48()) {
        if (obj.hasFlag(guildFlags, outer1_20.UNREADS_ALL_MESSAGES)) {
          let ONLY_MENTIONS = outer1_18.ALL_MESSAGES;
        } else {
          if (obj2.hasFlag(guildFlags, outer1_20.UNREADS_ONLY_MENTIONS)) {
            ONLY_MENTIONS = outer1_18.ONLY_MENTIONS;
          } else if (id.defaultMessageNotifications === outer1_16.ALL_MESSAGES) {
            ONLY_MENTIONS = outer1_18.ALL_MESSAGES;
          } else {
            ONLY_MENTIONS = outer1_18.ONLY_MENTIONS;
          }
          obj2 = outer1_2(outer1_3[17]);
        }
        obj = outer1_2(outer1_3[17]);
      } else {
        return outer1_18.ALL_MESSAGES;
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
      if (obj.hasFlag(channelIdFlags, outer1_19.UNREADS_ALL_MESSAGES)) {
        let ALL_MESSAGES = outer1_18.ALL_MESSAGES;
      } else {
        ALL_MESSAGES = outer1_2(outer1_3[17]).hasFlag(channelIdFlags, outer1_19.UNREADS_ONLY_MENTIONS) ? tmp5.ONLY_MENTIONS : tmp5.UNSET;
        const obj2 = outer1_2(outer1_3[17]);
      }
      return ALL_MESSAGES;
    }
  };
  return callback(UserGuildSettingsStoreClass, items);
})(require("initialize").PersistedStore);
tmp13.displayName = "UserGuildSettingsStore";
tmp13.persistKey = "collapsedGuilds";
tmp13 = new tmp13(require("dispatcher"), {
  USER_GUILD_SETTINGS_FULL_UPDATE: function handleUserGuildSettingsFullUpdate(userGuildSettings) {
    userGuildSettings = userGuildSettings.userGuildSettings;
    const item = userGuildSettings.forEach((guild_id) => {
      const merged = Object.assign(guild_id);
      outer1_36(guild_id.guild_id, { channel_overrides: {} });
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
      const merged = Object.assign(dependencyMap2[guildId]);
      obj = { flags: settings.flags };
      obj[channelId] = obj;
      dependencyMap2[guildId] = obj;
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
      const dependencyMap = {};
      let closure_29 = {};
      let closure_30 = {};
    }
    const set = new Set();
    const entries = notificationSettings.userGuildSettings.entries;
    const item = entries.forEach((guild_id) => {
      if (!("channel_overrides" in guild_id)) {
        guild_id.channel_overrides = {};
      }
      outer1_36(guild_id.guild_id, guild_id);
      if (null != guild_id.guild_id) {
        set.add(guild_id.guild_id);
      }
    });
    for (const key10030 in closure_21) {
      let tmp8 = key10030;
      if (set.has(key10030)) {
        continue;
      } else {
        let tmp5 = setMuteTimers;
        let tmp6 = dependencyMap;
        let tmp7 = setMuteTimers(key10030, dependencyMap[key10030]);
        continue;
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
          let tmp8 = outer1_0;
          let tmp9 = outer1_3;
          let obj4 = outer1_0(outer1_3[15]);
          if (obj4.computeIsMuted(tmp7)) {
            let addResult = set.add(key10022);
          }
          let tmp2 = outer1_2;
          let tmp3 = outer1_3;
          let obj3 = outer1_2(outer1_3[17]);
          let flags = tmp7.flags;
          let num = 0;
          if (null != flags) {
            num = flags;
          }
          let tmp4 = outer1_19;
          if (!obj3.hasFlag(num, outer1_19.OPT_IN_ENABLED)) {
            continue;
          } else {
            let addResult1 = set1.add(key10022);
            continue;
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
    const optedInChannelsByGuild = allUserGuildSettings.optedInChannelsByGuild;
    const obj = {};
    const merged = Object.assign(allUserGuildSettings.userGuildSettings);
    let closure_29 = {};
    let closure_30 = {};
    const keys = optedInChannelsByGuild(21).keys(mutedChannels);
    const item = keys.forEach((arg0) => {
      closure_29[arg0] = new Set(mutedChannels[arg0]);
    });
    const obj2 = optedInChannelsByGuild(21);
    const keys1 = optedInChannelsByGuild(21).keys(optedInChannelsByGuild);
    const item1 = keys1.forEach((arg0) => {
      closure_30[arg0] = new Set(optedInChannelsByGuild[arg0]);
    });
  },
  GUILD_CREATE: handleGuildUpdate,
  GUILD_UPDATE: handleGuildUpdate,
  GUILD_TOGGLE_COLLAPSE_MUTED: function handleToggleCollapseMuted(guildId) {
    guildId = guildId.guildId;
    if (null == dependencyMap[guildId]) {
      let tmp2 = getGuildDefaults(guildId);
    } else {
      tmp2 = dependencyMap[guildId];
    }
    const obj = {};
    const merged = Object.assign(tmp2);
    obj["guild_id"] = guildId;
    obj["hide_muted_channels"] = true !== tmp2.hide_muted_channels;
    dependencyMap[guildId] = obj;
  },
  IMPERSONATE_UPDATE: handleGuildUpdate,
  IMPERSONATE_STOP: handleGuildUpdate,
  USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES: function handleRemovePendingUpdates(arg0) {
    let guildId;
    let updates;
    ({ guildId, updates } = arg0);
    if (null == guildId) {
      return false;
    } else if (null == dependencyMap2[guildId]) {
      return false;
    } else {
      for (const key10010 in updates) {
        let tmp6 = key10010;
        let tmp7 = importDefault;
        let tmp8 = dependencyMap;
        let obj = importDefault(22);
        if (!obj.isEqual(updates[key10010], tmp4[key10010])) {
          continue;
        } else {
          delete tmp[tmp2];
          continue;
        }
        continue;
      }
    }
  },
  CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: function handleClearPendingUpdates(guildId) {
    if (null == guildId.guildId) {
      return false;
    } else {
      delete tmp3[tmp2];
      delete tmp[tmp2];
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
let result = set.fileFinishedImporting("stores/UserGuildSettingsStore.tsx");

export default tmp13;
export { getGuildDefaults };
export { convertChannelOverridesToMap };
