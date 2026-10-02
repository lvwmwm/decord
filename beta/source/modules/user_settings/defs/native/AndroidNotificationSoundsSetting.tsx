// Module ID: 15035
// Function ID: 15036
// Name: AndroidNotificationSoundsSetting
// Dependencies: [15020, 7421, 558, 576, 1370, 15022, 1127, 10874, 14013, 15026, 2]

// Module 15035 (AndroidNotificationSoundsSetting)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1127 */;
import PlatformUtils from "PlatformUtils" /* 1370 */;
import SettingsConstants from "SettingsConstants" /* 7421 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 14013 */;
import SettingsNotificationUtils from "SettingsNotificationUtils" /* 15022 */;
import MobileNotifSettings from "MobileNotifSettings" /* 15026 */;
import AndroidNotificationSettingsStore from "AndroidNotificationSettingsStore" /* 15020 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders_mod from "SettingBuilders" /* 10874 */;
import size from "module_2" /* 2 */;

let c2;
let setAndroidNotificationSoundsEnabled;
({ useAndroidNotificationSoundsEnabled: c2, setAndroidNotificationSoundsEnabled } = AndroidNotificationSettingsStore);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
}) : (() => {
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
    return intl.string(intl2.t["1CWknJ"]);
  },
  useValue: () => {
    let flag = React2();
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  onValueChange: setAndroidNotificationSoundsEnabled
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
      tmp = !obj.useIsDeclarativeSettingsUIAvailable("AndroidNotificationSoundsSetting");
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
      isDeclarativeSettingsUIAvailable = obj.useIsDeclarativeSettingsUIAvailable("RedesignAndroidNotificationSoundsSetting");
    }
    return isDeclarativeSettingsUIAvailable;
  }
};
const merged1 = Object.assign(obj);
const toggle2 = createToggle2(obj3);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidNotificationSoundsSetting.tsx");

export default toggle;
export const RedesignAndroidNotificationSoundsSetting = toggle2;
