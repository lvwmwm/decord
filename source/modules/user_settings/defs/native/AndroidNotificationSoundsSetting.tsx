// Module ID: 14387
// Function ID: 110117
// Name: toggle
// Dependencies: [14373, 7697, 477, 14375, 10059, 1212, 2]

// Module 14387 (toggle)
import _initializeAndroidNotificationSettingsStore from "_initializeAndroidNotificationSettingsStore";
import createToggle from "createToggle";

let closure_2 = _initializeAndroidNotificationSettingsStore.useAndroidNotificationSoundsEnabled;
const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["1CWknJ"]);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: function useAndroidNotificationSoundsSettingValue() {
    const tmp = callback();
    return null != tmp && tmp;
  },
  onValueChange: _initializeAndroidNotificationSettingsStore.setAndroidNotificationSoundsEnabled,
  usePredicate: function useHasAndroidNotificationSoundsSetting() {
    const tmp = callback();
    let tmp2 = !require(477) /* set */.isIOS();
    if (tmp2) {
      tmp2 = !require(14375) /* hasAndroidNotificationChannels */.hasAndroidNotificationChannels();
      const obj2 = require(14375) /* hasAndroidNotificationChannels */;
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
    return intl.string(require(1212) /* getSystemLocale */.t["1CWknJ"]);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: function useAndroidNotificationSoundsSettingValue() {
    const tmp = callback();
    return null != tmp && tmp;
  },
  onValueChange: _initializeAndroidNotificationSettingsStore.setAndroidNotificationSoundsEnabled,
  usePredicate: function useHasAndroidNotificationSoundsSetting() {
    const tmp = callback();
    let tmp2 = !require(477) /* set */.isIOS();
    if (tmp2) {
      tmp2 = !require(14375) /* hasAndroidNotificationChannels */.hasAndroidNotificationChannels();
      const obj2 = require(14375) /* hasAndroidNotificationChannels */;
    }
    if (tmp2) {
      tmp2 = null != tmp;
    }
    return tmp2;
  }
};
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/AndroidNotificationSoundsSetting.tsx");

export default toggle;
