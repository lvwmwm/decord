// Module ID: 14297
// Function ID: 109753
// Name: toggle
// Dependencies: [4122, 7751, 566, 13423, 10127, 1212, 2]

// Module 14297 (toggle)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.e3TR1b);
  },
  parent: require("MobileSetting").MobileSetting.ACCESSIBILITY,
  useValue: function useReducedMotionSettingValue() {
    const items = [_isNativeReflectConstruct];
    return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.useReducedMotion);
  },
  onValueChange: function onReducedMotionSettingValueChange(arg0) {
    let str = "no-preference";
    if (arg0) {
      str = "reduce";
    }
    const result = require(13423) /* setFontSize */.setPrefersReducedMotion(str);
  }
};
createToggle = createToggle.createToggle(createToggle);
let result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/EnableReducedMotionSetting.tsx");

export default createToggle;
