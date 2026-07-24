// Module ID: 10311
// Function ID: 79626
// Name: getMuteSettingLabel
// Dependencies: [3760, 1348, 1838, 3767, 4325, 1849, 653, 662, 1212, 4320, 7006, 5079, 5073, 10312, 2]
// Exports: getMessageNotificationsText, getMuteOptions, getMuteSettingLabel, getMuteSettingSublabel, getMuteSettings, handleMuteSettingPress, handleUnmutePress

// Module 10311 (getMuteSettingLabel)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import ME from "ME";
import { MuteUntilSeconds } from "MAX_FAVORITES";

let closure_10;
let closure_11;
const require = arg1;
({ ChannelTypes: closure_10, UserNotificationSettings: closure_11 } = ME);
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/MuteSettingsUtils.tsx");

export const getMuteSettingLabel = function getMuteSettingLabel(channel, guild) {
  if (null != channel) {
    if (channel.isPrivate()) {
      const intl5 = require(1212) /* getSystemLocale */.intl;
      let stringResult = intl5.string(require(1212) /* getSystemLocale */.t["Z/uD9+"]);
    } else if (channel.type === constants.GUILD_CATEGORY) {
      const intl4 = require(1212) /* getSystemLocale */.intl;
      stringResult = intl4.string(require(1212) /* getSystemLocale */.t.Z33kYz);
    } else if (channel.isForumPost()) {
      const intl3 = require(1212) /* getSystemLocale */.intl;
      stringResult = intl3.string(require(1212) /* getSystemLocale */.t.lbN8mz);
    } else {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      const string = intl2.string;
      const t = require(1212) /* getSystemLocale */.t;
      if (isThreadResult) {
        stringResult = string(t["wR+Fuo"]);
      } else {
        stringResult = string(t.OsNx14);
      }
      isThreadResult = channel.isThread();
    }
  } else {
    let stringResult1;
    if (null != guild) {
      const intl = require(1212) /* getSystemLocale */.intl;
      stringResult1 = intl.string(require(1212) /* getSystemLocale */.t.mvxGko);
    }
    return stringResult1;
  }
};
export const getMuteSettingSublabel = function getMuteSettingSublabel(channel, guild) {
  if (null != channel) {
    const obj = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
    let name = obj.computeChannelName(channel, closure_9, closure_7, true);
  } else if (null != guild) {
    name = guild.name;
  }
  return name;
};
export const handleUnmutePress = function handleUnmutePress(channelId, guildId) {
  const channel = store.getChannel(channelId);
  if (null != channel) {
    if (channel.isThread()) {
      let tmp6Result = tmp6(7006);
      const obj = { muted: false };
      const result = tmp6Result.setNotificationSettings(channel, obj);
    } else {
      tmp6Result = tmp6(5079);
      const result1 = tmp6Result.updateChannelOverrideSettings(guildId, channel.id, { muted: false, mute_config: null }, require(5073) /* differ */.NotificationLabels.Unmuted);
    }
  }
};
export const handleMuteSettingPress = function handleMuteSettingPress(arg0) {
  let channelId;
  let guildId;
  let muteDurationSeconds;
  let onOptionPress;
  ({ guildId, onOptionPress } = arg0);
  ({ channelId, muteDurationSeconds } = arg0);
  const muteSettings = importAll(10312).getMuteSettings(muteDurationSeconds);
  const channel = store.getChannel(channelId);
  guild = guild.getGuild(guildId);
  if (null != onOptionPress) {
    onOptionPress(muteSettings);
  } else if (null != channel) {
    if (channel.isThread()) {
      let tmp3Result = tmp3(7006);
      const result = tmp3Result.setNotificationSettings(channel, muteSettings);
    } else {
      tmp3Result = tmp3(5079);
      const result1 = tmp3Result.updateChannelOverrideSettings(guildId, channel.id, muteSettings, require(5073) /* differ */.NotificationLabels.Muted);
    }
  } else if (null != guild) {
    const result2 = importDefault(5079).updateGuildNotificationSettings(guild.id, muteSettings, require(5073) /* differ */.NotificationLabels.Muted);
    const obj5 = importDefault(5079);
  }
};
export const getMuteSettings = function getMuteSettings(channelId) {
  let getMessageNotifications = store.getChannel(channelId);
  if (null == getMessageNotifications) {
    const obj = { muteConfig: undefined, muted: undefined, messageNotifications: undefined, guildMuted: undefined, guildMessageNotifications: undefined };
    return obj;
  } else {
    const guildId = getMessageNotifications.getGuildId();
    if (getMessageNotifications.isThread()) {
      let muteConfig = _isNativeReflectConstruct.getMuteConfig(getMessageNotifications.id);
      let isMutedResult = _isNativeReflectConstruct.isMuted(getMessageNotifications.id);
    } else {
      const channelMuteConfig = store2.getChannelMuteConfig(guildId, getMessageNotifications.id);
      muteConfig = channelMuteConfig;
      isMutedResult = store2.isChannelMuted(guildId, getMessageNotifications.id);
    }
    const channelMessageNotifications = store2.getChannelMessageNotifications(guildId, getMessageNotifications.id);
    store2.isMuted(guildId);
    getMessageNotifications = store2.getMessageNotifications;
    const messageNotifications = getMessageNotifications(guildId);
  }
};
export const getMessageNotificationsText = function getMessageNotificationsText(messageNotifications) {
  if (constants2.ALL_MESSAGES === messageNotifications) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    return intl3.string(require(1212) /* getSystemLocale */.t.DZi15z);
  } else if (constants2.ONLY_MENTIONS === messageNotifications) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t.xGICju);
  } else if (constants2.NO_MESSAGES === messageNotifications) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.CtVGyQ);
  } else {
    return null;
  }
};
export const getMuteOptions = function getMuteOptions() {
  let obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.string(require(1212) /* getSystemLocale */.t["8ot6gv"]);
  obj.duration = MuteUntilSeconds.MINUTES_15;
  const items = [obj, , , , , ];
  obj = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.label = intl2.string(require(1212) /* getSystemLocale */.t.UMWBZr);
  obj.duration = MuteUntilSeconds.HOURS_1;
  items[1] = obj;
  obj = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.label = intl3.string(require(1212) /* getSystemLocale */.t.QmYWtu);
  obj.duration = MuteUntilSeconds.HOURS_3;
  items[2] = obj;
  const obj1 = {};
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj1.label = intl4.string(require(1212) /* getSystemLocale */.t.EpAXPC);
  obj1.duration = MuteUntilSeconds.HOURS_8;
  items[3] = obj1;
  const obj2 = {};
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj2.label = intl5.string(require(1212) /* getSystemLocale */.t["755t4q"]);
  obj2.duration = MuteUntilSeconds.HOURS_24;
  items[4] = obj2;
  const obj3 = {};
  const intl6 = require(1212) /* getSystemLocale */.intl;
  obj3.label = intl6.string(require(1212) /* getSystemLocale */.t.r3LawO);
  obj3.duration = MuteUntilSeconds.ALWAYS;
  items[5] = obj3;
  return items;
};
