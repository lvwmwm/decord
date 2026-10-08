// Module ID: 15600
// Function ID: 15601
// Name: GoLiveNotificationUtils
// Dependencies: [1085, 4720, 2040, 1264, 2]
// Exports: onGoLiveNotificationSettingsChanged

// Module 15600 (GoLiveNotificationUtils)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import UserSettings from "UserSettings" /* 2040 */;
import NotificationConstants from "NotificationConstants" /* 4720 */;
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
