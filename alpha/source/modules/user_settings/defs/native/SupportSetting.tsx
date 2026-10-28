// Module ID: 17167
// Function ID: 17168
// Name: SupportSetting
// Dependencies: [11248, 1125, 14198, 17168, 2]

// Module 17167 (SupportSetting)
import intl2 from "intl" /* 1125 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 14198 */;
import SupportUtils from "SupportUtils" /* 17168 */;
import SettingBuilders from "SettingBuilders" /* 11248 */;
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
