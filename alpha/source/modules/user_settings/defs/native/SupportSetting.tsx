// Module ID: 16595
// Function ID: 16596
// Name: SupportSetting
// Dependencies: [11065, 1128, 13736, 16596, 2]

// Module 16595 (SupportSetting)
import intl2 from "intl" /* 1128 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 13736 */;
import SupportUtils from "SupportUtils" /* 16596 */;
import SettingBuilders from "SettingBuilders" /* 11065 */;
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
