// Module ID: 10336
// Function ID: 79732
// Name: NotificationSettingsMessageUnreadChannelActionSheet
// Dependencies: [31, 4325, 653, 4326, 662, 33, 10317, 10335, 1212, 5079, 10318, 5073, 2]
// Exports: default

// Module 10336 (NotificationSettingsMessageUnreadChannelActionSheet)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { UserNotificationSettings } from "ME";
import { UnreadSetting } from "ReadStateTypes";
import { ChannelNotificationSettingsFlags as closure_6 } from "MAX_FAVORITES";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("ME").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageUnreadChannelActionSheet.tsx");

export default function NotificationSettingsMessageUnreadChannelActionSheet(channel) {
  let notification;
  let unread;
  const _require = channel;
  let obj = _require(10317);
  const channelPresetSettings = obj.useChannelPresetSettings(channel.channel);
  ({ unread, notification } = channelPresetSettings);
  obj = { value: unread };
  let stringResult;
  if (notification === UserNotificationSettings.ALL_MESSAGES) {
    const intl = _require(1212).intl;
    stringResult = intl.string(_require(1212).t.eP8yWU);
  }
  obj.disabledMentionOnlyWithReason = stringResult;
  obj.onChange = function onChange(ONLY_MENTIONS) {
    const channelIdFlags = outer1_3.getChannelIdFlags(channel.channel.guild_id, channel.channel.id);
    let obj = outer1_1(outer1_2[9]);
    obj = {};
    if (ONLY_MENTIONS === outer1_5.ALL_MESSAGES) {
      let UNREADS_ONLY_MENTIONS = outer1_6.UNREADS_ALL_MESSAGES;
    } else {
      UNREADS_ONLY_MENTIONS = outer1_6.UNREADS_ONLY_MENTIONS;
    }
    obj.flags = channel(outer1_2[10]).withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS);
    const NotificationLabel = channel(outer1_2[11]).NotificationLabel;
    const result = obj.updateChannelOverrideSettings(channel.channel.guild_id, channel.channel.id, obj, NotificationLabel.unreads(ONLY_MENTIONS));
  };
  return jsx(importDefault(10335), { value: unread });
};
