// Module ID: 15047
// Function ID: 15048
// Name: ProfileUpdatesNotificationUtils
// Dependencies: [4485, 1086, 2027, 1253, 2]
// Exports: onProfileUpdatesNotificationSettingsChanged

// Module 15047 (ProfileUpdatesNotificationUtils)
import Constants from "Constants" /* 1086 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import UserSettings from "UserSettings" /* 2027 */;
import NotificationConstants from "NotificationConstants" /* 4485 */;
import size from "module_2" /* 2 */;

const constants = NotificationConstants.NotificationSettingsUpdateType;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/notifications/profile_updates/ProfileUpdatesNotificationUtils.tsx");

export const onProfileUpdatesNotificationSettingsChanged = function onProfileUpdatesNotificationSettingsChanged(profile_updates_notifications) {
  const EnableProfileUpdatesNotifications = UserSettings.EnableProfileUpdatesNotifications;
  EnableProfileUpdatesNotifications.updateSetting(profile_updates_notifications);
  const obj = AnalyticsUtilsDefault;
  const obj2 = { update_type: constants.ACCOUNT, profile_updates_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj2);
};
