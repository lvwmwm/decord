// Module ID: 14493
// Function ID: 14494
// Name: pressable
// Dependencies: [10116, 1236, 9817, 14494, 2]

// Module 14493 (pressable)
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["Yl/Riu"]);
  },
  parent: null,
  IconComponent: require("CircleQuestionIcon").CircleQuestionIcon,
  onPress: require("_emailSupport").emailSupport,
  withArrow: true
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["Yl/Riu"]);
  },
  parent: null,
  IconComponent: require("CircleQuestionIcon").CircleQuestionIcon,
  onPress: require("_emailSupport").emailSupport,
  withArrow: true
};
const result = require("CircleQuestionIcon").fileFinishedImporting("modules/user_settings/defs/native/SupportSetting.tsx");

export default pressable;
