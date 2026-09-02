// Module ID: 15079
// Function ID: 15080
// Name: toggle
// Dependencies: [10085, 7893, 586, 1233, 11288, 10096, 2]

// Module 15079 (toggle)
import initialize from "initialize" /* 586 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import dispatcherDefault from "dispatcher" /* 10096 */;
import closure_2 from "getUserAgnosticState" /* 10085 */;
import createToggle from "createToggle" /* 11288 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["9CSZJm"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.VOICE,
  useValue: function useAndroidMobileOverlaySettingValue() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => enabled.getEnabled());
  },
  onValueChange: dispatcherDefault.setEnabled,
  useDescription: function useAndroidMobileOverlaySettingDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Wfoivk);
  },
  usePredicate: require("getUserAgnosticState").isMobileOverlaySupported
};
createToggle = createToggle.createToggle(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/AndroidMobileOverlaySetting.tsx");

export default createToggle;
