// Module ID: 15181
// Function ID: 15182
// Name: toggle
// Dependencies: [4532, 7906, 586, 11400, 1233, 9922, 2]

// Module 15181 (toggle)
import initialize from "initialize" /* 586 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import closure_2 from "_detectH265HardwareDecode" /* 4532 */;
import createToggle from "createToggle" /* 11400 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.iWTwu6);
  },
  parent: require("MobileUserSettings").MobileUserSettings.VOICE,
  useValue: function useEchoCancellationSettingValue() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => echoCancellation.getEchoCancellation());
  },
  onValueChange: require("handleAutomaticGainControlChange").handleEchoCancellationChange
};
createToggle = createToggle.createToggle(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/EchoCancellationSetting.tsx");

export default createToggle;
