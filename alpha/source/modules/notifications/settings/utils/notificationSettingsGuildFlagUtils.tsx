// Module ID: 9604
// Function ID: 9605
// Name: notificationSettingsGuildFlagUtils
// Dependencies: [5010, 1074, 1084, 5013, 6535, 9597, 6530, 563, 2]
// Exports: updateGuildPreset, useGuildPresetSettings

// Module 9604 (notificationSettingsGuildFlagUtils)
import notificationSettingsPresetUtils from "notificationSettingsPresetUtils" /* 5013 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6535 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5010 */;

const require = globalThis.__r;

require = fn;
const UserNotificationSettings = fn(1074).UserNotificationSettings;
const constants = fn(1084).GuildNotificationSettingsFlags;
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/utils/notificationSettingsGuildFlagUtils.tsx");

export const updateGuildPreset = function updateGuildPreset(guildId, arg1) {
  const guildFlags = UserGuildSettingsStore.getGuildFlags(guildId);
  if (arg1 === notificationSettingsPresetUtils.Presets.ALL_MESSAGES) {
    const obj2 = { message_notifications: UserNotificationSettings.ALL_MESSAGES, flags: null };
    const obj7 = NotificationSettingsModalActionCreatorsDefault;
    obj2.flags = tmp2(9597).withGuildUnreadFlags(guildFlags, constants.UNREADS_ALL_MESSAGES);
    const result = obj7.updateGuildNotificationSettings(guildId, obj2, tmp2(6530).NotificationLabels.PresetAll);
    const tmp2Result = tmp2(9597);
  } else if (arg1 === tmp2(5013).Presets.HYBRID) {
    const obj3 = { message_notifications: UserNotificationSettings.ONLY_MENTIONS, flags: null };
    const obj4 = NotificationSettingsModalActionCreatorsDefault;
    obj3.flags = tmp2(9597).withGuildUnreadFlags(guildFlags, constants.UNREADS_ALL_MESSAGES);
    const result1 = obj4.updateGuildNotificationSettings(guildId, obj3, tmp2(6530).NotificationLabels.PresetHybrid);
    const tmp2Result4 = tmp2(9597);
  } else if (arg1 === tmp2(5013).Presets.MENTIONS) {
    const obj5 = { message_notifications: UserNotificationSettings.ONLY_MENTIONS, flags: null };
    const obj = NotificationSettingsModalActionCreatorsDefault;
    obj5.flags = tmp2(9597).withGuildUnreadFlags(guildFlags, constants.UNREADS_ONLY_MENTIONS);
    const result2 = obj.updateGuildNotificationSettings(guildId, obj5, tmp2(6530).NotificationLabels.PresetMentions);
    const tmp2Result5 = tmp2(9597);
  } else if (arg1 === tmp2(5013).Presets.NOTHING) {
    const obj6 = { message_notifications: UserNotificationSettings.NO_MESSAGES, flags: null };
    const obj10 = NotificationSettingsModalActionCreatorsDefault;
    obj6.flags = tmp2(9597).withGuildUnreadFlags(guildFlags, constants.UNREADS_ONLY_MENTIONS);
    const result3 = obj10.updateGuildNotificationSettings(guildId, obj6, tmp2(6530).NotificationLabels.PresetNothing);
    const tmp2Result6 = tmp2(9597);
  }
};
export const useGuildPresetSettings = function useGuildPresetSettings(guildId) {
  _require = guildId;
  const items = [UserGuildSettingsStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => UserGuildSettingsStore.getGuildUnreadSetting(closure_0));
  const obj = require("useStateFromStores");
  const items1 = [UserGuildSettingsStore];
  const stateFromStores1 = require("useStateFromStores").useStateFromStores(items1, () => UserGuildSettingsStore.getMessageNotifications(closure_0));
  const obj3 = { unread: stateFromStores, notification: stateFromStores1, preset: null };
  const obj2 = require("useStateFromStores");
  obj3.preset = require("notificationSettingsPresetUtils").presetFromSettings(stateFromStores, stateFromStores1);
  return obj3;
};
