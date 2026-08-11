// Module ID: 14656
// Function ID: 14657
// Name: toggle
// Dependencies: [8084, 10452, 1236, 3993, 2]

// Module 14656 (toggle)
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
