// Module ID: 13936
// Function ID: 13937
// Name: pressable
// Dependencies: [7864, 13935, 10333, 1236, 2]

// Module 13936 (pressable)
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.jf5GGb);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  onPress: function onAccountDisablePress() {
    importDefault(13935)(false);
  }
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.jf5GGb);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  onPress: function onAccountDisablePress() {
    importDefault(13935)(false);
  }
};
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AccountDisableSetting.tsx");

export default pressable;
