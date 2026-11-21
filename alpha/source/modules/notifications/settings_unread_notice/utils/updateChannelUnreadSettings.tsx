// Module ID: 11887
// Function ID: 11888
// Name: updateChannelUnreadSettings
// Dependencies: [6552, 1071, 6553, 1081, 7485, 11155, 7480, 2]
// Exports: default

// Module 11887 (updateChannelUnreadSettings)
import Constants from "Constants" /* 1071 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1081 */;
import ReadStateConstants from "ReadStateConstants" /* 6553 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7480 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7485 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 11155 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6552 */;
import size from "module_2" /* 2 */;

const AnalyticsObjects = Constants.AnalyticsObjects;
const UnreadSetting = ReadStateConstants.UnreadSetting;
const constants = UserSettingsConstants.ChannelNotificationSettingsFlags;
let result = size.fileFinishedImporting("modules/notifications/settings_unread_notice/utils/updateChannelUnreadSettings.tsx");

export default function updateChannelUnreadSettings(guildId, channelId, UNREADS_ONLY_MENTIONS) {
  let ONLY_MENTIONS;
  let obj2;
  let obj3;
  let obj4;
  let unreads;
  const obj = { guildId, channelId, settings: obj2, label: unreads(ONLY_MENTIONS), location: obj4 };
  obj2 = { flags: obj3.withChannelUnreadFlags(UserGuildSettingsStore.getChannelIdFlags(guildId, channelId), UNREADS_ONLY_MENTIONS) };
  const updateChannelOverrideSettings = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings;
  NotificationSettingsModalActionCreatorsDefault;
  obj3 = notificationSettingsFlagUtils;
  const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
  unreads = NotificationLabel.unreads;
  if (UNREADS_ONLY_MENTIONS === constants.UNREADS_ALL_MESSAGES) {
    ONLY_MENTIONS = UnreadSetting.ALL_MESSAGES;
  } else {
    ONLY_MENTIONS = UnreadSetting.ONLY_MENTIONS;
  }
  obj4 = { object: AnalyticsObjects.NOTIFICATION_SETTING_UNREAD_NOTICE };
  const result = updateChannelOverrideSettings(obj);
};
