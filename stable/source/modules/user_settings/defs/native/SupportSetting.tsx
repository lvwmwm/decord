// Module ID: 17895
// Function ID: 17896
// Name: SupportSetting
// Dependencies: [11717, 1113, 14781, 17896, 2]

// Module 17895 (SupportSetting)
import intl2 from "intl" /* 1113 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 14781 */;
import SupportUtils from "SupportUtils" /* 17896 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
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
