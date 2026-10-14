// Module ID: 16188
// Function ID: 16189
// Name: SupportSetting
// Dependencies: [10767, 1126, 13338, 16189, 2]

// Module 16188 (SupportSetting)
import intl2 from "intl" /* 1126 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 13338 */;
import SupportUtils from "SupportUtils" /* 16189 */;
import SettingBuilders from "SettingBuilders" /* 10767 */;
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
