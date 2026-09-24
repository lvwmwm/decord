// Module ID: 10410
// Function ID: 10411
// Name: MuteSettingsUtils
// Dependencies: [4433, 2045, 2067, 4441, 4971, 1376, 1078, 1088, 1119, 4943, 8044, 7398, 7393, 10411, 2]
// Exports: getMessageNotificationsText, getMuteOptions, getMuteSettingLabel, getMuteSettingSublabel, getMuteSettings, handleMuteSettingPress, handleUnmutePress

// Module 10410 (MuteSettingsUtils)
import util from "util" /* 1119 */;
import useChannelName from "useChannelName" /* 4943 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7393 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7398 */;
import ChannelMuteUtilsAll from "ChannelMuteUtils" /* 10411 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4433 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import RelationshipStore from "RelationshipStore" /* 4441 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4971 */;
import UserStore from "UserStore" /* 1376 */;

require = fn;
const Constants = fn(1078);
({ ChannelTypes: c10, UserNotificationSettings: closure_11 } = Constants);
const MuteUntilSeconds = fn(1088).MuteUntilSeconds;
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/MuteSettingsUtils.tsx");

export const getMuteSettingLabel = function getMuteSettingLabel(stateFromStores, stateFromStores1) {
  if (null != stateFromStores) {
    if (stateFromStores.isPrivate()) {
      const intl5 = util.intl;
      let stringResult = intl5.string(util.t["Z/uD9+"]);
    } else if (stateFromStores.type === constants.GUILD_CATEGORY) {
      const intl4 = util.intl;
      stringResult = intl4.string(util.t.Z33kYz);
    } else if (stateFromStores.isForumPost()) {
      const intl3 = util.intl;
      stringResult = intl3.string(util.t.lbN8mz);
    } else {
      const intl2 = util.intl;
      const string = intl2.string;
      const t = util.t;
      if (isThreadResult) {
        stringResult = string(t["wR+Fuo"]);
      } else {
        stringResult = string(t.OsNx14);
      }
      isThreadResult = stateFromStores.isThread();
    }
  } else {
    let stringResult1;
    if (null != stateFromStores1) {
      const intl = util.intl;
      stringResult1 = intl.string(util.t.mvxGko);
    }
    return stringResult1;
  }
};
export const getMuteSettingSublabel = function getMuteSettingSublabel(stateFromStores, stateFromStores1) {
  if (null != stateFromStores) {
    const obj = useChannelName;
    let name = obj.computeChannelName(stateFromStores, UserStore, RelationshipStore, true);
  } else if (null != stateFromStores1) {
    name = stateFromStores1.name;
  }
  return name;
};
export const handleUnmutePress = function handleUnmutePress(channelId, guildId) {
  const channel = ChannelStore.getChannel(channelId);
  if (null != channel) {
    if (channel.isThread()) {
      const result = tmp7(8044).setNotificationSettings(channel, { muted: false });
      const tmp7Result = tmp7(8044);
    } else {
      const tmp7Result2 = tmp7(7398);
      const result1 = tmp7Result2.updateChannelOverrideSettings(guildId, channel.id, { muted: false, mute_config: null }, NotificationSettingsUtils.NotificationLabels.Unmuted);
    }
  }
};
export const handleMuteSettingPress = function handleMuteSettingPress(arg0) {
  ({ guildId, onOptionPress } = arg0);
  ({ channelId, muteDurationSeconds } = arg0);
  const muteSettings = ChannelMuteUtilsAll.getMuteSettings(muteDurationSeconds);
  const channel = ChannelStore.getChannel(channelId);
  guild = GuildStore.getGuild(guildId);
  if (null != onOptionPress) {
    onOptionPress(muteSettings);
  } else if (null != channel) {
    if (channel.isThread()) {
      const result = tmp4(8044).setNotificationSettings(channel, muteSettings);
      const tmp4Result = tmp4(8044);
    } else {
      const tmp4Result2 = tmp4(7398);
      const result1 = tmp4Result2.updateChannelOverrideSettings(guildId, channel.id, muteSettings, NotificationSettingsUtils.NotificationLabels.Muted);
    }
  } else if (null != guild) {
    const result2 = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings(guild.id, muteSettings, NotificationSettingsUtils.NotificationLabels.Muted);
  }
};
export const getMuteSettings = function getMuteSettings(arg0) {
  let id = ChannelStore.getChannel(arg0);
  if (null == id) {
    const obj = { muteConfig: undefined, muted: undefined, messageNotifications: undefined, guildMuted: undefined, guildMessageNotifications: undefined };
    return obj;
  } else {
    const guildId = id.getGuildId();
    if (id.isThread()) {
      let muteConfig = JoinedThreadsStore.getMuteConfig(id.id);
      let isMutedResult = JoinedThreadsStore.isMuted(id.id);
    } else {
      muteConfig = UserGuildSettingsStore.getChannelMuteConfig(guildId, id.id);
      isMutedResult = UserGuildSettingsStore.isChannelMuted(guildId, id.id);
    }
    id = id.id;
    const channelMessageNotifications = UserGuildSettingsStore.getChannelMessageNotifications(guildId, id);
    UserGuildSettingsStore.isMuted(guildId);
    const messageNotifications = UserGuildSettingsStore.getMessageNotifications(guildId);
  }
};
export const getMessageNotificationsText = function getMessageNotificationsText(messageNotifications) {
  if (constants2.ALL_MESSAGES === messageNotifications) {
    const intl3 = util.intl;
    return intl3.string(util.t.DZi15z);
  } else if (tmp.ONLY_MENTIONS === messageNotifications) {
    const intl2 = util.intl;
    return intl2.string(util.t.xGICju);
  } else if (tmp.NO_MESSAGES === messageNotifications) {
    const intl = util.intl;
    return intl.string(util.t.CtVGyQ);
  } else {
    return null;
  }
};
export const getMuteOptions = function getMuteOptions() {
  const obj = { label: null, duration: null };
  const intl = util.intl;
  obj.label = intl.string(util.t["8ot6gv"]);
  obj.duration = MuteUntilSeconds.MINUTES_15;
  const items = [obj, , , , , ];
  const obj2 = { label: null, duration: null };
  const intl2 = util.intl;
  obj2.label = intl2.string(util.t.UMWBZr);
  obj2.duration = MuteUntilSeconds.HOURS_1;
  items[1] = obj2;
  const obj3 = { label: null, duration: null };
  const intl3 = util.intl;
  obj3.label = intl3.string(util.t.QmYWtu);
  obj3.duration = MuteUntilSeconds.HOURS_3;
  items[2] = obj3;
  const obj4 = { label: null, duration: null };
  const intl4 = util.intl;
  obj4.label = intl4.string(util.t.EpAXPC);
  obj4.duration = MuteUntilSeconds.HOURS_8;
  items[3] = obj4;
  const obj5 = { label: null, duration: null };
  const intl5 = util.intl;
  obj5.label = intl5.string(util.t["755t4q"]);
  obj5.duration = MuteUntilSeconds.HOURS_24;
  items[4] = obj5;
  const obj6 = { label: null, duration: null };
  const intl6 = util.intl;
  obj6.label = intl6.string(util.t.r3LawO);
  obj6.duration = MuteUntilSeconds.ALWAYS;
  items[5] = obj6;
  return items;
};
