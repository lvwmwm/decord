// Module ID: 10296
// Function ID: 10297
// Name: NotificationSettingsMessageUnreadChannelActionSheet
// Dependencies: [19, 4817, 1074, 4818, 1084, 21, 10277, 10295, 1114, 7222, 10278, 7217, 2]
// Exports: default

// Module 10296 (NotificationSettingsMessageUnreadChannelActionSheet)
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7222 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 10278 */;
import NotificationSettingsMessageUnreadActionSheetDefault from "NotificationSettingsMessageUnreadActionSheet" /* 10295 */;
import noop from "module_19" /* 19 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4817 */;

const require = globalThis.__r;

const NotificationSettingsUtils = tmp3(7217);
require = fn;
const UserNotificationSettings = fn(1074).UserNotificationSettings;
const UnreadSetting = fn(4818).UnreadSetting;
let closure_6 = fn(1084).ChannelNotificationSettingsFlags;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMessageUnreadChannelActionSheet.tsx");

export default function NotificationSettingsMessageUnreadChannelActionSheet(channel) {
  _require = channel;
  const channelPresetSettings = require("notficationSettingsChannelFlagUtils").useChannelPresetSettings(channel.channel);
  ({ unread, notification } = channelPresetSettings);
  let obj2 = { value: unread, disabledMentionOnlyWithReason: null, onChange: null };
  let stringResult;
  let obj = require("notficationSettingsChannelFlagUtils");
  const tmp4 = jsx;
  if (notification === UserNotificationSettings.ALL_MESSAGES) {
    const intl = tmp(1114).intl;
    stringResult = intl.string(tmp(1114).t.eP8yWU);
  }
  obj2.disabledMentionOnlyWithReason = stringResult;
  obj2.onChange = function onChange(toggleExpandedHistory) {
    const channelIdFlags = UserGuildSettingsStore.getChannelIdFlags(channel.channel.guild_id, channel.channel.id);
    const obj = NotificationSettingsModalActionCreatorsDefault;
    if (toggleExpandedHistory === UnreadSetting.ALL_MESSAGES) {
      let UNREADS_ONLY_MENTIONS = constants.UNREADS_ALL_MESSAGES;
    } else {
      UNREADS_ONLY_MENTIONS = constants.UNREADS_ONLY_MENTIONS;
    }
    const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
    const result = obj.updateChannelOverrideSettings(channel.channel.guild_id, channel.channel.id, { flags: notificationSettingsFlagUtils.withChannelUnreadFlags(channelIdFlags, UNREADS_ONLY_MENTIONS) }, NotificationLabel.unreads(toggleExpandedHistory));
  };
  return tmp4(NotificationSettingsMessageUnreadActionSheetDefault, obj2);
};
