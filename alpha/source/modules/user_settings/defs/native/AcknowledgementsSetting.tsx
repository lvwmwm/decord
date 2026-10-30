// Module ID: 17464
// Function ID: 17465
// Name: AcknowledgementsSetting
// Dependencies: [1072, 5704, 11505, 1114, 5730, 2]

// Module 17464 (AcknowledgementsSetting)
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1114 */;
import LinkingDefault from "Linking" /* 5704 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5730 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
