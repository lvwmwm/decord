// Module ID: 16830
// Function ID: 16831
// Name: SupportSetting
// Dependencies: [11817, 1112, 9329, 16831, 2]

// Module 16830 (SupportSetting)
import intl2 from "intl" /* 1112 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 9329 */;
import SupportUtils from "SupportUtils" /* 16831 */;
import SettingBuilders from "SettingBuilders" /* 11817 */;
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
