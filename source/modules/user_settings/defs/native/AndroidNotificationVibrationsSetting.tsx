// Module ID: 14431
// Function ID: 110291
// Name: toggle
// Dependencies: [14418, 7733, 477, 14420, 10099, 1212, 2]

// Module 14431 (toggle)
import _initializeAndroidNotificationSettingsStore from "_initializeAndroidNotificationSettingsStore";
import createToggle from "createToggle";

let closure_2 = _initializeAndroidNotificationSettingsStore.useAndroidNotificationVibrationsEnabled;
const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["lFg/O1"]);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: function useAndroidNotificationVibrationsSettingValue() {
    const tmp = callback();
    return null != tmp && tmp;
  },
  onValueChange: _initializeAndroidNotificationSettingsStore.setAndroidNotificationVibrationsEnabled,
  usePredicate: function useHasAndroidNotificationVibrationsSetting() {
    const tmp = callback();
    let tmp2 = !require(477) /* set */.isIOS();
    if (tmp2) {
      tmp2 = !require(14420) /* hasAndroidNotificationChannels */.hasAndroidNotificationChannels();
      const obj2 = require(14420) /* hasAndroidNotificationChannels */;
    }
    if (tmp2) {
      tmp2 = null != tmp;
    }
    return tmp2;
  }
});
const obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["lFg/O1"]);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: function useAndroidNotificationVibrationsSettingValue() {
    const tmp = callback();
    return null != tmp && tmp;
  },
  onValueChange: _initializeAndroidNotificationSettingsStore.setAndroidNotificationVibrationsEnabled,
  usePredicate: function useHasAndroidNotificationVibrationsSetting() {
    const tmp = callback();
    let tmp2 = !require(477) /* set */.isIOS();
    if (tmp2) {
      tmp2 = !require(14420) /* hasAndroidNotificationChannels */.hasAndroidNotificationChannels();
      const obj2 = require(14420) /* hasAndroidNotificationChannels */;
    }
    if (tmp2) {
      tmp2 = null != tmp;
    }
    return tmp2;
  }
};
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/AndroidNotificationVibrationsSetting.tsx");

export default toggle;
