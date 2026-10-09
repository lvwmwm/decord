// Module ID: 15751
// Function ID: 15752
// Name: SupportSetting
// Dependencies: [10629, 1126, 12744, 15752, 2]

// Module 15751 (SupportSetting)
import intl2 from "intl" /* 1126 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 12744 */;
import SupportUtils from "SupportUtils" /* 15752 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
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
