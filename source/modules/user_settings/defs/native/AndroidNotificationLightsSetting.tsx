// Module ID: 14894
// Function ID: 14895
// Name: toggle
// Dependencies: [14882, 8235, 500, 14884, 10516, 1236, 2]

// Module 14894 (toggle)
import set from "set" /* 2 */;
import set2 from "set" /* 500 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import MobileUserSettings from "MobileUserSettings" /* 8235 */;
import hasAndroidNotificationChannels from "hasAndroidNotificationChannels" /* 14884 */;
import _initializeAndroidNotificationSettingsStore from "_initializeAndroidNotificationSettingsStore" /* 14882 */;
import createToggle from "createToggle" /* 10516 */;

({ useAndroidNotificationLightsEnabled: obj1, setAndroidNotificationLightsEnabled } = _initializeAndroidNotificationSettingsStore);
const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.E3xHUp);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: function useAndroidNotificationLightsSettingValue() {
    let flag = callback();
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  onValueChange: setAndroidNotificationLightsEnabled,
  usePredicate: function useHasAndroidNotificationLightsSetting() {
    const tmp = callback();
    const tmp2 = require;
    const isIOSResult = set2.isIOS();
    let tmp5 = !isIOSResult;
    if (!isIOSResult) {
      tmp5 = !hasAndroidNotificationChannels.hasAndroidNotificationChannels();
      const tmp2Result = hasAndroidNotificationChannels;
    }
    if (tmp5) {
      tmp5 = null != tmp;
    }
    return tmp5;
  }
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.E3xHUp);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: function useAndroidNotificationLightsSettingValue() {
    let flag = callback();
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  onValueChange: setAndroidNotificationLightsEnabled,
  usePredicate: function useHasAndroidNotificationLightsSetting() {
    const tmp = callback();
    const tmp2 = require;
    const isIOSResult = set2.isIOS();
    let tmp5 = !isIOSResult;
    if (!isIOSResult) {
      tmp5 = !hasAndroidNotificationChannels.hasAndroidNotificationChannels();
      const tmp2Result = hasAndroidNotificationChannels;
    }
    if (tmp5) {
      tmp5 = null != tmp;
    }
    return tmp5;
  }
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AndroidNotificationLightsSetting.tsx");

export default toggle;
