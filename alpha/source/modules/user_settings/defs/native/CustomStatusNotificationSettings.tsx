// Module ID: 17412
// Function ID: 17413
// Name: CustomStatusNotificationSettings
// Dependencies: [8424, 1072, 4954, 4834, 1197, 1253, 11505, 1114, 2]
// Exports: onChange

// Module 17412 (CustomStatusNotificationSettings)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import UserSettings from "UserSettings" /* 4834 */;
import NotificationConstants from "NotificationConstants" /* 4954 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
