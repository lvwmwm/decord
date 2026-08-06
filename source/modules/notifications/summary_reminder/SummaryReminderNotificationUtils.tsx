// Module ID: 14613
// Function ID: 14614
// Name: onSummaryReminderNotificationSettingsChanged
// Dependencies: [3924, 676, 3957, 698, 2]
// Exports: onSummaryReminderNotificationSettingsChanged

// Module 14613 (onSummaryReminderNotificationSettingsChanged)
import { NotificationSettingsUpdateType as closure_3 } from "AccountNotificationFlags";
import { AnalyticEvents } from "ME";

const result = require("explicitContentFromProto").fileFinishedImporting("modules/notifications/summary_reminder/SummaryReminderNotificationUtils.tsx");

export const onSummaryReminderNotificationSettingsChanged = function onSummaryReminderNotificationSettingsChanged(summary_reminder_notifications) {
  const EnableSummaryReminderNotifications = require(3957) /* explicitContentFromProto */.EnableSummaryReminderNotifications;
  EnableSummaryReminderNotifications.updateSetting(summary_reminder_notifications);
  let obj = importDefault(698);
  obj = { update_type: constants.ACCOUNT, summary_reminder_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
