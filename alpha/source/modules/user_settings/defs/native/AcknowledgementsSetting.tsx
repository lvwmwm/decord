// Module ID: 17171
// Function ID: 17172
// Name: AcknowledgementsSetting
// Dependencies: [1084, 5696, 11248, 1125, 5722, 2]

// Module 17171 (AcknowledgementsSetting)
import Constants from "Constants" /* 1084 */;
import intl2 from "intl" /* 1125 */;
import LinkingDefault from "Linking" /* 5696 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5722 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
import size from "module_2" /* 2 */;

const MarketingURLs = Constants.MarketingURLs;
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["0nUKy3"]);
  },
  parent: null,
  IconComponent: CircleInformationIcon.CircleInformationIcon,
  onPress: function handleAcknowledgementsSettingPress() {
    const obj = LinkingDefault;
    obj.openURL(MarketingURLs.ACKNOWLEDGEMENTS);
  },
  withArrow: true
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AcknowledgementsSetting.tsx");

export default pressable;
