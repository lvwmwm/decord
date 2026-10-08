// Module ID: 15596
// Function ID: 15597
// Name: AndroidNotificationVibrationsSetting
// Dependencies: [15582, 7966, 558, 576, 1381, 15584, 1126, 11262, 14533, 15588, 2]

// Module 15596 (AndroidNotificationVibrationsSetting)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import SettingsConstants from "SettingsConstants" /* 7966 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 14533 */;
import SettingsNotificationUtils from "SettingsNotificationUtils" /* 15584 */;
import MobileNotifSettings from "MobileNotifSettings" /* 15588 */;
import AndroidNotificationSettingsStore from "AndroidNotificationSettingsStore" /* 15582 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders_mod from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

let c2;
let setAndroidNotificationVibrationsEnabled;
({ useAndroidNotificationVibrationsEnabled: c2, setAndroidNotificationVibrationsEnabled } = AndroidNotificationSettingsStore);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasAndroidNotificationVibrationsSetting() {
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  const tmp4 = React2();
  if (cResult[0] !== tmp4) {
    const tmpResult = PlatformUtils;
    let tmp7 = !tmpResult.isIOS();
    tmpResult.isIOS();
    if (tmp7) {
      const tmpResult2 = SettingsNotificationUtils;
      tmp7 = !tmpResult2.hasAndroidNotificationChannels();
    }
    if (tmp7) {
      tmp7 = null != tmp4;
    }
    cResult[0] = tmp4;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (function useHasAndroidNotificationVibrationsSetting() {
  const tmp = React2();
  const obj = PlatformUtils;
  let tmp5 = !obj.isIOS();
  obj.isIOS();
  if (tmp5) {
    const tmp2Result = SettingsNotificationUtils;
    tmp5 = !tmp2Result.hasAndroidNotificationChannels();
  }
  if (tmp5) {
    tmp5 = null != tmp;
  }
  return tmp5;
});
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["lFg/O1"]);
  },
  useValue: function useAndroidNotificationVibrationsSettingValue() {
    let flag = React2();
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  onValueChange: setAndroidNotificationVibrationsEnabled
};
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
let SettingBuilders = SettingBuilders_mod;
const createToggle = SettingBuilders.createToggle;
const obj2 = {
  parent: MobileUserSettings.NOTIFICATIONS,
  usePredicate() {
    let tmp = closure_3();
    const obj = notifications_NotificationSettingsUtils;
    if (tmp) {
      tmp = !obj.useIsDeclarativeSettingsUIAvailable("AndroidNotificationVibrationsSetting");
    }
    return tmp;
  }
};
const merged = Object.assign(obj);
const toggle = createToggle(obj2);
SettingBuilders = SettingBuilders_mod;
const createToggle2 = SettingBuilders.createToggle;
const obj3 = {
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    let isDeclarativeSettingsUIAvailable = closure_3();
    const obj = notifications_NotificationSettingsUtils;
    if (isDeclarativeSettingsUIAvailable) {
      isDeclarativeSettingsUIAvailable = obj.useIsDeclarativeSettingsUIAvailable("RedesignAndroidNotificationVibrationsSetting");
    }
    return isDeclarativeSettingsUIAvailable;
  }
};
const merged1 = Object.assign(obj);
const toggle2 = createToggle2(obj3);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidNotificationVibrationsSetting.tsx");

export default toggle;
export const RedesignAndroidNotificationVibrationsSetting = toggle2;
