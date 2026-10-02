// Module ID: 15038
// Function ID: 15039
// Name: GoLiveNotificationUtils
// Dependencies: [1086, 4485, 2027, 1253, 2]
// Exports: onGoLiveNotificationSettingsChanged

// Module 15038 (GoLiveNotificationUtils)
import Constants from "Constants" /* 1086 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import UserSettings from "UserSettings" /* 2027 */;
import NotificationConstants from "NotificationConstants" /* 4485 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const constants = NotificationConstants.NotificationSettingsUpdateType;
const result = size.fileFinishedImporting("modules/go_live/GoLiveNotificationUtils.tsx");

export const onGoLiveNotificationSettingsChanged = function onGoLiveNotificationSettingsChanged(go_live_notifications) {
  const StreamNotificationsEnabled = UserSettings.StreamNotificationsEnabled;
  StreamNotificationsEnabled.updateSetting(go_live_notifications);
  const obj = AnalyticsUtilsDefault;
  const obj2 = { update_type: constants.ACCOUNT, go_live_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj2);
};
