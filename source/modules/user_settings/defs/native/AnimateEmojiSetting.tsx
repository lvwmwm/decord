// Module ID: 14516
// Function ID: 14517
// Name: toggle
// Dependencies: [8005, 10364, 1236, 3957, 2]

// Module 14516 (toggle)
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
