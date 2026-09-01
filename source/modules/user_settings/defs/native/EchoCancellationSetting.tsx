// Module ID: 14853
// Function ID: 14854
// Name: toggle
// Dependencies: [4529, 7884, 589, 11068, 1236, 10076, 2]

// Module 14853 (toggle)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import closure_2 from "_detectH265HardwareDecode" /* 4529 */;
import createToggle from "createToggle" /* 11068 */;

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
