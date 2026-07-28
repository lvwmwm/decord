// Module ID: 14437
// Function ID: 110310
// Name: onFriendAnniversaryNotificationSettingsChanged
// Dependencies: [653, 3805, 3838, 675, 2]
// Exports: onFriendAnniversaryNotificationSettingsChanged

// Module 14437 (onFriendAnniversaryNotificationSettingsChanged)
import { AnalyticEvents } from "ME";
import { NotificationSettingsUpdateType as closure_4 } from "AccountNotificationFlags";

const result = require("explicitContentFromProto").fileFinishedImporting("modules/premium/FriendAnniversaryNotificationUtils.tsx");

export const onFriendAnniversaryNotificationSettingsChanged = function onFriendAnniversaryNotificationSettingsChanged(friend_anniversary_notifications) {
  const EnableFriendAnniversaryNotifications = require(3838) /* explicitContentFromProto */.EnableFriendAnniversaryNotifications;
  EnableFriendAnniversaryNotifications.updateSetting(friend_anniversary_notifications);
  let obj = importDefault(675);
  obj = { update_type: constants.ACCOUNT, friend_anniversary_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
