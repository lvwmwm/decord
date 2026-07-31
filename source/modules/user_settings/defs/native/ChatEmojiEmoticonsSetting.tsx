// Module ID: 14448
// Function ID: 14449
// Name: toggle
// Dependencies: [7761, 10133, 1236, 3866, 2]

// Module 14448 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["79qal8"]);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue: require("explicitContentFromProto").ConvertEmoticons.useSetting,
  onValueChange: require("explicitContentFromProto").ConvertEmoticons.updateSetting
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["79qal8"]);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue: require("explicitContentFromProto").ConvertEmoticons.useSetting,
  onValueChange: require("explicitContentFromProto").ConvertEmoticons.updateSetting
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/ChatEmojiEmoticonsSetting.tsx");

export default toggle;
