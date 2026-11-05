// Module ID: 17812
// Function ID: 17813
// Name: SupportSetting
// Dependencies: [11737, 1113, 14741, 17813, 2]

// Module 17812 (SupportSetting)
import intl2 from "intl" /* 1113 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 14741 */;
import SupportUtils from "SupportUtils" /* 17813 */;
import SettingBuilders from "SettingBuilders" /* 11737 */;
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
