// Module ID: 14196
// Function ID: 109180
// Name: toggle
// Dependencies: [4177, 7751, 566, 10127, 1212, 10752, 2]

// Module 14196 (toggle)
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
