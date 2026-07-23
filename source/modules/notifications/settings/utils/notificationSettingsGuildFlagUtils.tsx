// Module ID: 10294
// Function ID: 79495
// Name: updateGuildPreset
// Dependencies: [4325, 653, 662, 4328, 5079, 10289, 5073, 624, 2]
// Exports: updateGuildPreset, useGuildPresetSettings

// Module 10294 (updateGuildPreset)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { UserNotificationSettings } from "ME";
import { GuildNotificationSettingsFlags as closure_5 } from "MAX_FAVORITES";

const require = arg1;
let result = require("MAX_FAVORITES").fileFinishedImporting("modules/notifications/settings/utils/notificationSettingsGuildFlagUtils.tsx");

export const updateGuildPreset = function updateGuildPreset(guildId, arg1) {
  guildFlags = guildFlags.getGuildFlags(guildId);
  if (arg1 === require(4328) /* Presets */.Presets.ALL_MESSAGES) {
    let obj = { message_notifications: UserNotificationSettings.ALL_MESSAGES };
    const obj4 = importDefault(5079);
    obj.flags = require(10289) /* resetGuildUnreadFlags */.withGuildUnreadFlags(guildFlags, constants.UNREADS_ALL_MESSAGES);
    const result = obj4.updateGuildNotificationSettings(guildId, obj, require(5073) /* differ */.NotificationLabels.PresetAll);
    const obj6 = require(10289) /* resetGuildUnreadFlags */;
  } else if (arg1 === require(4328) /* Presets */.Presets.MENTIONS) {
    obj = importDefault(5079);
    obj = { message_notifications: UserNotificationSettings.ONLY_MENTIONS, flags: require(10289) /* resetGuildUnreadFlags */.withGuildUnreadFlags(guildFlags, constants.UNREADS_ONLY_MENTIONS) };
    const result1 = obj.updateGuildNotificationSettings(guildId, obj, require(5073) /* differ */.NotificationLabels.PresetMentions);
    const obj3 = require(10289) /* resetGuildUnreadFlags */;
  } else if (arg1 === require(4328) /* Presets */.Presets.NOTHING) {
    const obj1 = { message_notifications: UserNotificationSettings.NO_MESSAGES };
    const obj7 = importDefault(5079);
    obj1.flags = require(10289) /* resetGuildUnreadFlags */.withGuildUnreadFlags(guildFlags, constants.UNREADS_ONLY_MENTIONS);
    const result2 = obj7.updateGuildNotificationSettings(guildId, obj1, require(5073) /* differ */.NotificationLabels.PresetNothing);
    const obj9 = require(10289) /* resetGuildUnreadFlags */;
  }
};
export const useGuildPresetSettings = function useGuildPresetSettings(guildId) {
  const _require = guildId;
  let obj = _require(624);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.getGuildUnreadSetting(closure_0));
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = _require(624).useStateFromStores(items1, () => outer1_3.getMessageNotifications(closure_0));
  obj = { unread: stateFromStores, notification: stateFromStores1 };
  const obj2 = _require(624);
  obj.preset = _require(4328).presetFromSettings(stateFromStores, stateFromStores1);
  return obj;
};
