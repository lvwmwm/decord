// Module ID: 15779
// Function ID: 15780
// Name: FriendAnniversaryNotificationUtils
// Dependencies: [1074, 4440, 2019, 1241, 2]
// Exports: onFriendAnniversaryNotificationSettingsChanged

// Module 15779 (FriendAnniversaryNotificationUtils)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import UserSettings from "UserSettings" /* 2019 */;
import NotificationConstants from "NotificationConstants" /* 4440 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const constants = NotificationConstants.NotificationSettingsUpdateType;
const result = size.fileFinishedImporting("modules/premium/FriendAnniversaryNotificationUtils.tsx");

export const onFriendAnniversaryNotificationSettingsChanged = function onFriendAnniversaryNotificationSettingsChanged(friend_anniversary_notifications) {
  const EnableFriendAnniversaryNotifications = UserSettings.EnableFriendAnniversaryNotifications;
  EnableFriendAnniversaryNotifications.updateSetting(friend_anniversary_notifications);
  AnalyticsUtilsDefault.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, { update_type: constants.ACCOUNT, friend_anniversary_notifications });
};
