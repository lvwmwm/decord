// Module ID: 14444
// Function ID: 14445
// Name: onChange
// Dependencies: [7753, 676, 3829, 3862, 1306, 698, 10116, 1236, 2]
// Exports: onChange

// Module 14444 (onChange)
import { AnalyticEvents } from "ME";
import { NotificationSettingsUpdateType as closure_4 } from "AccountNotificationFlags";
import createToggle from "createToggle";

function onChange(custom_status_push_notifications) {
  const CustomStatusPushNotifications = require(3862) /* explicitContentFromProto */.CustomStatusPushNotifications;
  const CustomStatusPushNotificationType = require(1306) /* create */.CustomStatusPushNotificationType;
  CustomStatusPushNotifications.updateSetting(custom_status_push_notifications ? CustomStatusPushNotificationType.STATUS_PUSH_ENABLED : CustomStatusPushNotificationType.STATUS_PUSH_DISABLED);
  let obj = importDefault(698);
  obj = { update_type: constants.ACCOUNT, custom_status_push_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
}
const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.PTtxi9);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["/+OQEs"]);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue() {
    const CustomStatusPushNotifications = require(3862) /* explicitContentFromProto */.CustomStatusPushNotifications;
    const setting = CustomStatusPushNotifications.useSetting();
    return setting !== require(1306) /* create */.CustomStatusPushNotificationType.STATUS_PUSH_DISABLED;
  },
  onValueChange: onChange
});
let obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.PTtxi9);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["/+OQEs"]);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue() {
    const CustomStatusPushNotifications = require(3862) /* explicitContentFromProto */.CustomStatusPushNotifications;
    const setting = CustomStatusPushNotifications.useSetting();
    return setting !== require(1306) /* create */.CustomStatusPushNotificationType.STATUS_PUSH_DISABLED;
  },
  onValueChange: onChange
};
const result = require("AccountNotificationFlags").fileFinishedImporting("modules/user_settings/defs/native/CustomStatusNotificationSettings.tsx");

export default toggle;
export { onChange };
