// Module ID: 15054
// Function ID: 15055
// Name: SummaryReminderNotificationUtils
// Dependencies: [4485, 1086, 2027, 1253, 2]
// Exports: onSummaryReminderNotificationSettingsChanged

// Module 15054 (SummaryReminderNotificationUtils)
import Constants from "Constants" /* 1086 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import UserSettings from "UserSettings" /* 2027 */;
import NotificationConstants from "NotificationConstants" /* 4485 */;
import size from "module_2" /* 2 */;

const constants = NotificationConstants.NotificationSettingsUpdateType;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/notifications/summary_reminder/SummaryReminderNotificationUtils.tsx");

export const onSummaryReminderNotificationSettingsChanged = function onSummaryReminderNotificationSettingsChanged(summary_reminder_notifications) {
  const EnableSummaryReminderNotifications = UserSettings.EnableSummaryReminderNotifications;
  EnableSummaryReminderNotifications.updateSetting(summary_reminder_notifications);
  const obj = AnalyticsUtilsDefault;
  const obj2 = { update_type: constants.ACCOUNT, summary_reminder_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj2);
};
