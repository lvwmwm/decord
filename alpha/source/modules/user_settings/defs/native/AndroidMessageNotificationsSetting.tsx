// Module ID: 15707
// Function ID: 15708
// Name: AndroidMessageNotificationsSetting
// Dependencies: [15695, 7974, 558, 576, 1382, 10629, 1126, 14628, 2891, 15701, 2]
// Exports: useAndroidMessageNotificationsSettingValue

// Module 15707 (AndroidMessageNotificationsSetting)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import _modDef2891 from "module_2891" /* 2891 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 14628 */;
import MobileNotifSettings from "MobileNotifSettings" /* 15701 */;
import AndroidNotificationSettingsStore from "AndroidNotificationSettingsStore" /* 15695 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders_mod from "SettingBuilders" /* 10629 */;
import size from "module_2" /* 2 */;

let c3;
let setAndroidMessageNotificationsEnabled;
let tmp;
const PlatformUtils = tmp(1382);
({ useAndroidMessageNotificationsEnabled: c3, setAndroidMessageNotificationsEnabled } = AndroidNotificationSettingsStore);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasAndroidMessageNotificationsSetting() {
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  const tmp4 = _false();
  if (cResult[0] !== tmp4) {
    const tmpResult = PlatformUtils;
    const isAndroidResult = tmpResult.isAndroid() && null != tmp4;
    cResult[0] = tmp4;
    cResult[1] = isAndroidResult;
    tmp5 = isAndroidResult;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (function useHasAndroidMessageNotificationsSetting() {
  const tmp = _false();
  const obj = PlatformUtils;
  const isAndroidResult = obj.isAndroid() && null != tmp;
  return isAndroidResult;
});
function useAndroidMessageNotificationsSettingValue() {
  let flag = _false();
  if (flag == null) {
    flag = false;
  }
  return flag;
}
let closure_4 = tmp4;
let obj = { useValue: useAndroidMessageNotificationsSettingValue, onValueChange: setAndroidMessageNotificationsEnabled };
let SettingBuilders = SettingBuilders_mod;
const createToggle = SettingBuilders.createToggle;
const obj2 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["zViLy+"]);
  },
  parent: MobileUserSettings.NOTIFICATIONS,
  usePredicate() {
    let tmp = closure_4();
    const obj = notifications_NotificationSettingsUtils;
    if (tmp) {
      tmp = !obj.useIsDeclarativeSettingsUIAvailable("AndroidMessageNotificationsSetting");
    }
    return tmp;
  }
};
const merged = Object.assign(obj);
const toggle = createToggle(obj2);
SettingBuilders = SettingBuilders_mod;
const createToggle2 = SettingBuilders.createToggle;
const obj3 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef2891.odJXYJ);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2891["+jwUmI"]);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    let isDeclarativeSettingsUIAvailable = closure_4();
    const obj = notifications_NotificationSettingsUtils;
    if (isDeclarativeSettingsUIAvailable) {
      isDeclarativeSettingsUIAvailable = obj.useIsDeclarativeSettingsUIAvailable("RedesignAndroidMessageNotificationsSetting");
    }
    return isDeclarativeSettingsUIAvailable;
  }
};
const merged1 = Object.assign(obj);
const toggle2 = createToggle2(obj3);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidMessageNotificationsSetting.tsx");

export default toggle;
export { useAndroidMessageNotificationsSettingValue };
export const useHasAndroidMessageNotificationsSetting = tmp4;
export const RedesignAndroidMessageNotificationsSetting = toggle2;
