// Module ID: 18053
// Function ID: 18054
// Name: SupportSetting
// Dependencies: [12317, 1113, 9993, 18054, 2]

// Module 18053 (SupportSetting)
import intl2 from "intl" /* 1113 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 9993 */;
import SupportUtils from "SupportUtils" /* 18054 */;
import SettingBuilders from "SettingBuilders" /* 12317 */;
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
