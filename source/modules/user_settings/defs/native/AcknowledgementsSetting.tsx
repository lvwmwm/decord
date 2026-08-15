// Module ID: 14848
// Function ID: 14849
// Name: pressable
// Dependencies: [676, 4090, 10669, 1236, 4330, 2]

// Module 14848 (pressable)
import { MarketingURLs } from "ME";
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["0nUKy3"]);
  },
  parent: null,
  IconComponent: require("CircleInformationIcon").CircleInformationIcon,
  onPress: function handleAcknowledgementsSettingPress() {
    importDefault(4090).openURL(MarketingURLs.ACKNOWLEDGEMENTS);
  },
  withArrow: true
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["0nUKy3"]);
  },
  parent: null,
  IconComponent: require("CircleInformationIcon").CircleInformationIcon,
  onPress: function handleAcknowledgementsSettingPress() {
    importDefault(4090).openURL(MarketingURLs.ACKNOWLEDGEMENTS);
  },
  withArrow: true
};
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AcknowledgementsSetting.tsx");

export default pressable;
