// Module ID: 17463
// Function ID: 17464
// Name: NotifyFriendsOnCustomStatusUpdateUtils
// Dependencies: [4768, 1072, 4648, 1256, 2]
// Exports: onNotifyFriendsOnCustomStatusUpdateSettingsChanged

// Module 17463 (NotifyFriendsOnCustomStatusUpdateUtils)
import Constants from "Constants" /* 1072 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import UserSettings from "UserSettings" /* 4648 */;
import NotificationConstants from "NotificationConstants" /* 4768 */;
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
