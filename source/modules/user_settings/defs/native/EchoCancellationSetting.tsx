// Module ID: 14252
// Function ID: 109485
// Name: toggle
// Dependencies: [4212, 7733, 566, 10099, 1212, 10763, 2]

// Module 14252 (toggle)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.iWTwu6);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  useValue: function useEchoCancellationSettingValue() {
    const items = [_isNativeReflectConstruct];
    return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.getEchoCancellation());
  },
  onValueChange: require("getSelectedNoiseSuppressionOption").handleEchoCancellationChange
};
createToggle = createToggle.createToggle(createToggle);
const result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/EchoCancellationSetting.tsx");

export default createToggle;
