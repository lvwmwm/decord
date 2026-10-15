// Module ID: 16484
// Function ID: 16485
// Name: SupportSetting
// Dependencies: [10991, 1126, 13634, 16485, 2]

// Module 16484 (SupportSetting)
import intl2 from "intl" /* 1126 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 13634 */;
import SupportUtils from "SupportUtils" /* 16485 */;
import SettingBuilders from "SettingBuilders" /* 10991 */;
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
