// Module ID: 10396
// Function ID: 80220
// Name: updateChannelUnreadSettings
// Dependencies: [4326, 653, 4327, 662, 5079, 10251, 5074, 2]
// Exports: default

// Module 10396 (updateChannelUnreadSettings)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticsObjects } from "ME";
import { UnreadSetting } from "ReadStateTypes";
import { ChannelNotificationSettingsFlags as closure_6 } from "MAX_FAVORITES";

const require = arg1;
let result = require("ReadStateTypes").fileFinishedImporting("modules/notifications/settings_unread_notice/utils/updateChannelUnreadSettings.tsx");

export default function updateChannelUnreadSettings(guildId, id, UNREADS_ONLY_MENTIONS) {
  let obj = importDefault(5079);
  obj = { flags: require(10251) /* resetGuildUnreadFlags */.withChannelUnreadFlags(channelIdFlags.getChannelIdFlags(guildId, id), UNREADS_ONLY_MENTIONS) };
  const NotificationLabel = require(5074) /* differ */.NotificationLabel;
  if (UNREADS_ONLY_MENTIONS === constants.UNREADS_ALL_MESSAGES) {
    let ONLY_MENTIONS = UnreadSetting.ALL_MESSAGES;
  } else {
    ONLY_MENTIONS = UnreadSetting.ONLY_MENTIONS;
  }
  obj = { object: AnalyticsObjects.NOTIFICATION_SETTING_UNREAD_NOTICE };
  const result = obj.updateChannelOverrideSettings(guildId, id, obj, NotificationLabel.unreads(ONLY_MENTIONS), obj);
};
