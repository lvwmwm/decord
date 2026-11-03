// Module ID: 17628
// Function ID: 17629
// Name: CustomStatusNotificationSettings
// Dependencies: [8556, 1072, 5086, 4966, 1196, 1252, 11677, 1113, 2]
// Exports: onChange

// Module 17628 (CustomStatusNotificationSettings)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1196 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import UserSettings from "UserSettings" /* 4966 */;
import NotificationConstants from "NotificationConstants" /* 5086 */;
import SettingsConstants from "SettingsConstants" /* 8556 */;
import SettingBuilders from "SettingBuilders" /* 11677 */;
import size from "module_2" /* 2 */;

function onChange(custom_status_push_notifications) {
  const CustomStatusPushNotifications = UserSettings.CustomStatusPushNotifications;
  const updateSetting = CustomStatusPushNotifications.updateSetting;
  const CustomStatusPushNotificationType = preloaded_user_settings.CustomStatusPushNotificationType;
  updateSetting(custom_status_push_notifications ? CustomStatusPushNotificationType.STATUS_PUSH_ENABLED : CustomStatusPushNotificationType.STATUS_PUSH_DISABLED);
  const obj = AnalyticsUtilsDefault;
  const obj2 = { update_type: constants.ACCOUNT, custom_status_push_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj2);
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
const AnalyticEvents = Constants.AnalyticEvents;
const constants = NotificationConstants.NotificationSettingsUpdateType;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.PTtxi9);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(intl2.t["/+OQEs"]);
  },
  parent: MobileUserSettings.NOTIFICATIONS,
  useValue() {
    const CustomStatusPushNotifications = UserSettings.CustomStatusPushNotifications;
    const setting = CustomStatusPushNotifications.useSetting();
    return setting !== preloaded_user_settings.CustomStatusPushNotificationType.STATUS_PUSH_DISABLED;
  },
  onValueChange: onChange
};
const toggle = SettingBuilders.createToggle(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/CustomStatusNotificationSettings.tsx");

export default toggle;
export { onChange };
