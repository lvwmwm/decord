// Module ID: 14498
// Function ID: 14499
// Name: toggle
// Dependencies: [7892, 10361, 1236, 3958, 2]

// Module 14498 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.iIaOlc);
  },
  parent: require("MobileSetting").MobileSetting.ACCESSIBILITY,
  useValue: require("explicitContentFromProto").AnimateEmoji.useSetting,
  onValueChange: require("explicitContentFromProto").AnimateEmoji.updateSetting
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.iIaOlc);
  },
  parent: require("MobileSetting").MobileSetting.ACCESSIBILITY,
  useValue: require("explicitContentFromProto").AnimateEmoji.useSetting,
  onValueChange: require("explicitContentFromProto").AnimateEmoji.updateSetting
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/AnimateEmojiSetting.tsx");

export default toggle;
