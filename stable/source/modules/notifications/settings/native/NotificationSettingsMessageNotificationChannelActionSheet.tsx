// Module ID: 10290
// Function ID: 10291
// Name: NotificationSettingsMessageNotificationChannelActionSheet
// Dependencies: [19, 4817, 1074, 4818, 1084, 21, 10277, 10289, 1114, 10278, 7222, 7217, 2]
// Exports: default

// Module 10290 (NotificationSettingsMessageNotificationChannelActionSheet)
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7217 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7222 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 10278 */;
import noop from "module_19" /* 19 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4817 */;

const require = globalThis.__r;

require = fn;
const UserNotificationSettings = fn(1074).UserNotificationSettings;
const UnreadSetting = fn(4818).UnreadSetting;
let closure_6 = fn(1084).ChannelNotificationSettingsFlags;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageNotificationChannelActionSheet.tsx");

export default function NotificationSettingsMessageNotificationChannelActionSheet(channel) {
  _require = channel;
  const channelPresetSettings = require("notficationSettingsChannelFlagUtils").useChannelPresetSettings(channel.channel);
  const unread = channelPresetSettings.unread;
  const notification = channelPresetSettings.notification;
  let obj2 = { context: "channel", value: notification, allMessagesSubLabel: null, onChange: null };
  let stringResult;
  let obj = require("notficationSettingsChannelFlagUtils");
  const tmp4 = jsx;
  if (notification !== UserNotificationSettings.ALL_MESSAGES) {
    if (unread !== UnreadSetting.ALL_MESSAGES) {
      const intl = tmp(1114).intl;
      stringResult = intl.string(tmp(1114).t.eP8yWU);
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
      obj.flags = notificationSettingsFlagUtils.withChannelUnreadFlags(UserGuildSettingsStore.getChannelIdFlags(channel.channel.guild_id, channel.channel.id), constants.UNREADS_ALL_MESSAGES);
    }
    const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    const result = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings(channel.channel.guild_id, channel.channel.id, obj, NotificationLabel.notifications(message_notifications));
  };
  return tmp4(unread(10289), obj2);
};
