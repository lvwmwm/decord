// Module ID: 14435
// Function ID: 110304
// Name: onGoLiveNotificationSettingsChanged
// Dependencies: [653, 3805, 3838, 675, 2]
// Exports: onGoLiveNotificationSettingsChanged

// Module 14435 (onGoLiveNotificationSettingsChanged)
import { AnalyticEvents } from "ME";
import { NotificationSettingsUpdateType as closure_4 } from "AccountNotificationFlags";

const result = require("explicitContentFromProto").fileFinishedImporting("modules/go_live/GoLiveNotificationUtils.tsx");

export const onGoLiveNotificationSettingsChanged = function onGoLiveNotificationSettingsChanged(go_live_notifications) {
  const StreamNotificationsEnabled = require(3838) /* explicitContentFromProto */.StreamNotificationsEnabled;
  StreamNotificationsEnabled.updateSetting(go_live_notifications);
  let obj = importDefault(675);
  obj = { update_type: constants.ACCOUNT, go_live_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
