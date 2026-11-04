// Module ID: 17784
// Function ID: 17785
// Name: SupportSetting
// Dependencies: [11729, 1113, 14728, 17785, 2]

// Module 17784 (SupportSetting)
import intl2 from "intl" /* 1113 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 14728 */;
import SupportUtils from "SupportUtils" /* 17785 */;
import SettingBuilders from "SettingBuilders" /* 11729 */;
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
