// Module ID: 9615
// Function ID: 9616
// Name: notificationSettingsGuildFlagUtils
// Dependencies: [5017, 1074, 1084, 5020, 6540, 9608, 6535, 563, 2]
// Exports: updateGuildPreset, useGuildPresetSettings

// Module 9615 (notificationSettingsGuildFlagUtils)
import Constants from "Constants" /* 1074 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1084 */;
import notificationSettingsPresetUtils from "notificationSettingsPresetUtils" /* 5020 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6540 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 9608 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const UserNotificationSettings = Constants.UserNotificationSettings;
const constants = UserSettingsConstants.GuildNotificationSettingsFlags;
let result = size.fileFinishedImporting("modules/notifications/settings/utils/notificationSettingsGuildFlagUtils.tsx");

export const updateGuildPreset = function updateGuildPreset(guildId, arg1) {
  let tmp2Result;
  let tmp2Result4;
  let tmp2Result5;
  let tmp2Result6;
  const guildFlags = UserGuildSettingsStore.getGuildFlags(guildId);
  if (arg1 === notificationSettingsPresetUtils.Presets.ALL_MESSAGES) {
    const obj2 = { message_notifications: UserNotificationSettings.ALL_MESSAGES, flags: tmp2Result.withGuildUnreadFlags(guildFlags, constants.UNREADS_ALL_MESSAGES) };
    const updateGuildNotificationSettings3 = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings;
    NotificationSettingsModalActionCreatorsDefault;
    tmp2Result = notificationSettingsFlagUtils;
    const result = updateGuildNotificationSettings3(guildId, obj2, tmp2(6535).NotificationLabels.PresetAll);
  } else if (arg1 === notificationSettingsPresetUtils.Presets.HYBRID) {
    const obj3 = { message_notifications: UserNotificationSettings.ONLY_MENTIONS, flags: tmp2Result4.withGuildUnreadFlags(guildFlags, constants.UNREADS_ALL_MESSAGES) };
    const updateGuildNotificationSettings2 = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings;
    NotificationSettingsModalActionCreatorsDefault;
    tmp2Result4 = notificationSettingsFlagUtils;
    const result1 = updateGuildNotificationSettings2(guildId, obj3, tmp2(6535).NotificationLabels.PresetHybrid);
  } else if (arg1 === notificationSettingsPresetUtils.Presets.MENTIONS) {
    const obj = { message_notifications: UserNotificationSettings.ONLY_MENTIONS, flags: tmp2Result5.withGuildUnreadFlags(guildFlags, constants.UNREADS_ONLY_MENTIONS) };
    const updateGuildNotificationSettings = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings;
    NotificationSettingsModalActionCreatorsDefault;
    tmp2Result5 = notificationSettingsFlagUtils;
    const result2 = updateGuildNotificationSettings(guildId, obj, tmp2(6535).NotificationLabels.PresetMentions);
  } else if (arg1 === notificationSettingsPresetUtils.Presets.NOTHING) {
    const obj4 = { message_notifications: UserNotificationSettings.NO_MESSAGES, flags: tmp2Result6.withGuildUnreadFlags(guildFlags, constants.UNREADS_ONLY_MENTIONS) };
    const updateGuildNotificationSettings4 = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings;
    NotificationSettingsModalActionCreatorsDefault;
    tmp2Result6 = notificationSettingsFlagUtils;
    const result3 = updateGuildNotificationSettings4(guildId, obj4, tmp2(6535).NotificationLabels.PresetNothing);
  }
};
export const useGuildPresetSettings = function useGuildPresetSettings(guildId) {
  let obj4;
  _require = guildId;
  const items = [UserGuildSettingsStore];
  const obj = require("useStateFromStores");
  const stateFromStores = obj.useStateFromStores(items, () => UserGuildSettingsStore.getGuildUnreadSetting(guildId));
  const items1 = [UserGuildSettingsStore];
  const obj2 = require("useStateFromStores");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => UserGuildSettingsStore.getMessageNotifications(guildId));
  const obj3 = { unread: stateFromStores, notification: stateFromStores1, preset: obj4.presetFromSettings(stateFromStores, stateFromStores1) };
  obj4 = require("notificationSettingsPresetUtils");
  return obj3;
};
