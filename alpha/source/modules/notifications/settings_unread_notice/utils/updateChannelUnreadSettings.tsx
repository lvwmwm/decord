// Module ID: 11762
// Function ID: 11763
// Name: updateChannelUnreadSettings
// Dependencies: [5008, 1074, 5009, 1084, 7450, 10490, 7445, 2]
// Exports: default

// Module 11762 (updateChannelUnreadSettings)
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7445 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7450 */;
import notificationSettingsFlagUtils from "notificationSettingsFlagUtils" /* 10490 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5008 */;

require = fn;
const AnalyticsObjects = fn(1074).AnalyticsObjects;
const UnreadSetting = fn(5009).UnreadSetting;
const constants = fn(1084).ChannelNotificationSettingsFlags;
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings_unread_notice/utils/updateChannelUnreadSettings.tsx");

export default function updateChannelUnreadSettings(guildId, channelId, UNREADS_ONLY_MENTIONS) {
  const obj2 = { guildId, channelId, settings: null, label: null, location: null };
  const obj3 = { flags: null };
  const obj = NotificationSettingsModalActionCreatorsDefault;
  obj3.flags = notificationSettingsFlagUtils.withChannelUnreadFlags(UserGuildSettingsStore.getChannelIdFlags(guildId, channelId), UNREADS_ONLY_MENTIONS);
  obj2.settings = obj3;
  const NotificationLabel = NotificationSettingsUtils.NotificationLabel;
  if (UNREADS_ONLY_MENTIONS === constants.UNREADS_ALL_MESSAGES) {
    let ONLY_MENTIONS = UnreadSetting.ALL_MESSAGES;
  } else {
    ONLY_MENTIONS = UnreadSetting.ONLY_MENTIONS;
  }
  obj2.label = NotificationLabel.unreads(ONLY_MENTIONS);
  obj2.location = { object: AnalyticsObjects.NOTIFICATION_SETTING_UNREAD_NOTICE };
  const result = obj.updateChannelOverrideSettings(obj2);
};
