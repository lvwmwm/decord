// Module ID: 17170
// Function ID: 17171
// Name: AcknowledgementsSetting
// Dependencies: [1071, 5722, 11970, 1112, 5747, 2]

// Module 17170 (AcknowledgementsSetting)
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import LinkingDefault from "Linking" /* 5722 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5747 */;
import SettingBuilders from "SettingBuilders" /* 11970 */;
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
