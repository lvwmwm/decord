// Module ID: 15814
// Function ID: 15815
// Name: SupportSetting
// Dependencies: [11754, 1115, 11402, 15815, 2]

// Module 15814 (SupportSetting)
import util from "util" /* 1115 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 11402 */;
import SupportUtils from "SupportUtils" /* 15815 */;
import SettingBuilders from "SettingBuilders" /* 11754 */;
import size from "module_2" /* 2 */;

const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["Yl/Riu"]);
  },
  parent: null,
  IconComponent: CircleQuestionIcon.CircleQuestionIcon,
  onPress: SupportUtils.emailSupport,
  withArrow: true
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SupportSetting.tsx");

export default pressable;
