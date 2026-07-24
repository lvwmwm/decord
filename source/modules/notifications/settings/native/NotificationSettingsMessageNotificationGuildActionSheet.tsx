// Module ID: 10328
// Function ID: 79707
// Name: NotificationSettingsMessageNotificationGuildActionSheet
// Dependencies: [31, 4325, 653, 4326, 662, 33, 10323, 10329, 1212, 10318, 5079, 5073, 2]
// Exports: default

// Module 10328 (NotificationSettingsMessageNotificationGuildActionSheet)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { UserNotificationSettings } from "ME";
import { UnreadSetting } from "ReadStateTypes";
import { GuildNotificationSettingsFlags as closure_6 } from "MAX_FAVORITES";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("ME").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageNotificationGuildActionSheet.tsx");

export default function NotificationSettingsMessageNotificationGuildActionSheet(guildId) {
  const _require = guildId;
  let obj = _require(10323);
  const guildPresetSettings = obj.useGuildPresetSettings(guildId.guildId);
  const unread = guildPresetSettings.unread;
  const notification = guildPresetSettings.notification;
  obj = { context: "guild", value: notification };
  let stringResult;
  if (notification !== UserNotificationSettings.ALL_MESSAGES) {
    if (unread !== UnreadSetting.ALL_MESSAGES) {
      const intl = _require(1212).intl;
      stringResult = intl.string(_require(1212).t.eP8yWU);
    }
  }
  obj.allMessagesSubLabel = stringResult;
  obj.onChange = function onChange(message_notifications) {
    const obj = { message_notifications };
    let tmp = message_notifications === outer1_4.ALL_MESSAGES;
    if (tmp) {
      tmp = unread !== outer1_5.ALL_MESSAGES;
    }
    if (tmp) {
      obj.flags = guildId(outer1_2[9]).withGuildUnreadFlags(outer1_3.getGuildFlags(guildId.guildId), outer1_6.UNREADS_ALL_MESSAGES);
      const obj2 = guildId(outer1_2[9]);
    }
    const NotificationLabel = guildId(outer1_2[11]).NotificationLabel;
    const result = unread(outer1_2[10]).updateGuildNotificationSettings(guildId.guildId, obj, NotificationLabel.notifications(message_notifications));
  };
  return jsx(unread(10329), { context: "guild", value: notification });
};
