// Module ID: 16917
// Function ID: 16918
// Name: FriendAnniversaryNotificationUtils
// Dependencies: [1071, 4858, 4738, 1255, 2]
// Exports: onFriendAnniversaryNotificationSettingsChanged

// Module 16917 (FriendAnniversaryNotificationUtils)
import Constants from "Constants" /* 1071 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import UserSettings from "UserSettings" /* 4738 */;
import NotificationConstants from "NotificationConstants" /* 4858 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const constants = NotificationConstants.NotificationSettingsUpdateType;
const result = size.fileFinishedImporting("modules/premium/FriendAnniversaryNotificationUtils.tsx");

export function onFriendAnniversaryNotificationSettingsChanged(friend_anniversary_notifications) {
  const EnableFriendAnniversaryNotifications = UserSettings.EnableFriendAnniversaryNotifications;
  EnableFriendAnniversaryNotifications.updateSetting(friend_anniversary_notifications);
  const obj = AnalyticsUtilsDefault;
  const obj2 = { update_type: constants.ACCOUNT, friend_anniversary_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj2);
}
