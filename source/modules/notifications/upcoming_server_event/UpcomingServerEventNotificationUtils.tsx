// Module ID: 15511
// Function ID: 15512
// Name: onUpcomingServerEventNotificationSettingsChanged
// Dependencies: [4212, 1074, 1935, 1242, 2]
// Exports: onUpcomingServerEventNotificationSettingsChanged

// Module 15511 (onUpcomingServerEventNotificationSettingsChanged)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 1242 */;
import explicitContentFromProto from "explicitContentFromProto" /* 1935 */;
import AccountNotificationFlags from "AccountNotificationFlags" /* 4212 */;

let closure_3 = AccountNotificationFlags.NotificationSettingsUpdateType;
const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/notifications/upcoming_server_event/UpcomingServerEventNotificationUtils.tsx");

export const onUpcomingServerEventNotificationSettingsChanged = function onUpcomingServerEventNotificationSettingsChanged(upcoming_server_event_notifications) {
  const EnableUpcomingServerEventNotifications = explicitContentFromProto.EnableUpcomingServerEventNotifications;
  EnableUpcomingServerEventNotifications.updateSetting(upcoming_server_event_notifications);
  let obj = expandEventPropertiesDefault;
  obj = { update_type: constants.ACCOUNT, upcoming_server_event_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
