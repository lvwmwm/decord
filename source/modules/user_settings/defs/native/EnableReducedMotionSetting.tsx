// Module ID: 15013
// Function ID: 15014
// Name: toggle
// Dependencies: [4470, 7884, 589, 14092, 11068, 1236, 2]

// Module 15013 (toggle)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import setFontSize from "setFontSize" /* 14092 */;
import closure_2 from "maybeApplyNoTextColorForLightCustomTheme" /* 4470 */;
import createToggle from "createToggle" /* 11068 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.e3TR1b);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCESSIBILITY,
  useValue: function useReducedMotionSettingValue() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  },
  onValueChange: function onReducedMotionSettingValueChange(arg0) {
    let str = "no-preference";
    if (arg0) {
      str = "reduce";
    }
    const result = setFontSize.setPrefersReducedMotion(str);
  }
};
createToggle = createToggle.createToggle(createToggle);
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/EnableReducedMotionSetting.tsx");

export default createToggle;
