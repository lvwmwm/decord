// Module ID: 15813
// Function ID: 15814
// Name: SupportSetting
// Dependencies: [10663, 1126, 12791, 15814, 2]

// Module 15813 (SupportSetting)
import intl2 from "intl" /* 1126 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 12791 */;
import SupportUtils from "SupportUtils" /* 15814 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
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
