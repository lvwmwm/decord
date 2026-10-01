// Module ID: 9628
// Function ID: 9629
// Name: NotificationSettingsMessageUnreadChannelActionSheet
// Dependencies: [19, 5017, 1074, 5018, 1084, 21, 9607, 9627, 1115, 6540, 9608, 6535, 2]
// Exports: default

// Module 9628 (NotificationSettingsMessageUnreadChannelActionSheet)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1084 */;
import ReadStateConstants from "ReadStateConstants" /* 5018 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6540 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 9608 */;
import NotificationSettingsMessageUnreadActionSheetDefault from "NotificationSettingsMessageUnreadActionSheet" /* 9627 */;
import react from "react" /* 19 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp4;
const NotificationSettingsUtils = tmp4(6535);
const UserNotificationSettings = Constants.UserNotificationSettings;
const UnreadSetting = ReadStateConstants.UnreadSetting;
let closure_6 = UserSettingsConstants.ChannelNotificationSettingsFlags;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageUnreadChannelActionSheet.tsx");

export default function NotificationSettingsMessageUnreadChannelActionSheet(channel) {
  let notification;
  let stringResult;
  let unread;
  _require = channel;
  let obj = require("notficationSettingsChannelFlagUtils");
  const channelPresetSettings = obj.useChannelPresetSettings(channel.channel);
  ({ unread, notification } = channelPresetSettings);
  let tmp4 = jsx;
  const obj2 = {
    value: unread,
    disabledMentionOnlyWithReason: stringResult,
    onChange(toggleExpandedHistory) {
      let NotificationLabel;
      let UNREADS_ONLY_MENTIONS;
      let withChannelUnreadFlags;
      const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(channel.channel.guild_id, channel.channel.id);
      const obj = { guildId: channel.channel.guild_id, channelId: channel.channel.id, settings: { flags: withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) }, label: NotificationLabel.unreads(toggleExpandedHistory) };
      const updateChannelOverrideSettings = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
      NotificationSettingsModalActionCreatorsDefault;
      withChannelUnreadFlags = notificationSettingsFlagUtils.withChannelUnreadFlags;
      notificationSettingsFlagUtils;
      if (toggleExpandedHistory === UnreadSetting.ALL_MESSAGES) {
        UNREADS_ONLY_MENTIONS = constants.UNREADS_ALL_MESSAGES;
      } else {
        UNREADS_ONLY_MENTIONS = constants.UNREADS_ONLY_MENTIONS;
      }
      ({ flags: withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) });
      NotificationLabel = NotificationSettingsUtils.NotificationLabel;
      const result = updateChannelOverrideSettings(obj);
    }
  };
  stringResult = undefined;
  const tmp5 = NotificationSettingsMessageUnreadActionSheetDefault;
  if (notification === UserNotificationSettings.ALL_MESSAGES) {
    const intl = tmp(1115).intl;
    stringResult = intl.string(tmp(1115).t.eP8yWU);
  }
  return tmp4(tmp5, obj2);
};
