// Module ID: 15040
// Function ID: 15041
// Name: FriendAnniversaryNotificationUtils
// Dependencies: [1086, 4485, 2027, 1253, 2]
// Exports: onFriendAnniversaryNotificationSettingsChanged

// Module 15040 (FriendAnniversaryNotificationUtils)
import Constants from "Constants" /* 1086 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import UserSettings from "UserSettings" /* 2027 */;
import NotificationConstants from "NotificationConstants" /* 4485 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const constants = NotificationConstants.NotificationSettingsUpdateType;
const result = size.fileFinishedImporting("modules/premium/FriendAnniversaryNotificationUtils.tsx");

export const onFriendAnniversaryNotificationSettingsChanged = function onFriendAnniversaryNotificationSettingsChanged(friend_anniversary_notifications) {
  const EnableFriendAnniversaryNotifications = UserSettings.EnableFriendAnniversaryNotifications;
  EnableFriendAnniversaryNotifications.updateSetting(friend_anniversary_notifications);
  const obj = AnalyticsUtilsDefault;
  const obj2 = { update_type: constants.ACCOUNT, friend_anniversary_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj2);
};
