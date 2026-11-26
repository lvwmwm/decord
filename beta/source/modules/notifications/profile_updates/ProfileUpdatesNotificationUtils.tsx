// Module ID: 16943
// Function ID: 16944
// Name: ProfileUpdatesNotificationUtils
// Dependencies: [4858, 1071, 4738, 1255, 2]
// Exports: onProfileUpdatesNotificationSettingsChanged

// Module 16943 (ProfileUpdatesNotificationUtils)
import Constants from "Constants" /* 1071 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import UserSettings from "UserSettings" /* 4738 */;
import NotificationConstants from "NotificationConstants" /* 4858 */;
import size from "module_2" /* 2 */;

const constants = NotificationConstants.NotificationSettingsUpdateType;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/notifications/profile_updates/ProfileUpdatesNotificationUtils.tsx");

export function onProfileUpdatesNotificationSettingsChanged(profile_updates_notifications) {
  const EnableProfileUpdatesNotifications = UserSettings.EnableProfileUpdatesNotifications;
  EnableProfileUpdatesNotifications.updateSetting(profile_updates_notifications);
  const obj = AnalyticsUtilsDefault;
  const obj2 = { update_type: constants.ACCOUNT, profile_updates_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj2);
}
