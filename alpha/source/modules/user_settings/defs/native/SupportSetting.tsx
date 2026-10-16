// Module ID: 16517
// Function ID: 16518
// Name: SupportSetting
// Dependencies: [11006, 1128, 13660, 16518, 2]

// Module 16517 (SupportSetting)
import intl2 from "intl" /* 1128 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 13660 */;
import SupportUtils from "SupportUtils" /* 16518 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
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
