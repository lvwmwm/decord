// Module ID: 16814
// Function ID: 16815
// Name: SupportSetting
// Dependencies: [11181, 1128, 13917, 16815, 2]

// Module 16814 (SupportSetting)
import intl2 from "intl" /* 1128 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 13917 */;
import SupportUtils from "SupportUtils" /* 16815 */;
import SettingBuilders from "SettingBuilders" /* 11181 */;
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
