// Module ID: 15421
// Function ID: 15422
// Name: onGoLiveNotificationSettingsChanged
// Dependencies: [673, 4133, 4166, 695, 2]
// Exports: onGoLiveNotificationSettingsChanged

// Module 15421 (onGoLiveNotificationSettingsChanged)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 695 */;
import AccountNotificationFlags from "AccountNotificationFlags" /* 4133 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4166 */;

const AnalyticEvents = ME.AnalyticEvents;
let closure_4 = AccountNotificationFlags.NotificationSettingsUpdateType;
const result = set.fileFinishedImporting("modules/go_live/GoLiveNotificationUtils.tsx");

export const onGoLiveNotificationSettingsChanged = function onGoLiveNotificationSettingsChanged(go_live_notifications) {
  const StreamNotificationsEnabled = explicitContentFromProto.StreamNotificationsEnabled;
  StreamNotificationsEnabled.updateSetting(go_live_notifications);
  let obj = expandEventPropertiesDefault;
  obj = { update_type: constants.ACCOUNT, go_live_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
