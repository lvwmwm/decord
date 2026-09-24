// Module ID: 15810
// Function ID: 15811
// Name: SupportSetting
// Dependencies: [11630, 1119, 11526, 15811, 2]

// Module 15810 (SupportSetting)
import util from "util" /* 1119 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 11526 */;
import SupportUtils from "SupportUtils" /* 15811 */;
import SettingBuilders from "SettingBuilders" /* 11630 */;
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
