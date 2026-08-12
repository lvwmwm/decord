// Module ID: 9889
// Function ID: 9890
// Name: NotificationSettingsMessageUnreadGuildActionSheet
// Dependencies: [19, 4539, 676, 4540, 685, 21, 9878, 9890, 1236, 5301, 9873, 5296, 2]
// Exports: default

// Module 9889 (NotificationSettingsMessageUnreadGuildActionSheet)
import "noop";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
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
  let obj = _require(9878);
  const guildPresetSettings = obj.useGuildPresetSettings(guildId.guildId);
  ({ unread, notification } = guildPresetSettings);
  let stringResult;
  if (notification === UserNotificationSettings.ALL_MESSAGES) {
    const intl = tmp(1236).intl;
    stringResult = intl.string(tmp(1236).t.eP8yWU);
  }
  obj = {
    disabledMentionOnlyWithReason: stringResult,
    value: unread,
    onChange(ONLY_MENTIONS) {
      const guildFlags = outer1_3.getGuildFlags(guildId.guildId);
      let obj = outer1_1(outer1_2[9]);
      if (ONLY_MENTIONS === outer1_5.ALL_MESSAGES) {
        let UNREADS_ONLY_MENTIONS = outer1_6.UNREADS_ALL_MESSAGES;
      } else {
        UNREADS_ONLY_MENTIONS = outer1_6.UNREADS_ONLY_MENTIONS;
      }
      obj = { flags: guildId(outer1_2[10]).withGuildUnreadFlags(guildFlags, UNREADS_ONLY_MENTIONS) };
      const NotificationLabel = guildId(outer1_2[11]).NotificationLabel;
      const result = obj.updateGuildNotificationSettings(guildId.guildId, obj, NotificationLabel.unreads(ONLY_MENTIONS));
    }
  };
  return jsx(importDefault(9890), {
    disabledMentionOnlyWithReason: stringResult,
    value: unread,
    onChange(ONLY_MENTIONS) {
      const guildFlags = outer1_3.getGuildFlags(guildId.guildId);
      let obj = outer1_1(outer1_2[9]);
      if (ONLY_MENTIONS === outer1_5.ALL_MESSAGES) {
        let UNREADS_ONLY_MENTIONS = outer1_6.UNREADS_ALL_MESSAGES;
      } else {
        UNREADS_ONLY_MENTIONS = outer1_6.UNREADS_ONLY_MENTIONS;
      }
      obj = { flags: guildId(outer1_2[10]).withGuildUnreadFlags(guildFlags, UNREADS_ONLY_MENTIONS) };
      const NotificationLabel = guildId(outer1_2[11]).NotificationLabel;
      const result = obj.updateGuildNotificationSettings(guildId.guildId, obj, NotificationLabel.unreads(ONLY_MENTIONS));
    }
  });
};
