// Module ID: 14634
// Function ID: 14635
// Name: pressable
// Dependencies: [10364, 1236, 10072, 14635, 2]

// Module 14634 (pressable)
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
