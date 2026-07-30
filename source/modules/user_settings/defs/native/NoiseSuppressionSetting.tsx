// Module ID: 14269
// Function ID: 14270
// Name: toggle
// Dependencies: [4236, 7753, 589, 10783, 10116, 1236, 2]

// Module 14269 (toggle)
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.t8Qhib);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  useValue: function useNoiseSuppressionSettingValue() {
    const items = [_detectH265HardwareDecode];
    return require(589) /* initialize */.useStateFromStores(items, () => noiseSuppression.getNoiseSuppression());
  },
  onValueChange: function onNoiseSuppressionSettingValueChange(arg0) {
    const NoiseSuppressionOpt = require(10783) /* handleAutomaticGainControlChange */.NoiseSuppressionOpt;
    const result = require(10783) /* handleAutomaticGainControlChange */.handleNoiseSuppressionChange(arg0 ? NoiseSuppressionOpt.STANDARD : NoiseSuppressionOpt.NONE);
  },
  usePredicate: function useHasNoiseSuppressionSetting() {
    const items = [_detectH265HardwareDecode];
    return require(589) /* initialize */.useStateFromStores(items, () => !noiseCancellationSupported.isNoiseCancellationSupported());
  }
};
createToggle = createToggle.createToggle(createToggle);
let result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/NoiseSuppressionSetting.tsx");

export default createToggle;
