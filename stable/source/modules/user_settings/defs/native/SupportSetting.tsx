// Module ID: 16599
// Function ID: 16600
// Name: SupportSetting
// Dependencies: [11084, 1128, 13735, 16600, 2]

// Module 16599 (SupportSetting)
import intl2 from "intl" /* 1128 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 13735 */;
import SupportUtils from "SupportUtils" /* 16600 */;
import SettingBuilders from "SettingBuilders" /* 11084 */;
import size from "module_2" /* 2 */;

const obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["Yl/Riu"]);
  },
  parent: null,
  IconComponent: CircleQuestionIcon.CircleQuestionIcon,
  onPress: SupportUtils.emailSupport,
  withArrow: true
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SupportSetting.tsx");

export default pressable;
