// Module ID: 16909
// Function ID: 16910
// Name: AndroidMessageNotificationsSetting
// Dependencies: [16890, 8712, 1378, 11937, 1112, 15660, 3152, 16896, 2]
// Exports: useAndroidMessageNotificationsSettingValue, useHasAndroidMessageNotificationsSetting

// Module 16909 (AndroidMessageNotificationsSetting)
import intl2 from "intl" /* 1112 */;
import PlatformUtils from "PlatformUtils" /* 1378 */;
import _modDef3152 from "module_3152" /* 3152 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import MobileNotifSettings from "MobileNotifSettings" /* 16896 */;
import AndroidNotificationSettingsStore from "AndroidNotificationSettingsStore" /* 16890 */;
import SettingBuilders_mod from "SettingBuilders" /* 11937 */;
import size from "module_2" /* 2 */;

let c3;
let setAndroidMessageNotificationsEnabled;
let tmp2;
const notifications_NotificationSettingsUtils = tmp2(15660);
function useAndroidMessageNotificationsSettingValue() {
  let flag = _false();
  if (flag == null) {
    flag = false;
  }
  return flag;
}
({ useAndroidMessageNotificationsEnabled: c3, setAndroidMessageNotificationsEnabled } = AndroidNotificationSettingsStore);
let obj = { useValue: useAndroidMessageNotificationsSettingValue, onValueChange: setAndroidMessageNotificationsEnabled };
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let SettingBuilders = SettingBuilders_mod;
const createToggle = SettingBuilders.createToggle;
const obj2 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["zViLy+"]);
  },
  parent: MobileUserSettings.NOTIFICATIONS,
  usePredicate() {
    const tmp = _false();
    const obj = PlatformUtils;
    let isAndroidResult = obj.isAndroid();
    if (isAndroidResult) {
      isAndroidResult = null != tmp;
    }
    const tmp2Result = notifications_NotificationSettingsUtils;
    if (isAndroidResult) {
      isAndroidResult = !tmp2Result.useIsDeclarativeSettingsUIAvailable("AndroidMessageNotificationsSetting");
    }
    return isAndroidResult;
  }
};
const merged = Object.assign(obj);
const toggle = createToggle(obj2);
SettingBuilders = SettingBuilders_mod;
const createToggle2 = SettingBuilders.createToggle;
const obj3 = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(_modDef3152.odJXYJ);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3152["+jwUmI"]);
  },
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    const tmp = _false();
    const obj = PlatformUtils;
    let isAndroidResult = obj.isAndroid();
    if (isAndroidResult) {
      isAndroidResult = null != tmp;
    }
    const tmp2Result = notifications_NotificationSettingsUtils;
    if (isAndroidResult) {
      isAndroidResult = tmp2Result.useIsDeclarativeSettingsUIAvailable("RedesignAndroidMessageNotificationsSetting");
    }
    return isAndroidResult;
  }
};
const merged1 = Object.assign(obj);
const toggle2 = createToggle2(obj3);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidMessageNotificationsSetting.tsx");

export default toggle;
export { useAndroidMessageNotificationsSettingValue };
export function useHasAndroidMessageNotificationsSetting() {
  const tmp = _false();
  const obj = PlatformUtils;
  const isAndroidResult = obj.isAndroid() && null != tmp;
  return isAndroidResult;
}
export const RedesignAndroidMessageNotificationsSetting = toggle2;
