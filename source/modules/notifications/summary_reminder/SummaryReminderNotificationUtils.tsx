// Module ID: 15437
// Function ID: 15438
// Name: onSummaryReminderNotificationSettingsChanged
// Dependencies: [4133, 673, 4166, 695, 2]
// Exports: onSummaryReminderNotificationSettingsChanged

// Module 15437 (onSummaryReminderNotificationSettingsChanged)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 695 */;
import AccountNotificationFlags from "AccountNotificationFlags" /* 4133 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4166 */;

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
