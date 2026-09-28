// Module ID: 9615
// Function ID: 9616
// Name: notificationSettingsGuildFlagUtils
// Dependencies: [5017, 1074, 1084, 5020, 6540, 9608, 6535, 563, 2]
// Exports: updateGuildPreset, useGuildPresetSettings

// Module 9615 (notificationSettingsGuildFlagUtils)
import notificationSettingsPresetUtils from "notificationSettingsPresetUtils" /* 5020 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6540 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;

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
    obj2.flags = tmp2(9608).withGuildUnreadFlags(guildFlags, constants.UNREADS_ALL_MESSAGES);
    const result = obj7.updateGuildNotificationSettings(guildId, obj2, tmp2(6535).NotificationLabels.PresetAll);
    const tmp2Result = tmp2(9608);
  } else if (arg1 === tmp2(5020).Presets.HYBRID) {
    const obj3 = { message_notifications: UserNotificationSettings.ONLY_MENTIONS, flags: null };
    const obj4 = NotificationSettingsModalActionCreatorsDefault;
    obj3.flags = tmp2(9608).withGuildUnreadFlags(guildFlags, constants.UNREADS_ALL_MESSAGES);
    const result1 = obj4.updateGuildNotificationSettings(guildId, obj3, tmp2(6535).NotificationLabels.PresetHybrid);
    const tmp2Result4 = tmp2(9608);
  } else if (arg1 === tmp2(5020).Presets.MENTIONS) {
    const obj5 = { message_notifications: UserNotificationSettings.ONLY_MENTIONS, flags: null };
    const obj = NotificationSettingsModalActionCreatorsDefault;
    obj5.flags = tmp2(9608).withGuildUnreadFlags(guildFlags, constants.UNREADS_ONLY_MENTIONS);
    const result2 = obj.updateGuildNotificationSettings(guildId, obj5, tmp2(6535).NotificationLabels.PresetMentions);
    const tmp2Result5 = tmp2(9608);
  } else if (arg1 === tmp2(5020).Presets.NOTHING) {
    const obj6 = { message_notifications: UserNotificationSettings.NO_MESSAGES, flags: null };
    const obj10 = NotificationSettingsModalActionCreatorsDefault;
    obj6.flags = tmp2(9608).withGuildUnreadFlags(guildFlags, constants.UNREADS_ONLY_MENTIONS);
    const result3 = obj10.updateGuildNotificationSettings(guildId, obj6, tmp2(6535).NotificationLabels.PresetNothing);
    const tmp2Result6 = tmp2(9608);
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
