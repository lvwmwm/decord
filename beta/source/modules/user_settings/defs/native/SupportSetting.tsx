// Module ID: 16961
// Function ID: 16962
// Name: SupportSetting
// Dependencies: [11942, 1112, 9449, 16962, 2]

// Module 16961 (SupportSetting)
import intl2 from "intl" /* 1112 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 9449 */;
import SupportUtils from "SupportUtils" /* 16962 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
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
