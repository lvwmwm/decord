// Module ID: 16972
// Function ID: 16973
// Name: FriendAnniversaryNotificationUtils
// Dependencies: [1072, 4737, 4617, 1256, 2]
// Exports: onFriendAnniversaryNotificationSettingsChanged

// Module 16972 (FriendAnniversaryNotificationUtils)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import UserSettings from "UserSettings" /* 4617 */;
import NotificationConstants from "NotificationConstants" /* 4737 */;
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
