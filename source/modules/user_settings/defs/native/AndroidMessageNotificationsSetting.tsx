// Module ID: 14198
// Function ID: 107424
// Name: useAndroidMessageNotificationsSettingValue
// Dependencies: []
// Exports: useAndroidMessageNotificationsSettingValue, useHasAndroidMessageNotificationsSetting

// Module 14198 (useAndroidMessageNotificationsSettingValue)
function useAndroidMessageNotificationsSettingValue() {
  const tmp = callback();
  return null != tmp && tmp;
}
function useHasAndroidMessageNotificationsSetting() {
  const tmp = callback();
  let isAndroidResult = require(dependencyMap[2]).isAndroid();
  if (isAndroidResult) {
    isAndroidResult = null != tmp;
  }
  return isAndroidResult;
}
const _module = require(dependencyMap[0]);
let closure_2 = _module.useAndroidMessageNotificationsEnabled;
const _module1 = require(dependencyMap[3]);
const toggle = _module1.createToggle({
  useTitle() {
    const intl = require(dependencyMap[4]).intl;
    return intl.string(require(dependencyMap[4]).t.zViLy+);
  },
  parent: require(dependencyMap[1]).MobileSetting.NOTIFICATIONS,
  useValue: useAndroidMessageNotificationsSettingValue,
  onValueChange: _module.setAndroidMessageNotificationsEnabled,
  usePredicate: useHasAndroidMessageNotificationsSetting
});
const _module2 = require(dependencyMap[5]);
const result = _module2.fileFinishedImporting("modules/user_settings/defs/native/AndroidMessageNotificationsSetting.tsx");

export default toggle;
export { useAndroidMessageNotificationsSettingValue };
export { useHasAndroidMessageNotificationsSetting };
