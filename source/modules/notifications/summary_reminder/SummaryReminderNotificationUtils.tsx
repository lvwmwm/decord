// Module ID: 14917
// Function ID: 14918
// Name: onSummaryReminderNotificationSettingsChanged
// Dependencies: [4037, 676, 4070, 698, 2]
// Exports: onSummaryReminderNotificationSettingsChanged

// Module 14917 (onSummaryReminderNotificationSettingsChanged)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import AccountNotificationFlags from "AccountNotificationFlags" /* 4037 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4070 */;

let closure_3 = AccountNotificationFlags.NotificationSettingsUpdateType;
const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/notifications/summary_reminder/SummaryReminderNotificationUtils.tsx");

export const onSummaryReminderNotificationSettingsChanged = function onSummaryReminderNotificationSettingsChanged(summary_reminder_notifications) {
  const EnableSummaryReminderNotifications = explicitContentFromProto.EnableSummaryReminderNotifications;
  EnableSummaryReminderNotifications.updateSetting(summary_reminder_notifications);
  let obj = expandEventPropertiesDefault;
  obj = { update_type: constants.ACCOUNT, summary_reminder_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
