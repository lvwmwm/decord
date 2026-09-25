// Module ID: 15020
// Function ID: 15021
// Name: AndroidNotificationVibrationsSetting
// Dependencies: [15006, 7412, 1364, 15008, 1115, 10993, 13987, 15012, 2]

// Module 15020 (AndroidNotificationVibrationsSetting)
import util from "util" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import SettingsConstants from "SettingsConstants" /* 7412 */;
import MobileNotifSettings from "MobileNotifSettings" /* 15012 */;
import AndroidNotificationSettingsStore from "AndroidNotificationSettingsStore" /* 15006 */;
import SettingBuilders_mod from "SettingBuilders" /* 10993 */;
import size from "module_2" /* 2 */;

({ useAndroidNotificationVibrationsEnabled: c2, setAndroidNotificationVibrationsEnabled } = AndroidNotificationSettingsStore);
let obj = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["lFg/O1"]);
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
let SettingBuilders = SettingBuilders_mod;
const obj2 = {};
const merged = Object.assign(obj);
obj2.parent = SettingsConstants.MobileUserSettings.NOTIFICATIONS;
obj2.usePredicate = function usePredicate() {
  const tmp = React2();
  const isIOSResult = PlatformUtils.isIOS();
  let tmp5 = !isIOSResult;
  if (!isIOSResult) {
    tmp5 = !tmp2(15008).hasAndroidNotificationChannels();
    const tmp2Result = tmp2(15008);
  }
  if (tmp5) {
    tmp5 = null != tmp;
  }
  if (tmp5) {
    tmp5 = !tmp2Result2.useIsDeclarativeSettingsUIAvailable("AndroidNotificationVibrationsSetting");
  }
  return tmp5;
};
const toggle = SettingBuilders.createToggle(obj2);
let SettingBuilders = SettingBuilders_mod;
const obj3 = {};
const merged1 = Object.assign(obj);
obj3.parent = MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN;
obj3.usePredicate = function usePredicate() {
  const tmp = React2();
  const isIOSResult = PlatformUtils.isIOS();
  let isDeclarativeSettingsUIAvailable = !isIOSResult;
  if (!isIOSResult) {
    isDeclarativeSettingsUIAvailable = !tmp2(15008).hasAndroidNotificationChannels();
    const tmp2Result = tmp2(15008);
  }
  if (isDeclarativeSettingsUIAvailable) {
    isDeclarativeSettingsUIAvailable = null != tmp;
  }
  if (isDeclarativeSettingsUIAvailable) {
    isDeclarativeSettingsUIAvailable = tmp2Result2.useIsDeclarativeSettingsUIAvailable("RedesignAndroidNotificationVibrationsSetting");
  }
  return isDeclarativeSettingsUIAvailable;
};
const toggle1 = SettingBuilders.createToggle(obj3);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidNotificationVibrationsSetting.tsx");

export default toggle;
export const RedesignAndroidNotificationVibrationsSetting = toggle1;
