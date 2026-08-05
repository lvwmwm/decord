// Module ID: 14596
// Function ID: 14597
// Name: pressable
// Dependencies: [10333, 1236, 10041, 14597, 2]

// Module 14596 (pressable)
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
