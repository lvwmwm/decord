// Module ID: 10233
// Function ID: 10234
// Name: resetGuildUnreadFlags
// Dependencies: [685, 1399, 2]
// Exports: resetChannelUnreadFlags, resetGuildUnreadFlags, withChannelUnreadFlags, withGuildUnreadFlags

// Module 10233 (resetGuildUnreadFlags)
import set from "set" /* 2 */;
import hasFlagAll from "hasFlag" /* 1399 */;
import MAX_FAVORITES from "MAX_FAVORITES" /* 685 */;

({ GuildNotificationSettingsFlags: obj1, ChannelNotificationSettingsFlags: c3 } = MAX_FAVORITES);
const result = set.fileFinishedImporting("modules/notifications/settings/utils/notificationSettingsFlagUtils.tsx");

export const resetGuildUnreadFlags = function resetGuildUnreadFlags(setting) {
  return hasFlagAll.removeFlags(setting, constants.UNREADS_ALL_MESSAGES, constants.UNREADS_ONLY_MENTIONS);
};
export const withGuildUnreadFlags = function withGuildUnreadFlags(guildFlags, UNREADS_ONLY_MENTIONS) {
  const obj = hasFlagAll;
  return obj.addFlag(hasFlagAll.removeFlags(guildFlags, constants.UNREADS_ALL_MESSAGES, constants.UNREADS_ONLY_MENTIONS), UNREADS_ONLY_MENTIONS);
};
export const resetChannelUnreadFlags = function resetChannelUnreadFlags(channelIdFlags) {
  return hasFlagAll.removeFlags(channelIdFlags, constants2.UNREADS_ALL_MESSAGES, constants2.UNREADS_ONLY_MENTIONS);
};
export const withChannelUnreadFlags = function withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) {
  const obj = hasFlagAll;
  return obj.addFlag(hasFlagAll.removeFlags(channelIdFlags, constants2.UNREADS_ALL_MESSAGES, constants2.UNREADS_ONLY_MENTIONS), UNREADS_ONLY_MENTIONS);
};
