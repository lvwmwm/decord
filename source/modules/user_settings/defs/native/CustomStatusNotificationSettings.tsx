// Module ID: 14426
// Function ID: 110274
// Name: onChange
// Dependencies: [7733, 653, 3805, 3838, 1282, 675, 10099, 1212, 2]
// Exports: onChange

// Module 14426 (onChange)
import { AnalyticEvents } from "ME";
import { NotificationSettingsUpdateType as closure_4 } from "AccountNotificationFlags";
import createToggle from "createToggle";

function onChange(custom_status_push_notifications) {
  const CustomStatusPushNotifications = require(3838) /* explicitContentFromProto */.CustomStatusPushNotifications;
  const CustomStatusPushNotificationType = require(1282) /* _callSuper */.CustomStatusPushNotificationType;
  CustomStatusPushNotifications.updateSetting(custom_status_push_notifications ? CustomStatusPushNotificationType.STATUS_PUSH_ENABLED : CustomStatusPushNotificationType.STATUS_PUSH_DISABLED);
  let obj = importDefault(675);
  obj = { update_type: constants.ACCOUNT, custom_status_push_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
}
const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.PTtxi9);
  },
  useDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["/+OQEs"]);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue() {
    const CustomStatusPushNotifications = require(3838) /* explicitContentFromProto */.CustomStatusPushNotifications;
    const setting = CustomStatusPushNotifications.useSetting();
    return setting !== require(1282) /* _callSuper */.CustomStatusPushNotificationType.STATUS_PUSH_DISABLED;
  },
  onValueChange: onChange
});
let obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.PTtxi9);
  },
  useDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["/+OQEs"]);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue() {
    const CustomStatusPushNotifications = require(3838) /* explicitContentFromProto */.CustomStatusPushNotifications;
    const setting = CustomStatusPushNotifications.useSetting();
    return setting !== require(1282) /* _callSuper */.CustomStatusPushNotificationType.STATUS_PUSH_DISABLED;
  },
  onValueChange: onChange
};
const result = require("AccountNotificationFlags").fileFinishedImporting("modules/user_settings/defs/native/CustomStatusNotificationSettings.tsx");

export default toggle;
export { onChange };
