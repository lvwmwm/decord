// Module ID: 11587
// Function ID: 11588
// Name: updateChannelUnreadSettings
// Dependencies: [4971, 1078, 4972, 1088, 7398, 10460, 7393, 2]
// Exports: default

// Module 11587 (updateChannelUnreadSettings)
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7393 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7398 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 10460 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4971 */;

require = fn;
const AnalyticsObjects = fn(1078).AnalyticsObjects;
const UnreadSetting = fn(4972).UnreadSetting;
const constants = fn(1088).ChannelNotificationSettingsFlags;
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings_unread_notice/utils/updateChannelUnreadSettings.tsx");

export default function updateChannelUnreadSettings(guild_id, id, UNREADS_ONLY_MENTIONS) {
  const obj2 = { flags: null };
  const obj = NotificationSettingsModalActionCreatorsDefault;
  obj2.flags = notificationSettingsFlagUtils.withChannelUnreadFlags(UserGuildSettingsStore.getChannelIdFlags(guild_id, id), UNREADS_ONLY_MENTIONS);
  const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
  if (UNREADS_ONLY_MENTIONS === constants.UNREADS_ALL_MESSAGES) {
    let ONLY_MENTIONS = UnreadSetting.ALL_MESSAGES;
  } else {
    ONLY_MENTIONS = UnreadSetting.ONLY_MENTIONS;
  }
  const result = obj.updateChannelOverrideSettings(guild_id, id, obj2, NotificationLabel.unreads(ONLY_MENTIONS), { object: AnalyticsObjects.NOTIFICATION_SETTING_UNREAD_NOTICE });
};
