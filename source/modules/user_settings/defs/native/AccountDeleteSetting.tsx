// Module ID: 14167
// Function ID: 14168
// Name: pressable
// Dependencies: [8198, 14168, 10669, 1236, 2]

// Module 14167 (pressable)
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["8lQ2rR"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCOUNT,
  variant: "danger",
  onPress: function handlePress() {
    importDefault(14168)(true);
  }
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["8lQ2rR"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.ACCOUNT,
  variant: "danger",
  onPress: function handlePress() {
    importDefault(14168)(true);
  }
};
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AccountDeleteSetting.tsx");

export default pressable;
