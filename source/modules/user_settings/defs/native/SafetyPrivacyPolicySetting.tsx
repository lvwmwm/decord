// Module ID: 14641
// Function ID: 111555
// Name: pressable
// Dependencies: [7733, 653, 3862, 10099, 1212, 2]

// Module 14641 (pressable)
import { MarketingURLs } from "ME";
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.KGFTww);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  onPress: function onPrivacyPolicyPress() {
    importDefault(3862).openURL(MarketingURLs.PRIVACY);
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
    importDefault(3862).openURL(MarketingURLs.PRIVACY);
  },
  withArrow: true
};
const result = require("module_3862").fileFinishedImporting("modules/user_settings/defs/native/SafetyPrivacyPolicySetting.tsx");

export default pressable;
