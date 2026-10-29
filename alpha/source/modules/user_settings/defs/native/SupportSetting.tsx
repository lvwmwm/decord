// Module ID: 17406
// Function ID: 17407
// Name: SupportSetting
// Dependencies: [11302, 1125, 14431, 17407, 2]

// Module 17406 (SupportSetting)
import intl2 from "intl" /* 1125 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 14431 */;
import SupportUtils from "SupportUtils" /* 17407 */;
import SettingBuilders from "SettingBuilders" /* 11302 */;
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
