// Module ID: 10269
// Function ID: 79362
// Name: getMuteSettingLabel
// Dependencies: []
// Exports: getMessageNotificationsText, getMuteOptions, getMuteSettingLabel, getMuteSettingSublabel, getMuteSettings, handleMuteSettingPress, handleUnmutePress

// Module 10269 (getMuteSettingLabel)
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
({ ChannelTypes: closure_10, UserNotificationSettings: closure_11 } = arg1(dependencyMap[6]));
const MuteUntilSeconds = arg1(dependencyMap[7]).MuteUntilSeconds;
const tmp2 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/MuteSettingsUtils.tsx");

export const getMuteSettingLabel = function getMuteSettingLabel(channel, guild) {
  if (null != channel) {
    if (channel.isPrivate()) {
      const intl5 = guild(dependencyMap[8]).intl;
      let stringResult = intl5.string(guild(dependencyMap[8]).t.Z/uD9+);
    } else if (channel.type === constants.GUILD_CATEGORY) {
      const intl4 = guild(dependencyMap[8]).intl;
      stringResult = intl4.string(guild(dependencyMap[8]).t.Z33kYz);
    } else if (channel.isForumPost()) {
      const intl3 = guild(dependencyMap[8]).intl;
      stringResult = intl3.string(guild(dependencyMap[8]).t.lbN8mz);
    } else {
      const intl2 = guild(dependencyMap[8]).intl;
      const string = intl2.string;
      const t = guild(dependencyMap[8]).t;
      if (isThreadResult) {
        stringResult = string(t.wR+Fuo);
      } else {
        stringResult = string(t.OsNx14);
      }
      const isThreadResult = channel.isThread();
    }
  } else {
    let stringResult1;
    if (null != guild) {
      const intl = guild(dependencyMap[8]).intl;
      stringResult1 = intl.string(guild(dependencyMap[8]).t.mvxGko);
    }
    return stringResult1;
  }
};
export const getMuteSettingSublabel = function getMuteSettingSublabel(channel, guild) {
  if (null != channel) {
    const obj = guild(dependencyMap[9]);
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
      let tmp6Result = tmp6(tmp7[10]);
      const obj = { muted: false };
      const result = tmp6Result.setNotificationSettings(channel, obj);
    } else {
      tmp6Result = tmp6(tmp7[11]);
      const result1 = tmp6Result.updateChannelOverrideSettings(guildId, channel.id, { <string:173114209>: "L", <string:1364287903>: "L" }, guildId(tmp7[12]).NotificationLabels.Unmuted);
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
  const muteSettings = importAll(dependencyMap[13]).getMuteSettings(muteDurationSeconds);
  const channel = store.getChannel(channelId);
  const guild = guild.getGuild(guildId);
  if (null != onOptionPress) {
    onOptionPress(muteSettings);
  } else if (null != channel) {
    if (channel.isThread()) {
      let tmp3Result = tmp3(tmp4[10]);
      const result = tmp3Result.setNotificationSettings(channel, muteSettings);
    } else {
      tmp3Result = tmp3(tmp4[11]);
      const result1 = tmp3Result.updateChannelOverrideSettings(guildId, channel.id, muteSettings, arg1(tmp4[12]).NotificationLabels.Muted);
    }
  } else if (null != guild) {
    const result2 = importDefault(dependencyMap[11]).updateGuildNotificationSettings(guild.id, muteSettings, arg1(dependencyMap[12]).NotificationLabels.Muted);
    const obj5 = importDefault(dependencyMap[11]);
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
      let muteConfig = closure_4.getMuteConfig(getMessageNotifications.id);
      let isMutedResult = closure_4.isMuted(getMessageNotifications.id);
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
    const intl3 = arg1(dependencyMap[8]).intl;
    return intl3.string(arg1(dependencyMap[8]).t.DZi15z);
  } else if (constants2.ONLY_MENTIONS === messageNotifications) {
    const intl2 = arg1(dependencyMap[8]).intl;
    return intl2.string(arg1(dependencyMap[8]).t.xGICju);
  } else if (constants2.NO_MESSAGES === messageNotifications) {
    const intl = arg1(dependencyMap[8]).intl;
    return intl.string(arg1(dependencyMap[8]).t.CtVGyQ);
  } else {
    return null;
  }
};
export const getMuteOptions = function getMuteOptions() {
  let obj = {};
  const intl = arg1(dependencyMap[8]).intl;
  obj.label = intl.string(arg1(dependencyMap[8]).t.8ot6gv);
  obj.duration = MuteUntilSeconds.MINUTES_15;
  const items = [obj, , , , , ];
  obj = {};
  const intl2 = arg1(dependencyMap[8]).intl;
  obj.label = intl2.string(arg1(dependencyMap[8]).t.UMWBZr);
  obj.duration = MuteUntilSeconds.HOURS_1;
  items[1] = obj;
  obj = {};
  const intl3 = arg1(dependencyMap[8]).intl;
  obj.label = intl3.string(arg1(dependencyMap[8]).t.QmYWtu);
  obj.duration = MuteUntilSeconds.HOURS_3;
  items[2] = obj;
  const obj1 = {};
  const intl4 = arg1(dependencyMap[8]).intl;
  obj1.label = intl4.string(arg1(dependencyMap[8]).t.EpAXPC);
  obj1.duration = MuteUntilSeconds.HOURS_8;
  items[3] = obj1;
  const obj2 = {};
  const intl5 = arg1(dependencyMap[8]).intl;
  obj2.label = intl5.string(arg1(dependencyMap[8]).t.755t4q);
  obj2.duration = MuteUntilSeconds.HOURS_24;
  items[4] = obj2;
  const obj3 = {};
  const intl6 = arg1(dependencyMap[8]).intl;
  obj3.label = intl6.string(arg1(dependencyMap[8]).t.r3LawO);
  obj3.duration = MuteUntilSeconds.ALWAYS;
  items[5] = obj3;
  return items;
};
