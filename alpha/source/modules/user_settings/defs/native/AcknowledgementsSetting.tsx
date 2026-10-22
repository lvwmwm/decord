// Module ID: 16818
// Function ID: 16819
// Name: AcknowledgementsSetting
// Dependencies: [1087, 5646, 11181, 1128, 5672, 2]

// Module 16818 (AcknowledgementsSetting)
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import LinkingDefault from "Linking" /* 5646 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5672 */;
import SettingBuilders from "SettingBuilders" /* 11181 */;
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
