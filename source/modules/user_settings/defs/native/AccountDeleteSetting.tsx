// Module ID: 13841
// Function ID: 13842
// Name: pressable
// Dependencies: [7756, 13842, 10120, 1236, 2]

// Module 13841 (pressable)
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["8lQ2rR"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  variant: "danger",
  onPress: function handlePress() {
    importDefault(13842)(true);
  }
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["8lQ2rR"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  variant: "danger",
  onPress: function handlePress() {
    importDefault(13842)(true);
  }
};
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AccountDeleteSetting.tsx");

export default pressable;
