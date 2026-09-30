// Module ID: 9827
// Function ID: 9828
// Name: NotificationSettingsMessageUnreadGuildActionSheet
// Dependencies: [19, 5047, 1074, 5048, 1084, 21, 9816, 9828, 1115, 6736, 9809, 6731, 2]
// Exports: default

// Module 9827 (NotificationSettingsMessageUnreadGuildActionSheet)
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6736 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 9809 */;
import NotificationSettingsMessageUnreadActionSheetDefault from "NotificationSettingsMessageUnreadActionSheet" /* 9828 */;
import noop from "module_19" /* 19 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5047 */;

const require = globalThis.__r;

const NotificationSettingsUtils = tmp3(6731);
require = fn;
const UserNotificationSettings = fn(1074).UserNotificationSettings;
const UnreadSetting = fn(5048).UnreadSetting;
let closure_6 = fn(1084).GuildNotificationSettingsFlags;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageUnreadGuildActionSheet.tsx");

export default function NotificationSettingsMessageUnreadGuildActionSheet(guildId) {
  _require = guildId;
  const guildPresetSettings = require("notificationSettingsGuildFlagUtils").useGuildPresetSettings(guildId.guildId);
  ({ unread, notification } = guildPresetSettings);
  let stringResult;
  let obj = require("notificationSettingsGuildFlagUtils");
  const tmp4 = jsx;
  if (notification === UserNotificationSettings.ALL_MESSAGES) {
    const intl = tmp(1115).intl;
    stringResult = intl.string(tmp(1115).t.eP8yWU);
  }
  return tmp4(NotificationSettingsMessageUnreadActionSheetDefault, {
    disabledMentionOnlyWithReason: stringResult,
    value: unread,
    onChange(toggleExpandedHistory) {
      const guildFlags = UserGuildSettingsStore.getGuildFlags(guildId.guildId);
      const obj = NotificationSettingsModalActionCreatorsDefault;
      if (toggleExpandedHistory === UnreadSetting.ALL_MESSAGES) {
        let UNREADS_ONLY_MENTIONS = constants.UNREADS_ALL_MESSAGES;
      } else {
        UNREADS_ONLY_MENTIONS = constants.UNREADS_ONLY_MENTIONS;
      }
      const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
      const result = obj.updateGuildNotificationSettings(guildId.guildId, { flags: notificationSettingsFlagUtils.withGuildUnreadFlags(guildFlags, UNREADS_ONLY_MENTIONS) }, NotificationLabel.unreads(toggleExpandedHistory));
    }
  });
};
