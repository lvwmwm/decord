// Module ID: 14137
// Function ID: 14138
// Name: pressable
// Dependencies: [8148, 14136, 10421, 1236, 2]

// Module 14137 (pressable)
import createToggle from "createToggle";

const pressable = createToggle.createPressable({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.jf5GGb);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  onPress: function onAccountDisablePress() {
    importDefault(14136)(false);
  }
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.jf5GGb);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  onPress: function onAccountDisablePress() {
    importDefault(14136)(false);
  }
};
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AccountDisableSetting.tsx");

export default pressable;
