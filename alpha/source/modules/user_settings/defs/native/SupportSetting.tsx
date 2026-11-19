// Module ID: 17006
// Function ID: 17007
// Name: SupportSetting
// Dependencies: [11875, 1113, 9329, 17007, 2]

// Module 17006 (SupportSetting)
import intl2 from "intl" /* 1113 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 9329 */;
import SupportUtils from "SupportUtils" /* 17007 */;
import SettingBuilders from "SettingBuilders" /* 11875 */;
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
