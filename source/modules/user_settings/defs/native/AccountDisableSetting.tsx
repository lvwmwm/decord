// Module ID: 13963
// Function ID: 13964
// Name: pressable
// Dependencies: [7892, 13962, 10361, 1236, 2]

// Module 13963 (pressable)
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.jf5GGb);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  onPress: function onAccountDisablePress() {
    importDefault(13962)(false);
  }
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.jf5GGb);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  onPress: function onAccountDisablePress() {
    importDefault(13962)(false);
  }
};
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AccountDisableSetting.tsx");

export default pressable;
