// Module ID: 15081
// Function ID: 15082
// Name: AcknowledgementsSetting
// Dependencies: [1086, 4528, 10874, 1127, 4788, 2]

// Module 15081 (AcknowledgementsSetting)
import Constants from "Constants" /* 1086 */;
import intl2 from "intl" /* 1127 */;
import LinkingDefault from "Linking" /* 4528 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4788 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
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
