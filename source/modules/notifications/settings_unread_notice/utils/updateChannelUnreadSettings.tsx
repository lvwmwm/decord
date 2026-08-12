// Module ID: 10447
// Function ID: 10448
// Name: updateChannelUnreadSettings
// Dependencies: [4539, 676, 4540, 685, 5301, 9873, 5296, 2]
// Exports: default

// Module 10447 (updateChannelUnreadSettings)
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import { AnalyticsObjects } from "ME";
import { UnreadSetting } from "ReadStateTypes";
import { ChannelNotificationSettingsFlags as closure_6 } from "MAX_FAVORITES";

const require = arg1;
let result = require("ReadStateTypes").fileFinishedImporting("modules/notifications/settings_unread_notice/utils/updateChannelUnreadSettings.tsx");

export default function updateChannelUnreadSettings(closure_0, id, UNREADS_ONLY_MENTIONS) {
  let obj = importDefault(5301);
  obj = { flags: null };
  obj[0] = require(9873) /* resetGuildUnreadFlags */.withChannelUnreadFlags(channelIdFlags.getChannelIdFlags(closure_0, id), UNREADS_ONLY_MENTIONS);
  const NotificationLabel = require(5296) /* UserNotificationSettings */.NotificationLabel;
  if (UNREADS_ONLY_MENTIONS === constants.UNREADS_ALL_MESSAGES) {
    let ONLY_MENTIONS = UnreadSetting.ALL_MESSAGES;
  } else {
    ONLY_MENTIONS = UnreadSetting.ONLY_MENTIONS;
  }
  obj = { object: AnalyticsObjects.NOTIFICATION_SETTING_UNREAD_NOTICE };
  const result = obj.updateChannelOverrideSettings(closure_0, id, obj, NotificationLabel.unreads(ONLY_MENTIONS), obj);
};
