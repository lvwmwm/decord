// Module ID: 10330
// Function ID: 79712
// Name: NotificationSettingsMessageNotificationChannelActionSheet
// Dependencies: [31, 4325, 653, 4326, 662, 33, 10317, 10329, 1212, 10318, 5079, 5073, 2]
// Exports: default

// Module 10330 (NotificationSettingsMessageNotificationChannelActionSheet)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { UserNotificationSettings } from "ME";
import { UnreadSetting } from "ReadStateTypes";
import { ChannelNotificationSettingsFlags as closure_6 } from "MAX_FAVORITES";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("ME").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageNotificationChannelActionSheet.tsx");

export default function NotificationSettingsMessageNotificationChannelActionSheet(channel) {
  const _require = channel;
  let obj = _require(10317);
  const channelPresetSettings = obj.useChannelPresetSettings(channel.channel);
  const unread = channelPresetSettings.unread;
  const notification = channelPresetSettings.notification;
  obj = { context: "channel", value: notification };
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
      obj.flags = channel(outer1_2[9]).withChannelUnreadFlags(outer1_3.getChannelIdFlags(channel.channel.guild_id, channel.channel.id), outer1_6.UNREADS_ALL_MESSAGES);
      const obj2 = channel(outer1_2[9]);
    }
    const NotificationLabel = channel(outer1_2[11]).NotificationLabel;
    const result = unread(outer1_2[10]).updateChannelOverrideSettings(channel.channel.guild_id, channel.channel.id, obj, NotificationLabel.notifications(message_notifications));
  };
  return jsx(unread(10329), { context: "channel", value: notification });
};
