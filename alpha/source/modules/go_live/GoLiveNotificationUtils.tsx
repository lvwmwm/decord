// Module ID: 15713
// Function ID: 15714
// Name: GoLiveNotificationUtils
// Dependencies: [1085, 4722, 2041, 1265, 2]
// Exports: onGoLiveNotificationSettingsChanged

// Module 15713 (GoLiveNotificationUtils)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import UserSettings from "UserSettings" /* 2041 */;
import NotificationConstants from "NotificationConstants" /* 4722 */;
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
