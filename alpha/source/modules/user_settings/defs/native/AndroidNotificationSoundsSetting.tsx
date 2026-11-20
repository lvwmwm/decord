// Module ID: 16789
// Function ID: 16790
// Name: AndroidNotificationSoundsSetting
// Dependencies: [16767, 8592, 1378, 16769, 1112, 11817, 15537, 16773, 2]

// Module 16789 (AndroidNotificationSoundsSetting)
import intl2 from "intl" /* 1112 */;
import PlatformUtils from "PlatformUtils" /* 1378 */;
import SettingsConstants from "SettingsConstants" /* 8592 */;
import notifications_NotificationSettingsUtils from "notifications/NotificationSettingsUtils" /* 15537 */;
import SettingsNotificationUtils from "SettingsNotificationUtils" /* 16769 */;
import MobileNotifSettings from "MobileNotifSettings" /* 16773 */;
import AndroidNotificationSettingsStore from "AndroidNotificationSettingsStore" /* 16767 */;
import SettingBuilders_mod from "SettingBuilders" /* 11817 */;
import size from "module_2" /* 2 */;

let c2;
let setAndroidNotificationSoundsEnabled;
({ useAndroidNotificationSoundsEnabled: c2, setAndroidNotificationSoundsEnabled } = AndroidNotificationSettingsStore);
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["1CWknJ"]);
  },
  useValue: function useAndroidNotificationSoundsSettingValue() {
    let flag = React2();
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  onValueChange: setAndroidNotificationSoundsEnabled
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
      tmp5 = !tmp2Result2.useIsDeclarativeSettingsUIAvailable("AndroidNotificationSoundsSetting");
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
      isDeclarativeSettingsUIAvailable = tmp2Result2.useIsDeclarativeSettingsUIAvailable("RedesignAndroidNotificationSoundsSetting");
    }
    return isDeclarativeSettingsUIAvailable;
  }
};
const merged1 = Object.assign(obj);
const toggle2 = createToggle2(obj3);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidNotificationSoundsSetting.tsx");

export default toggle;
export const RedesignAndroidNotificationSoundsSetting = toggle2;
