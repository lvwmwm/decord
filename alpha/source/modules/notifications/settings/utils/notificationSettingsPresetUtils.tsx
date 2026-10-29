// Module ID: 8353
// Function ID: 8354
// Name: notificationSettingsPresetUtils
// Dependencies: [1084, 6763, 6543, 2]
// Exports: presetFromSettings

// Module 8353 (notificationSettingsPresetUtils)
import Constants from "Constants" /* 1084 */;
import merged5 from "merged5" /* 6543 */;
import ReadStateConstants from "ReadStateConstants" /* 6763 */;
import size from "module_2" /* 2 */;

const UserNotificationSettings = Constants.UserNotificationSettings;
const UnreadSetting = ReadStateConstants.UnreadSetting;
const Presets = { ALL_MESSAGES: "all_messages", MENTIONS: "mentions", NOTHING: "nothing", CUSTOM: "custom" };
const result = size.fileFinishedImporting("modules/notifications/settings/utils/notificationSettingsPresetUtils.tsx");

export { Presets };
export function presetFromSettings(unreadSetting, UserGuildSettingsStore) {
  const items = [UserGuildSettingsStore, unreadSetting];
  const str = merged5;
  const match = str.match(items);
  const items1 = [UserNotificationSettings.ALL_MESSAGES, UnreadSetting.ALL_MESSAGES];
  const items2 = [UserNotificationSettings.ONLY_MENTIONS, UnreadSetting.UNSET];
  const items3 = [UserNotificationSettings.ONLY_MENTIONS, UnreadSetting.ONLY_MENTIONS];
  const withResult = match.with(items1, () => constants.ALL_MESSAGES);
  const items4 = [UserNotificationSettings.NO_MESSAGES, UnreadSetting.UNSET];
  const withResult1 = withResult.with(items2, () => constants.MENTIONS);
  const items5 = [UserNotificationSettings.NO_MESSAGES, UnreadSetting.ONLY_MENTIONS];
  const withResult2 = withResult1.with(items3, () => constants.MENTIONS);
  const withResult3 = withResult2.with(items4, () => constants.NOTHING);
  const withResult4 = withResult3.with(items5, () => constants.NOTHING);
  return withResult4.otherwise(() => constants.CUSTOM);
}
