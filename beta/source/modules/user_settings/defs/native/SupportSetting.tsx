// Module ID: 16951
// Function ID: 16952
// Name: SupportSetting
// Dependencies: [11937, 1112, 9449, 16952, 2]

// Module 16951 (SupportSetting)
import intl2 from "intl" /* 1112 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 9449 */;
import SupportUtils from "SupportUtils" /* 16952 */;
import SettingBuilders from "SettingBuilders" /* 11937 */;
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
