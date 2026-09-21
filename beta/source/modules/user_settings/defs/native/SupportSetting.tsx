// Module ID: 15800
// Function ID: 15801
// Name: SupportSetting
// Dependencies: [11594, 1119, 11490, 15801, 2]

// Module 15800 (SupportSetting)
import util from "util" /* 1119 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 11490 */;
import SupportUtils from "SupportUtils" /* 15801 */;
import SettingBuilders from "SettingBuilders" /* 11594 */;
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
