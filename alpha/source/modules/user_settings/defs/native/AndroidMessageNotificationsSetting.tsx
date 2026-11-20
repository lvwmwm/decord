// Module ID: 16786
// Function ID: 16787
// Name: AndroidMessageNotificationsSetting
// Dependencies: [16767, 8592, 1378, 11817, 1112, 15537, 3053, 16773, 2]
// Exports: useAndroidMessageNotificationsSettingValue, useHasAndroidMessageNotificationsSetting

// Module 16786 (AndroidMessageNotificationsSetting)
import intl2 from "intl" /* 1112 */;
import PlatformUtils from "PlatformUtils" /* 1378 */;
import _modDef3053 from "module_3053" /* 3053 */;
import SettingsConstants from "SettingsConstants" /* 8592 */;
import MobileNotifSettings from "MobileNotifSettings" /* 16773 */;
import AndroidNotificationSettingsStore from "AndroidNotificationSettingsStore" /* 16767 */;
import SettingBuilders_mod from "SettingBuilders" /* 11817 */;
import size from "module_2" /* 2 */;

let c3;
let setAndroidMessageNotificationsEnabled;
let tmp2;
const notifications_NotificationSettingsUtils = tmp2(15537);
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
    return intl.string(_modDef3053.odJXYJ);
  },
  useDescription() {
    const intl = intl2.intl;
    return intl.string(_modDef3053["+jwUmI"]);
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
