// Module ID: 15727
// Function ID: 15728
// Name: UpcomingServerEventNotificationUtils
// Dependencies: [4722, 1085, 2041, 1265, 2]
// Exports: onUpcomingServerEventNotificationSettingsChanged

// Module 15727 (UpcomingServerEventNotificationUtils)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import UserSettings from "UserSettings" /* 2041 */;
import NotificationConstants from "NotificationConstants" /* 4722 */;
import size from "module_2" /* 2 */;

const constants = NotificationConstants.NotificationSettingsUpdateType;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/notifications/upcoming_server_event/UpcomingServerEventNotificationUtils.tsx");

export const onUpcomingServerEventNotificationSettingsChanged = function onUpcomingServerEventNotificationSettingsChanged(upcoming_server_event_notifications) {
  const EnableUpcomingServerEventNotifications = UserSettings.EnableUpcomingServerEventNotifications;
  EnableUpcomingServerEventNotifications.updateSetting(upcoming_server_event_notifications);
  const obj = AnalyticsUtilsDefault;
  const obj2 = { update_type: constants.ACCOUNT, upcoming_server_event_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj2);
};
