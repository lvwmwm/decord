// Module ID: 13722
// Function ID: 13723
// Name: NotificationSettingsMessageNotificationChannelActionSheet
// Dependencies: [19, 6689, 1087, 6690, 1097, 21, 558, 576, 10964, 1128, 10965, 7200, 7195, 13721, 2]

// Module 13722 (NotificationSettingsMessageNotificationChannelActionSheet)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1087 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1097 */;
import ReadStateConstants from "ReadStateConstants" /* 6690 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7195 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7200 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 10965 */;
import react from "react" /* 19 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6689 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const UserNotificationSettings = Constants.UserNotificationSettings;
const UnreadSetting = ReadStateConstants.UnreadSetting;
let closure_6 = UserSettingsConstants.ChannelNotificationSettingsFlags;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function NotificationSettingsMessageNotificationChannelActionSheet(channel) {
  _require = channel;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(11);
  let obj2 = require("notficationSettingsChannelFlagUtils");
  const channelPresetSettings = obj2.useChannelPresetSettings(channel.channel);
  const unread = channelPresetSettings.unread;
  const notification = channelPresetSettings.notification;
  if (cResult[0] === notification) {
    let tmp5;
    if (cResult[1] === unread) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === channel.channel.guild_id) {
      if (cResult[4] === channel.channel.id) {
        let tmp8;
        if (cResult[5] === unread) {
          tmp8 = cResult[6];
        }
        if (cResult[7] === notification) {
          if (cResult[8] === tmp5) {
            let tmp9;
            if (cResult[9] === tmp8) {
              tmp9 = cResult[10];
            }
            return tmp9;
          }
        }
        const tmp12 = jsx(unread(13721), { context: "channel", value: notification, allMessagesSubLabel: tmp5, onChange: tmp8 });
        cResult[7] = notification;
        cResult[8] = tmp5;
        cResult[9] = tmp8;
        cResult[10] = tmp12;
        tmp9 = tmp12;
      }
    }
    const fn = function h(message_notifications) {
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
    };
    cResult[3] = channel.channel.guild_id;
    cResult[4] = channel.channel.id;
    cResult[5] = unread;
    cResult[6] = fn;
    tmp8 = fn;
  }
  let stringResult;
  if (notification !== UserNotificationSettings.ALL_MESSAGES) {
    if (unread !== UnreadSetting.ALL_MESSAGES) {
      const intl = tmp(1128).intl;
      stringResult = intl.string(tmp(1128).t.eP8yWU);
    }
  }
  cResult[0] = notification;
  cResult[1] = unread;
  cResult[2] = stringResult;
  tmp5 = stringResult;
}) : (function NotificationSettingsMessageNotificationChannelActionSheet(channel) {
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
  const tmp5 = unread(13721);
  if (notification !== UserNotificationSettings.ALL_MESSAGES) {
    if (unread !== UnreadSetting.ALL_MESSAGES) {
      const intl = tmp(1128).intl;
      stringResult = intl.string(tmp(1128).t.eP8yWU);
    }
  }
  return tmp4(tmp5, obj2);
});
let result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageNotificationChannelActionSheet.tsx");

export default tmp3;
