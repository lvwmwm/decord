// Module ID: 15757
// Function ID: 15758
// Name: AcknowledgementsSetting
// Dependencies: [1085, 4765, 10629, 1126, 5013, 2]

// Module 15757 (AcknowledgementsSetting)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import LinkingDefault from "Linking" /* 4765 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5013 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
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
