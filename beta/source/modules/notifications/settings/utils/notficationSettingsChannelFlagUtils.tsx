// Module ID: 9607
// Function ID: 9608
// Name: notficationSettingsChannelFlagUtils
// Dependencies: [32, 2045, 5017, 1074, 5018, 1084, 563, 5020, 9605, 6540, 9608, 6535, 2]
// Exports: updateChannelNotificationSetting, updateChannelPreset, updateChannelToGuildDefault, updateChannelUnreadSetting, useChannelPresetInheritance, useChannelPresetSettings

// Module 9607 (notficationSettingsChannelFlagUtils)
import Constants from "Constants" /* 1074 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1084 */;
import ReadStateConstants from "ReadStateConstants" /* 5018 */;
import notificationSettingsPresetUtils from "notificationSettingsPresetUtils" /* 5020 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6535 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6540 */;
import notifications_NotificationUtils from "notifications/NotificationUtils" /* 9605 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 9608 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const UserNotificationSettings = Constants.UserNotificationSettings;
const UnreadSetting = ReadStateConstants.UnreadSetting;
const constants = UserSettingsConstants.ChannelNotificationSettingsFlags;
let result = size.fileFinishedImporting("modules/notifications/settings/utils/notficationSettingsChannelFlagUtils.tsx");

export const useChannelPresetSettings = function useChannelPresetSettings(channel) {
  let obj4;
  _require = channel;
  const items = [UserGuildSettingsStore];
  const obj = require("useStateFromStores");
  const stateFromStores = obj.useStateFromStores(items, () => UserGuildSettingsStore.resolveUnreadSetting(channel));
  const items1 = [UserGuildSettingsStore];
  const obj2 = require("useStateFromStores");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => UserGuildSettingsStore.resolvedMessageNotifications(channel));
  const obj3 = { unread: stateFromStores, notification: stateFromStores1, preset: obj4.presetFromSettings(stateFromStores, stateFromStores1) };
  obj4 = require("notificationSettingsPresetUtils");
  return obj3;
};
export const useChannelPresetInheritance = function useChannelPresetInheritance(channel) {
  let tmp2;
  let tmp3;
  _require = channel;
  let obj = require("useStateFromStores");
  let items = [UserGuildSettingsStore];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    const obj = notifications_NotificationUtils;
    return obj.filterOverrides(UserGuildSettingsStore.getChannelOverrides(channel.guild_id), { ignoreMute: true, ignoreUnreadSetting: false, ignoreNotificationSetting: false });
  });
  let items1 = [UserGuildSettingsStore, ChannelStore];
  const items2 = [, , ];
  ({ guild_id: arr3[0], parent_id: arr3[1] } = channel);
  items2[2] = stateFromStoresArray;
  const obj3 = require("useStateFromStores");
  const tmp = _slicedToArray(obj3.useStateFromStoresArray(items1, () => {
    channel = ChannelStore.getChannel(channel.parent_id);
    if (null != channel) {
      let items1;
      if (stateFromStoresArray.includes(channel.id)) {
        const presetName2 = notificationSettingsPresetUtils.presetName;
        notificationSettingsPresetUtils;
        const webPresetFromSettings2 = notificationSettingsPresetUtils.webPresetFromSettings;
        notificationSettingsPresetUtils;
        const unreadSetting = UserGuildSettingsStore.resolveUnreadSetting(channel);
        const items = ["parent", presetName2(webPresetFromSettings2(unreadSetting, UserGuildSettingsStore.resolvedMessageNotifications(channel)))];
        items1 = items;
      }
      return items1;
    }
    const presetName = notificationSettingsPresetUtils.presetName;
    notificationSettingsPresetUtils;
    const webPresetFromSettings = notificationSettingsPresetUtils.webPresetFromSettings;
    notificationSettingsPresetUtils;
    const guildUnreadSetting = UserGuildSettingsStore.getGuildUnreadSetting(tmp.guild_id);
    items1 = ["guild", presetName(webPresetFromSettings(guildUnreadSetting, UserGuildSettingsStore.getMessageNotifications(channel.guild_id)))];
  }, items2), 2);
  const obj2 = { inherited: !stateFromStoresArray.includes(channel.id), inheritedFrom: tmp2, inheritedPreset: tmp3 };
  [tmp2, tmp3] = tmp;
  return obj2;
};
export const updateChannelPreset = function updateChannelPreset(guild_id, id, arg2) {
  let obj3;
  let obj5;
  let obj6;
  let obj8;
  let tmp2Result;
  let tmp2Result4;
  let tmp2Result5;
  let tmp2Result6;
  const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(guild_id, id);
  if (arg2 === notificationSettingsPresetUtils.Presets.ALL_MESSAGES) {
    const obj2 = { guildId: guild_id, channelId: id, settings: obj3, label: NotificationSettingsUtils.NotificationLabels.PresetAll };
    obj3 = { message_notifications: UserNotificationSettings.ALL_MESSAGES, flags: tmp2Result.withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ALL_MESSAGES) };
    const updateChannelOverrideSettings3 = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
    NotificationSettingsModalActionCreatorsDefault;
    tmp2Result = notificationSettingsFlagUtils;
    const result = updateChannelOverrideSettings3(obj2);
  } else if (arg2 === notificationSettingsPresetUtils.Presets.HYBRID) {
    const obj4 = { guildId: guild_id, channelId: id, settings: obj5, label: NotificationSettingsUtils.NotificationLabels.PresetHybrid };
    obj5 = { message_notifications: UserNotificationSettings.ONLY_MENTIONS, flags: tmp2Result4.withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ALL_MESSAGES) };
    const updateChannelOverrideSettings2 = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
    NotificationSettingsModalActionCreatorsDefault;
    tmp2Result4 = notificationSettingsFlagUtils;
    const result1 = updateChannelOverrideSettings2(obj4);
  } else if (arg2 === notificationSettingsPresetUtils.Presets.MENTIONS) {
    const obj = { guildId: guild_id, channelId: id, settings: obj6, label: NotificationSettingsUtils.NotificationLabels.PresetMentions };
    obj6 = { message_notifications: UserNotificationSettings.ONLY_MENTIONS, flags: tmp2Result5.withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ONLY_MENTIONS) };
    const updateChannelOverrideSettings = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
    NotificationSettingsModalActionCreatorsDefault;
    tmp2Result5 = notificationSettingsFlagUtils;
    const result2 = updateChannelOverrideSettings(obj);
  } else if (arg2 === notificationSettingsPresetUtils.Presets.NOTHING) {
    const obj7 = { guildId: guild_id, channelId: id, settings: obj8, label: NotificationSettingsUtils.NotificationLabels.PresetNothing };
    obj8 = { message_notifications: UserNotificationSettings.NO_MESSAGES, flags: tmp2Result6.withChannelUnreadFlags(channelIdFlags, constants.UNREADS_ONLY_MENTIONS) };
    const updateChannelOverrideSettings4 = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
    NotificationSettingsModalActionCreatorsDefault;
    tmp2Result6 = notificationSettingsFlagUtils;
    const result3 = updateChannelOverrideSettings4(obj7);
  }
};
export const updateChannelToGuildDefault = function updateChannelToGuildDefault(guild_id, id) {
  let obj2;
  let obj3;
  const obj = { guildId: guild_id, channelId: id, settings: obj2, label: NotificationSettingsUtils.NotificationLabels.PresetDefault };
  obj2 = { message_notifications: UserNotificationSettings.NULL, flags: obj3.resetChannelUnreadFlags(UserGuildSettingsStore.getChannelIdFlags(guild_id, id)) };
  const updateChannelOverrideSettings = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
  NotificationSettingsModalActionCreatorsDefault;
  obj3 = notificationSettingsFlagUtils;
  const result = updateChannelOverrideSettings(obj);
};
export const updateChannelUnreadSetting = function updateChannelUnreadSetting(guild_id, id, ALL_MESSAGES) {
  let NotificationLabel;
  let UNREADS_ONLY_MENTIONS;
  let withChannelUnreadFlags;
  const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(guild_id, id);
  const obj = { guildId: guild_id, channelId: id, settings: { flags: withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) }, label: NotificationLabel.unreads(ALL_MESSAGES) };
  const updateChannelOverrideSettings = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
  NotificationSettingsModalActionCreatorsDefault;
  withChannelUnreadFlags = notificationSettingsFlagUtils.withChannelUnreadFlags;
  notificationSettingsFlagUtils;
  if (ALL_MESSAGES === UnreadSetting.ALL_MESSAGES) {
    UNREADS_ONLY_MENTIONS = constants.UNREADS_ALL_MESSAGES;
  } else {
    UNREADS_ONLY_MENTIONS = constants.UNREADS_ONLY_MENTIONS;
  }
  ({ flags: withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) });
  NotificationLabel = NotificationSettingsUtils.NotificationLabel;
  const result = updateChannelOverrideSettings(obj);
};
export const updateChannelNotificationSetting = function updateChannelNotificationSetting(guildId, channelId, message_notifications) {
  let NotificationLabel;
  const obj = { guildId, channelId, settings: { message_notifications }, label: NotificationLabel.notifications(message_notifications) };
  const updateChannelOverrideSettings = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
  NotificationSettingsModalActionCreatorsDefault;
  NotificationLabel = NotificationSettingsUtils.NotificationLabel;
  const result = updateChannelOverrideSettings(obj);
};
