// Module ID: 16937
// Function ID: 16938
// Name: SupportSetting
// Dependencies: [11212, 1125, 13979, 16938, 2]

// Module 16937 (SupportSetting)
import intl2 from "intl" /* 1125 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 13979 */;
import SupportUtils from "SupportUtils" /* 16938 */;
import SettingBuilders from "SettingBuilders" /* 11212 */;
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
