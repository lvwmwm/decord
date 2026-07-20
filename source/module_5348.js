// Module ID: 5348
// Function ID: 45719
// Dependencies: []

// Module 5348
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const Endpoints = arg1(dependencyMap[2]).Endpoints;
let closure_6 = arg1(dependencyMap[3]).NotificationSettingsUpdateType;
let closure_7 = arg1(dependencyMap[4]).ChannelNotificationSettingsFlags;
const result = arg1(dependencyMap[13]).fileFinishedImporting("actions/NotificationSettingsModalActionCreators.tsx");

export default {
  open(guildId) {
    let obj = importDefault(dependencyMap[5]);
    obj = { type: "NOTIFICATION_SETTINGS_MODAL_OPEN", guildId };
    obj.dispatch(obj);
  },
  close() {
    importDefault(dependencyMap[5]).dispatch({ type: "NOTIFICATION_SETTINGS_MODAL_CLOSE" });
  },
  updateGuildNotificationSettings(guildId, muteSettings, NotificationLabel) {
    let obj = muteSettings(dependencyMap[6]);
    const currentGuildSettings = obj.getCurrentGuildSettings(guildId);
    const result = importDefault(dependencyMap[7]).saveUserGuildSettings(guildId, muteSettings);
    const obj2 = importDefault(dependencyMap[7]);
    obj = { type: "USER_GUILD_SETTINGS_GUILD_UPDATE", guildId, settings: muteSettings };
    importDefault(dependencyMap[5]).dispatch(obj);
    const obj3 = importDefault(dependencyMap[5]);
    const result1 = muteSettings(dependencyMap[6]).trackGuildNotificationSettingsUpdate(guildId, muteSettings, currentGuildSettings, NotificationLabel, arg3);
  },
  updateGuildAndChannelNotificationSettings(guildId, channel_overrides, OptedIn) {
    channel_overrides = guildId;
    const importDefault = channel_overrides;
    const dependencyMap = OptedIn;
    let closure_3 = arg3;
    let obj = importDefault(dependencyMap[8]);
    const keys = obj.keys(channel_overrides.channel_overrides);
    const currentGuildSettings = channel_overrides(dependencyMap[6]).getCurrentGuildSettings(guildId);
    const obj2 = channel_overrides(dependencyMap[6]);
    const manyCurrentChannelSettings = channel_overrides(dependencyMap[6]).getManyCurrentChannelSettings(guildId, keys);
    const obj3 = channel_overrides(dependencyMap[6]);
    const result = importDefault(dependencyMap[7]).saveUserGuildSettings(guildId, channel_overrides);
    const obj4 = importDefault(dependencyMap[7]);
    obj = { type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE", guildId, settings: channel_overrides };
    importDefault(dependencyMap[5]).dispatch(obj);
    const obj5 = importDefault(dependencyMap[5]);
    const result1 = channel_overrides(dependencyMap[6]).trackGuildNotificationSettingsUpdate(guildId, channel_overrides, currentGuildSettings, OptedIn, arg3);
    const obj7 = channel_overrides(dependencyMap[6]);
    const keys1 = importDefault(dependencyMap[8]).keys(channel_overrides.channel_overrides);
    const item = keys1.forEach((channelId) => {
      const value = closure_4.get(channelId);
      let obj = channelId(arg2[6]);
      obj = { guildId: channelId, channelId, change: arg1.channel_overrides[channelId], previous: value, label: arg2, location: arg3 };
      const result = obj.trackChannelNotificationSettingsUpdate(obj);
    });
  },
  updateChannelOverrideSettings(guildId, id, muteSettings, NotificationLabel, location) {
    let obj = id(dependencyMap[6]);
    const currentChannelSettings = obj.getCurrentChannelSettings(guildId, id);
    let obj1 = importDefault(dependencyMap[7]);
    obj = { [id]: muteSettings };
    const result = obj1.saveUserGuildSettings(guildId, { channel_overrides: obj });
    obj = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId, channelId: id, settings: muteSettings };
    importDefault(dependencyMap[5]).dispatch(obj);
    const AccessibilityAnnouncer = id(dependencyMap[9]).AccessibilityAnnouncer;
    const intl = id(dependencyMap[10]).intl;
    AccessibilityAnnouncer.announce(intl.string(id(dependencyMap[10]).t.MlIsJ8));
    const obj4 = importDefault(dependencyMap[5]);
    obj1 = { guildId, channelId: id, change: muteSettings, previous: currentChannelSettings, label: NotificationLabel, location };
    const result1 = id(dependencyMap[6]).trackChannelNotificationSettingsUpdate(obj1);
  },
  updateChannelOverrideSettingsBulk(guildId, channel_overrides, OptedIn) {
    channel_overrides = guildId;
    const importDefault = channel_overrides;
    const dependencyMap = OptedIn;
    let closure_3 = arg3;
    let obj = importDefault(dependencyMap[8]);
    const keys = obj.keys(channel_overrides);
    const manyCurrentChannelSettings = channel_overrides(dependencyMap[6]).getManyCurrentChannelSettings(guildId, keys);
    const obj2 = channel_overrides(dependencyMap[6]);
    obj = { channel_overrides };
    const result = importDefault(dependencyMap[7]).saveUserGuildSettings(guildId, obj);
    const obj3 = importDefault(dependencyMap[7]);
    obj = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK", guildId, overrides: channel_overrides };
    importDefault(dependencyMap[5]).dispatch(obj);
    const obj5 = importDefault(dependencyMap[5]);
    const keys1 = importDefault(dependencyMap[8]).keys(channel_overrides);
    const item = keys1.forEach((channelId) => {
      let obj = channelId(arg2[6]);
      obj = { guildId: channelId, channelId, change: arg1[channelId], previous: closure_4.get(channelId), label: arg2, location: arg3 };
      return obj.trackChannelNotificationSettingsUpdate(obj);
    });
  },
  updateAppDMOverrideSettings(guildId, id, id2, change, NotificationLabel2) {
    let obj = id(dependencyMap[6]);
    const currentChannelSettings = obj.getCurrentChannelSettings(guildId, id);
    let obj1 = importDefault(dependencyMap[7]);
    obj = { [id]: change };
    const result = obj1.saveUserGuildSettings(guildId, { channel_overrides: obj });
    obj = { type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE", guildId, channelId: id, settings: change };
    importDefault(dependencyMap[5]).dispatch(obj);
    const AccessibilityAnnouncer = id(dependencyMap[9]).AccessibilityAnnouncer;
    const intl = id(dependencyMap[10]).intl;
    AccessibilityAnnouncer.announce(intl.string(id(dependencyMap[10]).t.MlIsJ8));
    const obj4 = importDefault(dependencyMap[5]);
    obj1 = { updateType: constants.AUTHORIZED_APP_DM, guildId, channelId: id, applicationId: id2, change, previous: currentChannelSettings, label: NotificationLabel2 };
    const result1 = id(dependencyMap[6]).trackChannelNotificationSettingsUpdate(obj1);
  },
  setForumThreadsCreated(channel, arg1) {
    const self = this;
    const NotificationLabel = arg1(dependencyMap[6]).NotificationLabel;
    const result = self.updateChannelOverrideSettings(channel.guild_id, channel.id, { flags: channelFlags.getChannelFlags(channel) & ~(arg1 ? closure_7.NEW_FORUM_THREADS_OFF : closure_7.NEW_FORUM_THREADS_ON) | arg1 ? closure_7.NEW_FORUM_THREADS_ON : closure_7.NEW_FORUM_THREADS_OFF }, NotificationLabel.forumThreadsCreated(arg1));
  },
  setAccountFlag(arg0, arg1) {
    arg1 = arg0;
    const importDefault = arg1;
    return callback(async () => {
      let obj = callback(closure_2[11]);
      const setFlagResult = obj.setFlag(obj.accountNotificationSettings.flags, callback, callback2);
      const HTTP = callback(closure_2[12]).HTTP;
      obj = { url: constants.ACCOUNT_NOTIFICATION_SETTINGS, body: { flags: setFlagResult }, rejectWithError: callback(closure_2[12]).rejectWithMigratedError() };
      yield HTTP.patch(obj);
      const obj3 = callback(closure_2[12]);
      yield callback2(closure_2[5]).dispatch({ type: "NOTIFICATION_SETTINGS_UPDATE", settings: { flags: setFlagResult } });
    })();
  }
};
