// Module ID: 10105
// Function ID: 10106
// Name: NotificationSettingsMessageNotificationChannelActionSheet
// Dependencies: [19, 5043, 676, 5044, 685, 21, 10090, 10104, 1236, 10091, 6798, 6795, 2]
// Exports: default

// Module 10105 (NotificationSettingsMessageNotificationChannelActionSheet)
import "noop";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import { UserNotificationSettings } from "ME";
import { UnreadSetting } from "ReadStateTypes";
import { ChannelNotificationSettingsFlags as closure_6 } from "MAX_FAVORITES";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("ME").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageNotificationChannelActionSheet.tsx");

export default function NotificationSettingsMessageNotificationChannelActionSheet(channel) {
  const _require = channel;
  let obj = _require(10090);
  const channelPresetSettings = obj.useChannelPresetSettings(channel.channel);
  const unread = channelPresetSettings.unread;
  const notification = channelPresetSettings.notification;
  obj = { context: "channel", value: notification, allMessagesSubLabel: null, onChange: null };
  let stringResult;
  if (notification !== UserNotificationSettings.ALL_MESSAGES) {
    if (unread !== UnreadSetting.ALL_MESSAGES) {
      const intl = tmp(1236).intl;
      stringResult = intl.string(tmp(1236).t.eP8yWU);
    }
  }
  obj[2] = stringResult;
  obj[3] = function onChange(message_notifications) {
    const obj = { message_notifications };
    let tmp = message_notifications === outer1_4.ALL_MESSAGES;
    if (tmp) {
      tmp = unread !== outer1_5.ALL_MESSAGES;
    }
    if (tmp) {
      obj.flags = channel(outer1_2[9]).withChannelUnreadFlags(outer1_3.getChannelIdFlags(channel.channel.guild_id, channel.channel.id), outer1_6.UNREADS_ALL_MESSAGES);
      const obj2 = channel(outer1_2[9]);
    }
    const NotificationLabel = channel(outer1_2[11]).NotificationLabel;
    const result = unread(outer1_2[10]).updateChannelOverrideSettings(channel.channel.guild_id, channel.channel.id, obj, NotificationLabel.notifications(message_notifications));
  };
  return jsx(unread(10104), { context: "channel", value: notification, allMessagesSubLabel: null, onChange: null });
};
