// Module ID: 10314
// Function ID: 10315
// Name: updateGuildPreset
// Dependencies: [4385, 676, 685, 4388, 5135, 10309, 5130, 647, 2]
// Exports: updateGuildPreset, useGuildPresetSettings

// Module 10314 (updateGuildPreset)
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import { UserNotificationSettings } from "ME";
import { GuildNotificationSettingsFlags as closure_5 } from "MAX_FAVORITES";

const require = arg1;
let result = require("MAX_FAVORITES").fileFinishedImporting("modules/notifications/settings/utils/notificationSettingsGuildFlagUtils.tsx");

export const updateGuildPreset = function updateGuildPreset(guildId, arg1) {
  guildFlags = guildFlags.getGuildFlags(guildId);
  if (arg1 === require(4388) /* Presets */.Presets.ALL_MESSAGES) {
    let obj = { message_notifications: null, flags: null };
    obj[0] = UserNotificationSettings.ALL_MESSAGES;
    let tmp2Result = tmp2(10309);
    obj[1] = tmp2Result.withGuildUnreadFlags(guildFlags, constants.UNREADS_ALL_MESSAGES);
    const result = importDefault(5135).updateGuildNotificationSettings(guildId, obj, tmp2(5130).NotificationLabels.PresetAll);
    const obj4 = importDefault(5135);
  } else if (arg1 === tmp2(4388).Presets.MENTIONS) {
    obj = importDefault(5135);
    obj = { message_notifications: null, flags: null };
    obj[0] = UserNotificationSettings.ONLY_MENTIONS;
    tmp2Result = tmp2(10309);
    obj[1] = tmp2Result.withGuildUnreadFlags(guildFlags, constants.UNREADS_ONLY_MENTIONS);
    const result1 = obj.updateGuildNotificationSettings(guildId, obj, tmp2(5130).NotificationLabels.PresetMentions);
  } else if (arg1 === tmp2(4388).Presets.NOTHING) {
    const obj1 = { message_notifications: null, flags: null };
    obj1[0] = UserNotificationSettings.NO_MESSAGES;
    const obj7 = importDefault(5135);
    obj1[1] = tmp2(10309).withGuildUnreadFlags(guildFlags, constants.UNREADS_ONLY_MENTIONS);
    const result2 = obj7.updateGuildNotificationSettings(guildId, obj1, tmp2(5130).NotificationLabels.PresetNothing);
    const tmp2Result1 = tmp2(10309);
  }
};
export const useGuildPresetSettings = function useGuildPresetSettings(guildId) {
  const _require = guildId;
  let obj = _require(647);
  const items = [updateUserGuildSettingsInternal];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_3.getGuildUnreadSetting(closure_0));
  const items1 = [updateUserGuildSettingsInternal];
  const stateFromStores1 = _require(647).useStateFromStores(items1, () => outer1_3.getMessageNotifications(closure_0));
  obj = { unread: stateFromStores, notification: stateFromStores1, preset: null };
  const obj2 = _require(647);
  obj[2] = _require(4388).presetFromSettings(stateFromStores, stateFromStores1);
  return obj;
};
