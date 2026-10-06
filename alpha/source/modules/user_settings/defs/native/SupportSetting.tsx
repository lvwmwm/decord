// Module ID: 15376
// Function ID: 15377
// Name: SupportSetting
// Dependencies: [11142, 1126, 11028, 15377, 2]

// Module 15376 (SupportSetting)
import intl2 from "intl" /* 1126 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 11028 */;
import SupportUtils from "SupportUtils" /* 15377 */;
import SettingBuilders from "SettingBuilders" /* 11142 */;
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
