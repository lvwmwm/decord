// Module ID: 14956
// Function ID: 14957
// Name: pressable
// Dependencies: [8127, 676, 4058, 10407, 1236, 2]

// Module 14956 (pressable)
import { MarketingURLs } from "ME";
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.lfC1KR);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  onPress: function onTermsOfServicePress() {
    importDefault(4058).openURL(MarketingURLs.TERMS);
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
    importDefault(4058).openURL(MarketingURLs.TERMS);
  },
  withArrow: true
};
const result = require("module_4058").fileFinishedImporting("modules/user_settings/defs/native/SafetyTermsOfServiceSetting.tsx");

export default pressable;
