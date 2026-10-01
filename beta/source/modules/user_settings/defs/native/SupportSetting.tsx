// Module ID: 15087
// Function ID: 15088
// Name: SupportSetting
// Dependencies: [11006, 1115, 10568, 15088, 2]

// Module 15087 (SupportSetting)
import intl2 from "intl" /* 1115 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 10568 */;
import SupportUtils from "SupportUtils" /* 15088 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
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
