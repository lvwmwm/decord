// Module ID: 14434
// Function ID: 110360
// Name: pressable
// Dependencies: [653, 3828, 10059, 1212, 4087, 2]

// Module 14434 (pressable)
import { MarketingURLs } from "ME";
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["0nUKy3"]);
  },
  parent: null,
  IconComponent: require("CircleInformationIcon").CircleInformationIcon,
  onPress: function handleAcknowledgementsSettingPress() {
    importDefault(3828).openURL(MarketingURLs.ACKNOWLEDGEMENTS);
  },
  withArrow: true
});
const obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["0nUKy3"]);
  },
  parent: null,
  IconComponent: require("CircleInformationIcon").CircleInformationIcon,
  onPress: function handleAcknowledgementsSettingPress() {
    importDefault(3828).openURL(MarketingURLs.ACKNOWLEDGEMENTS);
  },
  withArrow: true
};
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AcknowledgementsSetting.tsx");

export default pressable;
