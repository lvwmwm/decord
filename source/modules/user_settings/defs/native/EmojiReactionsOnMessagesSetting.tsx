// Module ID: 14582
// Function ID: 14583
// Name: toggle
// Dependencies: [8022, 10380, 1236, 3974, 2]

// Module 14582 (toggle)
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
