// Module ID: 10281
// Function ID: 79422
// Name: updateGuildPreset
// Dependencies: []
// Exports: updateGuildPreset, useGuildPresetSettings

// Module 10281 (updateGuildPreset)
let closure_3 = importDefault(dependencyMap[0]);
const UserNotificationSettings = arg1(dependencyMap[1]).UserNotificationSettings;
let closure_5 = arg1(dependencyMap[2]).GuildNotificationSettingsFlags;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/notifications/settings/utils/notificationSettingsGuildFlagUtils.tsx");

export const updateGuildPreset = function updateGuildPreset(guildId, arg1) {
  const guildFlags = guildFlags.getGuildFlags(guildId);
  if (arg1 === arg1(dependencyMap[3]).Presets.ALL_MESSAGES) {
    let obj = { message_notifications: UserNotificationSettings.ALL_MESSAGES };
    const obj4 = importDefault(dependencyMap[4]);
    obj.flags = arg1(dependencyMap[5]).withGuildUnreadFlags(guildFlags, constants.UNREADS_ALL_MESSAGES);
    const result = obj4.updateGuildNotificationSettings(guildId, obj, arg1(dependencyMap[6]).NotificationLabels.PresetAll);
    const obj6 = arg1(dependencyMap[5]);
  } else if (arg1 === arg1(dependencyMap[3]).Presets.MENTIONS) {
    obj = importDefault(dependencyMap[4]);
    obj = { message_notifications: UserNotificationSettings.ONLY_MENTIONS, flags: arg1(dependencyMap[5]).withGuildUnreadFlags(guildFlags, constants.UNREADS_ONLY_MENTIONS) };
    const result1 = obj.updateGuildNotificationSettings(guildId, obj, arg1(dependencyMap[6]).NotificationLabels.PresetMentions);
    const obj3 = arg1(dependencyMap[5]);
  } else if (arg1 === arg1(dependencyMap[3]).Presets.NOTHING) {
    const obj1 = { message_notifications: UserNotificationSettings.NO_MESSAGES };
    const obj7 = importDefault(dependencyMap[4]);
    obj1.flags = arg1(dependencyMap[5]).withGuildUnreadFlags(guildFlags, constants.UNREADS_ONLY_MENTIONS);
    const result2 = obj7.updateGuildNotificationSettings(guildId, obj1, arg1(dependencyMap[6]).NotificationLabels.PresetNothing);
    const obj9 = arg1(dependencyMap[5]);
  }
};
export const useGuildPresetSettings = function useGuildPresetSettings(guildId) {
  const arg1 = guildId;
  let obj = arg1(dependencyMap[7]);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => store.getGuildUnreadSetting(arg0));
  const items1 = [closure_3];
  const stateFromStores1 = arg1(dependencyMap[7]).useStateFromStores(items1, () => store.getMessageNotifications(arg0));
  obj = { unread: stateFromStores, notification: stateFromStores1 };
  const obj2 = arg1(dependencyMap[7]);
  obj.preset = arg1(dependencyMap[3]).presetFromSettings(stateFromStores, stateFromStores1);
  return obj;
};
