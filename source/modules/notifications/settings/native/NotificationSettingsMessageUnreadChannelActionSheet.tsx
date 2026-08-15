// Module ID: 10111
// Function ID: 10112
// Name: NotificationSettingsMessageUnreadChannelActionSheet
// Dependencies: [19, 5043, 676, 5044, 685, 21, 10090, 10110, 1236, 6798, 10091, 6795, 2]
// Exports: default

// Module 10111 (NotificationSettingsMessageUnreadChannelActionSheet)
import "noop";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
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
  let obj = _require(10090);
  const channelPresetSettings = obj.useChannelPresetSettings(channel.channel);
  ({ unread, notification } = channelPresetSettings);
  obj = { value: unread, disabledMentionOnlyWithReason: null, onChange: null };
  let stringResult;
  if (notification === UserNotificationSettings.ALL_MESSAGES) {
    const intl = tmp(1236).intl;
    stringResult = intl.string(tmp(1236).t.eP8yWU);
  }
  obj[1] = stringResult;
  obj[2] = function onChange(ONLY_MENTIONS) {
    const channelIdFlags = outer1_3.getChannelIdFlags(channel.channel.guild_id, channel.channel.id);
    let obj = outer1_1(outer1_2[9]);
    if (ONLY_MENTIONS === outer1_5.ALL_MESSAGES) {
      let UNREADS_ONLY_MENTIONS = outer1_6.UNREADS_ALL_MESSAGES;
    } else {
      UNREADS_ONLY_MENTIONS = outer1_6.UNREADS_ONLY_MENTIONS;
    }
    obj = { flags: channel(outer1_2[10]).withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) };
    const NotificationLabel = channel(outer1_2[11]).NotificationLabel;
    const result = obj.updateChannelOverrideSettings(channel.channel.guild_id, channel.channel.id, obj, NotificationLabel.unreads(ONLY_MENTIONS));
  };
  return jsx(importDefault(10110), { value: unread, disabledMentionOnlyWithReason: null, onChange: null });
};
