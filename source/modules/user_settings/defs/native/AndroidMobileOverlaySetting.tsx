// Module ID: 14267
// Function ID: 14268
// Name: toggle
// Dependencies: [10762, 7753, 589, 1236, 10116, 10781, 2]

// Module 14267 (toggle)
import getUserAgnosticState from "getUserAgnosticState";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["9CSZJm"]);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  useValue: function useAndroidMobileOverlaySettingValue() {
    const items = [getUserAgnosticState];
    return require(589) /* initialize */.useStateFromStores(items, () => enabled.getEnabled());
  },
  onValueChange: require("dispatcher").setEnabled,
  useDescription: function useAndroidMobileOverlaySettingDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.Wfoivk);
  },
  usePredicate: require("getUserAgnosticState").isMobileOverlaySupported
};
createToggle = createToggle.createToggle(createToggle);
const result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/AndroidMobileOverlaySetting.tsx");

export default createToggle;
