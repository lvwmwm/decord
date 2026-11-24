// Module ID: 17447
// Function ID: 17448
// Name: NotifyFriendsOnCustomStatusUpdateUtils
// Dependencies: [4862, 1071, 4742, 1255, 2]
// Exports: onNotifyFriendsOnCustomStatusUpdateSettingsChanged

// Module 17447 (NotifyFriendsOnCustomStatusUpdateUtils)
import Constants from "Constants" /* 1071 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import UserSettings from "UserSettings" /* 4742 */;
import NotificationConstants from "NotificationConstants" /* 4862 */;
import size from "module_2" /* 2 */;

const constants = NotificationConstants.NotificationSettingsUpdateType;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/notifications/custom_status/NotifyFriendsOnCustomStatusUpdateUtils.tsx");

export function onNotifyFriendsOnCustomStatusUpdateSettingsChanged(notify_friends_on_custom_status_update) {
  const NotifyFriendsOnCustomStatusUpdate = UserSettings.NotifyFriendsOnCustomStatusUpdate;
  NotifyFriendsOnCustomStatusUpdate.updateSetting(notify_friends_on_custom_status_update);
  const obj = AnalyticsUtilsDefault;
  const obj2 = { update_type: constants.ACCOUNT, notify_friends_on_custom_status_update };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj2);
}
