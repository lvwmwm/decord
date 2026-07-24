// Module ID: 14584
// Function ID: 111247
// Name: pressable
// Dependencies: [7751, 653, 3827, 10127, 1212, 2]

// Module 14584 (pressable)
import { MarketingURLs } from "ME";
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.lfC1KR);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  onPress: function onTermsOfServicePress() {
    importDefault(3827).openURL(MarketingURLs.TERMS);
  },
  withArrow: true
});
const obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.lfC1KR);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  onPress: function onTermsOfServicePress() {
    importDefault(3827).openURL(MarketingURLs.TERMS);
  },
  withArrow: true
};
const result = require("module_3827").fileFinishedImporting("modules/user_settings/defs/native/SafetyTermsOfServiceSetting.tsx");

export default pressable;
