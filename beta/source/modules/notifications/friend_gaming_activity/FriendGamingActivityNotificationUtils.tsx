// Module ID: 15780
// Function ID: 15781
// Name: FriendGamingActivityNotificationUtils
// Dependencies: [4444, 1078, 2023, 1245, 2]
// Exports: onFriendGamingActivityNotificationSettingsChanged

// Module 15780 (FriendGamingActivityNotificationUtils)
import Constants from "Constants" /* 1078 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import UserSettings from "UserSettings" /* 2023 */;
import NotificationConstants from "NotificationConstants" /* 4444 */;
import size from "module_2" /* 2 */;

const constants = NotificationConstants.NotificationSettingsUpdateType;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/notifications/friend_gaming_activity/FriendGamingActivityNotificationUtils.tsx");

export const onFriendGamingActivityNotificationSettingsChanged = function onFriendGamingActivityNotificationSettingsChanged(friend_gaming_activity_notifications) {
  const EnableFriendGamingActivityNotifications = UserSettings.EnableFriendGamingActivityNotifications;
  EnableFriendGamingActivityNotifications.updateSetting(friend_gaming_activity_notifications);
  AnalyticsUtilsDefault.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, { update_type: constants.ACCOUNT, friend_gaming_activity_notifications });
};
