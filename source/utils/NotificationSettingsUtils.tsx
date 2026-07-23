// Module ID: 5073
// Function ID: 44091
// Name: differ
// Dependencies: [5074, 1348, 4349, 4325, 653, 3770, 4326, 662, 1360, 4324, 675, 2]
// Exports: getManyCurrentChannelSettings, getManyCurrentGuildSettings, trackAccountNotificationSettingUpdated, trackChannelNotificationSettingsUpdate, trackGuildNotificationSettingsUpdate

// Module 5073 (differ)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import ME from "ME";
import { NotificationSettingsUpdateType as closure_9 } from "AccountNotificationFlags";
import { UnreadSetting } from "ReadStateTypes";
import MAX_FAVORITES from "MAX_FAVORITES";

let UserNotificationSettings;
let closure_11;
let closure_12;
let closure_7;
const require = arg1;
function differ(computeResult, computeResult1, RETURN_PREVIOUS_WHEN_CHANGED) {
  let closure_0 = computeResult;
  let closure_1 = computeResult1;
  RETURN_PREVIOUS_WHEN_CHANGED = "RETURN_PREVIOUS_WHEN_CHANGED";
  return (arg0) => {
    if ("RETURN_PREVIOUS_WHEN_CHANGED" === RETURN_PREVIOUS_WHEN_CHANGED) {
      let tmp3;
      if (dependencyMap[arg0] !== table[arg0]) {
        tmp3 = dependencyMap[arg0];
      }
      return tmp3;
    }
  };
}
function muteConfigToTimestamp(muteConfig) {
  let time = null;
  if (null != muteConfig) {
    time = null;
    if (null != muteConfig.end_time) {
      const _Date = Date;
      const date = new Date(muteConfig.end_time);
      time = date.getTime();
    }
  }
  return time;
}
function getCurrentGuildSettings(guildId) {
  const muteConfig = store2.getMuteConfig(guildId);
  const obj = { guild_suppress_everyone: store2.isSuppressEveryoneEnabled(guildId), guild_suppress_roles: store2.isSuppressRolesEnabled(guildId), guild_scheduled_events_muted: store2.isMuteScheduledEventsEnabled(guildId), guild_is_muted: store2.isMuted(guildId) };
  let time = null;
  if (null != muteConfig) {
    time = null;
    if (null != muteConfig.end_time) {
      const _Date = Date;
      const date = new Date(muteConfig.end_time);
      time = date.getTime();
    }
  }
  obj.guild_muted_until = time;
  obj.guild_receive_mobile_push = store2.isMobilePushEnabled(guildId);
  obj.guild_message_notification_settings = frozen[store2.getMessageNotifications(store2, guildId)];
  obj.guild_notify_highlights = store2.getNotifyHighlights(guildId);
  obj.guild_flags = store2.getGuildFlags(guildId);
  return obj;
}
function getCurrentChannelSettings(guildId, channelId) {
  const channelMuteConfig = store2.getChannelMuteConfig(guildId, channelId);
  const obj = { channel_is_muted: store2.isChannelMuted(guildId, channelId) };
  let time = null;
  if (null != channelMuteConfig) {
    time = null;
    if (null != channelMuteConfig.end_time) {
      const _Date = Date;
      const date = new Date(channelMuteConfig.end_time);
      time = date.getTime();
    }
  }
  obj.channel_muted_until = time;
  obj.channel_message_notification_settings = frozen[store2.getChannelMessageNotifications(store2, guildId, channelId)];
  obj.channel_flags = store2.getChannelIdFlags(guildId, channelId);
  return obj;
}
({ AnalyticEvents: closure_7, UserNotificationSettings } = ME);
({ ChannelNotificationSettingsFlags: closure_11, GuildNotificationSettingsFlags: closure_12 } = MAX_FAVORITES);
let obj = { ForumThreadsCreatedOn: "enabled forum thread created notifs", ForumThreadsCreatedOff: "disabled forum thread created notifs", SuppressEveryoneOn: "enabled suppress everyone", SuppressEveryoneOff: "disabled suppress everyone", SuppressRolesOn: "enabled suppress roles", SuppressRolesOff: "disabled suppress roles", HighlightsOn: "enabled highlights", HighlightsOff: "disabled highlights", MobilePushOn: "enabled mobile push notifications", MobilePushOff: "disabled mobile push notifications", UnreadsAll: "unreads set to all messages", UnreadsMentions: "unreads set to mentions", UnreadsDefault: "unreads set to the default", NotificationsAll: "notifications set to all messages", NotificationsMentions: "notifications set to mentions", NotificationsNothing: "notifications set to nothing", NotificationsDefault: "notifications set to the default", PresetAll: "notification preset set to all messages", PresetMentions: "notification preset set to mentions", PresetNothing: "notification preset set to nothing", PresetDefault: "notification preset set to the default", OptedIn: "opted in to entity", OptedOut: "opted out from entity", Favorited: "favorited", UnFavorited: "unfavorited", Muted: "muted", Unmuted: "unmuted", MutedScheduledEvents: "muted scheduled events", UnmutedScheduledEvents: "unmuted scheduled events", OverrideCreated: "channel override created", OverrideDeleted: "channel override deleted", AnnouncementAutoEnable: "announcement channels auto set to all messages" };
obj = {
  forumThreadsCreated(arg0) {
    return arg0 ? obj.ForumThreadsCreatedOn : obj.ForumThreadsCreatedOff;
  },
  suppressEveryone(arg0) {
    return arg0 ? obj.SuppressEveryoneOn : obj.SuppressEveryoneOff;
  },
  suppressRoles(arg0) {
    return arg0 ? obj.SuppressRolesOn : obj.SuppressRolesOff;
  },
  highlights(arg0) {
    return arg0 ? obj.HighlightsOn : obj.HighlightsOff;
  },
  mobilePush(arg0) {
    return arg0 ? obj.MobilePushOn : obj.MobilePushOff;
  },
  optedIn(optInEnabled) {
    return optInEnabled ? obj.OptedIn : obj.OptedOut;
  },
  favorited(arg0) {
    return arg0 ? obj.Favorited : obj.UnFavorited;
  },
  muted(muted) {
    return muted ? obj.Muted : obj.Unmuted;
  },
  mutedEvents(arg0) {
    return arg0 ? obj.MutedScheduledEvents : obj.UnmutedScheduledEvents;
  },
  unreads(ONLY_MENTIONS) {
    if (ONLY_MENTIONS === UnreadSetting.ALL_MESSAGES) {
      let UnreadsDefault = obj.UnreadsAll;
    } else if (ONLY_MENTIONS === UnreadSetting.ONLY_MENTIONS) {
      UnreadsDefault = obj.UnreadsMentions;
    } else {
      UnreadsDefault = obj.UnreadsDefault;
    }
    return UnreadsDefault;
  },
  notifications(closure_0) {
    if (closure_0 === UserNotificationSettings.ALL_MESSAGES) {
      let NotificationsDefault = obj.NotificationsAll;
    } else if (closure_0 === UserNotificationSettings.ONLY_MENTIONS) {
      NotificationsDefault = obj.NotificationsMentions;
    } else if (closure_0 === UserNotificationSettings.NO_MESSAGES) {
      NotificationsDefault = obj.NotificationsNothing;
    } else {
      NotificationsDefault = obj.NotificationsDefault;
    }
    return NotificationsDefault;
  }
};
const frozen = Object.freeze({ [UserNotificationSettings.ALL_MESSAGES]: "All", [UserNotificationSettings.ONLY_MENTIONS]: "Mentions", [UserNotificationSettings.NO_MESSAGES]: "Nothing", [UserNotificationSettings.NULL]: null });
const result = require("_isNativeReflectConstruct").fileFinishedImporting("utils/NotificationSettingsUtils.tsx");

export const NotificationLabels = obj;
export const NotificationLabel = obj;
export const MessageNotificationSettings = frozen;
export const trackGuildNotificationSettingsUpdate = function trackGuildNotificationSettingsUpdate(guildId, muteSettings, currentGuildSettings, NotificationLabel, arg4) {
  function compute(currentGuildSettings, muteSettings) {
    let obj = muteSettings;
    if (muteSettings === undefined) {
      obj = {};
    }
    if (null != obj.mute_config) {
      if (null != obj.mute_config.end_time) {
        const _Date = Date;
        const date = new Date(obj.mute_config.end_time);
        let guild_muted_until = date.getTime();
      }
      if (null != obj.message_notifications) {
        let guild_message_notification_settings = outer1_14[obj.message_notifications];
      } else {
        guild_message_notification_settings = currentGuildSettings.guild_message_notification_settings;
      }
      obj = { guild_muted_until };
      let guild_flags = obj.flags;
      if (null == guild_flags) {
        guild_flags = currentGuildSettings.guild_flags;
      }
      obj.guild_flags = guild_flags;
      let guild_is_muted = obj.muted;
      if (null == guild_is_muted) {
        guild_is_muted = currentGuildSettings.guild_is_muted;
      }
      obj.guild_is_muted = guild_is_muted;
      obj.guild_message_notification_settings = guild_message_notification_settings;
      let guild_suppress_roles = obj.suppress_roles;
      if (null == guild_suppress_roles) {
        guild_suppress_roles = currentGuildSettings.guild_suppress_roles;
      }
      obj.guild_suppress_roles = guild_suppress_roles;
      let guild_receive_mobile_push = obj.mobile_push;
      if (null == guild_receive_mobile_push) {
        guild_receive_mobile_push = currentGuildSettings.guild_receive_mobile_push;
      }
      obj.guild_receive_mobile_push = guild_receive_mobile_push;
      let guild_notify_highlights = obj.notify_highlights;
      if (null == guild_notify_highlights) {
        guild_notify_highlights = currentGuildSettings.guild_notify_highlights;
      }
      obj.guild_notify_highlights = guild_notify_highlights;
      let guild_suppress_everyone = obj.suppress_everyone;
      if (null == guild_suppress_everyone) {
        guild_suppress_everyone = currentGuildSettings.guild_suppress_everyone;
      }
      obj.guild_suppress_everyone = guild_suppress_everyone;
      let guild_scheduled_events_muted = obj.mute_scheduled_events;
      if (null == guild_scheduled_events_muted) {
        guild_scheduled_events_muted = currentGuildSettings.guild_scheduled_events_muted;
      }
      obj.guild_scheduled_events_muted = guild_scheduled_events_muted;
      return obj;
    }
    guild_muted_until = currentGuildSettings.guild_muted_until;
  }
  const computeResult1 = compute(getCurrentGuildSettings(guildId), muteSettings);
  const tmp3 = differ(compute(currentGuildSettings), computeResult1, "RETURN_PREVIOUS_WHEN_CHANGED");
  const tmp3Result = tmp3("guild_flags");
  let num = 0;
  if (null != tmp3Result) {
    num = tmp3Result;
  }
  let guild_flags = computeResult1.guild_flags;
  let num2 = 0;
  if (null != guild_flags) {
    num2 = guild_flags;
  }
  let obj = require(1360) /* hasFlag */;
  const computeResult = compute(currentGuildSettings);
  const tmp5 = num2 ^ num;
  const removeFlagsResult = obj.removeFlags(num2 ^ num, constants4.OPT_IN_CHANNELS_OFF, constants4.OPT_IN_CHANNELS_ON);
  obj = {};
  const merged = Object.assign(computeResult1);
  const merged1 = Object.assign(store.getStats(guildId));
  obj["location"] = arg4;
  obj["guild_id"] = guildId;
  obj["update_type"] = constants2.GUILD;
  obj["label"] = NotificationLabel;
  obj["guild_flags_old"] = tmp3("guild_flags");
  obj["guild_is_muted_old"] = tmp3("guild_is_muted");
  obj["guild_suppress_roles_old"] = tmp3("guild_suppress_roles");
  obj["guild_notify_highlights_old"] = tmp3("guild_notify_highlights");
  obj["guild_suppress_everyone_old"] = tmp3("guild_suppress_everyone");
  obj["guild_receive_mobile_push_old"] = tmp3("guild_receive_mobile_push");
  obj["guild_scheduled_events_muted_old"] = tmp3("guild_scheduled_events_muted");
  obj["guild_message_notification_settings_old"] = tmp3("guild_message_notification_settings");
  obj["is_opt_in_only_change"] = 0 === removeFlagsResult;
  importDefault(4324).trackWithMetadata(constants.NOTIFICATION_SETTINGS_UPDATED, obj);
};
export { muteConfigToTimestamp };
export const trackChannelNotificationSettingsUpdate = function trackChannelNotificationSettingsUpdate(updateType) {
  let _location;
  let applicationId;
  let change;
  let label;
  let CHANNEL = updateType.updateType;
  if (CHANNEL === undefined) {
    CHANNEL = constants2.CHANNEL;
  }
  const guildId = updateType.guildId;
  const channelId = updateType.channelId;
  function compute(currentChannelSettings, change) {
    let obj = change;
    if (change === undefined) {
      obj = {};
    }
    let muted = obj.muted;
    if (null == muted) {
      let channel_is_muted;
      if (null != currentChannelSettings) {
        channel_is_muted = currentChannelSettings.channel_is_muted;
      }
      muted = channel_is_muted;
    }
    if (null != obj.message_notifications) {
      let channel_message_notification_settings = outer1_14[obj.message_notifications];
    } else if (null != currentChannelSettings) {
      channel_message_notification_settings = currentChannelSettings.channel_message_notification_settings;
    }
    obj = { channel_is_muted: muted };
    let tmp3 = null;
    if (null != guildId) {
      tmp3 = true === muted || null != channel_message_notification_settings;
      const tmp4 = true === muted || null != channel_message_notification_settings;
    }
    obj.channel_is_overridden = tmp3;
    let flags = obj.flags;
    if (null == flags) {
      let channel_flags;
      if (null != currentChannelSettings) {
        channel_flags = currentChannelSettings.channel_flags;
      }
      flags = channel_flags;
    }
    obj.channel_flags = flags;
    obj.channel_message_notification_settings = channel_message_notification_settings;
    obj.channel_muted_until = outer1_16(obj.mute_config);
    return obj;
  }
  ({ applicationId, change, label, location: _location } = updateType);
  const computeResult1 = compute(getCurrentChannelSettings(guildId, channelId), change);
  let tmp4 = differ(compute(updateType.previous), computeResult1, "RETURN_PREVIOUS_WHEN_CHANGED");
  channel = channel.getChannel(channelId);
  const tmp4Result = tmp4("channel_flags");
  let num = 0;
  if (null != tmp4Result) {
    num = tmp4Result;
  }
  let channel_flags = computeResult1.channel_flags;
  let num2 = 0;
  if (null != channel_flags) {
    num2 = channel_flags;
  }
  let obj = guildId(1360);
  const computeResult = compute(updateType.previous);
  const tmp7 = num2 ^ num;
  lastMessage = lastMessage.getLastMessage(channelId);
  let type;
  if (null != lastMessage) {
    type = lastMessage.type;
  }
  let tmp11 = null;
  if (null != type) {
    tmp11 = type;
  }
  const removeFlagsResult = obj.removeFlags(num2 ^ num, constants3.FAVORITED, constants3.OPT_IN_ENABLED);
  obj = {};
  const merged = Object.assign(computeResult1);
  const merged1 = Object.assign(store.getStats(guildId));
  obj["location"] = _location;
  obj["guild_id"] = guildId;
  obj["channel_id"] = channelId;
  obj["update_type"] = CHANNEL;
  obj["label"] = label;
  let parent_id = null;
  if (null != channel) {
    parent_id = channel.parent_id;
  }
  obj["parent_id"] = parent_id;
  obj["channel_flags_old"] = tmp4("channel_flags");
  obj["channel_is_muted_old"] = tmp4("channel_is_muted");
  obj["channel_muted_until_old"] = tmp4("channel_muted_until");
  obj["channel_is_overridden_old"] = tmp4("channel_is_overridden");
  obj["channel_message_notification_settings_old"] = tmp4("channel_message_notification_settings");
  obj["is_opt_in_only_change"] = 0 === removeFlagsResult;
  obj["last_message_type"] = tmp11;
  obj["application_id"] = applicationId;
  importDefault(4324).trackWithMetadata(constants.NOTIFICATION_SETTINGS_UPDATED, obj);
};
export { getCurrentGuildSettings };
export const getManyCurrentGuildSettings = function getManyCurrentGuildSettings(arr) {
  const map = new Map();
  const item = arr.forEach((arg0) => map.set(arg0, outer1_17(arg0)));
  return map;
};
export { getCurrentChannelSettings };
export const getManyCurrentChannelSettings = function getManyCurrentChannelSettings(guildId, keys) {
  let closure_0 = guildId;
  const map = new Map();
  const item = keys.forEach((arg0) => map.set(arg0, outer1_18(closure_0, arg0)));
  return map;
};
export const trackAccountNotificationSettingUpdated = function trackAccountNotificationSettingUpdated(quietMode, quietMode2) {
  let obj = importDefault(675);
  obj = { update_type: constants2.ACCOUNT, quiet_mode_enabled: quietMode.quietMode, quiet_mode_enabled_old: quietMode2.quietMode };
  obj.track(constants.NOTIFICATION_SETTINGS_UPDATED, obj);
};
