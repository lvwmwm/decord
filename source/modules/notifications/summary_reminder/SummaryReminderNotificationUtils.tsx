// Module ID: 14397
// Function ID: 110054
// Name: onSummaryReminderNotificationSettingsChanged
// Dependencies: [3770, 653, 3803, 675, 2]
// Exports: onSummaryReminderNotificationSettingsChanged

// Module 14397 (onSummaryReminderNotificationSettingsChanged)
import { NotificationSettingsUpdateType as closure_3 } from "AccountNotificationFlags";
import { AnalyticEvents } from "ME";

const result = require("explicitContentFromProto").fileFinishedImporting("modules/notifications/summary_reminder/SummaryReminderNotificationUtils.tsx");

export const onSummaryReminderNotificationSettingsChanged = function onSummaryReminderNotificationSettingsChanged(summary_reminder_notifications) {
  const EnableSummaryReminderNotifications = require(3803) /* explicitContentFromProto */.EnableSummaryReminderNotifications;
  EnableSummaryReminderNotifications.updateSetting(summary_reminder_notifications);
  let obj = importDefault(675);
  obj = { update_type: constants.ACCOUNT, summary_reminder_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
