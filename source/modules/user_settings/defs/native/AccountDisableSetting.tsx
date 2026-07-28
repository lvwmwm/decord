// Module ID: 13822
// Function ID: 105849
// Name: pressable
// Dependencies: [7733, 13821, 10099, 1212, 2]

// Module 13822 (pressable)
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.jf5GGb);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  onPress: function onAccountDisablePress() {
    importDefault(13821)(false);
  }
});
const obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.jf5GGb);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  onPress: function onAccountDisablePress() {
    importDefault(13821)(false);
  }
};
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AccountDisableSetting.tsx");

export default pressable;
