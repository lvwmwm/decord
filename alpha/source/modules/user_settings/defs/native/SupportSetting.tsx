// Module ID: 17166
// Function ID: 17167
// Name: SupportSetting
// Dependencies: [11970, 1112, 9463, 17167, 2]

// Module 17166 (SupportSetting)
import intl2 from "intl" /* 1112 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 9463 */;
import SupportUtils from "SupportUtils" /* 17167 */;
import SettingBuilders from "SettingBuilders" /* 11970 */;
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
