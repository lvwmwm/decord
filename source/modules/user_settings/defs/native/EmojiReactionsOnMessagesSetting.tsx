// Module ID: 14428
// Function ID: 14429
// Name: toggle
// Dependencies: [7756, 10120, 1236, 3862, 2]

// Module 14428 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["zge/fP"]);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue: require("explicitContentFromProto").RenderReactions.useSetting,
  onValueChange: require("explicitContentFromProto").RenderReactions.updateSetting
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["zge/fP"]);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue: require("explicitContentFromProto").RenderReactions.useSetting,
  onValueChange: require("explicitContentFromProto").RenderReactions.updateSetting
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/EmojiReactionsOnMessagesSetting.tsx");

export default toggle;
