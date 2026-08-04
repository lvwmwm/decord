// Module ID: 14593
// Function ID: 14594
// Name: onUpcomingServerEventNotificationSettingsChanged
// Dependencies: [3925, 676, 3958, 698, 2]
// Exports: onUpcomingServerEventNotificationSettingsChanged

// Module 14593 (onUpcomingServerEventNotificationSettingsChanged)
import { NotificationSettingsUpdateType as closure_3 } from "AccountNotificationFlags";
import { AnalyticEvents } from "ME";

const result = require("explicitContentFromProto").fileFinishedImporting("modules/notifications/upcoming_server_event/UpcomingServerEventNotificationUtils.tsx");

export const onUpcomingServerEventNotificationSettingsChanged = function onUpcomingServerEventNotificationSettingsChanged(upcoming_server_event_notifications) {
  const EnableUpcomingServerEventNotifications = require(3958) /* explicitContentFromProto */.EnableUpcomingServerEventNotifications;
  EnableUpcomingServerEventNotifications.updateSetting(upcoming_server_event_notifications);
  let obj = importDefault(698);
  obj = { update_type: constants.ACCOUNT, upcoming_server_event_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
