// Module ID: 15601
// Function ID: 15602
// Name: SummaryReminderNotificationUtils
// Dependencies: [4288, 1074, 1935, 1240, 2]
// Exports: onSummaryReminderNotificationSettingsChanged

// Module 15601 (SummaryReminderNotificationUtils)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1240 */;
import UserSettings from "UserSettings" /* 1935 */;
import NotificationConstants from "NotificationConstants" /* 4288 */;
import size from "module_2" /* 2 */;

const constants = NotificationConstants.NotificationSettingsUpdateType;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/notifications/summary_reminder/SummaryReminderNotificationUtils.tsx");

export const onSummaryReminderNotificationSettingsChanged = function onSummaryReminderNotificationSettingsChanged(summary_reminder_notifications) {
  const EnableSummaryReminderNotifications = UserSettings.EnableSummaryReminderNotifications;
  EnableSummaryReminderNotifications.updateSetting(summary_reminder_notifications);
  AnalyticsUtilsDefault.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, { update_type: constants.ACCOUNT, summary_reminder_notifications });
};
