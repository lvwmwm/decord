// Module ID: 14301
// Function ID: 109557
// Name: toggle
// Dependencies: [7662, 10095, 1212, 3803, 2]

// Module 14301 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["79qal8"]);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue: require("explicitContentFromProto").ConvertEmoticons.useSetting,
  onValueChange: require("explicitContentFromProto").ConvertEmoticons.updateSetting
});
const obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["79qal8"]);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue: require("explicitContentFromProto").ConvertEmoticons.useSetting,
  onValueChange: require("explicitContentFromProto").ConvertEmoticons.updateSetting
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/ChatEmojiEmoticonsSetting.tsx");

export default toggle;
