// Module ID: 16899
// Function ID: 16900
// Name: CustomStatusNotificationSettings
// Dependencies: [8712, 1071, 4858, 4738, 1195, 1255, 11937, 1112, 2]
// Exports: onChange

// Module 16899 (CustomStatusNotificationSettings)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1195 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import UserSettings from "UserSettings" /* 4738 */;
import NotificationConstants from "NotificationConstants" /* 4858 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import SettingBuilders from "SettingBuilders" /* 11937 */;
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
