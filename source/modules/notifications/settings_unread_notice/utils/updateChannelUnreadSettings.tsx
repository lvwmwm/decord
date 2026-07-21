// Module ID: 10422
// Function ID: 80296
// Name: updateChannelUnreadSettings
// Dependencies: [344784896, 264896512, 371392512, 358088704, 500563968, 499449856, 442564608, 438304768]
// Exports: default

// Module 10422 (updateChannelUnreadSettings)
let closure_3 = importDefault(dependencyMap[0]);
const AnalyticsObjects = arg1(dependencyMap[1]).AnalyticsObjects;
const UnreadSetting = arg1(dependencyMap[2]).UnreadSetting;
let closure_6 = arg1(dependencyMap[3]).ChannelNotificationSettingsFlags;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/notifications/settings_unread_notice/utils/updateChannelUnreadSettings.tsx");

export default function updateChannelUnreadSettings(guildId, id, UNREADS_ONLY_MENTIONS) {
  let obj = importDefault(dependencyMap[4]);
  obj = { flags: id(dependencyMap[5]).withChannelUnreadFlags(channelIdFlags.getChannelIdFlags(guildId, id), UNREADS_ONLY_MENTIONS) };
  const NotificationLabel = id(dependencyMap[6]).NotificationLabel;
  if (UNREADS_ONLY_MENTIONS === constants.UNREADS_ALL_MESSAGES) {
    let ONLY_MENTIONS = UnreadSetting.ALL_MESSAGES;
  } else {
    ONLY_MENTIONS = UnreadSetting.ONLY_MENTIONS;
  }
  obj = { object: AnalyticsObjects.NOTIFICATION_SETTING_UNREAD_NOTICE };
  const result = obj.updateChannelOverrideSettings(guildId, id, obj, NotificationLabel.unreads(ONLY_MENTIONS), obj);
};
