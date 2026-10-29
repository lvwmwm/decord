// Module ID: 11066
// Function ID: 11067
// Name: notificationSettingsFlagUtils
// Dependencies: [1094, 1402, 2]
// Exports: resetChannelUnreadFlags, resetGuildUnreadFlags, withChannelUnreadFlags, withGuildUnreadFlags

// Module 11066 (notificationSettingsFlagUtils)
import FlagUtilsAll from "FlagUtils" /* 1402 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1094 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ GuildNotificationSettingsFlags: c2, ChannelNotificationSettingsFlags: c3 } = UserSettingsConstants);
const result = size.fileFinishedImporting("modules/notifications/settings/utils/notificationSettingsFlagUtils.tsx");

export function resetGuildUnreadFlags(setting) {
  const obj = FlagUtilsAll;
  return obj.removeFlags(setting, constants.UNREADS_ALL_MESSAGES, constants.UNREADS_ONLY_MENTIONS);
}
export function withGuildUnreadFlags(guildFlags, UNREADS_ALL_MESSAGES) {
  const addFlag = FlagUtilsAll.addFlag;
  FlagUtilsAll;
  const obj = FlagUtilsAll;
  return addFlag(obj.removeFlags(guildFlags, constants.UNREADS_ALL_MESSAGES, constants.UNREADS_ONLY_MENTIONS), UNREADS_ALL_MESSAGES);
}
export function resetChannelUnreadFlags(channelIdFlags) {
  const obj = FlagUtilsAll;
  return obj.removeFlags(channelIdFlags, constants2.UNREADS_ALL_MESSAGES, constants2.UNREADS_ONLY_MENTIONS);
}
export function withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) {
  const addFlag = FlagUtilsAll.addFlag;
  FlagUtilsAll;
  const obj = FlagUtilsAll;
  return addFlag(obj.removeFlags(channelIdFlags, constants2.UNREADS_ALL_MESSAGES, constants2.UNREADS_ONLY_MENTIONS), UNREADS_ONLY_MENTIONS);
}
