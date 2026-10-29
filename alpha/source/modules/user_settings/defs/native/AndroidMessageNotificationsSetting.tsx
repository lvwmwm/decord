// Module ID: 17361
// Function ID: 17362
// Name: AndroidMessageNotificationsSetting
// Dependencies: [17349, 8387, 558, 576, 1381, 11302, 1125, 16196, 2866, 17355, 2]
// Exports: useAndroidMessageNotificationsSettingValue

// Module 17361 (AndroidMessageNotificationsSetting)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1125 */;
import _modDef2866 from "module_2866" /* 2866 */;
import SettingsConstants from "SettingsConstants" /* 8387 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 16196 */;
import MobileNotifSettings from "MobileNotifSettings" /* 17355 */;
import AndroidNotificationSettingsStore from "AndroidNotificationSettingsStore" /* 17349 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders_mod from "SettingBuilders" /* 11302 */;
import size from "module_2" /* 2 */;

let c3;
let setAndroidMessageNotificationsEnabled;
let tmp;
const PlatformUtils = tmp(1381);
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
    return intl.string(_modDef2866.odJXYJ);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef2866["+jwUmI"]);
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
