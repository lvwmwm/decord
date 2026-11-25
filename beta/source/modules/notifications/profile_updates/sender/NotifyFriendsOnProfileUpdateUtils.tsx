// Module ID: 17420
// Function ID: 17421
// Name: NotifyFriendsOnProfileUpdateUtils
// Dependencies: [4858, 1071, 4738, 1255, 2]
// Exports: onNotifyFriendsOnProfileUpdateSettingsChanged

// Module 17420 (NotifyFriendsOnProfileUpdateUtils)
import Constants from "Constants" /* 1071 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import UserSettings from "UserSettings" /* 4738 */;
import NotificationConstants from "NotificationConstants" /* 4858 */;
import size from "module_2" /* 2 */;

const constants = NotificationConstants.NotificationSettingsUpdateType;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/notifications/profile_updates/sender/NotifyFriendsOnProfileUpdateUtils.tsx");

export function onNotifyFriendsOnProfileUpdateSettingsChanged(notify_friends_on_profile_update) {
  const NotifyFriendsOnProfileUpdate = UserSettings.NotifyFriendsOnProfileUpdate;
  NotifyFriendsOnProfileUpdate.updateSetting(notify_friends_on_profile_update);
  const obj = AnalyticsUtilsDefault;
  const obj2 = { update_type: constants.ACCOUNT, notify_friends_on_profile_update };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj2);
}
