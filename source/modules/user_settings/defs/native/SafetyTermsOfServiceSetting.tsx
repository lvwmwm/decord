// Module ID: 15015
// Function ID: 15016
// Name: pressable
// Dependencies: [8198, 676, 4090, 10669, 1236, 2]

// Module 15015 (pressable)
import { MarketingURLs } from "ME";
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.lfC1KR);
  },
  parent: require("MobileUserSettings").MobileUserSettings.DATA_AND_PRIVACY,
  onPress: function onTermsOfServicePress() {
    importDefault(4090).openURL(MarketingURLs.TERMS);
  },
  withArrow: true
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.lfC1KR);
  },
  parent: require("MobileUserSettings").MobileUserSettings.DATA_AND_PRIVACY,
  onPress: function onTermsOfServicePress() {
    importDefault(4090).openURL(MarketingURLs.TERMS);
  },
  withArrow: true
};
const result = require("module_4090").fileFinishedImporting("modules/user_settings/defs/native/SafetyTermsOfServiceSetting.tsx");

export default pressable;
