// Module ID: 17438
// Function ID: 17439
// Name: SummaryReminderNotificationUtils
// Dependencies: [4954, 1072, 4834, 1253, 2]
// Exports: onSummaryReminderNotificationSettingsChanged

// Module 17438 (SummaryReminderNotificationUtils)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import UserSettings from "UserSettings" /* 4834 */;
import NotificationConstants from "NotificationConstants" /* 4954 */;
import size from "module_2" /* 2 */;

const constants = NotificationConstants.NotificationSettingsUpdateType;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/notifications/summary_reminder/SummaryReminderNotificationUtils.tsx");

export function onSummaryReminderNotificationSettingsChanged(summary_reminder_notifications) {
  const EnableSummaryReminderNotifications = UserSettings.EnableSummaryReminderNotifications;
  EnableSummaryReminderNotifications.updateSetting(summary_reminder_notifications);
  const obj = AnalyticsUtilsDefault;
  const obj2 = { update_type: constants.ACCOUNT, summary_reminder_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj2);
}
