// Module ID: 15793
// Function ID: 15794
// Name: FriendGamingActivityNotificationUtils
// Dependencies: [4409, 1074, 2020, 1241, 2]
// Exports: onFriendGamingActivityNotificationSettingsChanged

// Module 15793 (FriendGamingActivityNotificationUtils)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import UserSettings from "UserSettings" /* 2020 */;
import NotificationConstants from "NotificationConstants" /* 4409 */;
import size from "module_2" /* 2 */;

const constants = NotificationConstants.NotificationSettingsUpdateType;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/notifications/friend_gaming_activity/FriendGamingActivityNotificationUtils.tsx");

export const onFriendGamingActivityNotificationSettingsChanged = function onFriendGamingActivityNotificationSettingsChanged(friend_gaming_activity_notifications) {
  const EnableFriendGamingActivityNotifications = UserSettings.EnableFriendGamingActivityNotifications;
  EnableFriendGamingActivityNotifications.updateSetting(friend_gaming_activity_notifications);
  AnalyticsUtilsDefault.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, { update_type: constants.ACCOUNT, friend_gaming_activity_notifications });
};
