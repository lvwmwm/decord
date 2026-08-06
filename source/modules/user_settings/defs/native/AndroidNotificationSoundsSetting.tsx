// Module ID: 14592
// Function ID: 14593
// Name: toggle
// Dependencies: [14578, 8005, 500, 14580, 10364, 1236, 2]

// Module 14592 (toggle)
import _initializeAndroidNotificationSettingsStore from "_initializeAndroidNotificationSettingsStore";
import createToggle from "createToggle";

let obj1;
let setAndroidNotificationSoundsEnabled;
({ useAndroidNotificationSoundsEnabled: obj1, setAndroidNotificationSoundsEnabled } = _initializeAndroidNotificationSettingsStore);
const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["1CWknJ"]);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: function useAndroidNotificationSoundsSettingValue() {
    let flag = callback();
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  onValueChange: setAndroidNotificationSoundsEnabled,
  usePredicate: function useHasAndroidNotificationSoundsSetting() {
    const tmp = callback();
    const tmp2 = require;
    const isIOSResult = require(500) /* set */.isIOS();
    let tmp5 = !isIOSResult;
    if (!isIOSResult) {
      tmp5 = !tmp2(14580).hasAndroidNotificationChannels();
      const tmp2Result = tmp2(14580);
    }
    if (tmp5) {
      tmp5 = null != tmp;
    }
    return tmp5;
  }
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["1CWknJ"]);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: function useAndroidNotificationSoundsSettingValue() {
    let flag = callback();
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  onValueChange: setAndroidNotificationSoundsEnabled,
  usePredicate: function useHasAndroidNotificationSoundsSetting() {
    const tmp = callback();
    const tmp2 = require;
    const isIOSResult = require(500) /* set */.isIOS();
    let tmp5 = !isIOSResult;
    if (!isIOSResult) {
      tmp5 = !tmp2(14580).hasAndroidNotificationChannels();
      const tmp2Result = tmp2(14580);
    }
    if (tmp5) {
      tmp5 = null != tmp;
    }
    return tmp5;
  }
};
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/AndroidNotificationSoundsSetting.tsx");

export default toggle;
