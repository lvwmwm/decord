// Module ID: 18172
// Function ID: 18173
// Name: SupportSetting
// Dependencies: [12408, 1113, 10059, 18173, 2]

// Module 18172 (SupportSetting)
import intl2 from "intl" /* 1113 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 10059 */;
import SupportUtils from "SupportUtils" /* 18173 */;
import SettingBuilders from "SettingBuilders" /* 12408 */;
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
