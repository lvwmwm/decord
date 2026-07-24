// Module ID: 5079
// Function ID: 44201
// Dependencies: [5, 4325, 653, 3770, 662, 686, 5073, 5075, 21, 3976, 1212, 1360, 507, 2]

// Module 5079
import dispatcher from "dispatcher";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Endpoints } from "ME";
import { NotificationSettingsUpdateType as closure_6 } from "AccountNotificationFlags";
import { ChannelNotificationSettingsFlags as closure_7 } from "MAX_FAVORITES";

const require = arg1;
let result = require("ME").fileFinishedImporting("actions/NotificationSettingsModalActionCreators.tsx");

export default {
  open(guildId) {
    let obj = importDefault(686);
    obj = { type: "NOTIFICATION_SETTINGS_MODAL_OPEN", guildId };
    obj.dispatch(obj);
  },
  close() {
    importDefault(686).dispatch({ type: "NOTIFICATION_SETTINGS_MODAL_CLOSE" });
  },
  updateGuildNotificationSettings(guildId, muteSettings, NotificationLabel) {
    let obj = require(5073) /* differ */;
    const currentGuildSettings = obj.getCurrentGuildSettings(guildId);
    const result = importDefault(5075).saveUserGuildSettings(guildId, muteSettings);
    const obj2 = importDefault(5075);
    obj = { type: "USER_GUILD_SETTINGS_GUILD_UPDATE", guildId, settings: muteSettings };
    importDefault(686).dispatch(obj);
    const obj3 = importDefault(686);
    const result1 = require(5073) /* differ */.trackGuildNotificationSettingsUpdate(guildId, muteSettings, currentGuildSettings, NotificationLabel, arg3);
  },
  updateGuildAndChannelNotificationSettings(guildId, channel_overrides, OptedIn) {
    const _require = guildId;
    const importDefault = channel_overrides;
    const dependencyMap = OptedIn;
    let dispatcher = arg3;
    let obj = importDefault(21);
    const keys = obj.keys(channel_overrides.channel_overrides);
    const currentGuildSettings = _require(5073).getCurrentGuildSettings(guildId);
    const obj2 = _require(5073);
    const manyCurrentChannelSettings = _require(5073).getManyCurrentChannelSettings(guildId, keys);
    const obj3 = _require(5073);
    let result = importDefault(5075).saveUserGuildSettings(guildId, channel_overrides);
    const obj4 = importDefault(5075);
    obj = { type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE", guildId, settings: channel_overrides };
    importDefault(686).dispatch(obj);
    const obj5 = importDefault(686);
    const result1 = _require(5073).trackGuildNotificationSettingsUpdate(guildId, channel_overrides, currentGuildSettings, OptedIn, arg3);
    const obj7 = _require(5073);
    const keys1 = importDefault(21).keys(channel_overrides.channel_overrides);
    const item = keys1.forEach((channelId) => {
      const value = _isNativeReflectConstruct.get(channelId);
      let obj = guildId(OptedIn[6]);
      obj = { guildId, channelId, change: channel_overrides.channel_overrides[channelId], previous: value, label: OptedIn, location: dispatcher };
      const result = obj.trackChannelNotificationSettingsUpdate(obj);
    });
  },
  updateChannelOverrideSettings(guildId, id, muteSettings, NotificationLabel, location) {
    let obj = require(5073) /* differ */;
    const currentChannelSettings = obj.getCurrentChannelSettings(guildId, id);
    let obj1 = importDefault(5075);
    obj = { [id]: muteSettings };
    const result = obj1.saveUserGuildSettings(guildId, { channel_overrides: obj });
    obj = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId, channelId: id, settings: muteSettings };
    importDefault(686).dispatch(obj);
    const AccessibilityAnnouncer = require(3976) /* AccessibilityAnnouncer */.AccessibilityAnnouncer;
    const intl = require(1212) /* getSystemLocale */.intl;
    AccessibilityAnnouncer.announce(intl.string(require(1212) /* getSystemLocale */.t.MlIsJ8));
    const obj4 = importDefault(686);
    obj1 = { guildId, channelId: id, change: muteSettings, previous: currentChannelSettings, label: NotificationLabel, location };
    const result1 = require(5073) /* differ */.trackChannelNotificationSettingsUpdate(obj1);
  },
  updateChannelOverrideSettingsBulk(guildId, channel_overrides, OptedIn) {
    const _require = guildId;
    const importDefault = channel_overrides;
    const dependencyMap = OptedIn;
    let dispatcher = arg3;
    let obj = importDefault(21);
    const keys = obj.keys(channel_overrides);
    const manyCurrentChannelSettings = _require(5073).getManyCurrentChannelSettings(guildId, keys);
    const obj2 = _require(5073);
    obj = { channel_overrides };
    const result = importDefault(5075).saveUserGuildSettings(guildId, obj);
    const obj3 = importDefault(5075);
    obj = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK", guildId, overrides: channel_overrides };
    importDefault(686).dispatch(obj);
    const obj5 = importDefault(686);
    const keys1 = importDefault(21).keys(channel_overrides);
    const item = keys1.forEach((channelId) => {
      let obj = guildId(OptedIn[6]);
      obj = { guildId, channelId, change: table[channelId], previous: _isNativeReflectConstruct.get(channelId), label: OptedIn, location: dispatcher };
      return obj.trackChannelNotificationSettingsUpdate(obj);
    });
  },
  updateAppDMOverrideSettings(guildId, id, id2, change, NotificationLabel2) {
    let obj = require(5073) /* differ */;
    const currentChannelSettings = obj.getCurrentChannelSettings(guildId, id);
    let obj1 = importDefault(5075);
    obj = { [id]: change };
    const result = obj1.saveUserGuildSettings(guildId, { channel_overrides: obj });
    obj = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId, channelId: id, settings: change };
    importDefault(686).dispatch(obj);
    const AccessibilityAnnouncer = require(3976) /* AccessibilityAnnouncer */.AccessibilityAnnouncer;
    const intl = require(1212) /* getSystemLocale */.intl;
    AccessibilityAnnouncer.announce(intl.string(require(1212) /* getSystemLocale */.t.MlIsJ8));
    const obj4 = importDefault(686);
    obj1 = { updateType: constants.AUTHORIZED_APP_DM, guildId, channelId: id, applicationId: id2, change, previous: currentChannelSettings, label: NotificationLabel2 };
    const result1 = require(5073) /* differ */.trackChannelNotificationSettingsUpdate(obj1);
  },
  setForumThreadsCreated(channel, arg1) {
    const self = this;
    const NotificationLabel = require(5073) /* differ */.NotificationLabel;
    const result = self.updateChannelOverrideSettings(channel.guild_id, channel.id, { flags: channelFlags.getChannelFlags(channel) & ~(arg1 ? closure_7.NEW_FORUM_THREADS_OFF : closure_7.NEW_FORUM_THREADS_ON) | (arg1 ? closure_7.NEW_FORUM_THREADS_ON : closure_7.NEW_FORUM_THREADS_OFF) }, NotificationLabel.forumThreadsCreated(arg1));
  },
  setAccountFlag(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    return callback(async () => {
      let obj = callback(outer2_2[11]);
      const setFlagResult = obj.setFlag(outer2_4.accountNotificationSettings.flags, outer1_0, outer1_1);
      const HTTP = callback(outer2_2[12]).HTTP;
      obj = { url: outer2_5.ACCOUNT_NOTIFICATION_SETTINGS, body: { flags: setFlagResult }, rejectWithError: callback(outer2_2[12]).rejectWithMigratedError() };
      yield HTTP.patch(obj);
      const obj3 = callback(outer2_2[12]);
      yield callback2(outer2_2[5]).dispatch({ type: "NOTIFICATION_SETTINGS_UPDATE", settings: { flags: setFlagResult } });
    })();
  }
};
