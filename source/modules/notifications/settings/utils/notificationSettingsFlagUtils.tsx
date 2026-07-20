// Module ID: 10269
// Function ID: 79359
// Name: resetGuildUnreadFlags
// Dependencies: []
// Exports: withChannelUnreadFlags, withGuildUnreadFlags

// Module 10269 (resetGuildUnreadFlags)
function resetGuildUnreadFlags(guildFlags) {
  return importAll(dependencyMap[1]).removeFlags(guildFlags, constants.UNREADS_ALL_MESSAGES, constants.UNREADS_ONLY_MENTIONS);
}
function resetChannelUnreadFlags(channelIdFlags) {
  return importAll(dependencyMap[1]).removeFlags(channelIdFlags, constants2.UNREADS_ALL_MESSAGES, constants2.UNREADS_ONLY_MENTIONS);
}
const _module = require(dependencyMap[0]);
({ GuildNotificationSettingsFlags: closure_2, ChannelNotificationSettingsFlags: closure_3 } = _module);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/notifications/settings/utils/notificationSettingsFlagUtils.tsx");

export { resetGuildUnreadFlags };
export const withGuildUnreadFlags = function withGuildUnreadFlags(guildFlags, UNREADS_ONLY_MENTIONS) {
  return importAll(dependencyMap[1]).addFlag(resetGuildUnreadFlags(guildFlags), UNREADS_ONLY_MENTIONS);
};
export { resetChannelUnreadFlags };
export const withChannelUnreadFlags = function withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) {
  return importAll(dependencyMap[1]).addFlag(resetChannelUnreadFlags(channelIdFlags), UNREADS_ONLY_MENTIONS);
};
