// Module ID: 15638
// Function ID: 15639
// Name: SupportSetting
// Dependencies: [11262, 1126, 11203, 15639, 2]

// Module 15638 (SupportSetting)
import intl2 from "intl" /* 1126 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 11203 */;
import SupportUtils from "SupportUtils" /* 15639 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
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
