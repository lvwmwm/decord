// Module ID: 14384
// Function ID: 110105
// Name: useAndroidMessageNotificationsSettingValue
// Dependencies: [14373, 7697, 477, 10059, 1212, 2]
// Exports: useAndroidMessageNotificationsSettingValue, useHasAndroidMessageNotificationsSetting

// Module 14384 (useAndroidMessageNotificationsSettingValue)
import _initializeAndroidNotificationSettingsStore from "_initializeAndroidNotificationSettingsStore";
import createToggle from "createToggle";

function useAndroidMessageNotificationsSettingValue() {
  const tmp = callback();
  return null != tmp && tmp;
}
function useHasAndroidMessageNotificationsSetting() {
  const tmp = callback();
  let isAndroidResult = require(477) /* set */.isAndroid();
  if (isAndroidResult) {
    isAndroidResult = null != tmp;
  }
  return isAndroidResult;
}
let closure_2 = _initializeAndroidNotificationSettingsStore.useAndroidMessageNotificationsEnabled;
const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["zViLy+"]);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: useAndroidMessageNotificationsSettingValue,
  onValueChange: _initializeAndroidNotificationSettingsStore.setAndroidMessageNotificationsEnabled,
  usePredicate: useHasAndroidMessageNotificationsSetting
});
const obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["zViLy+"]);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: useAndroidMessageNotificationsSettingValue,
  onValueChange: _initializeAndroidNotificationSettingsStore.setAndroidMessageNotificationsEnabled,
  usePredicate: useHasAndroidMessageNotificationsSetting
};
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/AndroidMessageNotificationsSetting.tsx");

export default toggle;
export { useAndroidMessageNotificationsSettingValue };
export { useHasAndroidMessageNotificationsSetting };
