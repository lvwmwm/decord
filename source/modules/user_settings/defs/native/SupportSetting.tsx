// Module ID: 15534
// Function ID: 15535
// Name: pressable
// Dependencies: [11468, 1114, 11105, 15535, 2]

// Module 15534 (pressable)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 11105 */;
import _emailSupport from "_emailSupport" /* 15535 */;
import createToggle from "createToggle" /* 11468 */;

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["Yl/Riu"]);
  },
  parent: null,
  IconComponent: CircleQuestionIcon.CircleQuestionIcon,
  onPress: _emailSupport.emailSupport,
  withArrow: true
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["Yl/Riu"]);
  },
  parent: null,
  IconComponent: CircleQuestionIcon.CircleQuestionIcon,
  onPress: _emailSupport.emailSupport,
  withArrow: true
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/SupportSetting.tsx");

export default pressable;
