// Module ID: 14188
// Function ID: 107392
// Name: onChange
// Dependencies: []
// Exports: onChange

// Module 14188 (onChange)
function onChange(custom_status_push_notifications) {
  const CustomStatusPushNotifications = require(dependencyMap[3]).CustomStatusPushNotifications;
  const CustomStatusPushNotificationType = require(dependencyMap[4]).CustomStatusPushNotificationType;
  CustomStatusPushNotifications.updateSetting(custom_status_push_notifications ? CustomStatusPushNotificationType.STATUS_PUSH_ENABLED : CustomStatusPushNotificationType.STATUS_PUSH_DISABLED);
  let obj = importDefault(dependencyMap[5]);
  obj = { update_type: constants.ACCOUNT, custom_status_push_notifications };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
}
const AnalyticEvents = require(dependencyMap[1]).AnalyticEvents;
let closure_4 = require(dependencyMap[2]).NotificationSettingsUpdateType;
const _module = require(dependencyMap[6]);
const toggle = _module.createToggle({
  useTitle() {
    const intl = require(dependencyMap[7]).intl;
    return intl.string(require(dependencyMap[7]).t.PTtxi9);
  },
  useDescription() {
    const intl = require(dependencyMap[7]).intl;
    return intl.string(require(dependencyMap[7]).t./+OQEs);
  },
  parent: require(dependencyMap[0]).MobileSetting.NOTIFICATIONS,
  useValue() {
    const CustomStatusPushNotifications = require(dependencyMap[3]).CustomStatusPushNotifications;
    const setting = CustomStatusPushNotifications.useSetting();
    return setting !== require(dependencyMap[4]).CustomStatusPushNotificationType.STATUS_PUSH_DISABLED;
  },
  onValueChange: onChange
});
const _module1 = require(dependencyMap[8]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/CustomStatusNotificationSettings.tsx");

export default toggle;
export { onChange };
