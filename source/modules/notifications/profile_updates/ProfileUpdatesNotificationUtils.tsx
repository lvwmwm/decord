// Module ID: 14446
// Function ID: 110338
// Name: onProfileUpdatesNotificationSettingsChanged
// Dependencies: [3805, 653, 3838, 675, 2]
// Exports: onProfileUpdatesNotificationSettingsChanged

// Module 14446 (onProfileUpdatesNotificationSettingsChanged)
import { NotificationSettingsUpdateType as closure_3 } from "AccountNotificationFlags";
import { AnalyticEvents } from "ME";

const result = require("explicitContentFromProto").fileFinishedImporting("modules/notifications/profile_updates/ProfileUpdatesNotificationUtils.tsx");

export const onProfileUpdatesNotificationSettingsChanged = function onProfileUpdatesNotificationSettingsChanged(profile_updates_notifications) {
  const EnableProfileUpdatesNotifications = require(3838) /* explicitContentFromProto */.EnableProfileUpdatesNotifications;
  EnableProfileUpdatesNotifications.updateSetting(profile_updates_notifications);
  let obj = importDefault(675);
  obj = { update_type: constants.ACCOUNT, profile_updates_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
