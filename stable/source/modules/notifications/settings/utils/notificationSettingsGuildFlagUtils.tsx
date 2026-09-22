// Module ID: 10283
// Function ID: 10284
// Name: notificationSettingsGuildFlagUtils
// Dependencies: [4817, 1074, 1084, 4820, 7222, 10278, 7217, 563, 2]
// Exports: updateGuildPreset, useGuildPresetSettings

// Module 10283 (notificationSettingsGuildFlagUtils)
import notificationSettingsPresetUtils from "notificationSettingsPresetUtils" /* 4820 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7222 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4817 */;

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
    const obj4 = NotificationSettingsModalActionCreatorsDefault;
    obj2.flags = tmp2(10278).withGuildUnreadFlags(guildFlags, constants.UNREADS_ALL_MESSAGES);
    const result = obj4.updateGuildNotificationSettings(guildId, obj2, tmp2(7217).NotificationLabels.PresetAll);
    const tmp2Result = tmp2(10278);
  } else if (arg1 === tmp2(4820).Presets.MENTIONS) {
    const obj3 = { message_notifications: UserNotificationSettings.ONLY_MENTIONS, flags: null };
    const obj = NotificationSettingsModalActionCreatorsDefault;
    obj3.flags = tmp2(10278).withGuildUnreadFlags(guildFlags, constants.UNREADS_ONLY_MENTIONS);
    const result1 = obj.updateGuildNotificationSettings(guildId, obj3, tmp2(7217).NotificationLabels.PresetMentions);
    const tmp2Result3 = tmp2(10278);
  } else if (arg1 === tmp2(4820).Presets.NOTHING) {
    const obj5 = { message_notifications: UserNotificationSettings.NO_MESSAGES, flags: null };
    const obj7 = NotificationSettingsModalActionCreatorsDefault;
    obj5.flags = tmp2(10278).withGuildUnreadFlags(guildFlags, constants.UNREADS_ONLY_MENTIONS);
    const result2 = obj7.updateGuildNotificationSettings(guildId, obj5, tmp2(7217).NotificationLabels.PresetNothing);
    const tmp2Result4 = tmp2(10278);
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
