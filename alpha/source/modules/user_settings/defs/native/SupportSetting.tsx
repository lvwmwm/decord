// Module ID: 17460
// Function ID: 17461
// Name: SupportSetting
// Dependencies: [11505, 1114, 14464, 17461, 2]

// Module 17460 (SupportSetting)
import intl2 from "intl" /* 1114 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 14464 */;
import SupportUtils from "SupportUtils" /* 17461 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
