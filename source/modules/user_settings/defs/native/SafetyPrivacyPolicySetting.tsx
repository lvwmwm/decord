// Module ID: 14585
// Function ID: 111250
// Name: pressable
// Dependencies: [7751, 653, 3827, 10127, 1212, 2]

// Module 14585 (pressable)
import { MarketingURLs } from "ME";
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.KGFTww);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  onPress: function onPrivacyPolicyPress() {
    importDefault(3827).openURL(MarketingURLs.PRIVACY);
  },
  withArrow: true
});
const obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.KGFTww);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  onPress: function onPrivacyPolicyPress() {
    importDefault(3827).openURL(MarketingURLs.PRIVACY);
  },
  withArrow: true
};
const result = require("module_3827").fileFinishedImporting("modules/user_settings/defs/native/SafetyPrivacyPolicySetting.tsx");

export default pressable;
