// Module ID: 16723
// Function ID: 16724
// Name: SupportSetting
// Dependencies: [11155, 1128, 13867, 16724, 2]

// Module 16723 (SupportSetting)
import intl2 from "intl" /* 1128 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 13867 */;
import SupportUtils from "SupportUtils" /* 16724 */;
import SettingBuilders from "SettingBuilders" /* 11155 */;
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
