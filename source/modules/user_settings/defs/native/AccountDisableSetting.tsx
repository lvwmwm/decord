// Module ID: 14133
// Function ID: 14134
// Name: pressable
// Dependencies: [8127, 14132, 10407, 1236, 2]

// Module 14133 (pressable)
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.jf5GGb);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  onPress: function onAccountDisablePress() {
    importDefault(14132)(false);
  }
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.jf5GGb);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  onPress: function onAccountDisablePress() {
    importDefault(14132)(false);
  }
};
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AccountDisableSetting.tsx");

export default pressable;
