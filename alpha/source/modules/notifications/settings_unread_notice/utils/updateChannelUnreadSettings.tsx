// Module ID: 10993
// Function ID: 10994
// Name: updateChannelUnreadSettings
// Dependencies: [6689, 1087, 6690, 1097, 7200, 10965, 7195, 2]
// Exports: default

// Module 10993 (updateChannelUnreadSettings)
import Constants from "Constants" /* 1087 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1097 */;
import ReadStateConstants from "ReadStateConstants" /* 6690 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7195 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7200 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 10965 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6689 */;
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
