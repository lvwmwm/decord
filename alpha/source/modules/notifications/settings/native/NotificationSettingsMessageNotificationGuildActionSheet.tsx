// Module ID: 10423
// Function ID: 10424
// Name: NotificationSettingsMessageNotificationGuildActionSheet
// Dependencies: [19, 4938, 1074, 4939, 1084, 21, 10418, 10424, 1115, 10411, 7366, 7361, 2]
// Exports: default

// Module 10423 (NotificationSettingsMessageNotificationGuildActionSheet)
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7361 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7366 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 10411 */;
import noop from "module_19" /* 19 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4938 */;

const require = globalThis.__r;

require = fn;
const UserNotificationSettings = fn(1074).UserNotificationSettings;
const UnreadSetting = fn(4939).UnreadSetting;
let closure_6 = fn(1084).GuildNotificationSettingsFlags;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageNotificationGuildActionSheet.tsx");

export default function NotificationSettingsMessageNotificationGuildActionSheet(guildId) {
  _require = guildId;
  const guildPresetSettings = require("notificationSettingsGuildFlagUtils").useGuildPresetSettings(guildId.guildId);
  const unread = guildPresetSettings.unread;
  const notification = guildPresetSettings.notification;
  let obj2 = { context: "guild", value: notification, allMessagesSubLabel: null, onChange: null };
  let stringResult;
  let obj = require("notificationSettingsGuildFlagUtils");
  const tmp4 = jsx;
  if (notification !== UserNotificationSettings.ALL_MESSAGES) {
    if (unread !== UnreadSetting.ALL_MESSAGES) {
      const intl = tmp(1115).intl;
      stringResult = intl.string(tmp(1115).t.eP8yWU);
    }
  }
  obj2.allMessagesSubLabel = stringResult;
  obj2.onChange = function onChange(message_notifications) {
    const obj = { message_notifications };
    let tmp = message_notifications === UserNotificationSettings.ALL_MESSAGES;
    if (tmp) {
      tmp = unread !== UnreadSetting.ALL_MESSAGES;
    }
    if (tmp) {
      obj.flags = notificationSettingsFlagUtils.withGuildUnreadFlags(UserGuildSettingsStore.getGuildFlags(guildId.guildId), constants.UNREADS_ALL_MESSAGES);
    }
    const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    const result = NotificationSettingsModalActionCreatorsDefault.updateGuildNotificationSettings(guildId.guildId, obj, NotificationLabel.notifications(message_notifications));
  };
  return tmp4(unread(10424), obj2);
};
