// Module ID: 15816
// Function ID: 15817
// Name: AcknowledgementsSetting
// Dependencies: [1078, 4487, 11630, 1119, 4744, 2]

// Module 15816 (AcknowledgementsSetting)
import Constants from "Constants" /* 1078 */;
import util from "util" /* 1119 */;
import LinkingDefault from "Linking" /* 4487 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4744 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
import size from "module_2" /* 2 */;

const MarketingURLs = Constants.MarketingURLs;
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["0nUKy3"]);
  },
  parent: null,
  IconComponent: CircleInformationIcon.CircleInformationIcon,
  onPress: function handleAcknowledgementsSettingPress() {
    LinkingDefault.openURL(MarketingURLs.ACKNOWLEDGEMENTS);
  },
  withArrow: true
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AcknowledgementsSetting.tsx");

export default pressable;
