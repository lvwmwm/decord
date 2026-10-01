// Module ID: 9622
// Function ID: 9623
// Name: NotificationSettingsMessageNotificationChannelActionSheet
// Dependencies: [19, 5017, 1074, 5018, 1084, 21, 9607, 9621, 1115, 9608, 6540, 6535, 2]
// Exports: default

// Module 9622 (NotificationSettingsMessageNotificationChannelActionSheet)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1084 */;
import ReadStateConstants from "ReadStateConstants" /* 5018 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6535 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6540 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 9608 */;
import react from "react" /* 19 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const UserNotificationSettings = Constants.UserNotificationSettings;
const UnreadSetting = ReadStateConstants.UnreadSetting;
let closure_6 = UserSettingsConstants.ChannelNotificationSettingsFlags;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageNotificationChannelActionSheet.tsx");

export default function NotificationSettingsMessageNotificationChannelActionSheet(channel) {
  let stringResult;
  _require = channel;
  let tmp = _require;
  let obj = require("notficationSettingsChannelFlagUtils");
  const channelPresetSettings = obj.useChannelPresetSettings(channel.channel);
  const unread = channelPresetSettings.unread;
  const notification = channelPresetSettings.notification;
  let obj2 = {
    context: "channel",
    value: notification,
    allMessagesSubLabel: stringResult,
    onChange(message_notifications) {
      let NotificationLabel;
      const obj = { message_notifications };
      const tmp = message_notifications === UserNotificationSettings.ALL_MESSAGES && unread !== UnreadSetting.ALL_MESSAGES;
      if (tmp) {
        const obj2 = notificationSettingsFlagUtils;
        obj.flags = obj2.withChannelUnreadFlags(UserGuildSettingsStore.getChannelIdFlags(channel.channel.guild_id, channel.channel.id), constants.UNREADS_ALL_MESSAGES);
      }
      const obj3 = { guildId: channel.channel.guild_id, channelId: channel.channel.id, settings: obj, label: NotificationLabel.notifications(message_notifications) };
      const updateChannelOverrideSettings = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
      NotificationSettingsModalActionCreatorsDefault;
      NotificationLabel = NotificationSettingsUtils.NotificationLabel;
      const result = updateChannelOverrideSettings(obj3);
    }
  };
  stringResult = undefined;
  const tmp4 = jsx;
  const tmp5 = unread(9621);
  if (notification !== UserNotificationSettings.ALL_MESSAGES) {
    if (unread !== UnreadSetting.ALL_MESSAGES) {
      const intl = tmp(1115).intl;
      stringResult = intl.string(tmp(1115).t.eP8yWU);
    }
  }
  return tmp4(tmp5, obj2);
};
