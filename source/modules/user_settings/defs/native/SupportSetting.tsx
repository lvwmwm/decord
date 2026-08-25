// Module ID: 14938
// Function ID: 14939
// Name: pressable
// Dependencies: [10516, 1236, 10309, 14939, 2]

// Module 14938 (pressable)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import CircleQuestionIcon from "CircleQuestionIcon" /* 10309 */;
import _emailSupport from "_emailSupport" /* 14939 */;
import createToggle from "createToggle" /* 10516 */;

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
