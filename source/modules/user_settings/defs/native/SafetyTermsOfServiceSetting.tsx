// Module ID: 14665
// Function ID: 14666
// Name: pressable
// Dependencies: [7756, 676, 3886, 10120, 1236, 2]

// Module 14665 (pressable)
import { MarketingURLs } from "ME";
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.lfC1KR);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  onPress: function onTermsOfServicePress() {
    importDefault(3886).openURL(MarketingURLs.TERMS);
  },
  withArrow: true
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.lfC1KR);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  onPress: function onTermsOfServicePress() {
    importDefault(3886).openURL(MarketingURLs.TERMS);
  },
  withArrow: true
};
const result = require("module_3886").fileFinishedImporting("modules/user_settings/defs/native/SafetyTermsOfServiceSetting.tsx");

export default pressable;
