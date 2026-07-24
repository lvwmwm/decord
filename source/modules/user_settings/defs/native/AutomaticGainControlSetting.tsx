// Module ID: 14198
// Function ID: 109191
// Name: toggle
// Dependencies: [4177, 7751, 566, 1212, 10127, 10752, 2]

// Module 14198 (toggle)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.cUMdH0);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  useValue: function useAutomaticGainControlSettingValue() {
    const items = [_isNativeReflectConstruct];
    return require(566) /* initialize */.useStateFromStores(items, () => outer1_2.getAutomaticGainControl());
  },
  onValueChange: require("getSelectedNoiseSuppressionOption").handleAutomaticGainControlChange,
  useDescription: function useAutomaticGainControlSettingDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["6EjbvA"]);
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/AutomaticGainControlSetting.tsx");

export default createToggle;
