// Module ID: 15180
// Function ID: 15181
// Name: toggle
// Dependencies: [4532, 7906, 586, 9922, 11400, 1233, 2]

// Module 15180 (toggle)
import initialize from "initialize" /* 586 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import handleAutomaticGainControlChange from "handleAutomaticGainControlChange" /* 9922 */;
import closure_2 from "_detectH265HardwareDecode" /* 4532 */;
import createToggle from "createToggle" /* 11400 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.t8Qhib);
  },
  parent: require("MobileUserSettings").MobileUserSettings.VOICE,
  useValue: function useNoiseSuppressionSettingValue() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => noiseSuppression.getNoiseSuppression());
  },
  onValueChange: function onNoiseSuppressionSettingValueChange(arg0) {
    const NoiseSuppressionOpt = handleAutomaticGainControlChange.NoiseSuppressionOpt;
    const result = handleAutomaticGainControlChange.handleNoiseSuppressionChange(arg0 ? NoiseSuppressionOpt.STANDARD : NoiseSuppressionOpt.NONE);
  },
  usePredicate: function useHasNoiseSuppressionSetting() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => !noiseCancellationSupported.isNoiseCancellationSupported());
  }
};
createToggle = createToggle.createToggle(createToggle);
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/NoiseSuppressionSetting.tsx");

export default createToggle;
