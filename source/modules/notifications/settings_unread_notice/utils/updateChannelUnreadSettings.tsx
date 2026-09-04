// Module ID: 11351
// Function ID: 11352
// Name: updateChannelUnreadSettings
// Dependencies: [4709, 673, 4710, 682, 7059, 10079, 7054, 2]
// Exports: default

// Module 11351 (updateChannelUnreadSettings)
import UserNotificationSettings from "UserNotificationSettings" /* 7054 */;
import _modDef7059 from "module_7059" /* 7059 */;
import resetGuildUnreadFlags from "resetGuildUnreadFlags" /* 10079 */;
import closure_3 from "updateUserGuildSettingsInternal" /* 4709 */;
import { AnalyticsObjects } from "ME" /* 673 */;
import { UnreadSetting } from "ReadStateTypes" /* 4710 */;
import { ChannelNotificationSettingsFlags as closure_6 } from "MAX_FAVORITES" /* 682 */;

require = arg1;
let result = require("set").fileFinishedImporting("modules/notifications/settings_unread_notice/utils/updateChannelUnreadSettings.tsx");

export default function updateChannelUnreadSettings(closure_0, id, UNREADS_ONLY_MENTIONS) {
  let obj = _modDef7059;
  obj = { flags: resetGuildUnreadFlags.withChannelUnreadFlags(channelIdFlags.getChannelIdFlags(closure_0, id), UNREADS_ONLY_MENTIONS) };
  const NotificationLabel = UserNotificationSettings.NotificationLabel;
  if (UNREADS_ONLY_MENTIONS === constants.UNREADS_ALL_MESSAGES) {
    let ONLY_MENTIONS = UnreadSetting.ALL_MESSAGES;
  } else {
    ONLY_MENTIONS = UnreadSetting.ONLY_MENTIONS;
  }
  obj = { object: AnalyticsObjects.NOTIFICATION_SETTING_UNREAD_NOTICE };
  const result = obj.updateChannelOverrideSettings(closure_0, id, obj, NotificationLabel.unreads(ONLY_MENTIONS), obj);
};
