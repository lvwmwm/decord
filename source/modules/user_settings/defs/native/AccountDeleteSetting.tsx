// Module ID: 13764
// Function ID: 105533
// Name: pressable
// Dependencies: [7751, 13765, 10127, 1212, 2]

// Module 13764 (pressable)
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["8lQ2rR"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  variant: "danger",
  onPress: function handlePress() {
    importDefault(13765)(true);
  }
});
const obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["8lQ2rR"]);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  variant: "danger",
  onPress: function handlePress() {
    importDefault(13765)(true);
  }
};
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AccountDeleteSetting.tsx");

export default pressable;
