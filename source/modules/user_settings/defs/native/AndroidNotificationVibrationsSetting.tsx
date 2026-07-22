// Module ID: 14211
// Function ID: 107507
// Name: toggle
// Dependencies: []

// Module 14211 (toggle)
const _module = require(dependencyMap[0]);
let closure_2 = _module.useAndroidNotificationVibrationsEnabled;
const _module1 = require(dependencyMap[4]);
const toggle = _module1.createToggle({
  useTitle() {
    const intl = require(dependencyMap[5]).intl;
    return intl.string(require(dependencyMap[5]).t.lFg/O1);
  },
  parent: require(dependencyMap[1]).MobileSetting.NOTIFICATIONS,
  useValue: function useAndroidNotificationVibrationsSettingValue() {
    const tmp = callback();
    return null != tmp && tmp;
  },
  onValueChange: _module.setAndroidNotificationVibrationsEnabled,
  usePredicate: function useHasAndroidNotificationVibrationsSetting() {
    const tmp = callback();
    let tmp2 = !require(dependencyMap[2]).isIOS();
    if (tmp2) {
      tmp2 = !require(dependencyMap[3]).hasAndroidNotificationChannels();
      const obj2 = require(dependencyMap[3]);
    }
    if (tmp2) {
      tmp2 = null != tmp;
    }
    return tmp2;
  }
});
const _module2 = require(dependencyMap[6]);
const result = _module2.fileFinishedImporting("modules/user_settings/defs/native/AndroidNotificationVibrationsSetting.tsx");

export default toggle;
