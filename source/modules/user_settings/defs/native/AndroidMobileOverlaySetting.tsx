// Module ID: 14193
// Function ID: 109160
// Name: toggle
// Dependencies: [10739, 7751, 566, 1212, 10127, 10750, 2]

// Module 14193 (toggle)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["9CSZJm"]);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  useValue: function useAndroidMobileOverlaySettingValue() {
    const items = [_isNativeReflectConstruct];
    return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.getEnabled());
  },
  onValueChange: require("dispatcher").setEnabled,
  useDescription: function useAndroidMobileOverlaySettingDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.Wfoivk);
  },
  usePredicate: require("_isNativeReflectConstruct").isMobileOverlaySupported
};
createToggle = createToggle.createToggle(createToggle);
const result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/AndroidMobileOverlaySetting.tsx");

export default createToggle;
