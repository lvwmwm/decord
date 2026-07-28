// Module ID: 10308
// Function ID: 79514
// Name: NotificationSettingsMessageUnreadGuildActionSheet
// Dependencies: [31, 4360, 653, 4361, 662, 33, 10297, 10309, 1212, 5113, 10292, 5108, 2]
// Exports: default

// Module 10308 (NotificationSettingsMessageUnreadGuildActionSheet)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { UserNotificationSettings } from "ME";
import { UnreadSetting } from "ReadStateTypes";
import { GuildNotificationSettingsFlags as closure_6 } from "MAX_FAVORITES";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("ME").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageUnreadGuildActionSheet.tsx");

export default function NotificationSettingsMessageUnreadGuildActionSheet(guildId) {
  let notification;
  let unread;
  const _require = guildId;
  let obj = _require(10297);
  const guildPresetSettings = obj.useGuildPresetSettings(guildId.guildId);
  ({ unread, notification } = guildPresetSettings);
  obj = {};
  let stringResult;
  if (notification === UserNotificationSettings.ALL_MESSAGES) {
    const intl = _require(1212).intl;
    stringResult = intl.string(_require(1212).t.eP8yWU);
  }
  obj.disabledMentionOnlyWithReason = stringResult;
  obj.value = unread;
  obj.onChange = function onChange(ONLY_MENTIONS) {
    const guildFlags = outer1_3.getGuildFlags(guildId.guildId);
    let obj = outer1_1(outer1_2[9]);
    obj = {};
    if (ONLY_MENTIONS === outer1_5.ALL_MESSAGES) {
      let UNREADS_ONLY_MENTIONS = outer1_6.UNREADS_ALL_MESSAGES;
    } else {
      UNREADS_ONLY_MENTIONS = outer1_6.UNREADS_ONLY_MENTIONS;
    }
    obj.flags = guildId(outer1_2[10]).withGuildUnreadFlags(guildFlags, UNREADS_ONLY_MENTIONS);
    const NotificationLabel = guildId(outer1_2[11]).NotificationLabel;
    const result = obj.updateGuildNotificationSettings(guildId.guildId, obj, NotificationLabel.unreads(ONLY_MENTIONS));
  };
  return jsx(importDefault(10309), {});
};
