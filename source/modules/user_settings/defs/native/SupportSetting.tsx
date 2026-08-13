// Module ID: 14799
// Function ID: 14800
// Name: pressable
// Dependencies: [10407, 1236, 10201, 14800, 2]

// Module 14799 (pressable)
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
