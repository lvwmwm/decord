// Module ID: 10318
// Function ID: 79666
// Name: resetGuildUnreadFlags
// Dependencies: [662, 1360, 2]
// Exports: withChannelUnreadFlags, withGuildUnreadFlags

// Module 10318 (resetGuildUnreadFlags)
import MAX_FAVORITES from "MAX_FAVORITES";

let closure_2;
let closure_3;
function resetGuildUnreadFlags(guildFlags) {
  return importAll(1360).removeFlags(guildFlags, constants.UNREADS_ALL_MESSAGES, constants.UNREADS_ONLY_MENTIONS);
}
function resetChannelUnreadFlags(channelIdFlags) {
  return importAll(1360).removeFlags(channelIdFlags, constants2.UNREADS_ALL_MESSAGES, constants2.UNREADS_ONLY_MENTIONS);
}
({ GuildNotificationSettingsFlags: closure_2, ChannelNotificationSettingsFlags: closure_3 } = MAX_FAVORITES);
const result = require("set").fileFinishedImporting("modules/notifications/settings/utils/notificationSettingsFlagUtils.tsx");

export { resetGuildUnreadFlags };
export const withGuildUnreadFlags = function withGuildUnreadFlags(guildFlags, UNREADS_ONLY_MENTIONS) {
  return importAll(1360).addFlag(resetGuildUnreadFlags(guildFlags), UNREADS_ONLY_MENTIONS);
};
export { resetChannelUnreadFlags };
export const withChannelUnreadFlags = function withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) {
  return importAll(1360).addFlag(resetChannelUnreadFlags(channelIdFlags), UNREADS_ONLY_MENTIONS);
};
