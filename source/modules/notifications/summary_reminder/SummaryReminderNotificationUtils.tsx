// Module ID: 14225
// Function ID: 107532
// Name: onSummaryReminderNotificationSettingsChanged
// Dependencies: []
// Exports: onSummaryReminderNotificationSettingsChanged

// Module 14225 (onSummaryReminderNotificationSettingsChanged)
let closure_3 = require(dependencyMap[0]).NotificationSettingsUpdateType;
const AnalyticEvents = require(dependencyMap[1]).AnalyticEvents;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/notifications/summary_reminder/SummaryReminderNotificationUtils.tsx");

export const onSummaryReminderNotificationSettingsChanged = function onSummaryReminderNotificationSettingsChanged(summary_reminder_notifications) {
  const EnableSummaryReminderNotifications = require(dependencyMap[2]).EnableSummaryReminderNotifications;
  EnableSummaryReminderNotifications.updateSetting(summary_reminder_notifications);
  let obj = importDefault(dependencyMap[3]);
  obj = { update_type: constants.ACCOUNT, summary_reminder_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
