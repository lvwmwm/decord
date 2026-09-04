// Module ID: 15183
// Function ID: 15184
// Name: toggle
// Dependencies: [4532, 7906, 586, 1233, 11400, 9922, 2]

// Module 15183 (toggle)
import initialize from "initialize" /* 586 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import closure_2 from "_detectH265HardwareDecode" /* 4532 */;
import createToggle from "createToggle" /* 11400 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.cUMdH0);
  },
  parent: require("MobileUserSettings").MobileUserSettings.VOICE,
  useValue: function useAutomaticGainControlSettingValue() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => automaticGainControl.getAutomaticGainControl());
  },
  onValueChange: require("handleAutomaticGainControlChange").handleAutomaticGainControlChange,
  useDescription: function useAutomaticGainControlSettingDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["6EjbvA"]);
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/AutomaticGainControlSetting.tsx");

export default createToggle;
