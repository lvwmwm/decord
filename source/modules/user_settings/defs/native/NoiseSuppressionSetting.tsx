// Module ID: 14251
// Function ID: 109478
// Name: toggle
// Dependencies: [4212, 7733, 566, 10763, 10099, 1212, 2]

// Module 14251 (toggle)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.t8Qhib);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  useValue: function useNoiseSuppressionSettingValue() {
    const items = [_isNativeReflectConstruct];
    return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.getNoiseSuppression());
  },
  onValueChange: function onNoiseSuppressionSettingValueChange(arg0) {
    const NoiseSuppressionOpt = require(10763) /* getSelectedNoiseSuppressionOption */.NoiseSuppressionOpt;
    const result = require(10763) /* getSelectedNoiseSuppressionOption */.handleNoiseSuppressionChange(arg0 ? NoiseSuppressionOpt.STANDARD : NoiseSuppressionOpt.NONE);
  },
  usePredicate: function useHasNoiseSuppressionSetting() {
    const items = [_isNativeReflectConstruct];
    return require(566) /* initialize */.useStateFromStores(items, () => !outer1_2.isNoiseCancellationSupported());
  }
};
createToggle = createToggle.createToggle(createToggle);
let result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/NoiseSuppressionSetting.tsx");

export default createToggle;
