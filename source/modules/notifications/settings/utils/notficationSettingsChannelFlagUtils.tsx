// Module ID: 10274
// Function ID: 79367
// Name: useChannelPresetSettings
// Dependencies: []
// Exports: updateChannelNotificationSetting, updateChannelPreset, updateChannelToGuildDefault, updateChannelUnreadSetting, useChannelPresetInheritance, useChannelPresetSettings

// Module 10274 (useChannelPresetSettings)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const UserNotificationSettings = arg1(dependencyMap[3]).UserNotificationSettings;
const UnreadSetting = arg1(dependencyMap[4]).UnreadSetting;
let closure_8 = arg1(dependencyMap[5]).ChannelNotificationSettingsFlags;
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/notifications/settings/utils/notficationSettingsChannelFlagUtils.tsx");

export const useChannelPresetSettings = function useChannelPresetSettings(channel) {
  const arg1 = channel;
  let obj = arg1(dependencyMap[6]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => closure_5.resolveUnreadSetting(arg0));
  const items1 = [closure_5];
  const stateFromStores1 = arg1(dependencyMap[6]).useStateFromStores(items1, () => closure_5.resolvedMessageNotifications(arg0));
  obj = { unread: stateFromStores, notification: stateFromStores1 };
  const obj2 = arg1(dependencyMap[6]);
  obj.preset = arg1(dependencyMap[7]).presetFromSettings(stateFromStores, stateFromStores1);
  return obj;
};
export const useChannelPresetInheritance = function useChannelPresetInheritance(channel) {
  let tmp2;
  let tmp3;
  const arg1 = channel;
  let obj = arg1(dependencyMap[6]);
  const items = [closure_5];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => arg0(closure_2[8]).filterOverrides(store.getChannelOverrides(arg0.guild_id), { activeOpacity: true, borderRadius: true, flexGrow: true }));
  const importDefault = stateFromStoresArray;
  const items1 = [closure_5, closure_4];
  const items2 = [, , ];
  ({ guild_id: arr3[0], parent_id: arr3[1] } = channel);
  items2[2] = stateFromStoresArray;
  const obj3 = arg1(dependencyMap[6]);
  obj = { inherited: !stateFromStoresArray.includes(channel.id), inheritedFrom: tmp2, inheritedPreset: tmp3 };
  [tmp2, tmp3] = callback(arg1(dependencyMap[6]).useStateFromStoresArray(items1, (self) => {
    const channel = channel.getChannel(self.parent_id);
    if (null != channel) {
      if (stateFromStoresArray.includes(channel.id)) {
        const obj3 = self(closure_2[7]);
        const unreadSetting = store.resolveUnreadSetting(channel);
        const items = [true, obj3.presetName(self(closure_2[7]).presetFromSettings(unreadSetting, store.resolvedMessageNotifications(channel)))];
        let items1 = items;
        const obj4 = self(closure_2[7]);
      }
      return items1;
    }
    const obj = self(closure_2[7]);
    const guildUnreadSetting = store.getGuildUnreadSetting(self.guild_id);
    items1 = ["transform", obj.presetName(self(closure_2[7]).presetFromSettings(guildUnreadSetting, store.getMessageNotifications(self.guild_id)))];
  }, items2), 2);
  return obj;
};
export const updateChannelPreset = function updateChannelPreset(guild_id, id, arg2) {
  const channelIdFlags = store.getChannelIdFlags(guild_id, id);
  if (arg2 === id(dependencyMap[7]).Presets.ALL_MESSAGES) {
    const obj4 = importDefault(dependencyMap[9]);
    let obj = { message_notifications: UserNotificationSettings.ALL_MESSAGES, flags: id(dependencyMap[10]).withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ALL_MESSAGES) };
    const result = obj4.updateChannelOverrideSettings(guild_id, id, obj, id(dependencyMap[11]).NotificationLabels.PresetAll);
    const obj6 = id(dependencyMap[10]);
  } else if (arg2 === id(dependencyMap[7]).Presets.MENTIONS) {
    obj = importDefault(dependencyMap[9]);
    obj = { message_notifications: UserNotificationSettings.ONLY_MENTIONS, flags: id(dependencyMap[10]).withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ONLY_MENTIONS) };
    const result1 = obj.updateChannelOverrideSettings(guild_id, id, obj, id(dependencyMap[11]).NotificationLabels.PresetMentions);
    const obj3 = id(dependencyMap[10]);
  } else if (arg2 === id(dependencyMap[7]).Presets.NOTHING) {
    const obj7 = importDefault(dependencyMap[9]);
    const obj1 = { message_notifications: UserNotificationSettings.NO_MESSAGES, flags: id(dependencyMap[10]).withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ONLY_MENTIONS) };
    const result2 = obj7.updateChannelOverrideSettings(guild_id, id, obj1, id(dependencyMap[11]).NotificationLabels.PresetNothing);
    const obj9 = id(dependencyMap[10]);
  }
};
export const updateChannelToGuildDefault = function updateChannelToGuildDefault(guild_id, id) {
  let obj = importDefault(dependencyMap[9]);
  obj = { message_notifications: UserNotificationSettings.NULL, flags: id(dependencyMap[10]).resetChannelUnreadFlags(store.getChannelIdFlags(guild_id, id)) };
  const result = obj.updateChannelOverrideSettings(guild_id, id, obj, id(dependencyMap[11]).NotificationLabels.PresetDefault);
};
export const updateChannelUnreadSetting = function updateChannelUnreadSetting(guild_id, id, ALL_MESSAGES) {
  const channelIdFlags = store.getChannelIdFlags(guild_id, id);
  let obj = importDefault(dependencyMap[9]);
  obj = {};
  if (ALL_MESSAGES === UnreadSetting.ALL_MESSAGES) {
    let UNREADS_ONLY_MENTIONS = constants.UNREADS_ALL_MESSAGES;
  } else {
    UNREADS_ONLY_MENTIONS = constants.UNREADS_ONLY_MENTIONS;
  }
  obj.flags = id(dependencyMap[10]).withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS);
  const NotificationLabel = id(dependencyMap[11]).NotificationLabel;
  const result = obj.updateChannelOverrideSettings(guild_id, id, obj, NotificationLabel.unreads(ALL_MESSAGES));
};
export const updateChannelNotificationSetting = function updateChannelNotificationSetting(guildId, id, message_notifications) {
  let obj = importDefault(dependencyMap[9]);
  obj = { message_notifications };
  const NotificationLabel = id(dependencyMap[11]).NotificationLabel;
  const result = obj.updateChannelOverrideSettings(guildId, id, obj, NotificationLabel.notifications(message_notifications));
};
