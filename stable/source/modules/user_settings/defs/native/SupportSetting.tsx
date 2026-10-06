// Module ID: 15075
// Function ID: 15076
// Name: SupportSetting
// Dependencies: [10874, 1127, 10770, 15076, 2]

// Module 15075 (SupportSetting)
import intl2 from "intl" /* 1127 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 10770 */;
import SupportUtils from "SupportUtils" /* 15076 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
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
