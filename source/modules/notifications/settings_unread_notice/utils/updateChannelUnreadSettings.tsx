// Module ID: 10318
// Function ID: 10319
// Name: updateChannelUnreadSettings
// Dependencies: [4480, 676, 4481, 685, 5245, 9744, 5240, 2]
// Exports: default

// Module 10318 (updateChannelUnreadSettings)
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import { AnalyticsObjects } from "ME";
import { UnreadSetting } from "ReadStateTypes";
import { ChannelNotificationSettingsFlags as closure_6 } from "MAX_FAVORITES";

const require = arg1;
let result = require("ReadStateTypes").fileFinishedImporting("modules/notifications/settings_unread_notice/utils/updateChannelUnreadSettings.tsx");

export default function updateChannelUnreadSettings(closure_0, id, UNREADS_ONLY_MENTIONS) {
  let obj = importDefault(5245);
  obj = { flags: null };
  obj[0] = require(9744) /* resetGuildUnreadFlags */.withChannelUnreadFlags(channelIdFlags.getChannelIdFlags(closure_0, id), UNREADS_ONLY_MENTIONS);
  const NotificationLabel = require(5240) /* UserNotificationSettings */.NotificationLabel;
  if (UNREADS_ONLY_MENTIONS === constants.UNREADS_ALL_MESSAGES) {
    let ONLY_MENTIONS = UnreadSetting.ALL_MESSAGES;
  } else {
    ONLY_MENTIONS = UnreadSetting.ONLY_MENTIONS;
  }
  obj = { object: AnalyticsObjects.NOTIFICATION_SETTING_UNREAD_NOTICE };
  const result = obj.updateChannelOverrideSettings(closure_0, id, obj, NotificationLabel.unreads(ONLY_MENTIONS), obj);
};
