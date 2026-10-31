// Module ID: 17477
// Function ID: 17478
// Name: AndroidNotificationVibrationsSetting
// Dependencies: [17463, 8432, 1375, 17465, 1113, 11539, 16277, 17469, 2]

// Module 17477 (AndroidNotificationVibrationsSetting)
import intl2 from "intl" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import SettingsConstants from "SettingsConstants" /* 8432 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 16277 */;
import SettingsNotificationUtils from "SettingsNotificationUtils" /* 17465 */;
import MobileNotifSettings from "MobileNotifSettings" /* 17469 */;
import AndroidNotificationSettingsStore from "AndroidNotificationSettingsStore" /* 17463 */;
import SettingBuilders_mod from "SettingBuilders" /* 11539 */;
import size from "module_2" /* 2 */;

let c2;
let setAndroidNotificationVibrationsEnabled;
({ useAndroidNotificationVibrationsEnabled: c2, setAndroidNotificationVibrationsEnabled } = AndroidNotificationSettingsStore);
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
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let SettingBuilders = SettingBuilders_mod;
const createToggle = SettingBuilders.createToggle;
const obj2 = {
  parent: MobileUserSettings.NOTIFICATIONS,
  usePredicate() {
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
    const tmp2Result2 = notifications_NotificationSettingsUtils;
    if (tmp5) {
      tmp5 = !tmp2Result2.useIsDeclarativeSettingsUIAvailable("AndroidNotificationVibrationsSetting");
    }
    return tmp5;
  }
};
const merged = Object.assign(obj);
const toggle = createToggle(obj2);
SettingBuilders = SettingBuilders_mod;
const createToggle2 = SettingBuilders.createToggle;
const obj3 = {
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    const tmp = React2();
    const obj = PlatformUtils;
    let isDeclarativeSettingsUIAvailable = !obj.isIOS();
    obj.isIOS();
    if (isDeclarativeSettingsUIAvailable) {
      const tmp2Result = SettingsNotificationUtils;
      isDeclarativeSettingsUIAvailable = !tmp2Result.hasAndroidNotificationChannels();
    }
    if (isDeclarativeSettingsUIAvailable) {
      isDeclarativeSettingsUIAvailable = null != tmp;
    }
    const tmp2Result2 = notifications_NotificationSettingsUtils;
    if (isDeclarativeSettingsUIAvailable) {
      isDeclarativeSettingsUIAvailable = tmp2Result2.useIsDeclarativeSettingsUIAvailable("RedesignAndroidNotificationVibrationsSetting");
    }
    return isDeclarativeSettingsUIAvailable;
  }
};
const merged1 = Object.assign(obj);
const toggle2 = createToggle2(obj3);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidNotificationVibrationsSetting.tsx");

export default toggle;
export const RedesignAndroidNotificationVibrationsSetting = toggle2;
