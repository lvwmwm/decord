// Module ID: 14520
// Function ID: 14521
// Name: toggle
// Dependencies: [7864, 10333, 1236, 3928, 2]

// Module 14520 (toggle)
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.U47N1p);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue: require("explicitContentFromProto").InlineEmbedMedia.useSetting,
  onValueChange: require("explicitContentFromProto").InlineEmbedMedia.updateSetting
});
const obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.U47N1p);
  },
  parent: require("MobileSetting").MobileSetting.CHAT,
  useValue: require("explicitContentFromProto").InlineEmbedMedia.useSetting,
  onValueChange: require("explicitContentFromProto").InlineEmbedMedia.updateSetting
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/DisplayMediaLinksSetting.tsx");

export default toggle;
