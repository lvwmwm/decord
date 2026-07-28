// Module ID: 14407
// Function ID: 110185
// Name: toggle
// Dependencies: [7733, 10099, 1212, 3838, 2]

// Module 14407 (toggle)
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
