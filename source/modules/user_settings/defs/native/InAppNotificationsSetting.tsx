// Module ID: 14192
// Function ID: 107399
// Name: toggle
// Dependencies: []

// Module 14192 (toggle)
const AnalyticEvents = require(dependencyMap[1]).AnalyticEvents;
const _module = require(dependencyMap[6]);
const toggle = _module.createToggle({
  useTitle() {
    const intl = require(dependencyMap[4]).intl;
    return intl.string(require(dependencyMap[4]).t.rqEZdu);
  },
  parent: require(dependencyMap[0]).MobileSetting.NOTIFICATIONS,
  useValue: function useInAppNotificationsSettingValue() {
    const FocusMode = require(dependencyMap[2]).FocusMode;
    const setting = FocusMode.useSetting();
    const ShowInAppNotifications = require(dependencyMap[2]).ShowInAppNotifications;
    return !setting && ShowInAppNotifications.useSetting();
  },
  onValueChange: function updateInAppNotificationSettings(notifications_in_app_enabled) {
    const ShowInAppNotifications = require(dependencyMap[2]).ShowInAppNotifications;
    ShowInAppNotifications.updateSetting(notifications_in_app_enabled);
    let obj = importDefault(dependencyMap[5]);
    obj = { notifications_in_app_enabled };
    obj.track(AnalyticEvents.LOCAL_SETTINGS_UPDATED, obj);
  },
  useDescription: function useInAppNotificationsDescription() {
    let stringResult;
    if (obj.useFocusModeEnabled()) {
      const intl = require(dependencyMap[4]).intl;
      stringResult = intl.string(require(dependencyMap[4]).t.cIRG0s);
    }
    return stringResult;
  },
  useIsDisabled: require(dependencyMap[3]).useFocusModeEnabled
});
const _module1 = require(dependencyMap[7]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/InAppNotificationsSetting.tsx");

export default toggle;
