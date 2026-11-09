// Module ID: 17817
// Function ID: 17818
// Name: AndroidNotificationLightsSetting
// Dependencies: [17797, 8503, 1377, 17799, 1113, 11685, 16596, 17803, 2]

// Module 17817 (AndroidNotificationLightsSetting)
import intl2 from "intl" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import SettingsConstants from "SettingsConstants" /* 8503 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 16596 */;
import SettingsNotificationUtils from "SettingsNotificationUtils" /* 17799 */;
import MobileNotifSettings from "MobileNotifSettings" /* 17803 */;
import AndroidNotificationSettingsStore from "AndroidNotificationSettingsStore" /* 17797 */;
import SettingBuilders_mod from "SettingBuilders" /* 11685 */;
import size from "module_2" /* 2 */;

let c2;
let setAndroidNotificationLightsEnabled;
({ useAndroidNotificationLightsEnabled: c2, setAndroidNotificationLightsEnabled } = AndroidNotificationSettingsStore);
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t.E3xHUp);
  },
  useValue: function useAndroidNotificationLightsSettingValue() {
    let flag = React2();
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  onValueChange: setAndroidNotificationLightsEnabled
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
      tmp5 = !tmp2Result2.useIsDeclarativeSettingsUIAvailable("AndroidNotificationLightsSetting");
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
      isDeclarativeSettingsUIAvailable = tmp2Result2.useIsDeclarativeSettingsUIAvailable("RedesignAndroidNotificationLightsSetting");
    }
    return isDeclarativeSettingsUIAvailable;
  }
};
const merged1 = Object.assign(obj);
const toggle2 = createToggle2(obj3);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidNotificationLightsSetting.tsx");

export default toggle;
export const RedesignAndroidNotificationLightsSetting = toggle2;
